"use client";
import React from "react";
import StatButton from "./StatButton";
import StatsDisplay from "./StatsDisplay";
import smallthumbnail from "../assets/images/smallthumbnail.svg";
import viewsIcon from "../assets/images/viewsIcon.svg";
import savedIcon from "../assets/images/savedIcon.svg";
import upvoteicon from "../assets/images/upvoteIcon.svg";
import userIcon from "../assets/images/userIcon.svg";

const StatsCard = () => {
  return (
    <article className="rounded-none mb-2">
      <div className="flex flex-col p-3 w-full rounded-xl  bg-neutral-100 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
        <div className="flex gap-5">
          <img
            src={smallthumbnail}
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
                      <StatButton icon={savedIcon} count="1.4k" label="Saved" />
                    </div>
                    <div className="flex justify-start flex-col gap-1 items-center w-full">
                      <div className="flex font-normal gap-1 items-center self-start mt-4 whitespace-nowrap">
                        <img
                          src={userIcon}
                          className="object-contain shrink-0 self-center aspect-[1.45] w-[13px]"
                          alt=""
                        />
                        <span className=" text-xs text-zinc-500">400</span>
                        <span className=" text-xs text-zinc-800">Visits</span>
                      </div>
                      <StatButton icon={upvoteicon} label="Upvoted" />
                    </div>
                  </div>
                </div>
              </div>
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
