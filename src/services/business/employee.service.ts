import { EmployeeStatus } from "../../common/common.enum.js";
import { employeeProfile } from "../../model/empolyee.profile.shema.js";
import { EmployeePersistence } from "../../persistence/employee.persistence.js";
import { SequenceGenerator } from "../../utils/sequence.generator.js";

export class EmployeeService {
  private static instance: EmployeeService;
  private persistence: EmployeePersistence;
  private sequenceGenerator: SequenceGenerator;

  private constructor() {
    this.persistence = EmployeePersistence.getInstance();
    this.sequenceGenerator = SequenceGenerator.getInstance();
  }

  static getInstance(): EmployeeService {
    if (!this.instance) {
      this.instance = new EmployeeService();
    }
    return this.instance;
  }

  async listEmployees(): Promise<employeeProfile[]> {
    return this.persistence.findAll();
  }

  async getEmployee(id: string): Promise<employeeProfile | null> {
    return this.persistence.findById(id);
  }

  async createEmployee(payload: Partial<employeeProfile>): Promise<employeeProfile> {
    if (!payload.name || !payload.emailId || !payload.employeeId || !payload.phone || !payload.password) {
      throw new Error("name, emailId, employeeId, phone, and password are required");
    }

    const createdPayload: Partial<employeeProfile> = {
      ...payload,
      _id: this.sequenceGenerator.generateId(),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: payload.status || EmployeeStatus.ACTIVE,
      createdBy: payload.createdBy || "system",
      updatedBy: payload.updatedBy || "system",
    };

    return await this.persistence.create(createdPayload);
  }

  async updateEmployee(id: string, payload: Partial<employeeProfile>): Promise<employeeProfile | null> {
    return this.persistence.updateById(id, payload);
  }

  async deleteEmployee(id: string): Promise<employeeProfile | null> {
    return this.persistence.deleteById(id);
  }
}
