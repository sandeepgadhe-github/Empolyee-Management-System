import { StatusCodes } from 'http-status-codes';
export interface ExceptionCodes {
    httpStatusCode: StatusCodes;
    errorCode: string;
    description: string;
    data?: object;
}

export class ErrorCodes {
    public static EMPLOYEE_NOT_FOUND: ExceptionCodes = {
        httpStatusCode: StatusCodes.NOT_FOUND,
        errorCode: 'EMPLOYEE_NOT_FOUND-404',
        description: 'The requested employee was not found in the system.'
    };
    public static INVALID_EMPLOYEE_ID: ExceptionCodes = {
        httpStatusCode: StatusCodes.BAD_REQUEST,
        errorCode: 'INVALID_EMPLOYEE_ID-400',
        description: 'The provided employee ID is invalid.'
    };
    public static LEAVE_REQUEST_NOT_FOUND: ExceptionCodes = {
        httpStatusCode: StatusCodes.NOT_FOUND,
        errorCode: 'LEAVE_REQUEST_NOT_FOUND-404',
        description: 'The requested leave request was not found in the system.'
    };
    public static ATTENDANCE_RECORD_NOT_FOUND: ExceptionCodes = {
        httpStatusCode: StatusCodes.NOT_FOUND,
        errorCode: 'ATTENDANCE_RECORD_NOT_FOUND-404',
        description: 'The requested attendance record was not found in the system.'
    };
    public static TASK_NOT_FOUND: ExceptionCodes = {
        httpStatusCode: StatusCodes.NOT_FOUND,
        errorCode: 'TASK_NOT_FOUND-404',
        description: 'The requested task was not found in the system.'
    };
    public static TEAM_NOT_FOUND: ExceptionCodes = {
        httpStatusCode: StatusCodes.NOT_FOUND,
        errorCode: 'TEAM_NOT_FOUND-404',
        description: 'The requested team was not found in the system.'
    };
    public static PROJECT_NOT_FOUND: ExceptionCodes = {
        httpStatusCode: StatusCodes.NOT_FOUND,
        errorCode: 'PROJECT_NOT_FOUND-404',
        description: 'The requested project was not found in the system.'
    };
    public static INVALID_PROJECT_ID: ExceptionCodes = {
        httpStatusCode: StatusCodes.BAD_REQUEST,
        errorCode: 'INVALID_PROJECT_ID-400',
        description: 'The provided project ID is invalid.'
    };
}