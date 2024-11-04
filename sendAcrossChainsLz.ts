import { Contract, Wallet, ethers, providers } from 'ethers'

import 'dotenv/config'
import { EndpointId } from '@layerzerolabs/lz-definitions'
import { Options } from '@layerzerolabs/lz-v2-utilities'

import MyOAppArtifact from '../artifacts/contracts/MyOApp.sol/MyOApp.json'

function tinybarToHbar(tinybarAmount: ethers.BigNumber): string {
    return ethers.utils.formatUnits(tinybarAmount, 18)
}

async function main() {
    const hederaProvider = new providers.JsonRpcProvider('https://296.rpc.thirdweb.com')
    const hederaPrivateKey = process.env.PRIVATE_KEY || ''
    const hederaWallet = new Wallet(hederaPrivateKey, hederaProvider)
    const hederaContractAddress = process.env.MY_OAPP_HEDERA_CONTRACT_ADDRESS || ''
    const hederaContract = new Contract(hederaContractAddress, MyOAppArtifact.abi, hederaWallet)

    console.log('Contract address:', hederaContractAddress)
    console.log('Wallet address:', hederaWallet.address)

    const testCases = [
        { dstEid: EndpointId.AVALANCHE_V2_TESTNET, message: 'Hello from Hedera!', payInLzToken: false },
        // You can add more test cases as needed
    ]

    for (const [index, testCase] of testCases.entries()) {
        console.log(`\nTest case ${index + 1}:`)
        console.log('Parameters:', testCase)

        let options = Options.newOptions()
        const GAS_LIMIT = 2000000 // Increased gas limit
        options = options.addExecutorLzReceiveOption(GAS_LIMIT, 0)
        const optionsHex = options.toHex()

        try {
            // Step 1: Call quote to get the messaging fee
            const { nativeFee, lzTokenFee } = await hederaContract.quote(
                testCase.dstEid,
                testCase.message,
                optionsHex,
                testCase.payInLzToken
            )
            console.log(`Quoted fee - Native Fee: ${nativeFee} HBAR, LZ Token Fee: ${lzTokenFee.toString()}`)

            // Adjust the native fee as in the driver script
            // For HBAR (8 decimals), ensure you're sending enough value
            // Multiply nativeFee by appropriate factor if needed

            // Since HBAR uses 8 decimals (tinybars), but ethers.js uses 18 decimals by default (wei denomination),
            // you need to scale the fee appropriately

            // Calculate the adjusted native fee
            const adjustedNativeFee = nativeFee.mul(ethers.BigNumber.from(10).pow(10)) // Adjust for decimal difference
            console.log(`Adjusted Native Fee: ${tinybarToHbar(adjustedNativeFee)} HBAR`)

            // Estimate gas if needed
            const estimatedGas = await hederaContract.estimateGas.send(testCase.dstEid, testCase.message, optionsHex, {
                value: adjustedNativeFee,
            })
            console.log(`Estimated gas: ${tinybarToHbar(estimatedGas)}`)

            // Step 2: Send the message by calling the send function
            const tx = await hederaContract.send(testCase.dstEid, testCase.message, optionsHex, {
                value: adjustedNativeFee,
                gasLimit: estimatedGas.mul(120).div(100), // Add 20% buffer
            })
            console.log('Transaction hash:', tx.hash)

            // Wait for the transaction to be mined
            const receipt = await tx.wait()
            console.log('Transaction confirmed in block:', receipt.blockNumber)
        } catch (error: any) {
            console.error('Error in sending message:', error.message)
            if (error.data) console.error('Error data:', error.data)
        }
    }
}

main().catch((error) => {
    console.error('Error in script:', error)
    process.exit(1)
})
