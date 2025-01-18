import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Visualizer from "./components/Visualizer";
import AlgorithmDetails from "./components/AlgorithmDetails";
import "./styles/App.css";

const App = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble Sort");

  return (
    <div className="App">
      <Navbar
        selectedAlgorithm={selectedAlgorithm}
        setSelectedAlgorithm={setSelectedAlgorithm}
      />
      <Visualizer selectedAlgorithm={selectedAlgorithm} />
      <AlgorithmDetails selectedAlgorithm={selectedAlgorithm} />
    </div>
  );
};

export default App;
