import React from "react";
import Image from "next/image";

function Tech({ refProp, data }) {
  return (
    <>
      <div className="tech-div" ref={refProp}>
        <h1>Tecnologías</h1>
        <ul className="tech-ul">
          {data.map((tech) => {
            return <Item key={tech.name} data={tech} />;
          })}
        </ul>
      </div>
    </>
  );
}
function Item({ data }) {
  return (
    <>
      <li title={data.name}>
        <div className="image-container">
          <Image fill alt={data.name} src={data.logo} />
        </div>
      </li>
    </>
  );
}
export default Tech;
