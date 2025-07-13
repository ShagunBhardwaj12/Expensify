import { Link } from 'react-router-dom'
import { Star, Play } from 'lucide-react';

const HeroSection = () => {
  return (

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
                type="email"
                placeholder="Email or phone"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap">
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
  );
};

export default HeroSection