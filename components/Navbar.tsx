"use client";
import Link from "next/link";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-full h-20 bg-gray-700 flex_center shadow-md text-gray-50">
      <nav className="wrapper flex_between relative">
        <div className="hidden md:block">
          <Link href="/" className="uppercase font-semibold tracking-wider">
            Usuf Ali
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5">
            <li className="hover:bg-gray-800 px-2 py-1 rounded-md duration-500 cursor-pointer">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:bg-gray-800 px-2 py-1 rounded-md duration-500 cursor-pointer">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="hover:bg-gray-800 px-2 py-1 rounded-md duration-500 cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:bg-gray-800 px-2 py-1 rounded-md duration-500 cursor-pointer">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <Link
            href="https://drive.google.com/file/d/1FxQvlSuwnGXLJKVNeJMQ8fLpnj-SlQQX/view"
            target="_blank"
          >
            <Button text={"My Resume"} />
          </Link>
        </div>

        {/* *************** */}
        {/* toogle button */}
        <div className="flex_center md:hidden absolute right-0 top-0 bottom-0 -translate-x-1/2 -translate-y-1/2 z-[99]">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="text-3xl"
          >
            {toggle ? <AiOutlineClose /> : <FiMenu />}
          </button>
        </div>
        {/* *************** */}
      </nav>

      {/*************************/}
      {/* mobile navbar */}
      {toggle ? (
        <nav className="md:hidden">
          <div
            onClick={() => setToggle((prev) => !prev)}
            className={`w-screen h-screen fixed z-[98]  top-0 bg-gray-700 left-0 right-0 bottom-0 flex justify-center items-center`}
          >
            <div className="space-y-5">
              <ul className="flex gap-5 flex-col items-start">
                <li>
                  <Link href="/projects"> Projects</Link>
                </li>
                <li>
                  <Link href="/skills"> Skills</Link>
                </li>
                <li>
                  <Link href="/#about"> About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <Link
                href="https://drive.google.com/file/d/1FxQvlSuwnGXLJKVNeJMQ8fLpnj-SlQQX/view"
                target="_blank"
                className="inline-block"
              >
                <Button text={"My Resume"} />
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
      {/*************************/}
    </header>
  );
};

export default Navbar;
