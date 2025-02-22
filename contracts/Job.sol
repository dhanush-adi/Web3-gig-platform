// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Job {
    struct JobDetail {
        address client;
        string description;
        uint256 budget;
        bool isOpen;
        address freelancer;
    }

    mapping(uint256 => JobDetail) public jobs;
    uint256 public jobCounter;

    event JobPosted(uint256 jobId, address indexed client, string description, uint256 budget);
    event JobAccepted(uint256 jobId, address indexed freelancer);

    function postJob(string calldata _description, uint256 _budget) external {
        jobCounter++;
        jobs[jobCounter] = JobDetail(msg.sender, _description, _budget, true, address(0));
        emit JobPosted(jobCounter, msg.sender, _description, _budget);
    }

    function acceptJob(uint256 _jobId) external {
        JobDetail storage job = jobs[_jobId];
        require(job.isOpen, "Job already taken.");
        job.freelancer = msg.sender;
        job.isOpen = false;
        emit JobAccepted(_jobId, msg.sender);
    }
}
