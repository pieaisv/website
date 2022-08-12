import { useState } from "react";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

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

const MarkdownEditor = dynamic(() => import("@uiw/react-markdown-editor"), {
  ssr: false,
});

function FormEvent() {
  const initialStateInfo =
    "### Acerca del evento\n\nEn este evento aprenderas a como crear APIs con Azure Cognite Services, para ello utilizaremos Python\n\n### Speakers:\n- Nelson Hernandez\n\n### Recuerda seguirnos en nuestras redes sociales:\n- [Youtube](https://www.youtube.com/channel/UCWOp60M2GAAyuGsv0RoqC4g)\n- [GitHub](https://github.com/pieaisv)\n- [Twitter](https://twitter.com/pieaisv)";

  const [EventData, setEventData] = useState<EventType>({
    id: "",
    title: "Forecasting con Deep Learning",
    date: "",
    duration: {
      start: "10:00 AM",
      end: "11:00 AM",
    },
    info: initialStateInfo,
    location: "Youtube",
  });

  const [TypeEvent, setTypeEvent] = useState("true");

  const changeEvent = (e: any) => {
    setEventData((prevEvent) => {
      return {
        ...prevEvent,
        [e.target.name]: e.target.value,
      };
    });
  };

  const platforms = [
    "Youtube",
    "Zoom",
    "Twitch",
    "Discord",
    "Facebook",
    "Periscope",
    "Google Meet",
    "Microsoft Teams",
  ];

  const createEventSubmit = () => {
    fetch("/api/event/create", {
      method: "POST",
      body: JSON.stringify(EventData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // const [Password, setPassword] = useState("");

  // if (Password === "") {
  //   let showMessageError = false;
  //   const passwordWrited = window.prompt("Hacker Password");

  //   if (passwordWrited === "pieai_") {
  //     setPassword(passwordWrited);
  //   } else {
  //     showMessageError = true;
  //   }
  //   return (
  //     <h1 className="text-center text-2xl h-screen grid place-content-center">
  //       {/* eslint-disable-next-line react/no-unescaped-entities */}
  //       you don't have access
  //     </h1>
  //   );
  // }

  return (
    <>
      <br />
      <div className="m-3 md:m-auto max-w-xl">
        <div className="mb-2">
          <label htmlFor="title" className="block text-base">
            Titulo del evento
          </label>
        </div>
        <div className="flex justify-center items-center">
          <textarea
            className="placeholder:text-black appearance-none border border-gray-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
            id="title"
            placeholder="Titulo del evento"
            name="title"
            value={EventData.title}
            onChange={changeEvent}
          />
        </div>
        <br />
        <div className="mb-2">
          <label htmlFor="title" className="block text-base">
            Fecha del evento
          </label>
        </div>
        <div className="flex justify-center items-center">
          <input
            className="placeholder:text-black appearance-none border border-gray-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
            id="date"
            placeholder="Titulo del evento"
            name="date"
            type="date"
            value={EventData.date}
            onChange={changeEvent}
          />
        </div>
        <br />
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-2">
            <label htmlFor="Value" className="block text-base">
              Hora de inicio
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="Value" className="block text-base">
              Hora de Finalización
            </label>
          </div>
          <div className="flex justify-center items-center">
            <input
              className="placeholder:text-black appearance-none border border-gray-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="start"
              name="start"
              onChange={(e) => {
                let start = "";
                const hour = parseInt(e.target.value.split(":")[0]);
                const parseHour = hour > 12 ? hour - 12 : hour;

                if (e.target.value.split(":")[0] < "12") {
                  start = `${parseHour}:${e.target.value.split(":")[1]} AM`;
                }
                if (e.target.value.split(":")[0] > "12") {
                  start = `${parseHour}:${e.target.value.split(":")[1]} PM`;
                }
                setEventData((prevEvent) => {
                  return {
                    ...prevEvent,
                    duration: {
                      ...prevEvent.duration,
                      start,
                    },
                  };
                });
              }}
              type={"time"}
            />
          </div>
          <div className="flex justify-center items-center">
            <input
              className="placeholder:text-black appearance-none border border-gray-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
              id="end"
              name="end"
              type={"time"}
              onChange={(e) => {
                let end = "";
                const hour = parseInt(e.target.value.split(":")[0]);
                const parseHour = hour > 12 ? hour - 12 : hour;

                if (e.target.value.split(":")[0] < "12") {
                  end = `${parseHour}:${e.target.value.split(":")[1]} AM`;
                }
                if (e.target.value.split(":")[0] > "12") {
                  end = `${parseHour}:${e.target.value.split(":")[1]} PM`;
                }
                setEventData((prevEvent) => {
                  return {
                    ...prevEvent,
                    duration: {
                      ...prevEvent.duration,
                      end,
                    },
                  };
                });
              }}
            />
          </div>
        </div>

        <br />
        <div className="grid grid-cols-2 gap-2">
          <div className="mb-2">
            <label htmlFor="Value" className="block text-base">
              Tipo de evento
            </label>
          </div>
          <div className="mb-2">
            <label htmlFor="Value" className="block text-base">
              Plataforma
            </label>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative w-full">
              <select
                id="Value"
                name="value"
                value={TypeEvent}
                className="placeholder:text-black appearance-none border border-gray-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
                onChange={(e) => setTypeEvent(e.target.value)}
              >
                <option value={"true"}>Virtual</option>
                <option value={"false"}>Presencial</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          {TypeEvent === "true" ? (
            <div className="flex justify-center items-center">
              <div className="relative w-full">
                <select
                  id="location"
                  name="location"
                  value={EventData.location}
                  className="placeholder:text-black appearance-none border border-gray-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
                  onChange={(e) => {
                    setEventData((prevEvent) => {
                      return {
                        ...prevEvent,
                        location: e.target.value,
                      };
                    });
                  }}
                >
                  <option value="">Plataforma</option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <input
                className="placeholder:text-black appearance-none border border-gray-700 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-gray-300"
                id="location"
                name="location"
                placeholder="Ubicación del evento"
                type="text"
                onChange={changeEvent}
              />
            </div>
          )}
        </div>
        <br />
        <div className="mb-2">
          <label htmlFor="Value" className="block text-base">
            Información del evento
          </label>
        </div>
        <MarkdownEditor
          value={initialStateInfo}
          onChange={(value) => {
            setEventData((prevEvent) => {
              return {
                ...prevEvent,
                info: value,
              };
            });
          }}
        />
        <br />

        <div className="flex justify-end items-end">
          <div className="text-base text-center md:text-left">
            <button
              onClick={createEventSubmit}
              className="bg-white bg-pie text-xl text-black hover:text-white py-2 mt-6 px-4 border-l-2 border-t-2 border-r-4 border-b-4 border-black rounded inline-flex items-center ease-in-out"
            >
              <span className="ml-1">Publish this event</span>
            </button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default FormEvent;
