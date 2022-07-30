import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="m-2 text-base">
      <div className="max-w-screen-lg m-auto">
        <div className="grid grid-cols-2">
          <div className="font-extrabold flex justify-center items-center">
            <Link href="/">Pie & AI: San Salvador</Link>
          </div>
          <div className="grid nav-grid-column">
            <div className="flex justify-center items-center">
              <Link href="/">Home</Link>
            </div>
            <div className="flex justify-center items-center">
              <Link href="/">About</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
