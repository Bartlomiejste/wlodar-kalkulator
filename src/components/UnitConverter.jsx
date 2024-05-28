// src/UnitConverter.jsx

import React, { useState } from "react";
import "./UnitConverter.css";

function UnitConverter() {
  const [meters, setMeters] = useState("");
  const [centimeters, setCentimeters] = useState("");
  const [convertedToCm, setConvertedToCm] = useState(null);
  const [convertedToM, setConvertedToM] = useState(null);

  const handleConvertToCm = () => {
    const metersValue = parseFloat(meters);
    if (!isNaN(metersValue)) {
      const cmValue = metersValue * 100;
      setConvertedToCm(cmValue);
    }
  };

  const handleConvertToM = () => {
    const centimetersValue = parseFloat(centimeters);
    if (!isNaN(centimetersValue)) {
      const mValue = centimetersValue / 100;
      setConvertedToM(mValue);
    }
  };

  const handleReset = () => {
    setMeters("");
    setCentimeters("");
    setConvertedToCm(null);
    setConvertedToM(null);
  };

  return (
    <div className="unit-converter">
      <h1>Przelicznik jednostek</h1>

      <div className="input-group">
        <label>Metry (m): </label>
        <input
          type="number"
          value={meters}
          onChange={(e) => setMeters(e.target.value)}
        />
        <button onClick={handleConvertToCm}>Konwertuj na cm</button>
        {convertedToCm !== null && (
          <div className="results">
            <p style={{ color: "red" }}>
              {meters} m = {convertedToCm} cm
            </p>
          </div>
        )}
      </div>

      <div className="input-group">
        <label>Centymetry (cm): </label>
        <input
          type="number"
          value={centimeters}
          onChange={(e) => setCentimeters(e.target.value)}
        />
        <button onClick={handleConvertToM}>Konwertuj na m</button>
        {convertedToM !== null && (
          <div className="results">
            <p style={{ color: "red" }}>
              {centimeters} cm = {convertedToM} m
            </p>
          </div>
        )}
      </div>

      <button onClick={handleReset}>Resetuj</button>
    </div>
  );
}

export default UnitConverter;
