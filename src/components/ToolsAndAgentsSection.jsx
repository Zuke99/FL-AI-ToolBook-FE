import React, { useState, useRef, useEffect } from "react";
import TabItem from "./TabItem";
import TrendingCard from "./TrendingCard";
import AIToolCard from "./AiToolCard";

const ToolsAndAgentsSection = () => {
    const [activeTab, setActiveTab] = useState("Top Rated");
    const [indicatorStyle, setIndicatorStyle] = useState({
      width: "100px",
      transform: "translateX(0px)",
    });
    const tabRefs = useRef({});
    const tabs = [
        "Chatbots",
        "Productivity AI Tools",
        "Content AI Tools",
        "Image AI Tools",
        "Video AI Tools",
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
    <div className='p-10'>
         <p className='text-[26px] text-[#303030] font-semibold mb-5'>Popular AI Tools & Agents</p>
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
        <div className="flex w-full gap-2 mt-2">
  <div className="w-4/5">
    <TrendingCard />
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

export default ToolsAndAgentsSection