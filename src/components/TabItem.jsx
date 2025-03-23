import React, { forwardRef } from "react";

const TabItem = forwardRef(({ name, isActive, onClick }, ref) => {
  return (
    <div ref={ref}>
      <button
        className={`text-base leading-4 cursor-pointer ${
          isActive ? "text-sky-600" : "text-black"
        }`}
        onClick={onClick}
        role="tab"
        aria-selected={isActive}
        aria-controls={`${name.toLowerCase().replace(/\s+/g, "-")}-panel`}
      >
        {name}
      </button>
    </div>
  );
});

TabItem.displayName = "TabItem";

export default TabItem;
