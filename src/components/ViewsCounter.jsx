import React from "react";

function ViewsCounter({ count, label, iconUrl }) {
  return (
    <div className="flex items-center">
      <img
        src={iconUrl}
        alt=""
        className="object-contain shrink-0 self-center w-4 aspect-[1.5]"
      />
      <span className="text-xs text-zinc-500">{count}</span>
      <span className="text-xs text-zinc-800">{label}</span>
    </div>
  );
}

export default ViewsCounter;
