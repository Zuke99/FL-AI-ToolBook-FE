
"use client";
import React from "react";
import ComparisionCard from "./ComparisionCard";
import bulbIcon from '../assets/images/bulbIcon.svg'

const cardsData = [
  {
    id: 1,
    icon: "ti-bulb",
    title: "In-depth Comparision",
    description:
      "Narrow down your options. Compare and evaluate features, pricing, and ratings",
    ctaText: "Compare tools side-by-side",
  },
  {
    id: 2,
    icon: "ti-bulb",
    title: "In-depth Comparision",
    description:
      "Narrow down your options. Compare and evaluate features, pricing, and ratings",
    ctaText: "Compare tools side-by-side",
  },
  {
    id: 3,
    icon: "ti-bulb",
    title: "In-depth Comparision",
    description:
      "Narrow down your options. Compare and evaluate features, pricing, and ratings",
    ctaText: "Compare tools side-by-side",
  },
  {
    id: 4,
    icon: "ti-bulb",
    title: "In-depth Comparision",
    description:
      "Narrow down your options. Compare and evaluate features, pricing, and ratings",
    ctaText: "Compare tools side-by-side",
  },
];

const ComparisionCards = () => {
  return (
    <section className="flex gap-5 justify-center items-center p-5 bg-slate-100 min-h-[390px] max-md:flex-wrap max-md:gap-4 max-sm:flex-col max-sm:gap-4">
      {cardsData.map((card) => (
        <ComparisionCard
          key={card.id}
          icon={bulbIcon}
          title={card.title}
          description={card.description}
          ctaText={card.ctaText}
          onClick={() => console.log(`Clicked on card ${card.id}`)}
        />
      ))}

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Calibri:wght@400&display=swap");

        .font-nunito {
          font-family: "Nunito", sans-serif;
        }

        .font-calibri {
          font-family: "Calibri", "Segoe UI", sans-serif;
        }
      `}</style>
    </section>
  );
};

export default ComparisionCards;
