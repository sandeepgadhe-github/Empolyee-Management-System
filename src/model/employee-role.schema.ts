import mongoose, { Schema } from "mongoose";
export interface employeeRole {
    _id: string;
    employeeId: string;
    roleName: string;
    permissions: string[];
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
}

const employeeRoleSchema = new Schema<employeeRole>({
    _id: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        trim: true
    },
    roleName: {
        type: String,
        required: true,
        trim: true
    },
    permissions: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: String,
        required: true
    },
    updatedBy: {
        type: String,
        required: true
    }
});

export const EmployeeRoleModel = mongoose.model<employeeRole>("EmployeeRole", employeeRoleSchema);

    
