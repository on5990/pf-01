import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Image from "next/image";
import Tech from "../src/components/Tech";

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
        <div className="contact-div">
          <h1>Contáctame</h1>
          <div className="content">
            <div className="form">
              <form>
                <label for="name">Nombre</label>
                <br />
                <input type="text" id="name" name="name"></input>
                <br />
                <label for="email">E-Mail</label>
                <br />
                <input type="text" id="email" name="email"></input>
                <br />
                <label for="message">Mensaje</label>
                <br />
                <textarea type="text" id="message" name="message"></textarea>
                <br />
                <div className="submit-div">
                  <input type="submit" value="Enviar" className="submit-btn" />
                </div>
              </form>
            </div>
            <div className="contact">
              <p>Contacto: on5990@gmail.com</p>
              <p>Ubicación: Santiago, Chile</p>
              <div className="links-div">
                <div className="logo-div">
                  <Image alt="LinkedIn" src="/logos/linkedin_logo.png" fill />
                </div>
                <div className="logo-div">
                  <Image alt="LinkedIn" src="/logos/git_logo2.png" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
