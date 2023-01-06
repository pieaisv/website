import Head from "next/head";
import Newsletter from "../components/Newsletter";

function About() {
  const DOMAIN =
    process.env.NODE_ENV === "production"
      ? "https://www.pieaisv.com/about"
      : "http://localhost:3000";
  const title = "About | Pie & AI: San Salvador";
  const description =
    "We are a community of developers built in El Salvador, with the idea of being able to organize Artificial Intelligence events.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#FFB100" />
        <link rel="icon" href="/Pie & AI logo.png" type="image/png" />
        <meta property="og:url" content={DOMAIN} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={DOMAIN} />
        <meta name="twitter:creator" content="@pieaisv" />
        <meta name="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Head>
      <div className="m-3">
        <br />
        <br />
        <br />
        <br />
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold">About</h1>
          <div className="max-w-screen-md m-auto mt-8">
            <p className="text-xl">
              We are a community of developers built in El Salvador, with the
              idea of being able to organize Artificial Intelligence events.
            </p>
          </div>
          <div className="max-w-screen-md m-auto mt-8">
            <p className="text-xl">
              This with the idea of being able to meet more people who like AI,
              regardless of their level or if they are not from that
              technological area.
            </p>
          </div>
          <br />
        </div>
        <Newsletter />
      </div>
    </>
  );
}

export default About;
