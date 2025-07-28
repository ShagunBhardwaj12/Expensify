import { 
  CreditCard, 
  Receipt, 
  Plane, 
  FileText, 
  Globe, 
  Brain,
  Wallet,
  BarChart3,
  Building
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Expense management",
      description: "Automatically create, submit, approve, and reimburse expenses. Reports automatically sync with accounting.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Travel",
      description: "Book flights, hotels, cars, and rail right in the app. Every booking syncs with your expenses for total T&E.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Expensify Card",
      description: "The Expensify Visa® Commercial Card earns cash back on US purchases and lowers your Expensify bill.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Receipt className="w-8 h-8" />,
      title: "Receipt scanning",
      description: "Snap a photo, forward to receipts@expensify.com, or upload a file — we'll scan the details!",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate card import",
      description: "Connect company cards from 10,000+ banks worldwide for automatic receipt matching and reconciliation.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global reimbursements",
      description: "Reimburse employees or independent contractors anywhere in the world, in their local currency.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Virtual cards",
      description: "Instantly issue unlimited virtual cards for employees, vendors, or projects. Free with every Expensify Card.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Expense reports",
      description: "Submit, review, and approve expenses in seconds. Expensify handles the matching and policy checks.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-powered expenses",
      description: "Automate expense categorization, flag policy violations, and reduce manual errors with Expensify's AI.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage expenses, travel, and corporate spending in one powerful platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl from-emerald-400 to-teal-400"></div>
              
              {/* Icon */}
              <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                {/* Learn More Button */}
                <button className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Learn More
                  <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full px-8 py-4">
            <span className="text-white font-semibold">Ready to get started?</span>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Try Expensify Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;