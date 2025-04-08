import React from "react";
import { FaPlus } from "react-icons/fa6";

const Onboard = () => {
  const steps = [
    "Clients Requirements",
    "Setup Client Account",
    "Configure Email for Client",
    "Setup Client Portal Access",
    "Document Collection",
    "Performing Security Audit",
    "Welcoming Call",
    "Hiring",
  ];
  return (
    <div className="w-[340px] h-[2092px] bg-white p-4 border border-[#EAECF0] rounded-md">
      <h2 className="text-sm font-semibold text-[#475467]">ONBOARDING STEPS</h2>

      <ol className="space-y-3 mt-3">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-sm font-medium text-gray-500 mt-2">
              {index + 1}.
            </span>
            <button
              className={`w-full text-left text-sm px-3 py-2 font-semibold rounded-md border 
              ${
                index === 0
                  ? "border-[#7F56D9] text-[#7F56D9] bg-[#F9F5FF] shadow-sm"
                  : "border-[#D0D5DD] text-[#344054] bg-white"
              }`}
            >
              {step}
            </button>
          </li>
        ))}
      </ol>
      <div className="flex justify-center mt-4">
        <button className="rounded-md border border-[#D0D5DD]">
          <FaPlus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Onboard;
