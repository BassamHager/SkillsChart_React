import React, {  useContext, useEffect } from "react";
// context
import { AppContext } from "../context/AppContext";

const SkillsInputs = () => {
  const { fields, setFields , getInputs, setInputs} = useContext(AppContext);

  const updateInputs = (e) => {
    const updatedFields = fields.map((field) => {
      if (field[0] !== e.target.name) return field;
      else return [field[0], Number(e.target.value)];
    });
    setFields(updatedFields);
  };

  useEffect(() =>setInputs(getInputs(fields)), [fields,getInputs,setInputs]);

  return (
    <form className="module-container">
      {fields &&
        fields.length > 0 &&
        fields.map((field) => 
              <label key={field[0]}>
                {field[0]}
                <input
                  name={field[0]}
                  type="number"
                  value={field[1] || 0}
                  min={0}
                  max={10}
                  onChange={(e) => updateInputs(e)}
                />
              </label>
          )}
    </form>
  );
};

export default SkillsInputs;
