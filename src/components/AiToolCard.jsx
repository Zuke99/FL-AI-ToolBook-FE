"use client";
import React from "react";
import ViewsCounter from "./ViewsCounter";
import ActionButton from "./ActionButton";
import StatButton from "./StatButton";
import userIcon from '../assets/images/userIcon.svg';
import viewsIcon from '../assets/images/viewsIcon.svg';
import savedIcon from '../assets/images/savedIcon.svg';
import upvoteicon from '../assets/images/upvoteicon.svg';
function AIToolCard() {
  return (
    <article className="rounded-none max-w-60 mb-3">
      <div className="pb-5 w-full rounded-xl bg-slate-100 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/644de03e3eb8c1e05ac3911299d6649a9cff676d?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
          alt="AI Tool"
          className="object-contain w-full rounded-xl aspect-[1.72]"
        />
        <div className="flex flex-col items-start px-2 mt-5 w-full">
          <h2 className="text-lg font-bold leading-none text-zinc-800">
            AI Tool Name
          </h2>
          <div className="flex gap-2">
                  <div className="flex justify-start flex-col gap-1 w-full items-center">
                  <div className="flex font-normal gap-1 items-center self-start mt-4 whitespace-nowrap">
                    <img
                      src={viewsIcon}
                      className="object-contain shrink-0 self-center aspect-[1.45] w-[13px]"
                      alt=""
                    />
                    <span className="text-xs text-zinc-500">1.2k</span>
                    <span className="text-xs text-zinc-800">Views</span>
                  </div>
                  <StatButton
                icon={savedIcon}
                count="1.4k"
                label="Saved"
              />
                 
                  </div>
                 <div className="flex justify-start flex-col gap-1 items-center w-full">
              
              <div className="flex font-normal gap-1 items-center self-start mt-4 whitespace-nowrap">
                <img
                      src={userIcon}
                      className="object-contain shrink-0 self-center aspect-[1.45] w-[13px]"
                      alt=""
                    />
                <span className=" text-xs text-zinc-500">400</span>
                <span className=" text-xs text-zinc-800">
                Visits
              </span>
                </div>
              <StatButton
                icon={upvoteicon}
                label="Upvoted"
              />
                </div>
                  </div>

        
          <p className="self-stretch mt-4 text-xs text-zinc-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
      </div>
    </article>
  );
}

export default AIToolCard;
