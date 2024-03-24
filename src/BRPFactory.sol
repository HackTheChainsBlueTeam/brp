pragma solidity ^0.8.13;

import "./BRP.sol";

contract BRPFactory {
    mapping(string => BRP) public brpInstances;
    string[] public instanceNames;

    event BRPCreated(string name, address instanceAddress);
    event BRPUpdated(string name, uint256 newScore);

    function createOrUpdateInstance(string memory name, uint256 initialScore) public {
        if (address(brpInstances[name]) == address(0)) {
            // Instance does not exist, create it
            BRP newInstance = new BRP(initialScore, 1, initialScore, name);
            brpInstances[name] = newInstance;
            instanceNames.push(name);
            emit BRPCreated(name, address(newInstance));
        } else {
            // Instance exists, update the score
            brpInstances[name].handleNewRequest(initialScore);
            emit BRPUpdated(name, brpInstances[name].getTotalScore());
        }
    }

    function getListOfAllInstances() public view returns (string[] memory names, address[] memory addresses) {
        names = new string[](instanceNames.length);
        addresses = new address[](instanceNames.length);
        for (uint i = 0; i < instanceNames.length; ++i) {
            names[i] = instanceNames[i];
            addresses[i] = address(brpInstances[instanceNames[i]]);
        }
        return (names, addresses);
    }
}