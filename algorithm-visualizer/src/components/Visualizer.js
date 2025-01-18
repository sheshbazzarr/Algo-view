import React, { useState, useEffect } from "react";
import "./../styles/Visualizer.css";

const Visualizer = ({ selectedAlgorithm }) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(newArray);
  };

  const visualizeAlgorithm = () => {
    if (selectedAlgorithm === "Bubble Sort") {
      bubbleSort([...array]);
    }
    // Add more algorithms here as needed.
  };

  const bubbleSort = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 100)); // Animation delay
        }
      }
    }
  };

  return (
    <div className="visualizer">
      <button onClick={generateArray}>Generate New Array</button>
      <button onClick={visualizeAlgorithm}>Visualize {selectedAlgorithm}</button>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{ height: `${value * 3}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
