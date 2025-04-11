import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formElements, setFormElements] = useState([]);
  // store the selected form elements in a state
  const addFormElement = (elementType) => {
    setFormElements([...formElements, elementType]);
  };

  return (
    // When a user clicks/selects a form element in the UI, this method adds it to the state.
    <FormContext.Provider value={{ formElements, addFormElement }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
