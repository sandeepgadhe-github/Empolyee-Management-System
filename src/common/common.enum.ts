export enum EmployeeStatus{
    ACTIVE = 'ACTIVE',
    BLOCKED = 'BLOCKED',
    INACTIVE = 'INACTIVE',
    DELETED = 'DELETED',
    LOCKED = 'LOCKED'
}
export enum ProjectStatus {
    NOT_STARTED = 'Not Started',
    IN_PROGRESS = 'In Progress',
    COMPLETED = 'Completed',
    ON_HOLD = 'On Hold',
    CANCELLED = 'Cancelled',
}
export enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    INR = 'INR',
}
export enum Tags {
    FRONTEND = "FRONTEND",
    BACKEND = "BACKEND",
    FULLSTACK = "FULLSTACK",
    DEVOPS = "DEVOPS",
    QA = "QA",
    DESIGN = "DESIGN",
}
export enum Progress {
    ZERO = 0,
    TWENTY_FIVE = 25,
    FIFTY = 50,
    SEVENTY_FIVE = 75,
    ONE_HUNDRED = 100,
}
export enum BudgetRange {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
}

export enum ProjectDuration {
    SHORT_TERM = 'Short Term',
    MEDIUM_TERM = 'Medium Term',
    LONG_TERM = 'Long Term',
}
export enum ProjectType {
    INTERNAL = 'Internal',
    EXTERNAL = 'External',
    CLIENT_BASED = 'Client Based',
}
export enum ProjectPriority {
    HIGH = 'High',
    MEDIUM = 'Medium',
    LOW = 'Low',
}

export enum TaskStatus {
    PENDING = 'Pending',
    IN_PROGRESS = 'In Progress',
    COMPLETED = 'Completed',
}
export enum AttendanceStatus {
    PRESENT = 'Present',
    ABSENT = 'Absent',
    HALF_DAY = 'Half Day',
}
export enum LeaveType {
    ANNUAL = 'Annual',
    SICK = 'Sick',
    CASUAL = 'Casual',
    MATERNITY = 'Maternity',
    PATERNITY = 'Paternity'
}
export enum LeaveStatus {
    PENDING = 'Pending',
    APPROVED = 'Approved',
    REJECTED = 'Rejected'
}