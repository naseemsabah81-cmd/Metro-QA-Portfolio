const express = require("express");

const app = express();

const PORT = 3000;

const trains = {
  T101: {
    train: "T101",
    destination: "Airport",
    arrival: "10:30",
    departure: "10:32"
  },
  T102: {
    train: "T102",
    destination: "City Centre",
    arrival: "10:35",
    departure: "10:37"
  }
};

app.get("/trains/:trainId", (req, res) => {
  const trainId = req.params.trainId;

  const train = trains[trainId];

  if (!train) {
    return res.status(404).json({
      error: "Train not found"
    });
  }

  res.json(train);
});

app.listen(PORT, () => {
  console.log(`Metro Train API is running on http://localhost:${PORT}`);
});