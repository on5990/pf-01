import React, { useEffect, useState } from "react";
import Image from "next/image";

function Projects({ refProp, data }) {
  const [shownProjects, setShownProjects] = useState([]);
  const [maxAmount, setMaxAmount] = useState(2);
  const [showSeemore, setShowSeeMore] = useState(false);
  const [showSeeLess, setShowSeeLess] = useState(false);
  const showMore = () => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAaa");
    setMaxAmount((prev) => {
      return prev + 2;
    });
  };
  const showLess = () => {
    setMaxAmount(2);
  };
  useEffect(() => {
    if (data && data.length <= maxAmount && data.length > 2) {
      setShowSeeLess(true);
      setShowSeeMore(false);
    } else if (data && data.length > maxAmount) {
      setShowSeeMore(true);
      setShowSeeLess(false);
    }
  }, [, maxAmount]);
  useEffect(() => {
    let counter = 1;
    const newList = [];
    data.map((proj) => {
      if (counter <= maxAmount) {
        newList.push(proj);
        counter = counter + 1;
      }
    });
    setShownProjects(newList);
  }, [maxAmount]);
  return (
    <>
      <div className="projects-div" ref={refProp}>
        <h1>Proyectos</h1>
        <div className="projects-container">
          {shownProjects.map((project) => {
            return <Project key={project.id} data={project} />;
          })}
        </div>
        {showSeemore && (
          <button onClick={showMore} className="btn">
            <div className="icon-div">
              <Image src="/icons/blue-arrow-down.png" alt="arrow" fill />
            </div>
            <p>Ver más</p>
          </button>
        )}
        {showSeeLess && (
          <button onClick={showLess} className="btn">
            <div className="icon-div">
              <Image src="/icons/blue-arrow-up.png" alt="arrow" fill />
            </div>
            <p>Ver menos</p>
          </button>
        )}
      </div>
    </>
  );
}
function Project({ data }) {
  const goToLink = (givenLink) => {
    console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHhhhhh");
    let newLink = document.createElement("a");
    newLink.href = givenLink;
    newLink.style.display = "none";
    newLink.target = "_blank";
    document.body.appendChild(newLink);
    newLink.click();
    document.body.removeChild(newLink);
  };
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
              {data.techUsed &&
                data.techUsed.map((item) => {
                  return <div className="tag">{item.name}</div>;
                })}
              {/* <div className="tag">ReactJS</div>
              <div className="tag">NodeJS</div>
              <div className="tag">PostgreSQL</div> */}
            </div>
          </div>
        </div>
        <div className="button-container">
          <button
          // onClick={goToLink(data.repoLink)}
          >
            <div className="git-logo-div">
              <Image src={data.image} alt="Github" fill />
            </div>
            <p>Repositorio</p>
          </button>
          <button
          // onClick={goToLink(data.demoLink)}
          >
            <div className="eye-logo-div">
              <Image
                className="proy-image"
                src="/icons/eye.png"
                alt="Demo"
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
