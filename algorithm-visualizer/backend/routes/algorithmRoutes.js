const express = require('express');
const mergeSort = require('../algorithms/mergeSort');
const quickSort = require('../algorithms/quickSort');
const algorithmsData = require('../data/algorithms.json'); // Import available algorithms from the JSON

const router = express.Router();

// Route to get all available algorithms
router.get('/algorithms', (req, res) => {
  res.json(algorithmsData);
});

// Route for Merge Sort
router.post('/mergeSort', (req, res) => {
  const { array } = req.body;
  if (!Array.isArray(array)) {
    return res.status(400).json({ error: 'Input must be an array' });
  }
  const sortedArray = mergeSort(array);
  res.json({ sortedArray });
});

// Route for Quick Sort
router.post('/quickSort', (req, res) => {
  const { array } = req.body;
  if (!Array.isArray(array)) {
    return res.status(400).json({ error: 'Input must be an array' });
  }
  const sortedArray = quickSort(array);
  res.json({ sortedArray });
});

module.exports = router;
