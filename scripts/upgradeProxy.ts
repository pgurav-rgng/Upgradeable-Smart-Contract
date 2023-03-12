const { ethers, upgrades } = require('hardhat');

const proxyAddress = '0xe202Cd6b97f4F584B39d56B93F95d288dfa0448A'; // This is the address of the proxy contract

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
