import Head from "next/head";
import MainScreen from "../components/MainScreen";

export default function Home() {
  return (
    <div className="font-Roboto max-h-screen h-screen">
      <Head>
        <title>ProNav Guide</title>
        <link rel="icon" href="/sprintray-icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="SprintRay ProNav Guide" />
        <meta
          property="og:description"
          content="An interactive guide to learning how navigate and use SprintRay products"
        />
        <meta property="og:image" content="/sprintray-icon.png" />
      </Head>

      <MainScreen />
    </div>
  );
}
