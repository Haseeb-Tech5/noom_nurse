import React from "react";

const Practice2 = ({ hovered, pathData }) => (
  <svg
    width="50"
    height="46"
    viewBox="0 0 50 46"
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

export default Practice2;
