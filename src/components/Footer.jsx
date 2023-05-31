import React from "react";
import DownloadButton from "./DownloadButton";
import logoicon from "../assets/logo-icon.jpg";
import logo from "../assets/ahead-logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex items-center flex-col space-y-5 m-5">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex items-center flex-col space-y-4"
      >
        <Image className="w-12 rounded-xl" src={logoicon} alt="logo icon" />
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex space-x-4">
        <p>Pune, Maharashtra</p>
        <p>hi@gmail.com</p>
      </div>
      <DownloadButton />
      <p className="text-xs text-gray-500">
        @ 2022 Ahead app, All right reserved
      </p>
    </div>
  );
};

export default Footer;
