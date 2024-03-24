// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/BRPFactory.sol";
import {console2} from "forge-std/Test.sol";

contract DeployAndManageBRP is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // Deploy the BRPFactory contract
        BRPFactory factory = new BRPFactory();
        console2.log( "address of this script?:" , address(this));
        console2.log( "address of factory: ", address(factory));
        // Use the factory to create BRP instances
        factory.createOrUpdateInstance("Coke", 100);
        factory.createOrUpdateInstance("Pepsi", 200);
        factory.createOrUpdateInstance("Popeyes", 300);

        // Retrieve and log the list of company data (name and percentage)
        BRPFactory.CompanyData[] memory companyDataArray = factory.getListOfCompanyData();
        for (uint i = 0; i < companyDataArray.length; i++) {
            console.log("Company Name:", companyDataArray[i].name);
            console.log("Percentage:", companyDataArray[i].percentage);
        }

        vm.stopBroadcast();
    }
}