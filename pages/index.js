import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Tech from "../src/components/Tech";
import Contact from "../src/components/Contact";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  const refAbout = useRef(null);
  const refProjects = useRef(null);
  const refTech = useRef(null);
  const refContact = useRef(null);
  const refs = { refAbout, refProjects, refTech, refContact };
  return (
    <>
      <Head>
        <title>Oscar Navarro</title>
      </Head>
      <Header refs={refs} />
      <main>
        <About refProp={refAbout} />
        <Projects refProp={refProjects} data={data.projects} />
        <Tech refProp={refTech} data={data.techlist} />
        <Contact refProp={refContact} />
      </main>
    </>
  );
}
export async function getServerSideProps() {
  let data = await import("/data/info.json");
  data = JSON.stringify(data);
  data = JSON.parse(data);
  return {
    props: { data: data },
  };
}
