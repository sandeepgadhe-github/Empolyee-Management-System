import mongoose, { Schema } from 'mongoose';
import { TaskStatus } from '../common/common.enum';
export interface ITask {
    _id: string;
    title: string;
    description?: string;
    projectId: string;
    assignedTo: string[]; // array of employee IDs
    project: string; // reference to the project ID
    dueDate?: Date;
    status: TaskStatus;
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema = new Schema<ITask>({
    _id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: false,
        trim: true,
    },
    projectId: {
        type: String,
        required: true,
        trim: true,
    },
    assignedTo: [
        {
            type: String,
            ref: 'Employee',
        },
    ],
    project: {
        type: String,
        ref: 'Project',
        required: true,
    },
    dueDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: Object.values(TaskStatus),
        default: TaskStatus.PENDING,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

export const TaskModel = mongoose.model<ITask>('Task', TaskSchema);
