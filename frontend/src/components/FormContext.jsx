import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formElements, setFormElements] = useState([]);
  // store the selected form elements in a state
  const addFormElement = (elementType) => {
    setFormElements([...formElements, elementType]);
  };

  const saveAsDraft = async (sections) => {
    try {
      // Prepare the form data
      const formData = {
        client_id: 1, // You might want to make this dynamic
        elements: sections.map((section) => ({
          id: section.id,
          label: section.label,
          type: section.type,
          ...(section.options && { options: section.options }),
        })),
      };

      // Make API call
      const response = await fetch(
        "http://localhost:3000/draft/api/save-draft",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save draft");
      }

      return await response.json();
    } catch (error) {
      console.error("Error saving draft:", error);
      throw error;
    }
  };
  return (
    // When a user clicks/selects a form element in the UI, this method adds it to the state.
    <FormContext.Provider value={{ formElements, addFormElement, saveAsDraft }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
