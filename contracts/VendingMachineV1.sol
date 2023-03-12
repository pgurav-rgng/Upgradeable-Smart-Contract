// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract VendingMachineV1 is Initializable {
    // these state variables and their values
    // will be preserved forever, regardless of upgrading
    uint public numSodas;
    address public owner;

    function initialize(uint _numSodas) public initializer {
        // this function will be called only once when the contract is deployed for the first time
        numSodas = _numSodas;
        owner = msg.sender;
    }

    function purchaseSoda() public payable {
        // this function will be called every time the contract is upgraded to a new version of the contract
        require(msg.value >= 1000 wei, "You must pay 1000 wei for a soda!");
        numSodas--;
    }
}
