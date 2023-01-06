import type { NextPage } from "next";
import Head from "next/head";
import Ambassadors from "../components/Ambassadors";
import Faq from "../components/Faq";
import Newsletter from "../components/Newsletter";
import Presentation from "../components/Presentation";
import ShareMeet from "../components/ShareMeet";
import Sponsors from "../components/Sponsors";

const Home: NextPage = () => {
  // @ts-ignore
  const DOMAIN =
    process.env.NODE_ENV === "production"
      ? "https://www.pieaisv.com"
      : "http://localhost:3000";

  const title = "Pie & AI: San Salvador";
  const description =
    "AI meetings hosted independently by DeepLearning.AI Event Ambassadors";

  const parseLdJson = () => {
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(({ title, description }) => {
        return {
          "@type": "Question",
          name: title,
          acceptedAnswer: {
            "@type": "Answer",
            text: description,
          },
        };
      }),
    };
    return data;
  };
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
        <meta name="keywords" content="Pie & AI: San Salvador, Inteligencia Articifial, El Salvador, DeepLearning.AI, Pie & AI Event Ambassador" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(parseLdJson()) }}
        />
      </Head>
      <Presentation />
      <Sponsors />
      <ShareMeet />
      <Ambassadors />
      <Faq faqProps={faq} />
      <Newsletter />
    </>
  );
};
export default Home;

const faq = [
  {
    id: 1,
    title: "What is a Pie & AI?",
    description: `
      <p>
        Pie & AI is a series from
        <a
          href="https://www.deeplearning.ai/ambassador/"
          class="text-indigo-700 hover:underline cursor-pointer"
        >
          DeepLearning.AI
        </a>.<strong>
          AI meetings hosted independently by the global AI community.
        </strong> Events typically include conversations with world leaders,
        thought-provoking discussions, networking opportunities with your fellow
        learners, hands-on project practice, and cakes (or other desserts of
        your choice).
      </p>
    `,
  },
  {
    id: 2,
    title: "How can I be an ambassador?",
    description: `
      <p>
        The requirements are that you like to teach or organize AI events, click
        here to 
        <a
          href="https://www.deeplearning.ai/ambassador/"
          class="text-indigo-700 hover:underline cursor-pointer"
          target={"_blank"}
          rel="noreferrer"
        >
          apply now
        </a>
        .
      </p>
    `,
  },
  {
    id: 3,
    title: "What is San Salvador?",
    description: `<p>
        San Salvador is the capital of the country El Salvador, the Pie & AI are
        events in every city in the world.
      </p>
      `,
  },
  {
    id: 4,
    title: "How can I give a talk?",
    description: `
      <p>
        You can <strong>send a private message on Twitter or LinkedIn</strong>
        or you can write to the ambassadors and we will gladly schedule an event
        with you
      </p>
    `,
  },
];
