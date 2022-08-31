import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="m-2 text-xl">
      <div className="max-w-screen-lg m-auto">
        <div className="grid grid-cols-2">
          <div className="font-extrabold flex justify-center items-center">
            <Link href="/">Pie & AI: San Salvador</Link>
          </div>
          <div className="grid nav-grid-column">
            <div className="flex justify-center items-center">
              <Link href="/">
                <a className="hover:underline">Home</a>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link href="/about">
                <a className="hover:underline">About</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
