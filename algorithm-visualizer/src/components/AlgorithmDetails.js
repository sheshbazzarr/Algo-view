// src/components/AlgorithmVisualizer.js
import React, { useState } from 'react';
// import './AlgorithmDetails.css';
import './AlgorithmVisualizer.css'; 
import BubbleSort from './algorithms/BubbleSort';
import MergeSort from './algorithms/MergeSort';
import QuickSort from './algorithms/QuickSort';

const AlgorithmVisualizer = () => {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState('bubble');

  // Generate a new random array
  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 10);
    setArray(newArray);
  };

  return (
    <div className="visualizer-container">
      <div className="controls">
        <button onClick={generateArray}>Generate Array</button>
        <select onChange={(e) => setAlgorithm(e.target.value)}>
          <option value="bubble">Bubble Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </div>

      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value * 3}px`,
              backgroundColor: 'blue',
            }}
          ></div>
        ))}
      </div>

      {/* Display the selected sorting algorithm */}
      {algorithm === 'bubble' && <BubbleSort array={array} setArray={setArray} />}
      {algorithm === 'merge' && <MergeSort array={array} setArray={setArray} />}
      {algorithm === 'quick' && <QuickSort array={array} setArray={setArray} />}
    </div>
  );
};

export default AlgorithmVisualizer;
