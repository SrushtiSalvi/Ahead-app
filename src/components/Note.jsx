import Image from "next/image";
import React from "react";
import sign from "../assets/sign.png";

const Note = () => {
  return (
    <div className="flex items-center flex-col p-20 my-40 gap-4">
      <p>We take privacy seriously</p>
      <p className="text-3xl font-bold">Before you get started</p>
      <i data-aos="fade-up" className="text-center">
        "We won't share your answers with anyone (and won't ever tell <br />
        you which friends said what about you"
      </i>
      <p data-aos="fade-up" className="py-10 flex ">
        With love, <Image className="w-10 mx-2" src={sign} alt="sign" />
      </p>
      <div data-aos="zoom-in" className="flex flex-col items-center space-y-4">
        <button className="text-center bg-black text-white rounded-full p-2">
          Start a test
        </button>
        <p data-aos="fade-in" className="text-sm text-gray-500">
          Take only 5 minutes
        </p>
      </div>
    </div>
  );
};

export default Note;
