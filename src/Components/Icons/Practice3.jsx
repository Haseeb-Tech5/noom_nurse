import React from "react";

const Practice3 = ({ hovered, pathData }) => (
  <svg
    width="54"
    height="39"
    viewBox="0 0 54 39"
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

export default Practice3;
