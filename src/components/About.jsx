import Image from "next/image";
import React from "react";

function About({ refProp }) {
  const handleClick = () => {
    // trigger download
    let link = document.createElement("a");
    link.href = "pdf/cv_oscar_navarro.pdf";
    link.download = "cv_oscar_navarro.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // open in another tab
    link = document.createElement("a");
    link.href = "pdf/cv_oscar_navarro.pdf";
    link.target = "_blank";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="about-div" ref={refProp}>
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
        <button onClick={handleClick}>
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
