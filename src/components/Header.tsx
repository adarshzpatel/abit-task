
import React from "react";
import Avatar from "./Avatar";
import Link from "next/link";
import { FaBell, FaChevronDown, FaWallet } from "react-icons/fa";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-6 px-8 border-b-[1.5px] border-gray-400">
      <nav className="flex items-center  mx-auto">
        <Link href={"/"} className="flex-1 font-bold text-3xl">
          aBit
        </Link>
        <div className="flex items-center gap-6 justify-between">
          <button className="rounded-full border-[1.5px] hover:bg-purple-500/10 duration-200 ease-out hover:scale-105 hidden md:block border-purple-500 text-purple-600 py-2 px-3">
            Share a new video
          </button>
          <a href="/wallet">
            <FaWallet className="h-6 w-6 text-gray-400 hover:text-gray-500 hover:scale-110 ease-out hidden md:block duration-300 " />
          </a>
          <a href="/wallet">
            <FaBell className="h-6 w-6 text-gray-400 hover:text-gray-500 hover:scale-110 ease-out hidden md:block duration-300 " />
          </a>
          <button className="flex items-center gap-2">
            <Avatar src="https://yt3.googleusercontent.com/iWkJUXam8nJBex6hpRRpobgvfWwBJdNntF1RxSuIxcSux36zdwUpVymuWBzSKV09QRef1Mq9=s900-c-k-c0x00ffffff-no-rj" />
            <FaChevronDown className="h-4 w-4 text-gray-400 hover:text-gray-500 hover:scale-110 ease-out duration-300 " />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
