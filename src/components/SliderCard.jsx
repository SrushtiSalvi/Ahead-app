import React from "react";

const SliderCard = ({ title, emoji, bgColor, content, tilted }) => {
  return (
    <div
      className={`rounded-2xl p-4 bg-blue-100 flex-col w-96 space-y-5 ${bgColor} scroll-smooth ${
        tilted ? "-rotate-6" : "rotate-0"
      }`}
    >
      <div className="text-2xl">{emoji}</div>
      <h1 className="text-black">{title}</h1>
      <p className="text-gray-500">{content}</p>
    </div>
  );
};

export default SliderCard;
