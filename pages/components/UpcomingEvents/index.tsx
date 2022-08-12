import { useState } from "react";
import { EventType } from "../FormEvent/types";

interface UpcomingEventsType {
  data: {
    events: Array<EventType>;
  };
}

function UpcomingEvents({ data }: UpcomingEventsType) {
  const [months] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  return (
    <>
      <div className="text-2xl md:text-4xl font-extrabold text-center">
        <span>Upcoming Events</span>
      </div>
      <br />
      <br />
      <div className="relative rounded-xl overflow-auto text-white">
        {/* Contents */}
        <div className="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
          <div className="snap-center shrink-0">
            <div className="shrink-0 w-4 sm:w-48" />
          </div>
          {data.events.map((event) => {
            return (
              <div
                key={event.id}
                className="snap-center shrink-0 first:pl-8 last:pr-8 auto w-80 bg-pie red-logo red-hover p-4"
              >
                <div>
                  <p className="text-2xl md:text-7xl font-extrabold">
                    {event.date.split("-")[2]}
                  </p>
                  <br />
                  <p className="text-2xl font-bold">
                    {months[parseInt(event.date.split("-")[1])]}
                  </p>
                  <br />
                  <p className="text-3xl font-semibold">{event.title}</p>
                  <br />
                  <p className="font-medium">
                    {event.duration.start} - {event.duration.end}
                  </p>
                  <br />
                  <div className="flex gap-2">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                        height={"20px"}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </figure>
                    <div>
                      <p>{event.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="snap-center shrink-0">
            <div className="shrink-0 w-4 sm:w-48" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingEvents;
