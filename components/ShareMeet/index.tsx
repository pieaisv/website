import React from "react";
import MeetLogo from "./MeetLogo";

function ShareMeet() {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="h-auto m-3">
        <div className="grid grid-cols-1 md:grid-cols-2 m-3">
          <MeetLogo />
          <div className="mt-7">
            <h2 className="text-2xl md:text-5xl font-extrabold mt-7">
              Share with the community
            </h2>
            <br />
            <br />
            <ol className="relative">
              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white " />
                <h3 className="flex items-center mb-1 text-xl font-semibold">
                  Share a photo
                </h3>
                <p className="mb-4 text-xl max-w-3xl">
                  You can share a photo of an event you attend by tagging{" "}
                  <a
                    className="text-indigo-700 underline cursor-pointer"
                    href="https://twitter.com/pieaisv"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    @pieaisv
                  </a>{" "}
                  on Twitter or using the hashtag{" "}
                  <a
                    className="text-indigo-700 underline cursor-pointer"
                    href="https://twitter.com/search?q=%23pieaisv"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    #pieaisv
                  </a>
                  .
                </p>
              </li>

              <li className="mb-10 ml-6">
                <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white " />
                <h3 className="flex items-center mb-1 text-xl font-semibold">
                  Share your feedback
                </h3>
                <p className="mb-4 text-xl max-w-3xl">
                  You can tag us and tell us what you thought of any event and
                  what dynamics we could carry out in the following Pie & AI.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default ShareMeet;
