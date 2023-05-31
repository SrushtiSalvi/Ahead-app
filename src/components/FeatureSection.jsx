import Image from "next/image";
import React from "react";
import diagram1 from "../assets/diagram1.jpg";
import diagram2 from "../assets/diagram2.jpg";

const FeatureSection = () => {
  return (
    <div className="flex bg-sky-50 rounded-3xl p-20 my-20 flex-col items-center space-y-4">
      <h1>
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </h1>
      <h1 className="text-4xl font-bold">
        Ever wondered what others think of you?
      </h1>
      <div>
        <Image data-aos="fade-up" src={diagram1} alt="diagram 1" />
      </div>
      <div>
        <Image data-aos="fade-up" src={diagram2} alt="diagram 2" />
      </div>
    </div>
  );
};

export default FeatureSection;
