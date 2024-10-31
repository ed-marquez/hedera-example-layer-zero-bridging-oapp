# Send a Message Between Chains Using LayerZero & Hedera

This repository shows how to use LayerZero with Hedera. LayerZero's OApp (Omnichain Application) enables communication between smart contracts across different blockchains. It provides developers with a standard message-passing interface, which lets applications like DeFi protocols, DAOs, or NFTs interact cross-chain. Through OApp, a contract on one chain can send data or instructions to another chain

## Try It in Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/?autostart=true#https://github.com/ed-marquez/hedera-example-layer-zero-bridging-oapp)

1. Enter your Hedera testnet credentials in the `.env` file
2. Run the test to get the latest prices for all the price feeds:

   ```bash
   npx hardhat test
   ```

## Local Setup

1. Clone the repository
   ```bash
   git clone https://github.com/ed-marquez/hedera-example-layer-zero-bridging-oapp.git
   ```
2. Copy `.env.sample` to `.env` and add your environment variables (and Hedera testnet credentials)
   ```bash
   cp .env.sample .env
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Run the test to send a message between chains:

   ```bash
   npx hardhat test
   ```

## Key Files

- `.env`: Account credentials and environment variables
- `hardhat.config.js`: Hardhat configuration including network settings and compiler options
- `constants.js`: Network configurations and default values
- `test/sendCrossChainLz.test.js`: Test file demonstrating how to send a message between chains

## References
