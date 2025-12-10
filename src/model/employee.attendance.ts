import mongoose, { Schema } from 'mongoose';
import { AttendanceStatus } from '../common/common.enum';

export interface IAttendance {
    _id: string;
    employeeId: string; 
    date: Date;
    status: AttendanceStatus;
    checkInTime?: Date;
    checkOutTime?: Date;
    remarks?: string;
    createdAt: Date;
    updatedAt: Date;
}

const AttendanceSchema = new Schema<IAttendance>({
    _id: {
        type: String,
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: Object.values(AttendanceStatus),
        required: true,
    },
    checkInTime: {
        type: Date,
    },
    checkOutTime: {
        type: Date,
    },
    remarks: {
        type: String,
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
export const AttendanceModel = mongoose.model<IAttendance>('Attendance', AttendanceSchema);
