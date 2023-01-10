import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="about-div">
        <h1>Oscar Navarro</h1>
        <h2>Desarrollador de software</h2>
        <p>
          Soy un estudiante universitario de ingeniería informática, con un
          fuerte interés en el desarrollo web, y estoy motivado para aplicar mis
          conocimientos y habilidades en proyectos profesionales.
        </p>
        <p>
          Educación: USACH - Ingeniería de Ejecución en Computación e
          Informática
        </p>
        <button>
          <div className="icon-div">
            <Image src="/icons/blue-user.png" alt="user" fill />
          </div>
          <p>Descargar CV</p>
        </button>
      </div>
    </>
  );
}

export default About;
