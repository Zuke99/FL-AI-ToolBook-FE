"use client";

import React from "react";

const MetricsItem = ({
  iconSrc,
  count,
  label,
  iconClassName = "w-3 aspect-square",
}) => {
  return (
    <div className="flex gap-1.5">
      <img
        src={iconSrc}
        alt={`${label} icon`}
        className={`object-contain shrink-0 my-auto h-3 ${iconClassName}`}
      />
      <span className="text-zinc-500">{count}</span>
      <span className="text-zinc-800">{label}</span>
    </div>
  );
};

export default MetricsItem;
