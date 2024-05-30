import React, { useState, useEffect } from "react";
import "../RoomCalculator/RoomCalculator.css";

function RoomCalculator() {
  const [dimensions, setDimensions] = useState([{ length: "", width: "" }]);
  const [totalArea, setTotalArea] = useState(null);

  useEffect(() => {
    const allEmpty = dimensions.every(
      (dim) => dim.length === "" && dim.width === ""
    );
    if (allEmpty) {
      setTotalArea(null);
    }
  }, [dimensions]);

  const handleChange = (index, event) => {
    const newDimensions = [...dimensions];
    newDimensions[index][event.target.name] = event.target.value;
    setDimensions(newDimensions);
  };

  const handleAddDimension = () => {
    setDimensions([...dimensions, { length: "", width: "" }]);
  };

  const handleReset = () => {
    setDimensions([{ length: "", width: "" }]);
    setTotalArea(null);
  };

  const handleCalculateArea = () => {
    const area = dimensions.reduce((acc, dim) => {
      const length = parseFloat(dim.length);
      const width = parseFloat(dim.width);
      if (!isNaN(length) && !isNaN(width)) {
        return acc + length * width;
      }
      return acc;
    }, 0);
    setTotalArea(area);
  };

  return (
    <div className="room-calculator">
      <h1>Kalkulator powierzchni</h1>
      {dimensions.map((dim, index) => (
        <div className="input-group" key={index}>
          <label>Długość (m): </label>
          <input
            min={0}
            type="number"
            name="length"
            value={dim.length}
            onChange={(e) => handleChange(index, e)}
          />
          <label>Szerokość (m): </label>
          <input
            min={0}
            type="number"
            name="width"
            value={dim.width}
            onChange={(e) => handleChange(index, e)}
          />
        </div>
      ))}
      <div className="button-group">
        <button className="button" onClick={handleCalculateArea}>
          Oblicz metry kwadratowe
        </button>
        <button className="reset-button" onClick={handleReset}>
          Resetuj
        </button>
      </div>
      <div className="button-group">
        <button className="button" onClick={handleAddDimension}>
          Dodaj powierzchnię
        </button>
      </div>
      {totalArea !== null && (
        <div>
          <p style={{ color: "#1F7BFF" }}>
            Całkowita powierzchnia: {totalArea.toFixed(2)} m²
          </p>
        </div>
      )}
    </div>
  );
}

export default RoomCalculator;
