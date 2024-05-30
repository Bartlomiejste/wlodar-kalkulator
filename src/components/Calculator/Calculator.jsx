import React, { useState, useEffect } from "react";
import "../Calculator/Calculator.css";

function Calculator() {
  const [area, setArea] = useState("");
  const [thickness, setThickness] = useState("");
  const [sandArea, setSandArea] = useState("");
  const [sand, setSand] = useState(null);
  const [expansionArea, setExpansionArea] = useState("");
  const [expansion, setExpansion] = useState(null);
  const [cementFromArea, setCementFromArea] = useState(null);

  useEffect(() => {
    if (area === "" || thickness === "") {
      setCementFromArea(null);
    }
  }, [area, thickness]);

  useEffect(() => {
    if (sandArea === "") {
      setSand(null);
    }
  }, [sandArea]);

  useEffect(() => {
    if (expansionArea === "") {
      setExpansion(null);
    }
  }, [expansionArea]);

  const handleCalculateCementFromArea = () => {
    const areaValue = parseFloat(area);
    const thicknessValue = parseFloat(thickness);
    if (!isNaN(areaValue) && !isNaN(thicknessValue)) {
      const cementAmount = areaValue * (thicknessValue / 100) * 200;
      setCementFromArea(cementAmount);
    }
  };

  const handleCalculateSand = () => {
    const areaValue = parseFloat(sandArea);
    if (!isNaN(areaValue)) {
      const sandAmount = areaValue * 120;
      setSand(sandAmount);
    }
  };

  const handleCalculateExpansion = () => {
    const areaValue = parseFloat(expansionArea);
    if (!isNaN(areaValue)) {
      const expansionAmount = Math.sqrt(areaValue) * 4;
      setExpansion(expansionAmount);
    }
  };

  const handleResetCementFromArea = () => {
    setArea("");
    setThickness("");
    setCementFromArea(null);
  };

  const handleResetSand = () => {
    setSandArea("");
    setSand(null);
  };

  const handleResetExpansion = () => {
    setExpansionArea("");
    setExpansion(null);
  };

  return (
    <div className="calculator">
      <h1 className="title">Kalkulator cementu i piasku</h1>

      <div className="input-group">
        <label>Wpisz powierzchnie w m²: </label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          min={0}
        />
        <label>Grubość w cm: </label>
        <input
          min={0}
          type="number"
          step="0.01"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
        />
        <div className="button-group">
          <button className="button" onClick={handleCalculateCementFromArea}>
            Oblicz ilość cementu
          </button>
          <button className="reset-button" onClick={handleResetCementFromArea}>
            Resetuj
          </button>
        </div>
        {cementFromArea !== null && (
          <div>
            <p style={{ color: "#1F7BFF" }}>
              Potrzebujesz {cementFromArea.toFixed(2)} kg cementu
            </p>
          </div>
        )}
      </div>

      <div className="input-group">
        <label>Oblicz ilość piasku na podstawie powierzchni (m²):</label>
        <input
          min={0}
          type="number"
          value={sandArea}
          onChange={(e) => setSandArea(e.target.value)}
        />
        <div className="button-group">
          <button className="button" onClick={handleCalculateSand}>
            Oblicz ilość
          </button>
          <button className="reset-button" onClick={handleResetSand}>
            Resetuj
          </button>
        </div>
        {sand !== null && (
          <div>
            <p style={{ color: "#1F7BFF" }}>
              Potrzebujesz {sand.toFixed(2)} kg piasku
            </p>
          </div>
        )}
      </div>

      <div className="input-group">
        <label>Wpisz powierzchnie w m², do obliczenia dylatacji:</label>
        <input
          min={0}
          type="number"
          value={expansionArea}
          onChange={(e) => setExpansionArea(e.target.value)}
        />
        <div className="button-group">
          <button className="button" onClick={handleCalculateExpansion}>
            Oblicz dylatację
          </button>
          <button className="reset-button" onClick={handleResetExpansion}>
            Resetuj
          </button>
        </div>
        {expansion !== null && (
          <div>
            <p style={{ color: "#1F7BFF" }}>
              Dylatacja wynosi: {expansion.toFixed(2)} m
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
