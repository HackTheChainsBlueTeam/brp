// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/BRP.sol";

/// @title Deployment script for BRP contract
contract DeployBRP is Script {
    /// @notice Main function to deploy the BRP contract with Foundry
    function run(
        uint256 initialTotalScore,
        uint256 initialTotalNumber,
        uint256 initialCurrentPercentage,
        string memory initialName
    ) external {
        // Print a message indicating the start of the deployment process
        console.log("Starting deployment of BRP contract");

        // Start recording transactions for broadcast
        vm.startBroadcast();

        // Deploy the BRP contract with provided initial values
        BRP brp = new BRP(
            initialTotalScore,
            initialTotalNumber,
            initialCurrentPercentage,
            initialName
        );

        // Log the address of the newly deployed contract
        console.log("BRP contract deployed to:", address(brp));

        // Stop recording transactions, ready for broadcast
        vm.stopBroadcast();

        // Optional: Perform any additional setup or calls to the contract here
        // For example, if your contract requires post-deployment setup, you can
        // call those functions here using the `brp` contract instance.

        // Print a completion message
        console.log("Deployment completed successfully");
    }
}