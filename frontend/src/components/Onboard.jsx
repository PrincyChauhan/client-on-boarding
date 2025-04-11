import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {
  DndContext,
  closestCorners,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableStep = ({ id, index, step }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`w-full text-left text-sm px-3 py-2 font-semibold rounded-md border
        ${
          index === 0
            ? "border-[#7F56D9] text-[#7F56D9] bg-[#F9F5FF] shadow-sm"
            : "border-[#D0D5DD] text-[#344054] bg-white"
        }
      `}
    >
      {step}
    </button>
  );
};

const Onboard = () => {
  const [steps, setSteps] = useState([
    "Clients Requirements",
    "Setup Client Account",
    "Configure Email for Client",
    "Setup Client Portal Access",
    "Document Collection",
    "Performing Security Audit",
    "Welcoming Call",
    "Hiring",
  ]);

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = steps.findIndex((step) => step === active.id);
    const newIndex = steps.findIndex((step) => step === over.id);

    setSteps((items) => arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="w-[340px] h-[2092px] bg-white p-4 border border-[#EAECF0] rounded-md ">
      <h2 className="text-sm font-semibold text-[#475467]">ONBOARDING STEPS</h2>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={steps} strategy={verticalListSortingStrategy}>
          <ol className="space-y-3 mt-3">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-2">
                <span className="text-sm font-medium text-gray-500 mt-2">
                  {index + 1}.
                </span>
                <SortableStep id={step} index={index} step={step} />
              </li>
            ))}
          </ol>
        </SortableContext>
      </DndContext>
      <div className="flex justify-center mt-4">
        <button className="rounded-md border border-[#D0D5DD]">
          <FaPlus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Onboard;
