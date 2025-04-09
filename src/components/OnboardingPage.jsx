import React from "react";
import Onboard from "./Onboard";
import ClientRequirement from "./ClientRequirement";
import FormElement from "./FormElement";

const OnboardingPage = () => {
  return (
    <div className="flex gap-6 bg-[#F9FAFB]">
      <Onboard />
      <ClientRequirement />
      <FormElement />
    </div>
  );
};

export default OnboardingPage;
