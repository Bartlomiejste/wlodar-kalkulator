import React, { useState, useEffect } from "react";
import "../Calculator/Calculator.css";

function Calculator() {
  const [area, setArea] = useState("");
  const [thickness, setThickness] = useState("");
  const [cementThicknessCm, setCementThicknessCm] = useState("");
  const [cementFromThickness, setCementFromThickness] = useState(null);
  const [cementFromArea, setCementFromArea] = useState(null);
  const [sandArea, setSandArea] = useState("");
  const [sand, setSand] = useState(null);
  const [expansionArea, setExpansionArea] = useState("");
  const [expansion, setExpansion] = useState(null);

  useEffect(() => {
    if (area === "" || thickness === "") {
      setCementFromArea(null);
    }
  }, [area, thickness]);

  useEffect(() => {
    if (cementThicknessCm === "") {
      setCementFromThickness(null);
    }
  }, [cementThicknessCm]);

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

  const handleCalculateCementFromThickness = () => {
    const thicknessValue = parseFloat(cementThicknessCm);
    if (!isNaN(thicknessValue)) {
      const cementAmount = thicknessValue * 250;
      setCementFromThickness(cementAmount);
    }
  };

  const handleCalculateCementFromArea = () => {
    const areaValue = parseFloat(area);
    const thicknessValue = parseFloat(thickness);
    if (!isNaN(areaValue) && !isNaN(thicknessValue)) {
      const cementAmount = areaValue * thicknessValue * 250;
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

  const handleResetCementFromThickness = () => {
    setCementThicknessCm("");
    setCementFromThickness(null);
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
      <h1>Kalkulator cementu i piasku</h1>

      <div className="input-group">
        <label>Wpisz powierzchnie w m²: </label>
        <input
          type="number"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <label>Grubość w m: </label>
        <input
          type="number"
          step="0.01"
          value={thickness}
          onChange={(e) => setThickness(e.target.value)}
        />
        <div className="button-group">
          <button onClick={handleCalculateCementFromArea}>
            Oblicz ilość cementu na podstawie powierzchni w m²
          </button>
          <button onClick={handleResetCementFromArea}>Resetuj</button>
        </div>
        {cementFromArea !== null && (
          <div className="results">
            <p style={{ color: "red" }}>
              Potrzebujesz {cementFromArea.toFixed(2)} kg cementu
            </p>
          </div>
        )}
      </div>

      <div className="input-group">
        <label>
          Wpisz grubość w centymetrach, która będzie pomnożona przez 250kg:
        </label>
        <input
          type="number"
          value={cementThicknessCm}
          onChange={(e) => setCementThicknessCm(e.target.value)}
        />
        <div className="button-group">
          <button onClick={handleCalculateCementFromThickness}>
            Oblicz ilość cementu na podstawie grubości
          </button>
          <button onClick={handleResetCementFromThickness}>Resetuj</button>
        </div>
        {cementFromThickness !== null && (
          <div className="results">
            <p style={{ color: "red" }}>
              Potrzebujesz {cementFromThickness.toFixed(2)} kg cementu
            </p>
          </div>
        )}
      </div>

      <div className="input-group">
        <label>
          Wpisz powierzchnie w m², która będzie pomnożona przez 120kg:{" "}
        </label>
        <input
          type="number"
          value={sandArea}
          onChange={(e) => setSandArea(e.target.value)}
        />
        <div className="button-group">
          <button onClick={handleCalculateSand}>
            Oblicz ilość piasku na podstawie powierzchni
          </button>
          <button onClick={handleResetSand}>Resetuj</button>
        </div>
        {sand !== null && (
          <div className="results">
            <p style={{ color: "red" }}>
              Potrzebujesz {sand.toFixed(2)} kg piasku
            </p>
          </div>
        )}
      </div>

      <div className="input-group">
        <label>
          Wpisz powierzchnie w m², która będzie pierwiastkowana i pomnożona
          przez 4:
        </label>
        <input
          type="number"
          value={expansionArea}
          onChange={(e) => setExpansionArea(e.target.value)}
        />
        <div className="button-group">
          <button onClick={handleCalculateExpansion}>Oblicz dylatację</button>
          <button onClick={handleResetExpansion}>Resetuj</button>
        </div>
        {expansion !== null && (
          <div className="results">
            <p style={{ color: "red" }}>
              Dylatacja wynosi: {expansion.toFixed(2)} m
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
