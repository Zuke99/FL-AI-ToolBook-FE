import React from "react";

function CategoryTag({ text }) {
  return (
    <span className="px-3.5 py-2 bg-black bg-opacity-10 rounded-[44px]">
      {text}
    </span>
  );
}

export default CategoryTag;
