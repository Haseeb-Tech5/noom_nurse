import React from "react";

const Practice1 = ({ hovered, pathData }) => (
  <svg
    width="39"
    height="51"
    viewBox="0 0 39 51"
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

export default Practice1;
