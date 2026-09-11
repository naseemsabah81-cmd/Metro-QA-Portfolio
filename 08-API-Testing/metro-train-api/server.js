const express = require("express");

const app = express();

const PORT = 3000;

app.get("/trains", (req, res) => {
  res.json({
    train: "T101",
    destination: "Airport",
    arrival: "10:30",
    departure: "10:32"
  });
});

app.listen(PORT, () => {
  console.log(`Metro Train API is running on http://localhost:${PORT}`);
});