import Link from "next/link";
import PieAiLogo from "../components/Icons/PieAiLogo";

function Confirmation() {
  return (
    <div className="h-screen m-3 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <div className="text-2xl md:text-4xl font-extrabold">
          <span>Thank you for your interest in the community 🤎</span>
        </div>
        <br />
        <p className="text-base">
          Soon we will send you events or community updates.
        </p>

        <div className="text-base text-center md:text-left">
          <Link href="/" rel="noreferrer">
            <a>
              <div className="bg-white bg-pie cursor-pointer text-xl text-black hover:text-white py-2 mt-6 px-4 border-l-2 border-t-2 border-r-4 border-b-4 border-black rounded inline-flex items-center ease-in-out">
                <span className="ml-1">Go to Home</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PieAiLogo />
      </div>
    </div>
  );
}

export default Confirmation;
