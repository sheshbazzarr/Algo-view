// src/components/algorithms/QuickSort.js
import React from 'react';
import '../../styles/quickSort.css';  // Import the quickSort.css file

const QuickSort = ({ array, setArray }) => {
  const quickSort = async (arr, low, high, bars) => {
    if (low < high) {
      const pi = await partition(arr, low, high, bars);
      await quickSort(arr, low, pi - 1, bars);
      await quickSort(arr, pi + 1, high, bars);
    }
  };

  const partition = async (arr, low, high, bars) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      // Highlight the compared bars
      bars[j].style.backgroundColor = 'red';
      bars[high].style.backgroundColor = 'red';

      await new Promise((resolve) => setTimeout(resolve, 100)); // Animation delay

      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        setArray([...arr]);
      }

      // Reset colors
      bars[j].style.backgroundColor = 'blue';
      bars[high].style.backgroundColor = 'blue';
    }

    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    setArray([...arr]);

    bars[i + 1].style.backgroundColor = 'green';
    bars[high].style.backgroundColor = 'green';

    return i + 1;
  };

  const startQuickSort = () => {
    const bars = document.getElementsByClassName('array-bar');
    quickSort([...array], 0, array.length - 1, bars);
  };

  return (
    <div className="quick-sort-container">
      <button className="quick-sort-button" onClick={startQuickSort}>Quick Sort</button>
    </div>
  );
};

export default QuickSort;
