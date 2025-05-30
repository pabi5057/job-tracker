import mongoose from "mongoose";

const jobSaveSchema=new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
},{timestamps:true});

export const JobSave=mongoose.model('JobSave',jobSaveSchema);