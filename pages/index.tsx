import type { NextPage } from "next";
import Head from "next/head";
import Ambassadors from "./components/Ambassadors";
import Faq from "./components/Faq";
import Presentation from "./components/Presentation";

const Home: NextPage = () => {
  const DOMAIN =
    process.env.NODE_ENV === "production" ? "https://www.pieaisv.com" : "";
  return (
    <>
      <Head>
        <title>Pie & AI San Salvador</title>
        <meta
          name="description"
          content="Customize your README.md file with ready-to-use sections in a simple way with the web editor"
        />
        <meta name="theme-color" content="#8609C9" />
        <link
          rel="icon"
          href={DOMAIN + "/Pie%20&%20AI%20logo.png"}
          type="image/png"
        />

        <meta property="og:url" content={DOMAIN} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pie & AI: San Salvador" />
        <meta
          property="og:description"
          content="AI meetings hosted independently by DeepLearning.AI Event Ambassadors"
        />
        <meta
          property="og:image"
          content={DOMAIN + "/Pie%20&%20AI%20logo.png"}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pieaisv" />
        <meta name="twitter:creator" content="@pieaisv" />
        <meta name="twitter:title" content="Pie & AI: San Salvador" />
        <meta
          property="twitter:description"
          content="AI meetings hosted independently by DeepLearning.AI Event Ambassadors"
        />
        <meta
          name="twitter:image"
          content={DOMAIN + "/Pie%20&%20AI%20logo.png"}
        />
      </Head>
      <Presentation />
      <br />
      <br />
      <br />
      <br />
      <Ambassadors />
      <Faq />
    </>
  );
};

export default Home;
