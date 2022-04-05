import Head from "next/head";
import MainScreen from "../components/MainScreen";

export default function Home() {
  return (
    <div className="font-Roboto max-h-screen h-screen">
      <Head>
        <title>ProNav Tailwind</title>
        <link rel="icon" href="/sprintray-icon.png" />
      </Head>

      <MainScreen />
    </div>
  );
}
