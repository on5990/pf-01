import React from "react";
import Image from "next/image";

function Projects({ refProp, data }) {
  return (
    <>
      <div className="projects-div" ref={refProp}>
        <h1>Proyectos</h1>
        <div className="projects-container">
          {data.map((project) => {
            return <Project key={project.id} data={project} />;
          })}
        </div>
        <button className="see-more-btn">
          <div className="icon-div">
            <Image src="/icons/blue-arrow-down.png" alt="arrow" fill />
          </div>
          <p>Ver más</p>
        </button>
      </div>
    </>
  );
}
function Project({ data }) {
  return (
    <>
      <div className="project">
        <div className="project-content">
          <div className="image-container">
            <Image fill alt="proy1" src="/images/ex_project.png" />
          </div>
          <div className="text-container">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <div className="tags-container">
              <div className="tag">ReactJS</div>
              <div className="tag">NodeJS</div>
              <div className="tag">PostgreSQL</div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button>
            <div className="git-logo-div">
              <Image src={data.image} alt="Github" fill />
            </div>
            <p>Repositorio</p>
          </button>
          <button>
            <div className="eye-logo-div">
              <Image
                className="proy-image"
                src="/icons/eye.png"
                alt="Github"
                fill
              />
            </div>
            <p>Demo</p>
          </button>
        </div>
      </div>
    </>
  );
}
export default Projects;
