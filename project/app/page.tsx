"use client";

import { AnimatedBackground } from "@/components/animated-background";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Users, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background/80 text-foreground">
      <AnimatedBackground />

      {/* Header */}
      {/* <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <MainNav />
        </div>
      </header> */}

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            The Future of{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Decentralized Work
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Connect, collaborate, and earn in the Web3 gig economy. Secure
            payments, transparent reputation, and endless opportunities.
          </p>

          <div className="mx-auto mb-12 flex max-w-md items-center gap-2">
            <Input
              placeholder="Search jobs or freelancers..."
              className="h-12"
            />
            <Button size="lg" className="h-12 px-8">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <Card className="p-6 transition-all hover:scale-105">
            <Wallet className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Secure Payments</h3>
            <p className="text-muted-foreground">
              Smart contract escrow ensures safe and transparent transactions
            </p>
          </Card>
          <Card className="p-6 transition-all hover:scale-105">
            <TrendingUp className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">On-Chain Reputation</h3>
            <p className="text-muted-foreground">
              Build and maintain your professional reputation on the blockchain
            </p>
          </Card>
          <Card className="p-6 transition-all hover:scale-105">
            <Users className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">Global Talent Pool</h3>
            <p className="text-muted-foreground">
              Connect with skilled professionals from around the world
            </p>
          </Card>
        </motion.div>

        {/* Featured Jobs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="my-16"
        >
          <h2 className="mb-8 text-3xl font-bold">Featured Jobs</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    Smart Contract
                  </span>
                  <span className="font-semibold">5 ETH</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  DeFi Protocol Developer
                </h3>
                <p className="mb-4 text-muted-foreground">
                  Looking for an experienced Solidity developer to build and
                  audit smart contracts for our DeFi protocol.
                </p>
                <Button className="w-full">View Details</Button>
              </Card>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
