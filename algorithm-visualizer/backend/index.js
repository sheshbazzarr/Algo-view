const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const algorithmRoutes = require("./routes/algorithmRoutes"); // Importing the algorithm routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files (if necessary, for example for frontend or algorithm data)
app.use(express.static("public"));

// Welcome route
app.get("/", (req, res) => {
  res.send("Welcome to the Algorithm Visualizer Backend!");
});

// Use the algorithm routes defined in `algorithmRoutes.js`
app.use("/api", algorithmRoutes);

// Start the server
module.exports = app;
