import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TbCalendarDue } from "react-icons/tb";
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
      className="mb-4 border border-gray-200 rounded-md p-4 bg-white shadow-sm"
    >
      {children}
    </div>
  );
};

const ClientRequirement = () => {
  const [sections, setSections] = useState([
    { id: "company", label: "Company Name" },
    { id: "industry", label: "Industry" },
    { id: "scope", label: "Project Scope" },
    { id: "locations", label: "Preferred Hiring Locations" },
    { id: "goals", label: "Business Goals & Objectives" },
    { id: "audience", label: "Target Audience" },
    { id: "challenges", label: "Key Challenges or Concerns" },
    { id: "notes", label: "Additional Notes or Custom Requirements" },
  ]);

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
    switch (section.id) {
      case "company":
        return (
          <SectionWrapper id={section.id}>
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-[300px] px-3 py-2 border ml-2 border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a991dc] cursor-pointer"
            />
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
        return null;
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
