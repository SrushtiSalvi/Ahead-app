import React from "react";

const Card = ({ position, role, location, salary }) => {
  return (
    <div
      className={`rounded-2xl p-4 bg-blue-100 flex-col w-96 space-y-5  scroll-smooth text-lg`}
    >
      <h1 className="font-bold">{role}</h1>
      <ul>
        <li>{position}</li>
        <li>{location}</li>
        <li>{salary}</li>
      </ul>
    </div>
  );
};

const JobsSlider = () => {
  return (
    <div data-aos="fade-left" className="flex m-auto   w-auto">
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex space-x-5  p-6">
          <Card
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
          <Card
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
          <Card
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
          <Card
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
          <Card
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
          <Card
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
          <Card
            role="Senior Full-Stack engineering"
            position="Full time position"
            location="Berlin or remote"
            salary="5lpa"
          />
        </div>
      </div>
    </div>
  );
};

export default JobsSlider;
