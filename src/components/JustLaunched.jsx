import React from 'react'
import StatsCard from './StatsCard'

const JustLaunched = () => {
 const cardsData = [
        {
          id: 1,
          name: "AI Tool 1",
          views: "1.2k",
          visits: "400",
          savedCount: "1.4k",
          description: "An amazing AI tool for content generation.",
          imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
        },
        {
          id: 2,
          name: "AI Tool 2",
          views: "980",
          visits: "300",
          savedCount: "1.1k",
          description: "AI tool for automated coding assistance.",
          imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
        },
        {
          id: 3,
          name: "AI Tool 3",
          views: "1.5k",
          visits: "500",
          savedCount: "1.7k",
          description: "AI-driven image generation tool.",
          imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
        },
        {
          id: 4,
          name: "AI Tool 4",
          views: "2.0k",
          visits: "600",
          savedCount: "2.1k",
          description: "AI tool for voice cloning and editing.",
          imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
        },
        {
            id: 5,
            name: "AI Tool 4",
            views: "2.0k",
            visits: "600",
            savedCount: "2.1k",
            description: "AI tool for voice cloning and editing.",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
          },
          {
            id: 6,
            name: "AI Tool 4",
            views: "2.0k",
            visits: "600",
            savedCount: "2.1k",
            description: "AI tool for voice cloning and editing.",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
          },
          {
            id: 7,
            name: "AI Tool 4",
            views: "2.0k",
            visits: "600",
            savedCount: "2.1k",
            description: "AI tool for voice cloning and editing.",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
          },
          {
            id: 8,
            name: "AI Tool 4",
            views: "2.0k",
            visits: "600",
            savedCount: "2.1k",
            description: "AI tool for voice cloning and editing.",
            imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/97959d3a8cfa1d775da591817185263573fa4a69?placeholderIfAbsent=true&apiKey=e36e175e43754e0299b4050c1061cdb5"
          }
      ];
      
  return (
    <section>
    <div className='flex flex-col justify-start mx-10 mt-6 py-3'>
        <p className='text-[26px] text-[#303030] font-semibold mb-2'>Just Launched</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card) => (
            <StatsCard key={card.id} card={card} />
        ))}
        </div>
    </div>
    <div className='flex justify-center mb-2 w-full'>
    <div className='flex items-center text-blue-500 gap-1 cursor-pointer'>
        <p>Show more</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path d="M5 6L10 1.1417L8.825 0L5 3.7085L1.175 0L0 1.1417L5 6Z" fill="#2487CE"/>
        </svg>
    </div>
    </div>

    </section>
  )
}

export default JustLaunched