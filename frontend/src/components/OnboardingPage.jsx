import React from "react";
import Onboard from "./Onboard";
import ClientRequirement from "./ClientRequirement";
import FormElement from "./FormElement";
import { FormProvider } from "./FormContext";
import Breadcrumb from "./Breadcrumb"; //
const OnboardingPage = () => {
  return (
    <FormProvider>
      <Breadcrumb />
      <div className="flex gap-6 bg-[#F9FAFB]">
        <Onboard />
        <ClientRequirement />
        <FormElement />
      </div>
    </FormProvider>
  );
};

export default OnboardingPage;
