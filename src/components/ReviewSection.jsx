import React from "react";
import AiImage from '../assets/images/AiImage.svg'

function ReviewSection() {
  return (
    <section className="flex justify-center w-full bg-slate-100 min-h-[500px]">
      <div className="flex justify-between px-20 py-20 w-full max-w-[1440px] max-md:px-10 max-sm:px-5 max-sm:py-10">
        <div className="max-w-[610px]">
          
          <h1 className="mb-28 text-5xl font-bold leading-10 text-zinc-800 max-md:text-4xl max-md:leading-10 max-sm:mb-16 max-sm:text-3xl max-sm:leading-10">
            Using an AI?
          </h1>
          
          <p className="mb-7 text-2xl leading-8 text-zinc-800 max-md:text-2xl max-md:leading-7 max-sm:text-xl max-sm:leading-7">
            Helps our millions of users to make the right choice
          </p>
         
          <p className="text-2xl leading-8 text-zinc-800 max-md:text-2xl max-md:leading-7 max-sm:text-xl max-sm:leading-7">
            Hello
          </p>
          
          <div className="inline-block mt-6">
            <button
              className="px-6 py-3 text-2xl leading-6 bg-sky-600 hover:bg-sky-700 duration-200 cursor-pointer rounded-[30px] text-slate-50"
            >
              Write a review
            </button>
          </div>
        </div>
        <div>
            <img 
            src={AiImage}
             />
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
