import { EndpointId } from "@layerzerolabs/lz-definitions";
const avalanche_testnetContract = {
    eid: EndpointId.AVALANCHE_V2_TESTNET,
    contractName: "MyOApp"
};
const hedera_testnetContract = {
    eid: EndpointId.HEDERA_V2_TESTNET,
    contractName: "MyOApp"
};
export default { contracts: [{ contract: avalanche_testnetContract }, { contract: hedera_testnetContract }], connections: [{ from: avalanche_testnetContract, to: hedera_testnetContract, config: { sendLibrary: "0x69BF5f48d2072DfeBc670A1D19dff91D0F4E8170", receiveLibraryConfig: { receiveLibrary: "0x819F0FAF2cb1Fba15b9cB24c9A2BDaDb0f895daf", gracePeriod: 0 }, sendConfig: { executorConfig: { maxMessageSize: 10000, executor: "0xa7BFA9D51032F82D649A501B6a1f922FC2f7d4e3" }, ulnConfig: { confirmations: 6, requiredDVNs: ["0x9f0e79Aeb198750F963b6f30B99d87c6EE5A0467"], optionalDVNs: [], optionalDVNThreshold: 0 } }, receiveConfig: { ulnConfig: { confirmations: 1, requiredDVNs: ["0x9f0e79Aeb198750F963b6f30B99d87c6EE5A0467"], optionalDVNs: [], optionalDVNThreshold: 0 } } } }, { from: hedera_testnetContract, to: avalanche_testnetContract, config: { sendLibrary: "0x1707575F7cEcdC0Ad53fde9ba9bda3Ed5d4440f4", receiveLibraryConfig: { receiveLibrary: "0xc0c34919A04d69415EF2637A3Db5D637a7126cd0", gracePeriod: 0 }, sendConfig: { executorConfig: { maxMessageSize: 10000, executor: "0xe514D331c54d7339108045bF4794F8d71cad110e" }, ulnConfig: { confirmations: 1, requiredDVNs: ["0xEc7Ee1f9e9060e08dF969Dc08EE72674AfD5E14D"], optionalDVNs: [], optionalDVNThreshold: 0 } }, receiveConfig: { ulnConfig: { confirmations: 6, requiredDVNs: ["0xEc7Ee1f9e9060e08dF969Dc08EE72674AfD5E14D"], optionalDVNs: [], optionalDVNThreshold: 0 } } } }] };
