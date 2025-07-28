// const express = require("express");
// const router = express.Router();
// const { sendOTP, verifyOTP } = require("../controllers/authController");

// router.post("/send-otp", sendOTP);
// router.post("/verify-otp", verifyOTP);

// module.exports = router;

// routes/authRoutes.js

import express from "express";
import {
  sendOTP,
  verifyOTP,
  googleLogin,
} from "../controllers/authController.js";

const router = express.Router();

// Auth Routes
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);
router.post("/google-login", googleLogin);

export default router;


