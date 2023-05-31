import Image from "next/image";
import React from "react";
import homeowl from "../assets/home_owel.svg";

const AboutApp = () => {
  return (
    <div className="p-5 bg-pink-100 rounded-3xl my-10 space-y-6 py-20">
      <div data-aos="fade-right" className="space-y-4">
        <p>Built out of frustation</p>
        <h1 className="text-3xl font-bold ">Meet the ahead app</h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <Image src={homeowl} alt="home owl" className="w-52 " />
        </div>
        <div className=" text-gray-600 px-20">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;
