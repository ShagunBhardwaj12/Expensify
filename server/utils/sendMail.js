// const nodemailer = require("nodemailer");

// const sendEmail = async (email, otp) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: `Expensify App <${process.env.EMAIL_USER}>`,
//     to: email,
//     subject: "Your OTP Code",
//     html: `<h3>Your OTP is: <b>${otp}</b></h3>`,
//   });
// };

// module.exports = sendEmail;

import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendMail = async (to, subject, text, html = null) => {
  try {
    const info = await transporter.sendMail({
      from: `"No Reply" <${process.env.MAIL_USER}>`,
      to,
      subject,
      text,
      ...(html && { html }),
    });
    console.log("✅ Email sent:", info.response);
  } catch (error) {
    console.error("❌ Email failed to send:", error.message);
  }
};