import { Router } from "express";
import { EmployeeController } from "../controllers/employee.controller.js";

export class EmployeeRoutes {
  private static employeeRoutes: EmployeeRoutes;
  private router: Router;
  private employeeController: EmployeeController;

  private constructor() {
    this.router = Router();
    this.employeeController = EmployeeController.getInstance();
    this.initializeRoutes();
  }

  static getInstance(): EmployeeRoutes {
    if (!this.employeeRoutes) {
      this.employeeRoutes = new EmployeeRoutes();
    }
    return this.employeeRoutes;
  }

  private initializeRoutes() {
    this.router.get("/v1", (req, res) => this.employeeController.getEmployees(req, res));
    this.router.post("/v1", (req, res) => this.employeeController.createEmployee(req, res));
    this.router.delete("/v1/:id", (req, res) => this.employeeController.deleteEmployee(req, res));
    this.router.put("/v1/:id", (req, res) => this.employeeController.updateEmployee(req, res));
  }

  public getRouter(): Router {
    return this.router;
  }
}