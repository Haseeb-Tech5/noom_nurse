// Icon2.jsx
import React from "react";

const Icon2 = ({ hovered, pathData }) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
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

export default Icon2;
