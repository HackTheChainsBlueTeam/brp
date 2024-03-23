// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract BRP {
    // Define a structure to hold the object's data
    struct DataObject {
        uint256 totalScore;
        uint256 totalNumber;
        uint256 currentPercentage;
        string name;
    }

    // Instance of the structure to store object data
    DataObject private dataObject;

    // Constructor to initialize the DataObject instance
    constructor(uint256 _totalScore, uint256 _totalNumber, uint256 _currentPercentage, string memory _name) {
        dataObject = DataObject({
            totalScore: _totalScore,
            totalNumber: _totalNumber,
            currentPercentage: _currentPercentage,
            name: _name
        });
    }

    // Getter for totalScore
    function getTotalScore() public view returns (uint256) {
        return dataObject.totalScore;
    }

    // Setter for totalScore
    function setTotalScore(uint256 _totalScore) public {
        dataObject.totalScore = _totalScore;
    }

    // Getter for totalNumber
    function getTotalNumber() public view returns (uint256) {
        return dataObject.totalNumber;
    }

    // Setter for totalNumber
    function setTotalNumber(uint256 _totalNumber) public {
        dataObject.totalNumber = _totalNumber;
    }

    // Getter for currentPercentage
    function getCurrentPercentage() public view returns (uint256) {
        return dataObject.currentPercentage;
    }

    // Setter for currentPercentage
    function setCurrentPercentage(uint256 _currentPercentage) public {
        dataObject.currentPercentage = _currentPercentage;
    }

    // Getter for Name
    function getName() public view returns (string memory) {
        return dataObject.name;
    }

    // Setter for Name
    function setName(string memory _name) public {
        dataObject.name = _name;
    }
}