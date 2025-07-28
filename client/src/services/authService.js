import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend URL
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Send OTP
export const sendOtp = async (email) => {
  try {
    const res = await axiosInstance.post("/auth/send-otp", { email });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// Verify OTP
export const verifyOtp = async (email, otp) => {
  try {
    const res = await axiosInstance.post("/auth/verify-otp", { email, otp });
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};
