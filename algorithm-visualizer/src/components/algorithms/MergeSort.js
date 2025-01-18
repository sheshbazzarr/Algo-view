// src/components/algorithms/MergeSort.js
import React from 'react';
import '../../styles/mergeSort.css';  // Import the mergeSort.css file

const MergeSort = ({ array, setArray }) => {
  const mergeSort = async (arr, start, end, bars) => {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid, bars);
    await mergeSort(arr, mid + 1, end, bars);
    await merge(arr, start, mid, end, bars);
  };

  const merge = async (arr, start, mid, end, bars) => {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);

    let i = start;
    let l = 0;
    let r = 0;

    while (l < left.length && r < right.length) {
      // Highlight compared bars
      bars[start + l].style.backgroundColor = 'red';
      bars[mid + 1 + r].style.backgroundColor = 'red';

      await new Promise((resolve) => setTimeout(resolve, 100)); // Animation delay

      if (left[l] <= right[r]) {
        arr[i++] = left[l++];
      } else {
        arr[i++] = right[r++];
      }

      setArray([...arr]);

      // Reset colors
      bars[start + l - 1].style.backgroundColor = 'blue';
      bars[mid + 1 + r - 1].style.backgroundColor = 'blue';
    }

    while (l < left.length) {
      arr[i++] = left[l++];
    }
    while (r < right.length) {
      arr[i++] = right[r++];
    }

    for (let k = start; k <= end; k++) {
      bars[k].style.backgroundColor = 'green';
    }
  };

  const startMergeSort = () => {
    const bars = document.getElementsByClassName('array-bar');
    mergeSort([...array], 0, array.length - 1, bars);
  };

  return (
    <div className="merge-sort-container">
      <button className="merge-sort-button" onClick={startMergeSort}>Merge Sort</button>
    </div>
  );
};

export default MergeSort;
