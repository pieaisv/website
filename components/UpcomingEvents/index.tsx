import { useEffect, useState } from "react";
import axios from "axios";

type EventType = {
  id: string;
  title: string;
  date: string;
  duration: {
    start: string;
    end: string;
  };
  info: string;
  location: string;
};
function UpcomingEvents() {
  const [Data, setData] = useState<Array<EventType>>([]);
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

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/event/get");
      if (data.events) {
        setData(data.events);
      }
    };
    getData();
  }, []);

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
          {Data.map((event) => {
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

      <br />
      <div className="m-3">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="text-2xl md:text-4xl font-extrabold text-center">
              <span>AI for DevOps with GitLab</span>
            </div>
            <p className="mt-3">
              OctogatosConf amplifies, promotes, and empowers the voices of
              Latinx in tech.
            </p>
            <br />
            <a href="#" className="flex justify-center gap-3 hover:text-gray-700">
              <div>
                <svg
                  height="40px"
                  viewBox="0 0 256 256"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <g>
                    <polygon
                      fill="#FFFFFF"
                      points="195.368421 60.6315789 60.6315789 60.6315789 60.6315789 195.368421 195.368421 195.368421"
                    ></polygon>
                    <polygon
                      fill="#EA4335"
                      points="195.368421 256 256 195.368421 225.684211 190.196005 195.368421 195.368421 189.835162 223.098002"
                    ></polygon>
                    <path
                      d="M1.42108547e-14,195.368421 L1.42108547e-14,235.789474 C1.42108547e-14,246.955789 9.04421053,256 20.2105263,256 L60.6315789,256 L66.8568645,225.684211 L60.6315789,195.368421 L27.5991874,190.196005 L1.42108547e-14,195.368421 Z"
                      fill="#188038"
                    ></path>
                    <path
                      d="M256,60.6315789 L256,20.2105263 C256,9.04421053 246.955789,1.42108547e-14 235.789474,1.42108547e-14 L195.368421,1.42108547e-14 C191.679582,15.0358547 189.835162,26.1010948 189.835162,33.1957202 C189.835162,40.2903456 191.679582,49.4356319 195.368421,60.6315789 C208.777986,64.4714866 218.883249,66.3914404 225.684211,66.3914404 C232.485172,66.3914404 242.590435,64.4714866 256,60.6315789 Z"
                      fill="#1967D2"
                    ></path>
                    <polygon
                      fill="#FBBC04"
                      points="256 60.6315789 195.368421 60.6315789 195.368421 195.368421 256 195.368421"
                    ></polygon>
                    <polygon
                      fill="#34A853"
                      points="195.368421 195.368421 60.6315789 195.368421 60.6315789 256 195.368421 256"
                    ></polygon>
                    <path
                      d="M195.368421,0 L20.2105263,0 C9.04421053,0 0,9.04421053 0,20.2105263 L0,195.368421 L60.6315789,195.368421 L60.6315789,60.6315789 L195.368421,60.6315789 L195.368421,0 Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M88.2694737,165.153684 C83.2336842,161.751579 79.7473684,156.783158 77.8442105,150.214737 L89.5326316,145.397895 C90.5936842,149.44 92.4463158,152.572632 95.0905263,154.795789 C97.7178947,157.018947 100.917895,158.113684 104.656842,158.113684 C108.48,158.113684 111.764211,156.951579 114.509474,154.627368 C117.254737,152.303158 118.635789,149.338947 118.635789,145.751579 C118.635789,142.08 117.187368,139.082105 114.290526,136.757895 C111.393684,134.433684 107.755789,133.271579 103.410526,133.271579 L96.6568421,133.271579 L96.6568421,121.701053 L102.72,121.701053 C106.458947,121.701053 109.608421,120.690526 112.168421,118.669474 C114.728421,116.648421 116.008421,113.886316 116.008421,110.366316 C116.008421,107.233684 114.863158,104.741053 112.572632,102.871579 C110.282105,101.002105 107.385263,100.058947 103.865263,100.058947 C100.429474,100.058947 97.7010526,100.968421 95.68,102.804211 C93.6602819,104.644885 92.1418208,106.968942 91.2673684,109.557895 L79.6968421,104.741053 C81.2294737,100.395789 84.0421053,96.5557895 88.1684211,93.2378947 C92.2947368,89.92 97.5663158,88.2526316 103.966316,88.2526316 C108.698947,88.2526316 112.96,89.1621053 116.732632,90.9978947 C120.505263,92.8336842 123.469474,95.3768421 125.608421,98.6105263 C127.747368,101.861053 128.808421,105.498947 128.808421,109.541053 C128.808421,113.667368 127.814737,117.153684 125.827368,120.016842 C123.84,122.88 121.397895,125.069474 118.501053,126.602105 L118.501053,127.292632 C122.241568,128.834789 125.490747,131.367752 127.898947,134.618947 C130.341053,137.903158 131.570526,141.827368 131.570526,146.408421 C131.570526,150.989474 130.408421,155.082105 128.084211,158.669474 C125.76,162.256842 122.543158,165.086316 118.467368,167.141053 C114.374737,169.195789 109.776842,170.240124 104.673684,170.240124 C98.7621053,170.256842 93.3052632,168.555789 88.2694737,165.153684 L88.2694737,165.153684 Z M160.067368,107.149474 L147.233684,116.429474 L140.816842,106.694737 L163.84,90.0884211 L172.665263,90.0884211 L172.665263,168.421053 L160.067368,168.421053 L160.067368,107.149474 Z"
                      fill="#4285F4"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex justify-center items-center">
                <p className="font-semibold">
                  Add session to <strong className="font-bold">Google Calendar</strong>
                </p>
              </div>
            </a>
          </div>
          <div>test</div>
        </div>
      </div>
    </>
  );
}

export default UpcomingEvents;
