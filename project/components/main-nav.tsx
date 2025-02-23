"use client";

import { Wallet2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useWallet } from "@/context/WalletContext";

export function MainNav() {
  const { account, connectWallet } = useWallet();

  return (
    <div className="flex items-center space-x-4 lg:space-x-6 z-0">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Featured Jobs
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Discover top opportunities in the Web3 space
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/jobs/browseAll"
                    >
                      <div className="text-sm font-medium leading-none">
                        Browse All
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore all available gigs
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/jobs/register"
                    >
                      <div className="text-sm font-medium leading-none">
                        Post a Job
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Create a new gig listing
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Freelancers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {freelancerCategories.map((category) => (
                  <ListItem
                    key={category.title}
                    title={category.title}
                    href={category.href}
                  >
                    {category.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {dashboardItems.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        variant={account ? "default" : "outline"}
        onClick={connectWallet}
        className="ml-4"
      >
        <Wallet2 className="mr-2 h-4 w-4" />
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </Button>
    </div>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

const freelancerCategories = [
  {
    title: "Top Rated",
    href: "/",
    description: "Browse our highest-rated freelance professionals",
  },
  {
    title: "Recently Active",
    href: "/",
    description: "Find freelancers who are currently available",
  },
  {
    title: "By Skill",
    href: "/",
    description: "Search freelancers by specific skills and expertise",
  },
  {
    title: "By Category",
    href: "/",
    description: "Browse freelancers by service category",
  },
];

const dashboardItems = [
  {
    title: "My Jobs",
    href: "/dashboard/myjobs",
    description: "View and manage your active and completed jobs",
  },
  {
    title: "Escrow",
    href: "/dashboard/escrow",
    description: "Manage your escrow payments and transactions",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    description: "Update your profile and portfolio",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    description: "Configure your account preferences",
  },
];
