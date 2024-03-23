// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {BRP} from "../src/BRP.sol"; // Adjust the import path as necessary

contract BRPTest is Test {
    BRP public brp;

    function setUp() public {
        brp = new BRP(0, 0, 0, "Initial Name");
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