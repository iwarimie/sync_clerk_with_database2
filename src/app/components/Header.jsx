import Link from "next/link";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center bg-slate-800 text-white py-4 px-4">
        <div className="text-4xl">
          <Link href="/">Clerk Authentication HomePage</Link>
        </div>
        <div className="flex justify-between gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          {/* <Link href="/sign-in">Sign In</Link> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </div>
      </nav>
    </header>
  );
}
