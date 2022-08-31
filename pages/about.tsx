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

        <div className="max-w-screen-md m-auto mt-8">
          <h2 className="text-3xl md:text-2xl font-extrabold">Ambassadors</h2>
          <p className="text-xl">
            Timeline in which they were officially recognized as ambassadors of{" "}
            <a
              href="https://www.deeplearning.ai/"
              className="text-indigo-700 hover:underline cursor-pointer"
            >
              DeepLearning.AI
            </a>
          </p>
          <ol className="relative border-l border-gray-200 mt-10">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white " />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                David Quintanilla
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
                February 2022
              </time>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white " />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Giancarlo Pablo
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                February 2022
              </time>
            </li>

            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white " />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Nelson Hernández
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Napoleón Pérez
              </h3>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022
              </time>
            </li>
          </ol>
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default About;
