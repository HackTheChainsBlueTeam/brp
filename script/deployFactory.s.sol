// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/BRPFactory.sol";

contract DeployAndManageBRP is Script {
    function run() external {
        vm.startBroadcast();

        // Deploy the BRPFactory contract
        BRPFactory factory = new BRPFactory();

        // Use the factory to create BRP instances
        factory.createOrUpdateInstance("Coke", 100);
        factory.createOrUpdateInstance("Pepsi", 200);
        factory.createOrUpdateInstance("Popeyes", 300);

        // Optionally, retrieve and log the list of all BRP instances
        (string[] memory names, address[] memory addresses) = factory.getListOfAllInstances();
        for (uint i = 0; i < names.length; i++) {
            console.log("Instance Name:", names[i]);
            console.log("Address:", addresses[i]);
        }

        vm.stopBroadcast();
    }
}