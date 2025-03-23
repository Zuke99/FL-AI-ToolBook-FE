"use client";
import React from "react";
import microsoftLogo from '../assets/images/microsoftLogo.svg'
import SearchInput from "./SearchInput";


const SponserSection = () => {
  const topSearchTags = [
    "Video Editor",
    "Image Generator",
    "Video Editor",
    "Video Editor",
    "Video Editor",
  ];

  return (
    <section className="rounded-none max-w-[690px] mx-auto mt-20 mb-5">
      <div className="flex flex-col items-center px-8 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-w-full text-2xl leading-none text-zinc-800 ">
      <h2 className="grow">Title Sponsor</h2>
      <img
        src={microsoftLogo}
        alt="Sponsor logo"
        className="object-contain shrink-0 max-w-full aspect-[4.65] w-[135px]"
      />
    </div>
        {/* <SponsorBadge
          sponsorText="Title Sponsor"
          logoUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/bfd0751a8942bec4543a9fdbf0ef296f328becf2?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
        /> */}

        <h1 
        // className="font-nunito h-11 text-center justify-start text-sky-600 text-5xl font-bold font-['Nunito'] leading-[48px] max-md:max-w-full"
        className="mt-3 text-center text-[#2487CE] text-[42px] font-nunito font-bold leading-[48px] break-words"

        >
          AI Tools, AI Agents & GPTs
        </h1>

        <p className="mt-9 text-xl leading-none text-center text-zinc-800 max-md:max-w-full">
          We help you find the best AI Tools & AI Agents as per your need
        </p>

        <SearchInput />
      </div>

      {/* <TopSearches tags={topSearchTags} /> */}
      <section className="flex flex-wrap gap-3 mt-6">
      <h3 className="grow self-center text-base leading-none text-zinc-800">
        Top Searches:
      </h3>
      <div className="flex flex-wrap flex-auto gap-1.5 text-xs leading-none text-black">
        {topSearchTags.map((tag, index) => (
            <button className="px-5 py-3 bg-black bg-opacity-10 rounded-[44px] text-xs leading-none text-black">
            {tag}
          </button>
        //   <SearchTag key={index} text={tag} />
        ))}
      </div>
    </section>
    </section>
  );
};

export default SponserSection;
