import React from "react";
import Image from "next/image";

function Projects({ refProp }) {
  return (
    <>
      <div className="projects-div" ref={refProp}>
        <h1>Proyectos</h1>
        <div className="projects-container">
          <div className="project">
            <div className="project-content">
              <div className="image-container">
                <Image
                  fill
                  alt="proy1"
                  src="https://images.unsplash.com/photo-1673251851064-c9bfddfd2b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
              <div className="text-container">
                <h1>Proyecto 1</h1>
                <p>
                  leo vel fringilla est ullamcorper eget nulla facilisi etiam
                  dignissim diam quis enim lobortis scelerisque fermentum dui
                  faucibus in ornare quam viverra orci sagittis eu volutpat odio
                  facilisis mauris sit
                </p>
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
                  <Image src="/logos/git_logo1.png" alt="Github" fill />
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

export default Projects;
