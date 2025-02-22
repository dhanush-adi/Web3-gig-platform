// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Escrow {
    address public client;
    address public freelancer;
    uint256 public amount;
    bool public jobCompleted;
    
    event PaymentDeposited(address indexed client, uint256 amount);
    event PaymentReleased(address indexed freelancer, uint256 amount);

    modifier onlyClient() {
        require(msg.sender == client, "Only client can call this.");
        _;
    }

    constructor(address _freelancer) payable {
        client = msg.sender;
        freelancer = _freelancer;
        amount = msg.value;
        jobCompleted = false;
        emit PaymentDeposited(client, amount);
    }

    function markJobCompleted() external onlyClient {
        require(!jobCompleted, "Job already marked as completed.");
        jobCompleted = true;
    }

    function releasePayment() external onlyClient {
        require(jobCompleted, "Job not completed yet.");
        payable(freelancer).transfer(amount);
        emit PaymentReleased(freelancer, amount);
    }
}
