// src/components/algorithms/BubbleSort.js
import React from 'react';
import '../../styles/bubbleSort.css';  // Import the bubbleSort.css file

const BubbleSort = ({ array, setArray }) => {
  const bubbleSort = async () => {
    const bars = document.getElementsByClassName('array-bar');
    let arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Highlight the compared bars
        bars[j].style.backgroundColor = 'red';
        bars[j + 1].style.backgroundColor = 'red';

        await new Promise((resolve) => setTimeout(resolve, 100)); // Animation delay

        if (arr[j] > arr[j + 1]) {
          // Swap bars
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
        }

        // Reset colors
        bars[j].style.backgroundColor = 'blue';
        bars[j + 1].style.backgroundColor = 'blue';
      }
      // Mark the last sorted bar
      bars[arr.length - i - 1].style.backgroundColor = 'green';
    }
    // Mark all bars as sorted
    for (let i = 0; i < arr.length; i++) {
      bars[i].style.backgroundColor = 'green';
    }
  };

  return (
    <div className="bubble-sort-container">
      <button className="bubble-sort-button" onClick={bubbleSort}>Bubble Sort</button>
    </div>
  );
};

export default BubbleSort;
