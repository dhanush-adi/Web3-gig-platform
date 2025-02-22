// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Identity {
    mapping(address => bool) public registeredUsers;

    event UserRegistered(address indexed user);

    function register() external {
        require(!registeredUsers[msg.sender], "User already registered.");
        registeredUsers[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    function isRegistered(address _user) external view returns (bool) {
        return registeredUsers[_user];
    }
}
