import React from "react";
import { FaArrowLeft, FaGear } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
const Breadcrumb = () => {
  const handleSaveAsDraft = async () => {
    if (window.saveDraft) {
      const success = await window.saveDraft();
      if (success) {
        alert("Form saved as draft successfully!");
      } else {
        alert("Error saving draft. Please try again.");
      }
    } else {
      alert("Save function not available");
    }
  };
  return (
    <div className="flex items-center justify-between px-3 py-1 border border-[#EAECF0] bg-white ">
      <div className="flex items-center space-x-3">
        <FaArrowLeft className="h-4 w-4 ml-2 text-gray-400  cursor-pointer" />
        <h1 className="font-semibold">Client On-Boarding</h1>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 rounded-full border-4 border-[#7F56D9] bg-white shadow-sm"></div>
          <span className="text-sm text-[#344054]">Create</span>
        </div>

        <IoIosArrowForward className="text-gray-400" />
        <div className="flex items-center space-x-1">
          <div className="w-4 h-4 rounded-full border-4 border-[#EAECF0] bg-white shadow-sm"></div>
          <span className="text-sm text-[#344054]">New</span>
        </div>
      </div>

      <div className=" flex items-center space-x-3">
        <button className="p-2 rounded-md border border-[#D0D5DD] bg-white">
          <FaGear className="text-gray-400" />
        </button>
        <button
          className="px-4 py-2 border border-[#D0D5DD] rounded-md text-[#344054] text-sm font-medium bg-white"
          onClick={handleSaveAsDraft}
        >
          Save as Draft
        </button>
        <button className="px-4 py-2 rounded-md text-white text-sm font-medium bg-[#7F56D9] hover:bg-[#6941C6]">
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default Breadcrumb;
