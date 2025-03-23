"use client";

import React from "react";
import MetricsItem from "./MetricsItem";
import userIcon from '../assets/images/userIcon.svg'

const TrendingCardHeader = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between items-start w-full whitespace-nowrap max-md:max-w-full">
      <div className="flex gap-6 self-start">
        <div className="flex flex-col">
          <h2 className="self-start text-base font-bold leading-none text-zinc-800">
            DROP
          </h2>
          <div className="flex gap-2.5 mt-3 text-sm">
            <div className="flex items-center gap-1.5 text-zinc-800">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f4a1e0a8f127095d56def62ca296b2b8d7ce9e8?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
                alt="Star icon"
                className="object-contain shrink-0 self-center w-3 rounded-none aspect-square"
              />
              <span>4.5</span>
            </div>
            <MetricsItem
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/37f521dc528515214028b4ba5f20884c9661c929?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
              count="100"
              label="Reviews"
            />
            <MetricsItem
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/da41f637d7e304e5df3502ae078a1fa752267587?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
              count="1.2k"
              label="Views"
              iconClassName="w-3.5 aspect-[1.4]"
            />
            <MetricsItem
              iconSrc={userIcon}
              count="400"
              label="Visits"
              iconClassName="w-3.5 aspect-[1.4]"
            />
          </div>
        </div>
        
        {/* <div className="flex items-center gap-2 self-end mt-6 text-sm">
        <img
          src={userIcon}
          alt="Upvote icon"
          className="object-contain shrink-0 self-start w-2 aspect-square"
        />
          <span className="text-zinc-500">400</span>
          <span className="text-zinc-800">Visits</span>
        </div> */}
      </div>
      <div className="flex gap-1.5 self-end px-2.5 py-1.5 mt-7 text-xs leading-none text-white bg-sky-600 rounded-2xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/718afe4981e0d4c0e8daa28a68aacf917a2bf162?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
          alt="Upvote icon"
          className="object-contain shrink-0 self-start w-2 aspect-square"
        />
        <span>Upvoted</span>
      </div>
    </div>
  );
};

export default TrendingCardHeader;
