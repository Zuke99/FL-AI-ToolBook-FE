"use client";
import React from "react";

const ComparisionCard = ({ icon, title, description, ctaText, onClick }) => {
  return (
    <article className="flex flex-col mt-3 items-center p-8 text-center rounded-xl  w-[260px] max-md:w-[calc(50%_-_15px)] max-sm:w-full bg-gradient-to-br from-[#2487CE] to-[#124265]">
      <figure className="flex justify-center items-center mb-8 h-[50px] w-[50px] bg-white/20 rounded-full">
        <img
        src={icon}
        />
      </figure>
      <h3 className="mb-5 text-lg font-bold text-white font-nunito">{title}</h3>
      <p className="mb-5 text-sm leading-snug text-neutral-200 font-calibri">
        {description}
      </p>
      <button
        onClick={onClick}
        className="text-sm underline cursor-pointer text-white font-calibri hover:text-neutral-200 transition-colors"
      >
        {ctaText}
      </button>
    </article>
  );
};

export default ComparisionCard;
