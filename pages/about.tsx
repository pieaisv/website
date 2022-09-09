import React from "react";
import Newsletter from "../components/Newsletter";

function About() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">About</h1>
        <div className="max-w-screen-md m-auto mt-8">
          <p className="text-xl">
            We are a community of developers built in El Salvador, with the idea
            of being able to organize Artificial Intelligence events.
          </p>
        </div>
        <div className="max-w-screen-md m-auto mt-8">
          <p className="text-xl">
            This with the idea of being able to meet more people who like AI,
            regardless of their level or if they are not from that technological
            area.
          </p>
        </div>
        <br />
      </div>
      <Newsletter />
    </div>
  );
}

export default About;
