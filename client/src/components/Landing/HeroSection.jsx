import { useState } from 'react';
import { Star, Play, X } from 'lucide-react';
import { sendOTP } from '../../services/authAPI';

const HeroSection = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSendOtp = async () => {
    if (!emailOrPhone) {
      alert("Please enter your email or phone number.");
      return;
    }

    try {
      const res = await sendOTP(emailOrPhone);
      alert(res.message || "OTP sent successfully!");
      setShowOtpModal(true);
    } catch (error) {
      alert(error.message || "Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    // Placeholder function - you'll implement the real API call here
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "OTP verified successfully!" });
      }, 1000);
    });
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    setIsVerifying(true);
    try {
      const result = await verifyOtp();
      alert(result.message || "OTP verified successfully!");
      setShowOtpModal(false);
      setOtp("");
      // You can redirect or perform other actions here after successful verification
    } catch (error) {
      alert(error.message || "OTP verification failed.");
    } finally {
      setIsVerifying(false);
    }
  };

  const closeModal = () => {
    setShowOtpModal(false);
    setOtp("");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 to-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                The <span className="text-emerald-400">fastest</span> 🚀 way<br />
                to do your expenses
              </h1>
              
              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">All inclusive. Manage expenses, book travel, reimburse employees, and create expense reports.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Corporate cards. Bring your own or get the Expensify Card for cash back on every US purchase.</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">45+ integrations. QuickBooks, NetSuite, Sage Intacct, Xero, Workday, Gusto, and so much more.</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.5</span>
                <span className="text-gray-300">(4,889 reviews)</span>
              </div>

              {/* User Type Selection */}
              <div className="mb-8">
                <p className="text-xl font-semibold mb-4">I want to:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-teal-800 border border-teal-600 rounded-lg p-4 text-center cursor-pointer hover:bg-teal-700 transition-colors">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Organize my own expenses</p>
                  </div>
                  <div className="bg-teal-800 border border-teal-600 rounded-lg p-4 text-center cursor-pointer hover:bg-teal-700 transition-colors">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Manage expenses for 1-9 employees</p>
                  </div>
                  <div className="bg-teal-800 border border-teal-600 rounded-lg p-4 text-center cursor-pointer hover:bg-teal-700 transition-colors">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">Manage expenses for 10+ employees</p>
                  </div>
                </div>
              </div>

              {/* Email Input and CTA */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <input
                  type="text"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="Email or phone"
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button
                  onClick={handleSendOtp}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>

              {/* Alternative Sign In */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-300">Or get started with</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">G</span>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-6">
                {/* Reports Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">📊</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Reports</h3>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-xs bg-gray-100 rounded-full">Submit</button>
                    <button className="px-3 py-1 text-xs bg-gray-100 rounded-full">Approve</button>
                    <button className="px-3 py-1 text-xs bg-gray-100 rounded-full">Pay</button>
                    <button className="px-3 py-1 text-xs bg-gray-100 rounded-full">Export</button>
                  </div>
                </div>

                {/* Expense List */}
                <div className="space-y-3">
                  {[
                    { company: "Veloctech Systems", user: "Drew", amount: "June 27", color: "bg-blue-500" },
                    { company: "Nitro Fuel Supply Co.", user: "Jamie", amount: "June 27", color: "bg-purple-500" },
                    { company: "Harpin Nutrition Group", user: "Quinn", amount: "June 26", color: "bg-orange-500" },
                    { company: "Tracksuit Outfitters", user: "Devon", amount: "June 26", color: "bg-green-500" },
                    { company: "Pitlane Center", user: "Avery", amount: "June 25", color: "bg-red-500" },
                    { company: "Carbon Crank Catering", user: "Logan", amount: "June 25", color: "bg-yellow-500" },
                    { company: "Ignition Media", user: "Rowan", amount: "June 24", color: "bg-blue-500" },
                    { company: "Slipstream Simulators", user: "Jordan", amount: "June 23", color: "bg-purple-500" },
                    { company: "Downforce Research Lab", user: "Tay", amount: "June 22", color: "bg-orange-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                      <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.company}</p>
                        <p className="text-xs text-gray-500">{item.amount}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                        <span className="text-xs text-gray-600">{item.user}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Card Preview */}
                <div className="mt-6 bg-gray-900 rounded-xl p-4 text-white relative overflow-hidden">
                  <div className="absolute top-2 right-2">
                    <div className="bg-emerald-500 text-white px-2 py-1 rounded-full flex items-center space-x-1">
                      <Play className="w-3 h-3" />
                      <span className="text-xs">Watch video</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="text-emerald-400 font-bold">Expensify</span>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-bold">VISA</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs text-gray-300">Cardholder</p>
                    <p className="text-sm font-medium">Patty</p>
                    <p className="text-xs text-gray-300 mt-2">Remaining limit</p>
                    <p className="text-lg font-bold">$10,000</p>
                    <p className="text-xs text-gray-300">Card limit</p>
                    <p className="text-sm">$10,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verify Your OTP</h3>
              <p className="text-gray-600">We've sent a 6-digit code to {emailOrPhone}</p>
            </div>

            {/* OTP Input */}
            <div className="mb-6">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="123456"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                maxLength="6"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-3">
              <button
                onClick={handleVerifyOtp}
                disabled={isVerifying || otp.length !== 6}
                className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {isVerifying ? 'Verifying...' : 'Verify OTP'}
              </button>
              
              <button
                onClick={handleSendOtp}
                className="w-full text-emerald-600 hover:text-emerald-700 py-2 text-sm font-medium"
              >
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;