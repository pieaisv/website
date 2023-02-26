import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import Footer from "../components/Footer";
interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
