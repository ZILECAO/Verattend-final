import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import { Animations } from "../variants/animations";
import WalletConnect from "./walletConnect";
// import { Web3Provider } from '@ethersproject/providers';
// import { ethers, Wallet } from "ethers";

export function NavBar() {
  // Top Navigation Bar Element
  return (
    <header className="bg-green-100 sticky top-0 z-50">
      <div className="px-8 md:px-16 lg:px-20 mx-auto max-w-screen items-center shadow-sm shadow-gray-300">
        <div className="flex items-center justify-between h-16">
          <div className="">
            <Link href="/">
              <a className="block items-center text-blue-600 hover:text-blue-700 ">
                <span className="sr-only">Home</span>
                <Image
                  className="hover:ease-in-out hover:transition hover:duration-700 h-8 w-8 text-indigo-400 hover:text-indigo-500"
                  src="/logo.png"
                  alt="Verattend"
                  width={75}
                  height={75}
                />
              </a>
            </Link>
          </div>

          <div className="flex text-sm items-center gap-12">
            <Link href="/test">
              <p className="hidden md:block lg:block cursor-pointer text-sm font-semibold text-green-600 hover:text-gray-500 hover:ease-in-out hover:transition hover:duration-700">
               Template
              </p>
            </Link>

            <Link href="/about">
              <p className="hidden md:block lg:block cursor-pointer text-sm font-semibold text-green-600 hover:text-gray-500 hover:ease-in-out hover:transition hover:duration-700">
                About
              </p>
            </Link>

            <Link href="/organizer"> 
              <p className="hidden md:block lg:block cursor-pointer text-sm font-semibold text-green-600 hover:text-gray-500 hover:ease-in-out hover:transition hover:duration-700">
                Organizer
              </p>
            </Link>

            <Link href="/features">
              <p className="hidden md:block lg:block cursor-pointer text-sm font-semibold text-green-600 hover:text-gray-500 hover:ease-in-out hover:transition hover:duration-700">
                My Gifts
              </p>
            </Link>

            <Link href="/create">
              <button className="py-2 px-4 bg-green-600 border border-green-300 rounded-md text-sm font-semibold hover:bg-green-300 text-white whitespace-nowrap hover:shadow-indigo-800/50 hover:shadow-sm shadow-green-600/50 sm:overflow-hidden hover:ease-out hover:transition hover:duration-700">
                Get Started
              </button>
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
}
