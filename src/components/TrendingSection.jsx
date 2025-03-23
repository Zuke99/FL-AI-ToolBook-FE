import React, { useState, useRef, useEffect } from "react";
import TabItem from "./TabItem";
import TrendingCard from "./TrendingCard";
import AIToolCard from "./AiToolCard";

const TrendingSection = () => {
    const [activeTab, setActiveTab] = useState("Top Rated");
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: "98px",
    transform: "translateX(0px)",
  });
  const tabRefs = useRef({});

  const tabs = [
    "Top Rated",
    "Most Upvoted",
    "Most Saved",
    "Most Reviewed",
    "Most Viewed",
    "Most Visited",
  ];

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    updateIndicator(tabName);
  };

  const updateIndicator = (tabName) => {
    const tabElement = tabRefs.current[tabName];
    if (tabElement) {
      const { offsetLeft, offsetWidth } = tabElement;
      setIndicatorStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
      });
    }
  };

  // Initialize indicator position
  useEffect(() => {
    updateIndicator(activeTab);
  }, [activeTab]);

  return (
    <div className='mx-10 mb-5'>
        <p className='text-[26px] text-[#303030] font-semibold mb-2'>Trending AIs</p>
        <div className="flex flex-col w-full">
      <div className="px-5 pt-28">
        <div className="flex flex-col w-full">
          <nav className="flex gap-8 text-base leading-4">
            {tabs.map((tab) => (
              <TabItem
                key={tab}
                name={tab}
                isActive={activeTab === tab}
                onClick={() => handleTabClick(tab)}
                ref={(el) => (tabRefs.current[tab] = el)}
              />
            ))}
          </nav>
          <div className="relative mt-2.5 w-full">
            <div className="w-full h-0.5 bg-zinc-300" />
            <div
              className="absolute left-0 -top-px h-1 bg-sky-600 rounded transition-all duration-300"
              style={indicatorStyle}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex w-full mt-2">
  <div className="w-4/5">
    <TrendingCard />
    <TrendingCard />
    <TrendingCard />
    <TrendingCard />
    <TrendingCard />
  </div>
  <div className="w-1/5">
    <AIToolCard />
    <AIToolCard />
  </div>
</div>

   
    </div>
  )
}

export default TrendingSection