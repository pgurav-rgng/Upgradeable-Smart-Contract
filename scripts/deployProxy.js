const { ethers, upgrades } = require('hardhat');

async function main() {
	const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1'); // VendingMachineV1 is the name of the contract
	const proxy = await upgrades.deployProxy(VendingMachineV1, [100]); // 100 is the initial supply
	await proxy.deployed(); // Wait until the contract is deployed

	const implementationAddress = await upgrades.erc1967.getImplementationAddress(
		proxy.address // The address of the proxy contract
	);

	console.log('Proxy contract address: ' + proxy.address);

	console.log('Implementation contract address: ' + implementationAddress);
}

main();
