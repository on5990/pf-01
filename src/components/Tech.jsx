import React from "react";
import Image from "next/image";

function Tech() {
  return (
    <>
      <div className="tech-div">
        <h1>Tecnologías</h1>
        <ul className="tech-ul">
          <li title="JavaScript">
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
          </li>
        </ul>
      </div>
    </>
  );
}

export default Tech;
