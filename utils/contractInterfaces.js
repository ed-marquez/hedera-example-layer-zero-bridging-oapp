const { ethers } = require("hardhat");

// For most HTS operations
const IHederaTokenServiceABI_JSON = require("../hedera-smart-contracts/contracts-abi/contracts/system-contracts/hedera-token-service/IHederaTokenService.sol/IHederaTokenService.json");
const IHederaTokenServiceABI = new ethers.Interface(IHederaTokenServiceABI_JSON);

// For HTS token associations via IHRC-719
const IHRC719ABI_JSON = require("../hedera-smart-contracts/contracts-abi/contracts/system-contracts/hedera-token-service/IHRC719.sol/IHRC719.json");
const IHRC719ABI = new ethers.Interface(IHRC719ABI_JSON);

// For HBAR allowances via IHRC-632
const IHRC632ABI_JSON = require("../hedera-smart-contracts/contracts-abi/contracts/system-contracts/hedera-account-service/IHRC632.sol/IHRC632.json");
const IHRC632ABI = new ethers.Interface(IHRC632ABI_JSON);

// For interacting with HTS token via ERC interfaces
const ERC20MockABI_JSON = require("../hedera-smart-contracts/contracts-abi/contracts/hip-583/ERC20Mock.sol/ERC20Mock.json");
const ERC20MockABI = new ethers.Interface(ERC20MockABI_JSON);

const ERC721MockABI_JSON = require("../hedera-smart-contracts/contracts-abi/contracts/hip-583/ERC721Mock.sol/ERC721Mock.json");
const ERC721MockABI = new ethers.Interface(ERC721MockABI_JSON);

module.exports = {
	IHederaTokenServiceABI,
	IHRC719ABI,
	IHRC632ABI,
	ERC20MockABI,
	ERC721MockABI,
};
