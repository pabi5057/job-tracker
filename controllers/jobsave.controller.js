import { JobSave } from "../models/jobsave.model.js";

export const applyJobSave = async (req, res) => {
    try {
        const jobId = req.params.id;
        const userId = req.id;

        if (!jobId) {
            return res.status(400).json({
                message: "Job id is required.",
                success: false
            })
        };

        if (!userId) {
            return res.status(400).json({
                message: "user id is required.",
                success: false
            })
        };


        const newJobSave = await JobSave.create({
            job: jobId,
            user: userId,
        })

        await newJobSave.save();
        return res.status(201).json({
            message: "Job saved successfully!",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllJobsave = async (req, res) => {
    try {
        const userId = req.id;
        const saveJob = await JobSave.find({ user: userId }).populate({
            path:'job',
             options: { sort: { createdAt: -1 } },
            populate:{
                path:'company',
                 options: { sort: { createdAt: -1 } },
            }
        });
        return res.status(200).json({
            saveJob,
            success:true,
        });

    } catch (error) {
        console.log(error);
    }

};

export const deleteSaveJob=async(req,res)=>{
    try {
        const jobId=req.params.id;
        await JobSave.findByIdAndDelete(jobId);
        return res.status(200).json({
            message:"Save Job Delete Successfully!",
            success:true,
        });
    } catch (error) {
        console.log(error);
        
    }
}