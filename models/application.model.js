import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    expYears: {
        type: String
    },
    expMonths: {
        type: String
    },
    mobile: {
        type: Number,
        required: true,
    },
    availableDays: {
        type: Number,
        required: true,
    },
    currentLocation: {
        type: String,
        required: true,
    },
    skills: [{ type: String }],
    privacyPolicy:{
        type:String,
        required:true,
    },
    resumeUrl:{
        type:String,
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['inreview', 'accepted', 'rejected', 'interviewing', 'offer'],
        default: "inreview"
    }
}, { timestamps: true });
export const Application = mongoose.model("Application", applicationSchema);