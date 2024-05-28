import React from "react";
import "./index.css";
import Calculator from "./components/Calculator/Calculator";
import RoomCalculator from "./components/RoomCalculator/RoomCalculator";
import UnitConverter from "./components/UnitConverter/UnitConverter";

export const App = () => {
  return (
    <div className="App">
      <div className="calculators">
        <Calculator />
        <RoomCalculator />
        <UnitConverter />
      </div>
    </div>
  );
};
