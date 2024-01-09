// Icon1.jsx
import React from "react";

const Icon1 = ({ hovered, pathData }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={pathData} fill={hovered ? "#ae9c7f" : "black"} />
  </svg>
);

export default Icon1;
