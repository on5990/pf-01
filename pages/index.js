import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Tech from "../src/components/Tech";
import Contact from "../src/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Oscar Navarro</title>
      </Head>
      <Header />
      <main>
        <About />
        <Projects />
        <Tech />
        <Contact />
      </main>
    </>
  );
}
