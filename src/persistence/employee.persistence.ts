import { EmployeeProfileModel, employeeProfile } from "../model/empolyee.profile.shema.js";

export class EmployeePersistence {
  private static instance: EmployeePersistence;

  private constructor() {}

  static getInstance(): EmployeePersistence {
    if (!this.instance) this.instance = new EmployeePersistence();
    return this.instance;
  }

  async findAll(): Promise<employeeProfile[]> {
    return EmployeeProfileModel.find().lean();
  }

  async findById(id: string): Promise<employeeProfile | null> {
    return EmployeeProfileModel.findById(id).lean();
  }

  async create(payload: Partial<employeeProfile>): Promise<employeeProfile> {
    return EmployeeProfileModel.create(payload);
  }

  async updateById(id: string, payload: Partial<employeeProfile>): Promise<employeeProfile | null> {
    return EmployeeProfileModel.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    }).lean();
  }

  async deleteById(id: string): Promise<employeeProfile | null> {
    return EmployeeProfileModel.findByIdAndDelete(id).lean();
  }
}
