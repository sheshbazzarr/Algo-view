const express = require('express');
const cors = require('cors');
const algorithmRoutes = require('./routes/algorithmRoutes'); // Importing the router

const app = express();
const port = 5000;

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Use algorithmRoutes in the app
app.use('/api', algorithmRoutes); // The routes for algorithms

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
