// Icon2.jsx
import React from "react";

const Icon2 = ({ hovered, pathData }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="60"
    height="60"
    x="0"
    y="0"
    viewBox="0 0 396.204 396.204"
    style={{ enableBackground: "new 0 0 60 60" }}
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
  </svg>
);

export default Icon2;
