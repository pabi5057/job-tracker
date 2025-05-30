import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJobSave, deleteSaveJob, getAllJobsave } from "../controllers/jobsave.controller.js";
const router=express.Router();

router.route("/job-save/:id").get(isAuthenticated,applyJobSave);
router.route("/get").get(isAuthenticated,getAllJobsave);
router.route("/job-save/:id").delete(isAuthenticated,deleteSaveJob);

export default router;