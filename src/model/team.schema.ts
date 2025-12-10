import mongoose, { Schema } from 'mongoose';

export interface ITeam {
    _id: string;
    name: string;
    manager: string; // reference to the manager (Employee or User ID)
    employeeIds: string[]; // array of employee IDs
    projectIds: string[]; // array of project IDs
    createdAt: Date;
    updatedAt: Date;
}

const TeamSchema = new Schema<ITeam>(
    {
        _id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        manager: {
            type: String,
            required: true,
        },
        employeeIds: [
            {
                type: String,
                ref: 'Employee',
            },
        ],
        projectIds: [
            {
                type: String,
                ref: 'Project',
            },
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);
export const TeamModel = mongoose.model<ITeam>('Team', TeamSchema);
