"use client";
import React from "react";

function SubscribeForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-1.5 mt-4 max-w-full text-sm w-[298px]"
    >
      <input
        type="email"
        placeholder="Email Address"
        className="px-4 pt-2 pb-3.5 leading-none bg-white rounded-2xl border border-solid border-neutral-200 text-zinc-400 max-md:pr-5"
        required
      />
      <button
        type="submit"
        className="px-4 pt-2 pb-3.5 text-white whitespace-nowrap bg-sky-600 rounded-[100px]"
      >
        Subscribe
      </button>
    </form>
  );
}

export default SubscribeForm;
