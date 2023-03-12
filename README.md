# Deploy an Upgradeable Vending Machine Smart Contract

Deploying your contracts under a proxy can be useful in order to future-proof your smart contract functionality.

Deploying smart contracts that use the transparent proxy pattern in order to be upgradeable

You will be able to deploy a version 1 contract, add new functionality and then deploy a version 2 of that contract under the proxy, and so on..

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
npx hardhat node
npx hardhat run scripts/deployProxy.js
```
