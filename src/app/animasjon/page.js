import Head from "next/head";
import CircleAnimation from "../../components/CircleAnimation.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Circle Animation</title>
        <meta name="description" content="Circle moving in a circular path" />
      </Head>

      <main>
        <h1>Circle in Circular Motion</h1>
        <CircleAnimation />
      </main>
    </div>
  );
}