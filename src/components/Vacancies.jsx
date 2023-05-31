import React from "react";
import JobsSlider from "./JobsSlider";

const Card = ({ position, role, location, salary }) => {
  return (
    <div className="bg-pink-50 rounded-3xl p-4">
      <h1 className="font-bold">{role}</h1>
      <ul>
        <li>{position}</li>
        <li>{location}</li>
        <li>{salary}</li>
      </ul>
    </div>
  );
};

const Vacancies = () => {
  return (
    <div className="m-12 space-y-10 border-b-2 p-5">
      <h1 data-aos="fade-right" className="text-3xl font-bold">
        Open vacancies
      </h1>
      <JobsSlider />
    </div>
  );
};

export default Vacancies;
