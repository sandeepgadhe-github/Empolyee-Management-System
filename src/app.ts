import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());        // to parse JSON payload
app.use(express.urlencoded({ extended: true })); // to parse form-data

// Database connection
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
});

// Routes
app.get("/", (req, res) => {
  res.send("EMS server is running.");
});

export default app;
