import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { EmployeeRoutes } from "./routes/employee.routes.js";
const employeeRoutes = EmployeeRoutes.getInstance();

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json()); // to parse JSON payload
app.use(express.urlencoded({ extended: true })); // to parse form-data

// Database connection
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
});

// Routes
app.use("/api/employees", employeeRoutes.getRouter());
app.get("/", (req, res) => {
  res.send("EMS server is running.");
});

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

export default app;
