import React, { useState } from "react";
import { Link, animationScroll as scroll } from "react-scroll";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <>
      <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg fixed">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="items-center flex">
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
            <ul className="hidden md:flex">
              <li>
                <Link to="hero" smooth={true} offset={50} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} offset={50} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="support" smooth={true} offset={50} duration={500}>
                  Support
                </Link>
              </li>
              <li>
                <Link to="platform" smooth={true} offset={50} duration={500}>
                  Platform
                </Link>
              </li>
              <li>
                <Link to="pricing" smooth={true} offset={50} duration={500}>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4">
              sign up
            </button>
            <button className="px-8 py-3">Login</button>
          </div>
          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>

        <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 "}>
          <li>
            <Link to="hero" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="support" smooth={true} offset={50} duration={500}>
              Support
            </Link>
          </li>
          <li>
            <Link to="platform" smooth={true} offset={50} duration={500}>
              Platform
            </Link>
          </li>
          <li>
            <Link to="pricing" smooth={true} offset={50} duration={500}>
              Pricing
            </Link>
          </li>
          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              sign up
            </button>
            <button className="px-8 py-3">Log in</button>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
