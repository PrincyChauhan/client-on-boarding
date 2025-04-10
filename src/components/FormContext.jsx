// FormContext.js
import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formElements, setFormElements] = useState([]);

  const addFormElement = (elementType) => {
    setFormElements([...formElements, elementType]);
  };

  return (
    <FormContext.Provider value={{ formElements, addFormElement }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
