const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tournamentRouter = require("./routes/tournamentRoutes"); // Import router
// const bracketRouter = require("./routes/bracketRoutes");


const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/bracketCreate", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/", tournamentRouter); // All tournament-related routes will be handled by the router
// app.use("/api/brackets", bracketRouter);
// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
