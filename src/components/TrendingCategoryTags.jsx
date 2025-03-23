
"use client";

import React from "react";

const TrendingCategoryTags = ({ categories }) => {
  return (
    <div className="flex gap-2.5 self-start text-sm text-black mt-2">
      {categories.map((category, index) => (
        <span
          key={index}
          className="px-2.5 py-1 bg-black bg-opacity-10 rounded-[44px]"
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default TrendingCategoryTags;
