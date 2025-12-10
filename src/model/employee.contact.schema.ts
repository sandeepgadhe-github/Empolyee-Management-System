import mongoose, { now , Schema} from "mongoose";

export interface ContactInfo {
    _id: string;
    employeeId: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    emergencyContactName: string;
    emergencyContactPhone: string;
    relationshipToEmergencyContact: string;
    updatedAt: Date;
    updatedBy: string;
    createdAt: Date;
    createdBy: string;
}

const contactSchema = new Schema<ContactInfo>({
    _id: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        trim: true
    },
    addressLine1: {
        type: String,
        required: true,
        trim: true
    },
    addressLine2: {
        type: String,
        required: false,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    postalCode: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    emergencyContactName: {
        type: String,
        required: true,
        trim: true
    },
    emergencyContactPhone: {
        type: String,
        required: true,
        trim: true
    },
    relationshipToEmergencyContact: {
        type: String,
        required: true,
        trim: true
    },
    updatedAt: {
        type: Date,
        default: now()
    },
    updatedBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: now()
    },
    createdBy: {
        type: String,
        required: true
    }
});

export const ContactModel = mongoose.model<ContactInfo>("Contact-details", contactSchema);