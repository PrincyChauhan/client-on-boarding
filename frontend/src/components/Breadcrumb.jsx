import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft, FaGear } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const savedStatus = localStorage.getItem("formStatus");
    if (savedStatus) {
      setStatus(savedStatus);
    }
  }, []);

  const handleSaveAsDraft = async () => {
    if (window.saveDraft) {
      const success = await window.saveDraft();
      if (success) {
        setStatus("draft");
        localStorage.setItem("formStatus", "draft");
        alert("Form saved as draft successfully!");
      } else {
        alert("Error saving draft. Please try again.");
      }
    } else {
      alert("Save function not available");
    }
  };

  const handleSaveAndNext = async () => {
    try {
      const draftId = 1;

      if (!draftId) {
        alert("Draft ID not found.");
        return;
      }

      const res = await axios.post(
        `http://localhost:3000/published/${draftId}`
      );
      const publishedData = res.data?.published || res.data;
      console.log("Published data:", publishedData);

      setStatus("published");
      localStorage.setItem("formStatus", "published");
      alert("Form published successfully!");
    } catch (error) {
      console.error(
        "Error publishing form:",
        error.response?.data || error.message
      );
      alert(
        "Error publishing form: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="flex items-center justify-between px-3 py-1 border border-[#EAECF0] bg-white ">
      <div className="flex items-center space-x-3">
        <FaArrowLeft className="h-4 w-4 ml-2 text-gray-400 cursor-pointer" />
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

      <div className="flex items-center space-x-3">
        {status && (
          <div className="text-xs text-[#7F56D9] font-semibold">
            Status: {status === "draft" ? "Draft" : "Published"}
          </div>
        )}
        <button className="p-2 rounded-md border border-[#D0D5DD] bg-white">
          <FaGear className="text-gray-400" />
        </button>
        <button
          className="px-4 py-2 border border-[#D0D5DD] rounded-md text-[#344054] text-sm font-medium bg-white"
          onClick={handleSaveAsDraft}
        >
          Save as Draft
        </button>
        <button
          className="px-4 py-2 rounded-md text-white text-sm font-medium bg-[#7F56D9] hover:bg-[#6941C6]"
          onClick={handleSaveAndNext}
        >
          Save & Next
        </button>
      </div>
    </div>
  );
};

export default Breadcrumb;
