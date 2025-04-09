import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbCalendarDue } from "react-icons/tb";

const ClientRequirement = () => {
  return (
    <div className="w-[850px] bg-white p-6 border border-gray-200 rounded-md shadow-sm mt-8">
      <div className="border border-[#EAECF0] rounded-md px-4 py-2 mb-4  bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-[#101828]">
            Clients Requirements
          </h2>
          <div className="flex gap-2 items-center justify-center">
            <div className="flex gap-2 items-center border border-[#EAECF0] rounded-md px-2 py-1  bg-white">
              <FaRegUser className="size-3 text-gray-700" />
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                Assign
              </button>
              <MdKeyboardArrowDown className="size-4 text-gray-700" />
            </div>
            <div className="flex gap-2 items-center border border-[#EAECF0] rounded-md px-2 py-1  bg-white">
              <TbCalendarDue className="size-3 text-gray-700" />
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                Due Date
              </button>
            </div>
            <div className="flex gap-2 items-center border border-[#EAECF0] rounded-md px-2 py-1  bg-white">
              <TbCalendarDue className="size-3 text-gray-700" />
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                Conditional
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 px-3 py-2">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Enter company name"
          className="w-[300px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 px-3 py-2">
          Industry
        </label>
        <div className="border border-gray-300 rounded-md p-4 ml-2 ">
          <p className="text-gray-500 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer">
            MULTI SELECT
          </p>
          <div className="space-y-2 mt-2">
            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm">
                1
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">
                Technology
              </span>
            </div>

            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm">
                2
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">Finance</span>
            </div>
            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm ">
                3
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">
                Healthcare
              </span>
            </div>

            <div className="flex items-center border border-gray-200 rounded-md ">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm ">
                4
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">Retail</span>
            </div>

            <div>
              <button className="border border-gray-200 rounded-md text-sm font-semibold text-gray-700 px-2 py-1">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 px-3 py-2">
          Business Goals & Objectives
        </label>

        <textarea
          rows="5"
          className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none ml-2"
          placeholder="Enter business goals & objectives"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 px-3 py-2">
          Target Audience
        </label>

        <textarea
          rows="5"
          class="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none ml-2"
          placeholder="Enter Target Audience"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 px-3 py-2">
          Project Scope
        </label>
        <div className="border border-gray-300 rounded-md p-4 ml-2 ">
          <p className="text-gray-500 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer">
            MULTI SELECT
          </p>
          <div className="space-y-2 mt-2">
            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm">
                1
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">
                Recuiremnet
              </span>
            </div>

            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm">
                2
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">
                Compliance
              </span>
            </div>
            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm ">
                3
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">Payroll</span>
            </div>

            <div className="flex items-center border border-gray-200 rounded-md ">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm ">
                4
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">Benifits</span>
            </div>

            <div>
              <button className="border border-gray-200 rounded-md text-sm font-semibold text-gray-700 px-2 py-1">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 px-3 py-2">
          Preferred Hiring Locations
        </label>
        <div className="border border-gray-300 rounded-md p-4 ml-2 ">
          <p className="text-gray-500 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer">
            MULTI SELECT
          </p>
          <div className="space-y-2 mt-2">
            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm">
                1
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">India</span>
            </div>

            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm">
                2
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">UK</span>
            </div>
            <div className="flex items-center border border-gray-200 rounded-md">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm ">
                3
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">USA</span>
            </div>

            <div className="flex items-center border border-gray-200 rounded-md ">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm ">
                4
              </span>
              <span className="text-gray-700 px-4 py-2 text-sm">China</span>
            </div>

            <div>
              <button className="border border-gray-200 rounded-md text-sm font-semibold text-gray-700 px-2 py-1">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 px-3 py-2">
          Key Challanges or concerns
        </label>

        <textarea
          rows="5"
          class="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none ml-2"
          placeholder="Enter Key Challanges or concerns"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500 px-3 py-2">
          Additional Notes or Custom Requirements
        </label>

        <textarea
          rows="5"
          class="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none ml-2"
          placeholder="Enter Additional Notes or Custom Requirements"
        ></textarea>
      </div>
    </div>
  );
};

export default ClientRequirement;
