import React from 'react';

const ChevronDown = ({ transform }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform }} // Apply the transform style here
    >
      <g opacity="0.9">
        <path
          d="M15 8.3332L13.825 7.1582L10 10.9749L6.175 7.1582L5 8.3332L10 13.3332L15 8.3332Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default ChevronDown;

