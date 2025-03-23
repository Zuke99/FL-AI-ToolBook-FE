"use client";
import React from "react";
import FooterColumn from "./FooterColumn";
import SubscribeForm from "./SubscribeForm";

function Footer() {
  return (
    <footer className="rounded-none">
      <div className="flex flex-col items-center pt-12 pb-8 w-full bg-black shadow-[0px_4px_10px_rgba(0,0,0,0.05)] max-md:max-w-full">
        <div className="w-full max-w-[1309px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[51%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start w-full max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8afd757c1cb99ca8f92f6b68b48613fc803ab96b?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
                  alt="AI Toolbook Logo"
                  className="object-contain max-w-full aspect-[4.12] w-[173px]"
                />
                <p className="self-stretch mt-5 text-base leading-5 text-white">
                  We help you find the best AI tools & AI agents for you need
                </p>
                <div className="flex gap-2 mt-5 leading-none">
                  <h3 className="grow text-lg font-bold text-sky-600">
                    Contact Us:
                  </h3>
                  <p className="text-base text-white basis-auto">
                    hello@aitoolbook.ai
                  </p>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e1e2e72dd9e60f3aa67381a0118a84e7388963?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
                  alt="Social Media Icons"
                  className="object-contain mt-5 max-w-full aspect-[3.55] w-[110px]"
                />
                <h3 className="mt-5 text-lg font-bold leading-none text-sky-600">
                  Stay Updated
                </h3>
                <SubscribeForm />
              </div>
            </div>

            <FooterColumn
              title="AI Tools"
              className="ml-5 w-[15%] max-md:ml-0 max-md:w-full"
            >
              <p className="self-stretch mt-4">Newly Launched</p>
              <p className="mt-1.5">Most Popular</p>
              <p className="mt-1.5">Top Rated</p>
              <p className="mt-1.5">Most Upvoted</p>
              <p className="mt-1.5">Most Saved</p>
              <p className="self-stretch mt-1.5 max-md:mr-2">Most Reviewed</p>
              <p className="mt-1.5">Most Viewed</p>
              <p className="mt-1.5">Most Visited</p>
            </FooterColumn>

            <FooterColumn
              title="Top Categories"
              className="ml-5 w-[18%] max-md:ml-0 max-md:w-full"
            >
              <p className="mt-4">Categories 1</p>
              <p className="mt-1.5">Categories 2</p>
              <p className="mt-1.5">Categories 3</p>
              <p className="mt-1.5">Categories 4</p>
              <p className="mt-1.5">Categories 5</p>
              <p className="mt-1.5">Categories 6</p>
              <p className="mt-1.5">Categories 7</p>
              <p className="mt-1.5">Categories 8</p>
              <p className="mt-1.5">Categories 9</p>
              <p className="mt-1.5">Categories 10</p>
            </FooterColumn>

            <FooterColumn
              title="Quick Links"
              className="ml-5 w-[16%] max-md:ml-0 max-md:w-full"
            >
              <p className="mt-4">Submit an AI Tool</p>
              <p className="mt-3 max-md:mr-2.5">Promote A Tool</p>
              <p className="self-start mt-1.5">Blogs</p>
            </FooterColumn>
          </div>
        </div>

        <div className="flex self-stretch mt-28 w-full bg-white min-h-px shadow-[0px_4px_10px_rgba(0,0,0,0.05)] max-md:mt-10 max-md:max-w-full" />

        <div className="mt-8 text-base leading-none text-white max-md:max-w-full">
          © 2025 AI Toolbook. All right reserved. |{" "}
          <a href="#" className="underline text-[#2487ce]">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="underline text-[#2487ce]">
            Terms of Services
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
