const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  
  const Identity = await ethers.getContractFactory("Identity");
  const identity = await Identity.deploy();
  await identity.waitForDeployment();
  console.log("✅ Identity Contract Deployed at:", await identity.getAddress());

  
  const Job = await ethers.getContractFactory("Job");
  const job = await Job.deploy();
  await job.waitForDeployment();
  console.log("✅ Job Contract Deployed at:", await job.getAddress());


  const Reputation = await ethers.getContractFactory("Reputation");
  const reputation = await Reputation.deploy();
  await reputation.waitForDeployment();
  console.log("✅ Reputation Contract Deployed at:", await reputation.getAddress());

  
  const freelancerAddress = "0x0Fba7C01Fb2a8Bd39e6C3f7635a299309aa71501";

  
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(freelancerAddress, { value: ethers.parseEther("0.01") });
  await escrow.waitForDeployment();
  console.log("✅ Escrow Contract Deployed at:", await escrow.getAddress());
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
