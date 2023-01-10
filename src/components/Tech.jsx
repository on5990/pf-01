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
          {/* <li title="JavaScript">
            <div className="image-container">
              <Image fill alt="JavaScript" src="/logos/js_logo.png" />
            </div>
          </li>
          <li title="JavaScript">
            <div className="image-container">
              <Image fill alt="JavaScript" src="/logos/html_logo.png" />
            </div>
          </li>
          <li title="JavaScript">
            <div className="image-container">
              <Image fill alt="JavaScript" src="/logos/css_logo.png" />
            </div>
          </li>
          <li title="JavaScript">
            <div className="image-container">
              <Image fill alt="JavaScript" src="/logos/node_logo.png" />
            </div>
          </li>
          <li title="JavaScript">
            <div className="image-container">
              <Image fill alt="JavaScript" src="/logos/exp_logo2.png" />
            </div>
          </li>
          <li title="JavaScript">
            <div className="image-container">
              <Image fill alt="JavaScript" src="/logos/react_logo.png" />
            </div>
          </li>
          <li title="JavaScript">
            <div className="image-container">
              <Image fill alt="JavaScript" src="/logos/psql_logo.png" />
            </div>
          </li>
          <li title="JavaScript">
            <div className="image-container">
              <Image fill alt="JavaScript" src="/logos/sequelize_logo.png" />
            </div>
          </li> */}
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
