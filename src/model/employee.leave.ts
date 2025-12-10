import mongoose, { Schema } from 'mongoose';
import { LeaveStatus, LeaveType } from '../common/common.enum';

export interface ILeave {
    _id: string;
    employeeId: string; 
    leaveType: LeaveType;
    startDate: Date;
    endDate: Date;
    status: LeaveStatus;
    remarks?: string;
    createdAt: Date;
    updatedAt: Date;
}

const LeaveSchema = new Schema<ILeave>({
    _id: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        trim: true
    },
    leaveType: {
        type: String,
        enum: Object.values(LeaveType),
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(LeaveStatus),
        default: LeaveStatus.PENDING
    },
    remarks: {
        type: String,
        required: false,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});
export const LeaveModel = mongoose.model<ILeave>('Leave', LeaveSchema);