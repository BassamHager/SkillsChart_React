import React, { useContext } from "react";
// context
import { AppContext } from "../context/AppContext";
// util
import { getBarChartUrl } from "../util/getChartUrl";
// comps
import SkillsInputs from "../components/SkillsInputs";

const Bar = () => {
  const { inputs } = useContext(AppContext);
  
  return (
    <div className="app-container">
      <SkillsInputs />
      <img src={getBarChartUrl(inputs)} alt="radar" />
    </div>
  );
};

export default Bar;
