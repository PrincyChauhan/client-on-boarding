import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdDragIndicator } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { TbCalendarDue } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";

import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useFormContext } from "./FormContext";

const SectionWrapper = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="mb-1 p-2 bg-white"
    >
      {children}
    </div>
  );
};

const ClientRequirement = () => {
  const [sections, setSections] = useState([
    { id: "company", label: "Company Name", type: "company" },
    { id: "industry", label: "Industry", type: "industry" },
    { id: "scope", label: "Project Scope", type: "scope" },
    { id: "locations", label: "Preferred Hiring Locations", type: "locations" },
    { id: "goals", label: "Business Goals & Objectives", type: "goals" },
    { id: "audience", label: "Target Audience", type: "audience" },
    {
      id: "challenges",
      label: "Key Challenges or Concerns",
      type: "challenges",
    },
    {
      id: "notes",
      label: "Additional Notes or Custom Requirements",
      type: "notes",
    },
  ]);

  const { formElements } = useFormContext();
  const [preview, setPreview] = useState({});
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (formElements.length > 0) {
      const lastElement = formElements[formElements.length - 1];
      let newSection;
      switch (lastElement) {
        case "name":
          newSection = {
            id: `name-${Date.now()}`,
            label: "Name",
            type: "name",
          };
          break;
        case "email":
          newSection = {
            id: `email-${Date.now()}`,
            label: "Email Address",
            type: "email",
          };
          break;
        case "date":
          newSection = {
            id: `date-${Date.now()}`,
            label: "Select Date",
            type: "date",
          };
          break;
        case "phone":
          newSection = {
            id: `phone-${Date.now()}`,
            label: "Phone Number",
            type: "tel",
          };
          break;
        case "select":
          newSection = {
            id: `select-${Date.now()}`,
            label: "Select Option",
            type: "select",
            options: ["Option 1", "Option 2", "Option 3"],
          };

          break;
        case "multiselect":
          newSection = {
            id: `multiselect-${Date.now()}`,
            label: "Multi Select Option",
            type: "multiselect",
            options: ["Option A", "Option B", "Option C"],
          };
          break;

          newSection = {
            id: `multiselect-${Date.now()}`,
            label: "Multiselect",
            type: "multiselect",
            options: ["Option 1", "Option 2", "Option 3"],
          };
          break;
        case "address":
          newSection = {
            id: `address-${Date.now()}`,
            label: "Address",
            type: "address",
          };
          break;
        case "radio":
          newSection = {
            id: `radio-${Date.now()}`,
            label: "Choose a category",
            type: "radio",
            options: ["Option 1", "Option 2", "Option 3"],
          };
          break;
        case "textarea":
          newSection = {
            id: `textarea-${Date.now()}`,
            label: "Description",
            type: "textarea",
          };
          break;
        case "checkbox":
          newSection = {
            id: `checkbox-${Date.now()}`,
            label: "Choose Options",
            type: "checkbox",
            options: ["Option A", "Option B", "Option C"],
          };
          break;
        case "fileupload":
          newSection = {
            id: `fileupload-${Date.now()}`,
            label: "File Upload",
            type: "fileupload",
          };
          break;
        case "image":
          newSection = {
            id: `image-${Date.now()}`,
            label: "Image Upload",
            type: "image",
          };
          break;
        case "shorttext":
          newSection = {
            id: `shortext-${Date.now()}`,
            label: "Short Text",
            type: "shorttext",
          };
          break;
        case "longtext":
          newSection = {
            id: `longtext-${Date.now()}`,
            label: "Long Text",
            type: "longtext",
          };
          break;
        case "signature": {
          newSection = {
            id: `signature-${Date.now()}`,
            label: "Signature",
            type: "image",
          };
          break;
        }
        default:
          return;
      }
      setSections([...sections, newSection]);
    }
  }, [formElements]);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex((s) => s.id === active.id);
      const newIndex = sections.findIndex((s) => s.id === over?.id);
      setSections(arrayMove(sections, oldIndex, newIndex));
    }
  };

  const renderSection = (section) => {
    switch (section.type) {
      case "name":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Name"
                className="w-[150px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
              />
            </div>
          </SectionWrapper>
        );

      case "email":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-[300px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
            />
          </SectionWrapper>
        );

      case "date":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <input
              type="date"
              className="w-[300px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
            />
          </SectionWrapper>
        );

      case "phone":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <input
              type="tel"
              placeholder="+91234567890"
              className="w-[300px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
            />
          </SectionWrapper>
        );

        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <select
              multiple
              className="w-[300px] h-[120px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
            >
              {section.options.map((option, index) => (
                <option key={index} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </SectionWrapper>
        );

      case "address":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none "
              placeholder="Enter your full address"
            />
          </SectionWrapper>
        );

      case "select":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div className="ml-2">
              <select className="w-[300px] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none">
                <option disabled selected>
                  -- Select an option --
                </option>
                {(section.options || []).map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </SectionWrapper>
        );

      case "multiselect":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div className="border border-gray-300 rounded-md p-4 ml-2">
              <p className="text-gray-500 font-semibold text-sm">
                MULTI SELECT
              </p>
              <div className="space-y-2 mt-2">
                {(section.options || []).map((option, index) => (
                  <div
                    key={option}
                    className="flex items-center border border-gray-200 rounded-md"
                  >
                    <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 px-4 py-2 text-sm">
                      {option}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        );

      case "radio":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div className="ml-2 space-y-2">
              {(section.options || []).map((option, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name={`radio-${section.id}`}
                    value={option}
                    className="text-[#a991dc] focus:ring-[#a991dc]"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </SectionWrapper>
        );

      case "textarea":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none"
              placeholder="Enter details here..."
            />
          </SectionWrapper>
        );
      case "checkbox":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div className="ml-2 space-y-2">
              {section.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`${section.id}-${index}`}
                    name={section.label}
                    className="h-4 w-4 text-[#a991dc] border-gray-300 rounded focus:ring-[#a991dc]"
                  />
                  <label
                    htmlFor={`${section.id}-${index}`}
                    className="text-sm text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </SectionWrapper>
        );
      case "fileupload":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div className="relative w-full ml-2">
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                onChange={(e) => {
                  const file = e.target.files[0];
                  console.log("Uploaded file:", file);
                }}
              />
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white">
                <div className="bg-gray-00 text-white px-3 py-2 flex items-center justify-center">
                  📄
                </div>
                <div className="flex-1 py-2 text-sm text-gray-700">
                  Upload file
                </div>
                <div className="px-3 py-2 text-gray-500">
                  <IoIosArrowRoundUp />
                </div>
              </div>
            </div>
          </SectionWrapper>
        );
      case "image":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div className="relative w-full h-50 bg-gray-50 rounded-md p-4 flex items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    console.log(imageUrl);
                    setPreview((prev) => ({
                      ...prev,
                      [section.id]: imageUrl,
                    }));
                  }
                }}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
              {preview[section.id] ? (
                <img
                  src={preview[section.id]}
                  alt="Preview"
                  className="max-h-48 object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Click to upload image</span>
                </div>
              )}
            </div>
          </SectionWrapper>
        );
      case "shorttext":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <textarea
              rows="2"
              className="w-full px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none"
              placeholder="Enter details here..."
            />
          </SectionWrapper>
        );
      case "longtext":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <textarea
              rows="5"
              className="w-full px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none"
              placeholder="Enter details here..."
            />
          </SectionWrapper>
        );
      case "signature":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const signature = e.target.files[0];
                  if (signature) {
                    const signatureUrl = URL.createObjectURL(signature);
                    setPreview((prev) => ({
                      ...prev,
                      [section.id]: signatureUrl,
                    }));
                  }
                }}
                className="absolute w-full h-full opacity-0 cursor-pointer"
              />
              {preview[section.id] ? (
                <img
                  src={preview[section.id]}
                  alt="Preview"
                  className="max-h-48 object-contain"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              )}
            </div>
          </SectionWrapper>
        );
      case "company":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Company Name
            </label>

            <div className="flex items-center relative">
              <MdDragIndicator className="text-gray-400 cursor-pointer" />
              <input
                type="text"
                placeholder="Enter company name"
                className="w-[300px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
              />
              <HiDotsVertical
                className="text-gray-500 cursor-pointer ml-2"
                onClick={() => {
                  console.log("Three dots clicked!");
                  setShowMenu((prev) => !prev);
                }}
              />

              {showMenu && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <ul className="text-sm text-gray-700">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Google
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Microsoft
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Amazon
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </SectionWrapper>
        );
      case "industry":
      case "scope":
      case "locations":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <div className="border border-gray-300 rounded-md p-4 ml-2">
              <p className="text-gray-500 font-semibold text-sm">
                MULTI SELECT
              </p>
              <div className="space-y-2 mt-2">
                {["Technology", "Finance", "Healthcare", "Retail"].map(
                  (option, index) => (
                    <div
                      key={option}
                      className="flex items-center border border-gray-200 rounded-md"
                    >
                      <span className="bg-gray-100 text-gray-700 px-4 py-2 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 px-4 py-2 text-sm">
                        {option}
                      </span>
                    </div>
                  )
                )}
                <button className="border border-gray-200 rounded-md text-sm font-semibold text-gray-700 px-2 py-1">
                  Add
                </button>
              </div>
            </div>
          </SectionWrapper>
        );

      case "goals":
      case "audience":
      case "challenges":
      case "notes":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <textarea
              rows="5"
              placeholder={`Enter ${section.label}`}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none ml-2"
            />
          </SectionWrapper>
        );

      default:
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              {section.label}
            </label>
            <input
              type="text"
              placeholder={`Enter ${section.label}`}
              className="w-[300px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
            />
          </SectionWrapper>
        );
    }
  };

  return (
    <div className="w-[850px] bg-white p-6 border border-gray-200 rounded-md shadow-sm mt-8">
      <div className="border border-[#EAECF0] rounded-md px-4 py-2 mb-4 bg-gray-50">
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

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <SortableContext
          items={sections.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section) => renderSection(section))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default ClientRequirement;
