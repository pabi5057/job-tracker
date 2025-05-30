import mongoose from "mongoose";
import { Company } from './company.model.js';
import { Application } from './application.model.js';


const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    experienceLevel:{
        type:Number,
        required:true,
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application',
        }
    ]
},{timestamps:true});


jobSchema.post('findOneAndDelete', async function(doc) {
  if (doc) {
    // Remove from Company
    await Company.findByIdAndUpdate(doc.company, {
      $pull: { jobs: doc._id }
    });

    // Delete related Applications
    await Application.deleteMany({ job: doc._id });
  }
});



export const Job = mongoose.model("Job", jobSchema);




