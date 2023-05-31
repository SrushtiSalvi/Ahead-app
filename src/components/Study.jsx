import Image from "next/image";
import React from "react";
import Slider from "./Slider";
import angryGhost from "../assets/blue-ghost-emoji-animation.gif";

const Study = () => {
  return (
    <div>
      <div className="grid grid-cols-3 justify-between my-6">
        <div data-aos="fade-right" className=" p-6 font-medium text-2xl">
          EQ beats IQ
        </div>
        <div className=" p-6 text-gray-600 text-lg">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s{" "}
        </div>
        <div className=" p-6 text-gray-600 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>
      <div>
        <div className="flex">
          <h1 data-aos="fade-right" className="text-4xl font-bold p-6">
            Does this sound familiar...
          </h1>
          <Image
            data-aos="fade-left"
            className="w-16"
            src={angryGhost}
            alt="angry-ghost"
          />
        </div>
        <div>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Study;
