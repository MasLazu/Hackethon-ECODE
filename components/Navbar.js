import Image from "next/image";

import logo from "../assets/Logo.png";
import bag from "../assets/Bag.png";
import hamburger from "../assets/Navbar/menu.svg";

export default function Navbar() {
  return (
    <nav className="navbar py-2 px-6 flex justify-center fixed top-0 backdrop-blur-lg w-[100vw]">
      <div className="flex justify-between container items-center">
        <Image src={logo} className="w-auto h-12 cursor-pointer" />
        <Image
          src={hamburger}
          className="h-8 w-auto md:hidden hover:cursor-pointer"
        />
        <div className="options md:flex hidden">
          <ul className="flex">
            <li className="mx-5 cursor-pointer">Home</li>
            <li className="mx-5 text-[#706f6f] hover:text-[#000] cursor-pointer">
              Menu
            </li>
            <li className="mx-5 text-[#706f6f] hover:text-[#000] cursor-pointer">
              Service
            </li>
            <li className="mx-5 text-[#706f6f] hover:text-[#000] cursor-pointer">
              Sign in
            </li>
          </ul>
          <Image
            src={bag}
            className="w-auto h-5 ml-5 cursor-pointer opacity-70 hover:opacity-100"
          />
        </div>
      </div>
    </nav>
  );
}
