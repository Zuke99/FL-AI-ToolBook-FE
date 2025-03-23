"use client";
import React from "react";

const StatsDisplay = ({ icon, count, label }) => {
  return (
    <div className="flex gap-1.5">
      {icon && (
        <img
          src={icon}
          className="object-contain shrink-0 self-start aspect-[1.45] w-[13px]"
          alt=""
        />
      )}
      <span className="text-xs text-zinc-500">{count}</span>
      <span className="text-xs text-zinc-800">{label}</span>
    </div>
  );
};

export default StatsDisplay;
