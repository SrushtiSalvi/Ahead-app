import Link from "next/link";
import React from "react";
import logoicon from "../assets/logo-icon.jpg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 px-28 items-center sticky bg-white top-0 left-0 right-0">
      <div>
        <Image className="w-10 rounded-xl" src={logoicon} alt="logo" />
      </div>
      <div className="space-x-4 ">
        <Link href="#">Emotions</Link>
        <Link href="#">Manifesto</Link>
        <Link href="#">Self-awareness test</Link>
        <Link href="#">Work With us</Link>
      </div>
      <div>
        <button
          data-aos="zoom-in"
          className="px-4 py-2 rounded-full bg-black text-white"
        >
          Download App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
