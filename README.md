# Gig Economy Platform

This project is a decentralized gig economy platform built on Ethereum. It includes smart contracts for managing jobs, freelancers, and reputation, as well as a front-end interface for users to interact with the platform.

## Table of Contents

- [Overview](#overview)
- [Smart Contracts](#smart-contracts)
- [Front End](#front-end)
- [Setup](#setup)
- [Deployment](#deployment)
- [Testing](#testing)
- [License](#license)

## Overview

The platform allows freelancers to register, complete jobs, and receive ratings. Clients can post jobs and rate freelancers based on their performance. The reputation of freelancers is tracked on the blockchain.

## Smart Contracts

The smart contracts are written in Solidity and include the following:

- `Escrow.sol`: Manages payment escrow between clients and freelancers.
- `Identity.sol`: Manages user identities.
- `Job.sol`: Manages job postings and assignments.
- `Lock.sol`: Example contract for locking funds.
- `Reputation.sol`: Manages freelancer ratings and reputation.

### Contract Details

- [Escrow.sol](contracts/Escrow.sol)
- [Identity.sol](contracts/Identity.sol)
- [Job.sol](contracts/Job.sol)
- [Lock.sol](contracts/Lock.sol)
- [Reputation.sol](contracts/Reputation.sol)

## Front End

The front end is built using React and allows users to interact with the smart contracts. Users can:

- Register as a freelancer or client.
- Post and manage jobs.
- Assign jobs to freelancers.
- Rate freelancers upon job completion.

## Setup

### Prerequisites

- Node.js
- npm
- Hardhat
- MetaMask (for interacting with the Ethereum network)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dhanush-adi/Web3-gig-platform.git
   cd Web3-gig-platform
2. Install dependencies:

   ```sh
   npm install

3. Create a .env file in the root directory and add your environment variables:

   ALCHEMY_SEPOLIA_URL=https://sepolia.infura.io/v3/your-infura-project-id
   
   PRIVATE_KEY=your-private-key

## Deployment

Deploying Smart Contracts

1. Compile the contracts:

   ```sh
   npx hardhat compile

2. Deploy the contracts to the Sepolia network:

    ```sh
    npx hardhat run scripts/deploy.js --network sepolia

## Running the Front End

1. Running the Front End:
   ```sh
   npm start

2. Open your browser and navigate to http://localhost:3000
   
## Testing

1. To run the tests, use the following command:

   ```sh
   npx hardhat test

## License
This project is licensed under the MIT License.

