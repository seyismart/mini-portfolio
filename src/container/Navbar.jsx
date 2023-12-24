import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Social from "./Social";
import { Link } from "react-scroll";
import smart from "../assets/SMART2.png";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleToggle = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-1rem bg-[#13775e] text-gray-300 pr-4 ">
      <div>
        <Link to="Home" smooth={true} duration={700}>
          <img
            className="w-14 rounded-r-2xl cursor-pointer"
            src={smart}
            alt="brand"
          />
        </Link>
      </div>
      <ul className="hidden md:flex ">
        <li className="hover:text-greenyellow-600 transition underline-hidden hover:underline">
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-greenyellow-600 transition underline-hidden hover:underline">
          {" "}
          <Link to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-greenyellow-600 transition underline-hidden hover:underline">
          {" "}
          <Link to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-greenyellow-600 transition underline-hidden hover:underline">
          {" "}
          <Link to="Work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="hover:text-greenyellow-600 transition underline-hidden hover:underline">
          {" "}
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* FaBars/ FaTimes */}
      <div onClick={handleToggle} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0f223f] flex flex-col justify-center items-center shadow-md shadow-[#486b9e]"
        }
      >
        <li name="li" className="hover:underline ">
          {" "}
          <Link onClick={handleToggle} to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li name="li" className="hover:underline ">
          {" "}
          <Link onClick={handleToggle} to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li name="li" className="hover:underline">
          {" "}
          <Link onClick={handleToggle} to="Skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li name="li" className="hover:underline ">
          <Link onClick={handleToggle} to="Work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li name="li" className="hover:underline ">
          {" "}
          <Link
            onClick={handleToggle}
            to="Contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <Social />
    </div>
  );
}

export default Navbar;
