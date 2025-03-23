import React from "react";
import ArticleCard from "./ArticleCard";


const ExploreSection = () => {
  // Sample article data - in a real application, this would likely come from an API or props
  const articles = [
    {
      id: 1,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45b4fc10601b78863a614c35458df07251099bc2",
      title:
        "The Importance of 24/7 AI-Powered Customer Support in E-Commerce...", 
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard...",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45b4fc10601b78863a614c35458df07251099bc2",
      title:
        "The Importance of 24/7 AI-Powered Customer Support in E-Commerce...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard...",
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45b4fc10601b78863a614c35458df07251099bc2",
      title:
        "The Importance of 24/7 AI-Powered Customer Support in E-Commerce...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard...",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45b4fc10601b78863a614c35458df07251099bc2",
      title:
        "The Importance of 24/7 AI-Powered Customer Support in E-Commerce...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard...",
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45b4fc10601b78863a614c35458df07251099bc2",
      title:
        "The Importance of 24/7 AI-Powered Customer Support in E-Commerce...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard...",
    },
    {
      id: 6,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/45b4fc10601b78863a614c35458df07251099bc2",
      title:
        "The Importance of 24/7 AI-Powered Customer Support in E-Commerce...",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry standard...",
    },
  ];

  return (
    <section className="px-16 py-12 bg-white max-sm:px-5 max-sm:py-8">
      <h2 className="mb-8 text-2xl font-bold leading-9 text-zinc-800 max-sm:text-2xl max-sm:leading-8">
        Explore
      </h2>
      <div className="grid gap-10 grid-cols-[repeat(3,1fr)] max-md:gap-8 max-md:grid-cols-[repeat(2,1fr)] max-sm:gap-10 max-sm:grid-cols-[1fr]">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            imageUrl={article.imageUrl}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8 cursor-pointer">
      <button className="flex items-center text-sky-600">
        <span className="text-lg underline font-['Calibri']">Show more</span>
        {/* <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <path
            d="M5 6L10 1.14167L8.825 0L5 3.70851L1.175 0L0 1.14167L5 6Z"
            fill="#2487CE"
          />
        </svg> */}
      </button>
    </div>
    </section>
  );
};

export default ExploreSection;
