import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Oscar Navarro</title>
      </Head>
      <Header />
      <main>
        <div className="about">
          <h1>Oscar Navarro</h1>
          <h2>Desarrollador de software</h2>
          <p>
            Soy un estudiante universitario de ingeniería informática, con un
            fuerte interés en el desarrollo web, y estoy motivado para aplicar
            mis conocimientos y habilidades en proyectos profesionales.
          </p>
          <p>
            Educación: USACH - Ingeniería de Ejecución en Computación e
            Informática
          </p>
          <button>Descargar CV</button>
        </div>
      </main>
    </>
  );
}
