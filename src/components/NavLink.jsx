import React from "react";

function NavLink({ text, isActive = false }) {
  return (
    <div className="flex flex-col self-stretch my-auto">
      <span className={isActive ? "font-bold text-sky-600" : ""}>{text}</span>
      {isActive && (
        <div className="flex shrink-0 self-center h-0.5 bg-sky-600 rounded w-[22px]" />
      )}
    </div>
  );
}

export default NavLink;
