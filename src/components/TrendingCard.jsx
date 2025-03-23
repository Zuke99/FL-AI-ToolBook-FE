"use client";

import React from "react";
import TrendingCardHeader from "./TrendingCardHeader";
import TrendingCategoryTags from "./TrendingCategoryTags";

const TrendingCard = () => {
  const categories = [
    "Categories 1",
    "Categories 2",
    "Categories 3",
    "Categories 4",
    "Categories 5",
  ];

  return (
    <article className="rounded-none">
      <div className="flex flex-wrap gap-4 py-2 px-3 m-2 rounded-xl bg-neutral-100">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/777bb2ef584e1dc1a28945f37be34ad9f841fea0?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
          alt="Product thumbnail"
          className="object-contain shrink-0 rounded-xl aspect-square w-[75px]"
        />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <TrendingCardHeader />
          <TrendingCategoryTags categories={categories} />
        </div>
      </div>
    </article>
  );
};

export default TrendingCard;
