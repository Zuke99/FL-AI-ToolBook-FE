"use client";
import React from "react";
import StatButton from "./StatButton";
import StatsDisplay from "./StatsDisplay";

const StatsCard = () => {
  return (
    <article className="rounded-none mb-2">
      <div className="flex flex-col p-3 w-full rounded-xl  bg-neutral-100 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex gap-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
            className="object-contain shrink-0 rounded-xl aspect-square w-[95px]"
            alt="AI Tool"
          />
          <div className="self-start">
            <div className="flex gap-1.5">
              <div className="flex gap-px">
                <div className="flex flex-col w-full">
                  <h2 className="text-lg font-bold leading-none text-zinc-800">
                    AI Tool Name
                  </h2>
                  <div className="flex gap-1.5 self-start mt-4 whitespace-nowrap">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea0f3ca35bc093996503d3e75d05fd4bc78fe36d?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
                      className="object-contain shrink-0 self-start aspect-[1.45] w-[13px]"
                      alt=""
                    />
                    <span className="text-xs text-zinc-500">1.2k</span>
                    <span className="text-xs text-zinc-800">Views</span>
                  </div>
                </div>
                <span className="self-end mt-7 text-xs text-zinc-500">400</span>
              </div>
              <span className="self-end mt-7 text-xs text-zinc-800">
                Visits
              </span>
            </div>
            <div className="flex gap-6 mt-3 text-xs leading-tight text-white whitespace-nowrap">
              <StatButton
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7760e4dbf32bd07363905c22e0f7965792bec118?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
                count="1.4k"
                label="Saved"
              />
              
              <StatButton
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/771d1247702cc9c7475ff83620a3a93ef20fdb31?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
                label="Upvoted"
              />
            </div>
            <div className="flex gap-5 justify-between mt-2 whitespace-nowrap">
              <StatsDisplay
                icon="https://cdn.builder.io/api/v1/image/assets/TEMP/ea0f3ca35bc093996503d3e75d05fd4bc78fe36d?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
                count="1.2k"
                label="Views"
              />
              <StatsDisplay count="400" label="Visits" />
            </div>
          </div>
        </div>
        <p className="self-start mt-4 text-xs text-zinc-800">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>
    </article>
  );
};

export default StatsCard;
