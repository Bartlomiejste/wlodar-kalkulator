import React from "react";
import Calculator from "./components/Calculator";
import RoomCalculator from "./components/RoomCalculator";
import UnitConverter from "./components/UnitConverter";
import "./index.css";

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
