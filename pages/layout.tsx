import Navbar from "../components/Navbar";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer className="text-base text-center">
        Created with 🤎 by Pie & AI San Salvador.
      </footer>
      <br />
    </>
  );
}
