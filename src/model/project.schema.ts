import mongoose, { Document, Schema, Types } from 'mongoose';
import { BudgetRange, Currency, Progress, ProjectDuration, ProjectPriority, ProjectStatus, ProjectType, Tags } from '../common/common.enum';

export interface IProject {
    _id: string;
    name: string;
    description?: string;
    projectManager: string; // reference to Employee/User who manages the project
    employeeIds: string[]; // team members (Employee references)
    startDate?: Date;
    endDate?: Date;
    status: ProjectStatus;
    budget?: BudgetRange;
    currency?: Currency;
    progress?: Progress; // 0 - 100
    duration?: ProjectDuration;
    type?: ProjectType;
    priority?: ProjectPriority;
    tags?: Tags;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
}

const ProjectSchema = new Schema<IProject>(
    {   
        _id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        projectManager: {
            type: String, // adjust to 'User' if your manager model is named differently
            required: true,
        },
        employeeIds: [
            {
                type: String,
                ref: 'Employee',
            },
        ],
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
        status: {
            type: String,
            enum: Object.values(ProjectStatus),
            required: true,
        },
        budget: {
            type: String,
            enum: Object.values(BudgetRange),
        },
        currency: {
            type: String,
            enum: Object.values(Currency),
            default: Currency.INR,
        },
        progress: {
            type: String,
            enum: Object.values(Progress),
            default: Progress.ZERO,
        },
        tags: {
            type: String,
            enum: Object.values(Tags),
        },
        duration: {
            type: String,
            enum: Object.values(ProjectDuration),
        },
        type: {
            type: String,
            enum: Object.values(ProjectType),
        },
        priority: {
            type: String,
            enum: Object.values(ProjectPriority),
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
        updatedBy: {
            type: String,
            required: true,
        },
        createdBy: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);
export const ProjectModel = mongoose.model<IProject>('Project', ProjectSchema);
