require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Connect to DB and start server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
