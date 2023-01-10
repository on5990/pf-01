import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Oscar Navarro</title>
      </Head>
      <header>
        <nav>
          <ul>
            <li>Acerca de mí</li>
            <li>Proyectos</li>
            <li>Tecnologías</li>
            <li>Contáctame</li>
          </ul>
        </nav>
      </header>
      <main></main>
    </>
  );
}
