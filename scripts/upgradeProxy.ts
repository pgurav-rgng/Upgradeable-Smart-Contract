const { ethers, upgrades } = require('hardhat');

const proxyAddress = "0xFce889403984aabAd0174BA588B898077fC77583"; // This is the address of the proxy contract

async function main() {
	const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
	const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);

	const implementationAddress = await upgrades.erc1967.getImplementationAddress(
		proxyAddress
	);

	console.log('The current contract owner is: ' + upgraded.owner());
	console.log('Implementation contract address: ' + implementationAddress);
}

main();
