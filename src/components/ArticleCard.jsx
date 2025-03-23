import React from "react";
// import ArrowIcon from "./ArrowIcon";

const ArticleCard = ({ imageUrl, title, description }) => {
  return (
    <article className="flex flex-col max-md:w-full max-sm:w-full">
      <img
        src={imageUrl}
        alt=""
        className="object-cover mb-5 w-full rounded-xl h-[230px] max-sm:h-[200px]"
      />
      <h3 className="mb-5 text-lg font-bold leading-6 text-zinc-800">
        {title}
      </h3>
      <p className="mb-6 text-lg text-zinc-800">{description}</p>
      <button className="flex items-center text-lg leading-5 text-sky-600 cursor-pointer">
        <span>Read More</span>
        {/* <ArrowIcon /> */}
      </button>
    </article>
  );
};

export default ArticleCard;
