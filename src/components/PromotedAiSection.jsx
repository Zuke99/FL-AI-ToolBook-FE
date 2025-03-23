import React from 'react'
import AIToolCard from './AiToolCard'

const PromotedAiSection = () => {
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
        {
            id: 5,
            icon: "ti-bulb",
            title: "In-depth Comparision",
            description:
              "Narrow down your options. Compare and evaluate features, pricing, and ratings",
            ctaText: "Compare tools side-by-side",
          },
      ];
    return (
    <div className='flex flex-col justify-start bg-[#f6f6f6] min-h-[390px] max-md:flex-wrap max-md:gap-4 max-sm:flex-col max-sm:gap-4 p-8'>
        <p className='text-[26px] text-[#303030] font-semibold mb-4'>Promoted AIs</p>
       <section className="flex gap-6  items-center  ">
    
    
    {cardsData.map((card) => (
        <div className='m-2'>
          <AIToolCard/>
        </div>
      
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
    </div>
    
  )
}

export default PromotedAiSection