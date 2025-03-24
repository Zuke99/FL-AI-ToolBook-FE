import React from "react";
import Header from "../components/Header";
import SponserSection from "../components/SponserSection";
import ComparisionCards from "../components/ComparisionCards";
import JustLaunched from "../components/JustLaunched";
import TrendingSection from "../components/TrendingSection";
import PromotedAiSection from "../components/PromotedAiSection";
import UseCasesSection from "../components/UseCasesSection";
import ToolsAndAgentsSection from "../components/ToolsAndAgentsSection";
import ReviewSection from "../components/ReviewSection";
import ExploreSection from "../components/ExploreSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SponserSection />
      <ComparisionCards />
      <JustLaunched />
      <TrendingSection />
      <PromotedAiSection />
      <UseCasesSection />
      <ToolsAndAgentsSection />
      <ReviewSection />
      <ExploreSection />
      <Footer />
    </div>
  );
};

export default Home;
