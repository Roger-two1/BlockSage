"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="navbar   py-2 px-4 bg-transparent text-black shadow-lg ">
        <div className="navbar-start ">
          <div className="logo w-[30px]">
            <Link href="/">
              {/* <Image src="/logo.png" width={30} height={30} alt="logo" /> */}
              ✌
            </Link>
          </div>
        </div>

        <div className="navbar-center">
          <Link href="/" className=" text-xl  font-bold text-emerald-950">
            BlockSage
          </Link>
        </div>

        <div className="navbar-end">
          <label className="btn btn-ghost btn-circle swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={() => setIsOpen(!isOpen)} />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          {/* <div className="indicator">
              <svg
                className="w-7 h-7 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </div> */}
          {/* </button> */}
        </div>
      </header>
      {isOpen ? (
        <div className=" links-container border bg-[#acb0be]/50 border-black rounded-sm flex justify-center absolute w-full md:w-[50%] md:ml-[50%]  bg-transparent text-black font-bold items-center">
          <ul className="p-3 text-center">
            <li className="hover:text-blue-800" onClick={() => setIsOpen(!isOpen)}>
              <Link href="/">HOME</Link>
            </li>
            <li className="hover:text-blue-800" onClick={() => setIsOpen(!isOpen)}>
            <Link href="/blogs">BLOGS</Link>
            </li>
            {/* <li>
            <Link href="/new-story">NEW BLOG</Link>
            </li> */}
          </ul>
        </div>
      ) : null}
    </>
  );
}

// ml-[50%] sm:w-full sm:ml-0
