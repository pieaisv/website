import React from "react";
import { sponsorsBrands } from "./sponsors";

function Sponsors() {
  return (
    <div className="text-center m-3">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <div className="text-2xl md:text-4xl font-extrabold">
            <span>Sponsors</span>
          </div>
          <br />
          <div className="text-xl md:text-2xl font-semibold">
            <span>Companies that trust the AI community in El Salvador</span>
          </div>
          <br />
          <div className="max-w-screen-md m-auto">
            <p className="text-base">
              Thank you for your support, without you it would not be possible.
              In addition we can reach more people, make raffles and improve the
              quality of the events
            </p>
          </div>
          <div className="flex justify-center">
            <div className="text-base text-center md:text-left">
              <a
                target={"_blank"}
                href="mailto:pieaisv@gmail.com?subject=Event%20Sponsorship&amp;body=Hello 👋, I want to sponsor a Pie & AI event."
                className="bg-white bg-pie text-xl text-black hover:text-white py-2 mt-6 px-4 border-l-2 border-t-2 border-r-4 border-b-4 border-black rounded inline-flex items-center ease-in-out"
                rel="noreferrer"
              >
                <span className="ml-1">I want to sponsor the event!</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-8 md:mt-0">
          {sponsorsBrands.map((brand) => {
            return (
              <a
                key={brand.name}
                href={brand.website}
                target={"_blank"}
                rel="noreferrer"
              >
                <div dangerouslySetInnerHTML={{ __html: brand.logo }} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
