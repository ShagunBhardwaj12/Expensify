// client/src/services/authAPI.js
const BASE_URL = "http://localhost:5000/api/auth";

export const sendOTP = async (email) => {
  const response = await fetch(`${BASE_URL}/send-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
};

export const verifyOTP = async ({ email, otp, name, phone }) => {
  const response = await fetch(`${BASE_URL}/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, otp, name, phone }),
  });
  return response.json();
};
