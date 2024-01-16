import React from "react";

const Icon6 = ({ hovered, pathData }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={pathData}
      stroke={hovered ? "#ae9c7f" : "black"}
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Icon6;
