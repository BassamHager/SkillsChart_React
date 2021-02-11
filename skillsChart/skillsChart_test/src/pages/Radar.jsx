import React, { useContext } from "react";
// context
import { AppContext } from "../context/AppContext";
// util
import { getRadarChartUrl } from "../util/getChartUrl";
// comps
import SkillsInputs from "../components/SkillsInputs";

const Radar = () => {
  const { inputs } = useContext(AppContext);
  return (
    <div className="app-container">
      <SkillsInputs />
      <img src={getRadarChartUrl(inputs)} alt="radar" />
    </div>
  );
};

export default Radar;
