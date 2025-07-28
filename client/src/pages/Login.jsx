// // src/pages/Login.jsx
// import { useState } from "react";
// import { sendOTP, verifyOTP } from "../services/authAPI";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
// import Dashboard from "./Dashboard";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);
//   const [userData, setUserData] = useState({ name: "", phone: "" });
  

//   const handleSendOTP = async () => {
//     const res = await sendOTP(email);
//     if (res.message === "OTP sent successfully") {
//       setStep(2);
//     } else {
//       alert(res.message);
//     }
//   };

//   const handleVerifyOTP = async () => {
//     const res = await verifyOTP({ ...userData, email, otp });
//     if (res.token) {
//       localStorage.setItem("token", res.token);
//       login({ email }); // set user in context
//       navigate("/dashboard"); // redirect
//     } else {
//       alert(res.message);
//     }
//   };

//   return (
//     <div className="p-4 max-w-sm mx-auto">
//       {step === 1 ? (
//         <>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input"
//           />
//           <button onClick={handleSendOTP} className="btn">Send OTP</button>
//         </>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="input"
//           />
//           <input
//             type="text"
//             placeholder="Name"
//             onChange={(e) => setUserData({ ...userData, name: e.target.value })}
//             className="input"
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
//             className="input"
//           />
//           <button onClick={handleVerifyOTP} className="btn">Verify OTP</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Login;


// src/pages/Login.jsx
import { useState } from "react";
import { sendOTP, verifyOTP } from "../services/authAPI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Dashboard from "./Dashboard";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({ name: "", phone: "" });

  const handleSendOTP = async () => {
    const res = await sendOTP(email);
    if (res.message === "OTP sent successfully") {
      setStep(2);
    } else {
      alert(res.message || "Failed to send OTP.");
    }
  };

  const handleVerifyOTP = async () => {
    const res = await verifyOTP({ ...userData, email, otp });
    if (res.token) {
      localStorage.setItem("token", res.token);
      login({ email }); // store user in context
      navigate("/dashboard"); // ✅ Redirect after login
    } else {
      alert(res.message || "Invalid OTP.");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      {step === 1 ? (
        <>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full mb-2"
          />
          <button onClick={handleSendOTP} className="btn w-full">
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="input w-full mb-2"
          />
          <input
            type="text"
            placeholder="Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="input w-full mb-2"
          />
          <input
            type="text"
            placeholder="Phone"
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
            className="input w-full mb-2"
          />
          <button onClick={handleVerifyOTP} className="btn w-full">
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
