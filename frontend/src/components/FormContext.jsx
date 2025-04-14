import React, { createContext, useContext, useState } from "react";
import axios from "axios";
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
        client_id: 1,
        elements: sections.map((section) => ({
          id: section.id,
          label: section.label,
          type: section.type,
          ...(section.options && { options: section.options }),
        })),
      };
      const response = await axios.post(
        "http://localhost:3000/draft/api/save-draft",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Return parsed response
      return response.data;
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
