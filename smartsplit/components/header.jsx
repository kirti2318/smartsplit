"use client";

import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";

export default function Header() {
  const { isLoading } = useStoreUser();

  return (
    <header className="fixed top-0 w-full border-b bg-white/95 backdrop-blur-lg z-50 shadow-md">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logos/logo.png"
            alt="SmartSplit Logo"
            width={100}
            height={100}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Center Welcome Text */}
        <div className="text-slate-700 font-medium text-lg hidden md:block">
          Welcome!
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <Authenticated>
            {/* Dashboard Button */}
            <Link href="/dashboard" className="hidden md:inline-block">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700 transition"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>

            {/* Mobile Dashboard Icon */}
            <Link href="/dashboard" className="md:hidden">
              <Button variant="ghost" size="icon" className="text-blue-600 hover:text-blue-700">
                <LayoutDashboard className="h-5 w-5" />
              </Button>
            </Link>

            {/* User Avatar */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9",
                  userButtonPopoverCard: "shadow-md",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>

      {/* Loading Bar */}
      {isLoading && <BarLoader width="100%" color="#2563eb" height={3} />}
    </header>
  );
}
