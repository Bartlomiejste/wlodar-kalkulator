import React, { useState } from "react";
import "../UnitConverter/UnitConverter.css";

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

  const handleResetM = () => {
    setConvertedToM(null);
    setCentimeters("");
  };

  const handleResetCm = () => {
    setMeters("");
    setConvertedToCm(null);
  };

  return (
    <div className="unit-converter">
      <h1>Przelicznik jednostek</h1>

      <div className="input-group">
        <label>Metry (m): </label>
        <input
          type="number"
          min={0}
          value={meters}
          onChange={(e) => setMeters(e.target.value)}
        />
        <div className="button-group">
          <button className="btn" onClick={handleConvertToCm}>
            Konwertuj na cm
          </button>
          <button className="reset-button" onClick={handleResetCm}>
            Resetuj
          </button>
        </div>
        {convertedToCm !== null && (
          <div>
            <p style={{ color: "#1F7BFF" }}>
              {meters} m = {convertedToCm} cm
            </p>
          </div>
        )}
      </div>

      <div className="input-group">
        <label>Centymetry (cm): </label>
        <input
          type="number"
          min={0}
          value={centimeters}
          onChange={(e) => setCentimeters(e.target.value)}
        />
        <div className="button-group">
          <button className="btn" onClick={handleConvertToM}>
            Konwertuj na m
          </button>
          <button className="reset-button" onClick={handleResetM}>
            Resetuj
          </button>
        </div>
        {convertedToM !== null && (
          <div>
            <p style={{ color: "#1F7BFF" }}>
              {centimeters} cm = {convertedToM} m
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UnitConverter;
