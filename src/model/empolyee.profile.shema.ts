import { EmployeeStatus } from "../common/common.enum";
import mongoose, {Schema, now} from "mongoose"

export interface employeeProfile {
    _id: string;
    name: string;
    middleName: string;
    lastName: string;
    managerId: string;
    projectManagerIds?: string[];
    emailId: string;
    employeeId: string;
    createdAt: Date;
    updatedAt: Date;
    phone: string;
    password: string;
    passwordSetOn: Date;
    projectIds?: string[];
    status: EmployeeStatus;
    createdBy: string;
    updatedBy: string;
}

const employeeSchema = new Schema<employeeProfile>({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    projectManagerIds: {
        type: [String],
        required: false
    },
    createdAt: {
        type: Date,
        default: now()
    },
    updatedAt: {
        type: Date,
        default: now()
    },
    managerId: {
        type: String,
        required: false,
        trim: true
    },
    projectIds: {
        type: [String],
        required: false
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordSetOn: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        enum: Object.values(EmployeeStatus),
        required: true
    },
    createdBy: {
        type: String,
    },
    updatedBy: {
        type: String,
    }
});

export const EmployeeProfileModel = mongoose.model<employeeProfile>("EmployeeProfile", employeeSchema);


