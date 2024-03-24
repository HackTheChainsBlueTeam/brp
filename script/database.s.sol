// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/BRP.sol";
// this is bad don't use?
contract DeployAndInteractBRP is Script {
    function run() external {
        vm.startBroadcast();
    
        // Deploy multiple BRP instances
        BRP coke = new BRP(0, 0, 0, "Coke");
        BRP pepsi = new BRP(0, 0, 0, "Pepsi");
        BRP popeyes = new BRP(0, 0, 0, "Popeyes");

        // Simulate creating or updating instances as in the testing scenario
        // Here we directly interact with each instance, for simplicity
        coke.handleNewRequest(100);
        pepsi.handleNewRequest(200);
        popeyes.handleNewRequest(300);

        // Logging state after interactions
        console.log("Coke Score:", coke.getTotalScore());
        console.log("Pepsi Score:", pepsi.getTotalScore());
        console.log("Popeyes Score:", popeyes.getTotalScore());

        vm.stopBroadcast();
    }
}