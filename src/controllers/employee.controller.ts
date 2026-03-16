import { Request, Response } from "express";
import { EmployeeService } from "../services/business/employee.service.js";

export class EmployeeController {
  private static employeeController: EmployeeController;
  private employeeService: EmployeeService;
  private constructor() {
    this.employeeService = EmployeeService.getInstance();
  }

  static getInstance() {
    if (!this.employeeController) {
      this.employeeController = new EmployeeController();
    }
    return this.employeeController;
  }

  public async getEmployees(req: Request, res: Response) {
    try {
      const employees = await this.employeeService.listEmployees();
      return res.status(200).json({ success: true, data: employees });
    } catch (error) {
      console.error("Error fetching employees:", error);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  }

  public async createEmployee(req: Request, res: Response) {
    try {
      const employee = await this.employeeService.createEmployee(req.body);
      return res.status(201).json({ success: true, data: employee });
    } catch (error) {
      console.error("Error creating employee:", error);
      const message = error instanceof Error ? error.message : "Server Error";
      const status = message.includes("required") ? 400 : 500;
      return res.status(status).json({ success: false, message });
    }
  }
  public async updateEmployee(req: Request, res: Response) {
    try {
      const updated = await this.employeeService.updateEmployee(req.params.id, req.body);
      if (!updated) {
        return res
          .status(404)
          .json({ success: false, message: "Employee not found" });
      }
      return res.status(200).json({ success: true, data: updated });
    } catch (error) {
      console.error("Error updating employee:", error);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  }
  public async deleteEmployee(req: Request, res: Response) {
    try {
      const deleted = await this.employeeService.deleteEmployee(req.params.id);
      if (!deleted) {
        return res
          .status(404)
          .json({ success: false, message: "Employee not found" });
      }
      return res
        .status(200)
        .json({ success: true, message: "Employee deleted" });
    } catch (error) {
      console.error("Error deleting employee:", error);
      return res.status(500).json({ success: false, message: "Server Error" });
    }
  }
}
