import { createContext, useState } from "react";
import MODULES from "../modules";

export const AppContext = createContext({});

// helpers
const rndNum = () => Math.floor(Math.random() * 10) + 1;
const initFields = MODULES.map((mod) => [mod, rndNum()]);
const getInputs = arr => arr.map((el) => el[1]);

export const AppContextProvider = ({ children }) => {
  const [fields, setFields] = useState(initFields);
  const initInputs = getInputs(fields)
  const [inputs, setInputs] = useState(initInputs);

  const value = { fields, setFields, inputs, setInputs,getInputs };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
