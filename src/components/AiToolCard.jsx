"use client";
import React from "react";
import ViewsCounter from "./ViewsCounter";
import ActionButton from "./ActionButton";

function AIToolCard() {
  return (
    <article className="rounded-none max-w-60 mb-3">
      <div className="pb-5 w-full rounded-xl bg-slate-100 shadow-[0px_4px_10px_rgba(0,0,0,0.05)]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/644de03e3eb8c1e05ac3911299d6649a9cff676d?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
          alt="AI Tool"
          className="object-contain w-full rounded-xl aspect-[1.72]"
        />
        <div className="flex flex-col items-start px-5 mt-5 w-full">
          <h2 className="text-lg font-bold leading-none text-zinc-800">
            AI Tool Name
          </h2>

          <div className="flex gap-5 mt-4 whitespace-nowrap">
            <ViewsCounter
              count="1.2k"
              label="Views"
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e61e1465487aa2909ceeab5c3450519033b2d119?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
            />
            <div className="flex gap-1 self-start text-xs">
              <span className="grow text-zinc-500">400</span>
              <span className="text-zinc-800">Visits</span>
            </div>
          </div>

          <div className="flex gap-5 mt-2.5 text-xs leading-tight text-white whitespace-nowrap">
            <ActionButton
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/7aace61d0a3e57e771b655c06e087cf31651bc03?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
              count="1.4k"
              label="Saved"
            />
            <ActionButton
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/718afe4981e0d4c0e8daa28a68aacf917a2bf162?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
              label="Upvoted"
              showCount={false}
            />
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
