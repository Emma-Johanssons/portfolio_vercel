import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./images/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between w-full p-6">
      <div className="ml-3 w-28 h-1/2 ">
        <Image alt="logo" className="" src={logo} />
      </div>
      <ul>
        <li className="flex font-semibold gap-5 mr-3">
          <Link
            className="border-r-4 p-2 border-b-4 rounded-md hover:pr-4 hover:bg-white hover:text-pink-300 hover:font-bold"
            href="/"
          >
            Home
          </Link>
          <Link
            className="border-r-4 p-2 border-b-4 rounded-md hover:pr-4 hover:bg-white hover:text-pink-300 hover:font-bold"
            href="components/projects"
          >
            Projects
          </Link>
          <Link
            className="border-r-4 p-2 border-b-4 rounded-md hover:pr-4 hover:bg-white hover:text-pink-300 hover:font-bold "
            href="components/about"
          >
            About
          </Link>
          <Link
            className="border-r-4 p-2 border-b-4 rounded-md hover:pr-4 hover:bg-white hover:text-pink-300 hover:font-bold"
            href="components/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
