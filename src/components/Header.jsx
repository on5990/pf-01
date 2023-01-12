import React from "react";

function Header({ refs }) {
  const { refAbout, refProjects, refTech, refContact } = refs;
  const goToAbout = () => {
    refAbout.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToProjects = () => {
    refProjects.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToTech = () => {
    refTech.current?.scrollIntoView({ behavior: "smooth" });
  };
  const goToContact = () => {
    refContact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <header>
        <nav>
          <ul>
            <li onClick={goToAbout}>Acerca de mí</li>
            <li onClick={goToProjects}>Proyectos</li>
            <li onClick={goToTech}>Tecnologías</li>
            <li onClick={goToContact}>Contáctame</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
