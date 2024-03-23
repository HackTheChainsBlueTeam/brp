// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from "forge-std/Test.sol";
import {BRP} from "../src/BRP.sol"; // Adjust the import path as necessary

contract BRPTest is Test {
    BRP public brp;

    function setUp() public {
        brp = new BRP(0, 0, 0, "Coke");
    }

    function testHandleNewRequest() public {
        uint256 userInputScore = 100;
        brp.handleNewRequest(userInputScore); // First request
        
        assertEq(brp.getTotalScore(), 100);
        assertEq(brp.getTotalNumber(), 1);
        assertEq(brp.getCurrentPercentage(), 100); // Since totalScore / totalNumber = 100 / 1
                // Log output after first request
        console2.log("After first handleNewRequest call:");
        console2.log("Total Score:", brp.getTotalScore());
        console2.log("Total Number:", brp.getTotalNumber());
        console2.log("Current Percentage:", brp.getCurrentPercentage());

        uint256 secondUserInputScore = 50;
        brp.handleNewRequest(secondUserInputScore); // Second request
        console2.log("---------------");
        assertEq(brp.getTotalScore(), 150);
        assertEq(brp.getTotalNumber(), 2);
        assertEq(brp.getCurrentPercentage(), 75); // Since totalScore / totalNumber = 150 / 2
                // Log output after first request
        console2.log("After first handleNewRequest call:");
        console2.log("Total Score:", brp.getTotalScore());
        console2.log("Total Number:", brp.getTotalNumber());
        console2.log("Current Percentage:", brp.getCurrentPercentage());
    }    

    function testSetAndGetTotalScore() public {
        uint256 newTotalScore = 10;
        brp.setTotalScore(newTotalScore);
        assertEq(brp.getTotalScore(), newTotalScore);
    }

    function testSetAndGetTotalNumber() public {
        uint256 newTotalNumber = 5;
        brp.setTotalNumber(newTotalNumber);
        assertEq(brp.getTotalNumber(), newTotalNumber);
    }

    function testSetAndGetCurrentPercentage() public {
        uint256 newCurrentPercentage = 25;
        brp.setCurrentPercentage(newCurrentPercentage);
        assertEq(brp.getCurrentPercentage(), newCurrentPercentage);
    }

    function testSetAndGetName() public {
        string memory newName = "New Name";
        brp.setName(newName);
        assertEq(brp.getName(), newName);
    }

    // Example of a fuzz test for setTotalScore
    function testFuzzSetTotalScore(uint256 x) public {
        brp.setTotalScore(x);
        assertEq(brp.getTotalScore(), x);
    }
}