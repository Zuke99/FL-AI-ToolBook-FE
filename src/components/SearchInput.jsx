"use client";
import React, { useState } from "react";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("Generate image from text");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor="search-input"
        className="self-start mt-10 ml-5 text-base leading-none text-zinc-500 max-md:ml-2.5"
      >
        I am looking for an AI to...{" "}
      </label>
      <div className="flex flex-wrap gap-5 justify-between self-stretch pl-8 mt-1.5 text-base leading-none bg-white border border-solid border-zinc-500 rounded-[30px] max-md:pl-5 max-md:max-w-full">
        <input
          id="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="my-auto py-4 bg-transparent outline-none text-zinc-500 "
          placeholder="Generate image from text"
        />
        <button
          onClick={handleSearch}
          className="px-5 py-4 text-white whitespace-nowrap bg-sky-600 rounded-[30px] max-md:px-5"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
