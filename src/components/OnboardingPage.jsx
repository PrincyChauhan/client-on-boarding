import React from "react";
import Onboard from "./Onboard";
import ClientRequirement from "./ClientRequirement";

const OnboardingPage = () => {
  return (
    <div className="flex gap-6 bg-[#F9FAFB]">
      <Onboard />
      <ClientRequirement />
    </div>
  );
};

export default OnboardingPage;
