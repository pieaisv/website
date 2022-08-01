import React from "react";

function Faq() {
  return (
    <div className="p-4">
      <br />
      <br />
      <br />
      <br />
      <div className="text-center">
        <div className="text-2xl md:text-4xl font-extrabold">
          <span>FAQ</span>
        </div>
      </div>
      <br />
      <div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer  bg-gray-200 rounded-md py-2 px-4">
                What is a Pie & AI?
              </summary>
              <span className="text-base">
                Pie & AI is a series from DeepLearning. AI meetings hosted
                independently by the global AI community. Events typically
                include conversations with world leaders, thought-provoking
                discussions, networking opportunities with your fellow learners,
                hands-on project practice, and cakes (or other desserts of your
                choice).
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer bg-gray-200 rounded-md py-2 px-4">
                How can I be an ambassador?
              </summary>
              <span className="text-base">
                The requirements are that you like to teach or organize AI
                events, click here to{" "}
                <a
                  href="https://www.deeplearning.ai/ambassador/"
                  className="text-indigo-700 underline cursor-pointer"
                >
                  apply now
                </a>
              </span>
            </details>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer bg-gray-200 rounded-md py-2 px-4">
                What is San Salvador?
              </summary>
              <span className="px-4 py-2 text-base">
                San Salvador is the capital of the country El Salvador, the Pie
                & AI are events in every city in the world
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold cursor-pointer bg-gray-200 rounded-md py-2 px-4">
                How can I give a talk?
              </summary>
              <span className="px-4 py-2 text-base">
                You can send us an email{" "}
                <a
                  href="mailto:pieaisv@gmail.com"
                  className="text-indigo-700 underline cursor-pointer"
                >
                  pieaisv@gmail.com{" "}
                </a>{" "}
                or you can also write to the ambassadors personally on Twitter
              </span>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
