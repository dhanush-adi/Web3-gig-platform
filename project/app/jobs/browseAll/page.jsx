"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWallet } from "@/context/WalletContext";
import {
  ArrowUpRight,
  Clock,
  DollarSign,
  LockKeyhole,
  LockKeyholeOpen,
  LockOpen,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const { account, signer, connectWallet } = useWallet();
  const INFURA_PROJECT_ID = "<Don't be interested in mine. Put yours>"; // Replace with your fcking Infura project ID
  const provider = new ethers.providers.JsonRpcProvider(
    `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`
  );

  const contractAddress = "0x0b06c1988aDB165202aC09E25Cc1d55a282034D3"; // Replace with your contract address
  const contractAbi = [
    "function jobCounter() view returns (uint256)",
    "function jobs(uint256) view returns (address client, string description, uint256 budget, bool isOpen, address freelancer)",
  ]; // Replace with your contract ABI

  useEffect(() => {
    const fetchJobs = async () => {
      if (!provider) {
        console.error("Provider not available");
        return;
      }

      const contract = new ethers.Contract(
        contractAddress,
        contractAbi,
        provider
      );
      try {
        const jobCounter = await contract.jobCounter();
        const jobs = [];

        for (let i = 1; i <= jobCounter; i++) {
          const jobData = await contract.jobs(i);
          jobs.push({
            id: i,
            client: jobData.client,
            description: jobData.description,
            budget: ethers.utils.formatEther(jobData.budget),
            isOpen: jobData.isOpen,
            freelancer: jobData.freelancer,
          });
        }

        setJobs(jobs);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      }
    };

    fetchJobs();
  }, [provider]);

  return (
    <div className="p-4 pt-20">
      <h1 className="text-2xl font-bold mb-4">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.length > 0 ? (
          <>
            {/* <li key={job.id} className="border p-4 rounded-lg shadow">
              <p>
                <strong>Description:</strong> {job.description}
              </p>
              <p>
                <strong>Budget:</strong> {job.budget} ETH
              </p>
              <p>
                <strong>Client:</strong> {job.client}
              </p>
              <p>
                <strong>Status:</strong> {job.isOpen ? "Open" : "Closed"}
              </p>
            </li> */}
            {jobs.map((gig) => (
              <div
                key={gig.id}
                className="group relative bg-card rounded-lg overflow-hidden border border-[hsl(var(--border))] p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {gig.description}
                    </h3>
                    <ArrowUpRight
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                      size={20}
                    />
                  </div>

                  <div className="pt-4 space-y-3 border-t border-[hsl(var(--border))]">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-medium text-card-foreground text-xs">
                        Posted by: {gig.client}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-medium text-card-foreground">
                        {gig.budget} ETH
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={18} />
                      <span>Remote</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {gig?.isOpen ? (
                        <LockKeyholeOpen size={18} />
                      ) : (
                        <LockKeyhole size={18} />
                      )}
                      <span
                        className={`${
                          gig?.isOpen ? "bg-green-400" : "bg-red-400"
                        } px-4 rounded-xl text-xs text-[#FFFFFF]`}
                      >
                        {gig?.isOpen
                          ? "Open"
                          : `Accepted by: ${gig.freelancer} `}
                      </span>
                    </div>
                  </div>
                  <Link href={`/jobs/${gig.id}`}>
                    <button
                      className={`w-full mt-4 py-2 px-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground ${
                        !gig.isOpen && "cursor-not-allowed disabled:opacity-50"
                      }`}
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </div>
  );
}
