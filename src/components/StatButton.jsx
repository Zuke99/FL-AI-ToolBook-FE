"use client";
import React from "react";

const StatButton = ({ icon, count, label }) => {
  return (
    <button className="flex font-normal flex-1 gap-1.5 items-center px-3 py-1.5 bg-sky-600 rounded-xl text-xs leading-tight text-white">
      <img
        src={icon}
        className="object-contain shrink-0 self-center w-3 aspect-square"
        alt=""
      />
      {count && <span>{count}</span>}
      <span className="self-stretch">{label}</span>
    </button>
  );
};

export default StatButton;
