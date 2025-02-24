const express = require('express');
const app = express();
const cors = require("cors");
require("./connection/conn");
app.use(cors());
const carRoutes = require("./routes/carsRoutes");
const bikeRoutes = require("./routes/bikesRoutes");
const cycleRoutes = require("./routes/cyclesRoutes");


app.use(express.json());
app.use("/api/v1", carRoutes);
app.use("/api/v2", bikeRoutes);
app.use("/api/v3", cycleRoutes);




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
