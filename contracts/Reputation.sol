// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Reputation {
    struct Freelancer {
        uint256 completedJobs;
        uint256 totalRating;
        uint256 ratingCount;
        string projectLink; // Add project link to the Freelancer struct
    }

    mapping(address => Freelancer) public freelancers;

    function rateFreelancer(address _freelancer, uint8 _rating) external {
        require(_rating > 0 && _rating <= 5, "Invalid rating (1-5)");

        Freelancer storage freelancer = freelancers[_freelancer];
        freelancer.completedJobs++;
        freelancer.totalRating += _rating;
        freelancer.ratingCount++;
    }

    function getReputation(address _freelancer) external view returns (uint256 averageRating, uint256 completedJobs) {
        Freelancer storage freelancer = freelancers[_freelancer];
        if (freelancer.ratingCount == 0) return (0, freelancer.completedJobs);
        return (freelancer.totalRating / freelancer.ratingCount, freelancer.completedJobs);
    }

    // Add a function to allow freelancers to add a project link
    function addProjectLink(string calldata _link) external {
        Freelancer storage freelancer = freelancers[msg.sender];
        freelancer.projectLink = _link;
    }

    // Add a function to retrieve the project link for a freelancer
    function getProjectLink(address _freelancer) external view returns (string memory) {
        Freelancer storage freelancer = freelancers[_freelancer];
        return freelancer.projectLink;
    }
}