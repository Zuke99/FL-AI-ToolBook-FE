"use client";
import React from "react";

const StatButton = ({ icon, count, label }) => {
  return (
    <button className="flex flex-1 gap-1.5 items-start px-2.5 py-1.5 bg-sky-600 rounded-xl text-xs leading-tight text-white">
      <img
        src={icon}
        className="object-contain shrink-0 self-start w-2 aspect-square"
        alt=""
      />
      {count && <span>{count}</span>}
      <span className="self-stretch">{label}</span>
    </button>
  );
};

export default StatButton;
