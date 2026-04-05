// routes/jobs.js
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const auth = require("../middleware/auth");
const { addJob, getJob } = require("../controllers/jobController");

router.post(
  "/add",
  auth,
  [
    body("jobName").notEmpty().withMessage("Job Name is required"),
    body("companyName").notEmpty().withMessage("Company Name is required"),
    body("status").notEmpty().withMessage("Current status of job is required"),
  ],
  addJob,
);
router.get("/", auth, getJob);

module.exports = router;
