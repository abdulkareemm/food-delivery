import React from "react";
import { Avatar, Logo } from "../img";
import { MdShoppingBasket } from "react-icons/md";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* destop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        {/* logo */}
        <Link to={'/'} className="flex items-center gap-2 ">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        {/* left section */}
        <div className="flex items-center gap-8">
          {/* menu */}

          <ul className="flex items-center gap-8 ml-auto">
            <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 ease-in-out transition-all cursor-pointer">
              Service
            </li>
          </ul>
          {/* cart icon */}
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            <div className="bg-cartNumBg w-5 h-5 absolute text-center text-white rounded-full -top-2 -right-2">
              <p className="text-sm text-white font-semibold">2</p>
            </div>
          </div>
          {/* avatar */}
          <motion.img whileTap={{scale:0.6}} src={Avatar} alt="userprofile" className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer " />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full bg-blue-700 p-4"></div>
    </header>
  );
};

export default Header;
