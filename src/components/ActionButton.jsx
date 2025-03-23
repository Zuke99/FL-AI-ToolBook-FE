import React from "react";

function ActionButton({ iconUrl, count, label, showCount = true }) {
  return (
    <div className="flex gap-1 px-2.5 py-1 bg-sky-600 rounded-xl">
      <img
        src={iconUrl}
        alt=""
        className="object-contain shrink-0 my-auto w-1.5 rounded-xl aspect-[0.86]"
      />
      {showCount && <span>{count}</span>}
      <span>{label}</span>
    </div>
  );
}

export default ActionButton;
