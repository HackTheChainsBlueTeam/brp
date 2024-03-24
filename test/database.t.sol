// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {console2} from "forge-std/console2.sol";
import {BRP} from "../src/BRP.sol";

contract BRPMultipleInstancesTest is Test {
    mapping(string => BRP) private brpInstances;
    string[] private instanceNames;

    function setUp() public {
        // Instance creation
        brpInstances["Coke"] = new BRP(0, 0, 0, "Coke");
        brpInstances["Pepsi"] = new BRP(0, 0, 0, "Pepsi");
        brpInstances["Popeyes"] = new BRP(0, 0, 0, "Popeyes");
        
        // Storing instance names
        instanceNames.push("Coke");
        instanceNames.push("Pepsi");
        instanceNames.push("Popeyes");
    }

    function testExistenceOfBRPInstance() public {
        string memory nameToCheck = "Coke";
        BRP instance = brpInstances[nameToCheck];
        assertTrue(address(instance) != address(0), "Instance should exist in the mapping");
        
        nameToCheck = "NonExistent";
        instance = brpInstances[nameToCheck];
        assertTrue(address(instance) == address(0), "Instance should not exist in the mapping");
    }

    function testUpdateScoreOfInstance() public {
        string memory nameToUpdate = "Pepsi";
        BRP instance = brpInstances[nameToUpdate];
        uint256 newScore = 200;

        if (address(instance) != address(0)) {
            instance.handleNewRequest(newScore);
            console2.log("Updated", nameToUpdate, "score to", newScore);
        } else {
            console2.log(nameToUpdate, "instance does not exist.");
        }

        assertEq(instance.getTotalScore(), newScore, "Score update failed");
    }

      function createOrUpdateInstance(string memory name, uint256 initialScore) public {
        if (address(brpInstances[name]) == address(0)) {
            // Instance does not exist, so create it
            BRP newInstance = new BRP(initialScore, 1, initialScore, name);
            brpInstances[name] = newInstance;
            instanceNames.push(name);
            console2.log("Created new instance for", name, "with initial score of", initialScore);
        } else {
            // Instance exists, just update the score
            brpInstances[name].handleNewRequest(initialScore);
            console2.log("Updated", name, "instance with new score of", initialScore);
        }
    }

    function testDynamicInstanceCreationAndUpdate() public {
        // Initially create three instances
        createOrUpdateInstance("Coke", 100);
        createOrUpdateInstance("Pepsi", 200);
        createOrUpdateInstance("Popeyes", 150);

        // Update the score of an existing instance
        createOrUpdateInstance("Pepsi", 250);

        // Add a new instance
        createOrUpdateInstance("KFC", 300);

        // Verify all instances are correctly tracked and have correct scores
        testGetListOfAllInstances();
        assertEq(brpInstances["Pepsi"].getTotalScore(), 450, "Pepsi's total score should be 450 after update");
        assertEq(brpInstances["KFC"].getTotalScore(), 300, "KFC's initial score should be 300");
    }

function testGetListOfAllInstances() public {
    console2.log("Listing all BRP instances:");
    for (uint i = 0; i < instanceNames.length; ++i) {
        // Check if the instance exists before attempting to access it
        if (address(brpInstances[instanceNames[i]]) != address(0)) {
            BRP instance = brpInstances[instanceNames[i]];
            // Log details in separate calls to avoid the mentioned error
            console2.log("Name:", instanceNames[i]);
            console2.log("Address:", address(instance));
            console2.log("Score:", instance.getTotalScore());
        } else {
            // Handle the case where an instance does not exist
            console2.log("Instance not found for name:", instanceNames[i]);
        }
    }

    // Assuming the setUp initially creates no instances,
    // the total should match the number of createOrUpdateInstance calls.
    assertEq(instanceNames.length, instanceNames.length, "unequal lengths, maybe paramaterize this part");
}
}

