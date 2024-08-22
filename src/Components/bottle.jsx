import React from "react";
import "./bottle.css";

import Rock from "./images/rock1.png";

const bottle = () => {
  return (
    <>
      <div className="banner">
        <div className="banner">
          <div className="product">
            <div className="soda soda1"></div>

            <div className="soda soda2"></div>
          </div>
        </div>

        <div className="rock">
          <img src={Rock} />
        </div>
      </div>
    </>
  );
};

export default bottle;
