import { useState } from 'react';
import { 
  Receipt, 
  FileText, 
  Send,
  Users,
  Building2,
  Calculator
} from 'lucide-react';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('employees');

  const tabs = [
    { id: 'employees', label: 'For Employees', icon: <Users className="w-5 h-5" /> },
    { id: 'business', label: 'For Business Owners', icon: <Building2 className="w-5 h-5" /> },
    { id: 'finance', label: 'For Finance/Accounting', icon: <Calculator className="w-5 h-5" /> }
  ];

  const stepsData = {
    employees: [
      {
        number: '1',
        title: 'Add Expense',
        description: 'Upload your first receipt with the mobile app, drag-and-drop on the web, or forward it to receipts@expensify.com.',
        icon: <Receipt className="w-12 h-12 text-emerald-600" />,
        color: 'from-emerald-500 to-teal-500'
      },
      {
        number: '2',
        title: 'Create Report',
        description: 'Automatically generate expense reports for reimbursement or reconciliation. Add categories, tags, and comments, then submit.',
        icon: <FileText className="w-12 h-12 text-blue-600" />,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        number: '3',
        title: 'Get Reimbursed',
        description: 'Once approved, get reimbursed directly to your bank account in as little as one business day.',
        icon: <Send className="w-12 h-12 text-purple-600" />,
        color: 'from-purple-500 to-pink-500'
      }
    ],
    business: [
      {
        number: '1',
        title: 'Set Up Policies',
        description: 'Create expense policies and approval workflows. Set spending limits and define categories for your team.',
        icon: <FileText className="w-12 h-12 text-emerald-600" />,
        color: 'from-emerald-500 to-teal-500'
      },
      {
        number: '2',
        title: 'Review & Approve',
        description: 'Get real-time notifications for expense submissions. Review, approve, or request changes with one click.',
        icon: <Users className="w-12 h-12 text-blue-600" />,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        number: '3',
        title: 'Track Spending',
        description: 'Monitor company spending with detailed analytics and reports. Export data to your accounting software.',
        icon: <Calculator className="w-12 h-12 text-purple-600" />,
        color: 'from-purple-500 to-pink-500'
      }
    ],
    finance: [
      {
        number: '1',
        title: 'Integrate Systems',
        description: 'Connect Expensify with QuickBooks, NetSuite, Sage Intacct, or 45+ other accounting platforms.',
        icon: <Building2 className="w-12 h-12 text-emerald-600" />,
        color: 'from-emerald-500 to-teal-500'
      },
      {
        number: '2',
        title: 'Automate Reconciliation',
        description: 'Automatically match receipts with corporate card transactions. Eliminate manual data entry and errors.',
        icon: <Calculator className="w-12 h-12 text-blue-600" />,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        number: '3',
        title: 'Generate Reports',
        description: 'Create comprehensive financial reports and audit trails. Export formatted data ready for your books.',
        icon: <FileText className="w-12 h-12 text-purple-600" />,
        color: 'from-purple-500 to-pink-500'
      }
    ]
  };

  const currentSteps = stepsData[activeTab];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How Expensify's free trial works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple three-step process designed for every role in your organization.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-16 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {currentSteps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative Arrow (not on last item) */}
              {index < currentSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-lg text-gray-600 font-medium">
              Ready to streamline your expense management?
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-emerald-200">
              Get Started
            </button>
            <p className="text-sm text-gray-500">
              No credit card required • Free 30-day trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;