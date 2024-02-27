import React from "react";

const IconReliability = ({ hovered, pathData }) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="74"
    height="74"
    x="0"
    y="0"
    viewBox="0 0 74 74"
    style={{ enableBackground: "new 0 0 74 74" }}
    xmlSpace="preserve"
  >
    <g>
      <path
        d={pathData}
        fill={hovered ? "#ae9c7f" : "black"}
        opacity="1"
        data-original="#000000"
        className=""
      ></path>
    </g>
  </svg>;
};

export default IconReliability;
