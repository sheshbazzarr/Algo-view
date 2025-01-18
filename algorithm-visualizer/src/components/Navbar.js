import React from "react";
import "./../styles/Navbar.css";

const Navbar = ({ selectedAlgorithm, setSelectedAlgorithm }) => {
  const algorithms = ["Bubble Sort", "Quick Sort", "Merge Sort"];

  return (
    <nav className="navbar">
      <h1>Algorithm Visualizer</h1>
      <select
        value={selectedAlgorithm}
        onChange={(e) => setSelectedAlgorithm(e.target.value)}
        className="algorithm-selector"
      >
        {algorithms.map((algo, index) => (
          <option key={index} value={algo}>
            {algo}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
