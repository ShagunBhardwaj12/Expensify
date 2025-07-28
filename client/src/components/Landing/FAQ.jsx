import { useState } from 'react';
import { Plus, Minus, Search, MessageCircle, Mail, Phone } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Questions', count: 12 },
    { id: 'getting-started', label: 'Getting Started', count: 4 },
    { id: 'billing', label: 'Billing & Plans', count: 3 },
    { id: 'features', label: 'Features', count: 3 },
    { id: 'security', label: 'Security', count: 2 }
  ];

  const faqs = [
    {
      id: 0,
      category: 'getting-started',
      question: 'How do I get started with Expensify?',
      answer: 'Getting started is simple! Sign up for a free account, invite your team members, and start submitting expenses immediately. You can upload receipts via our mobile app, web interface, or by forwarding them to receipts@expensify.com. Our AI will automatically extract the details and categorize your expenses.',
      popular: true
    },
    {
      id: 1,
      category: 'getting-started',
      question: 'Do I need to install any software?',
      answer: 'No installation required! Expensify works entirely in your web browser. However, we highly recommend downloading our mobile apps for iOS and Android to easily capture receipts on-the-go and submit expenses from anywhere.',
      popular: false
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'Can I import my existing expense data?',
      answer: 'Yes! You can easily import your historical expense data from CSV files or connect your existing accounting software. We support imports from QuickBooks, Xero, NetSuite, and many other platforms. Our support team can help you with the migration process.',
      popular: false
    },
    {
      id: 3,
      category: 'getting-started',
      question: 'How long does it take to set up my account?',
      answer: 'Account setup takes just 2-3 minutes! Once you verify your email, you can immediately start adding expenses. Setting up policies, approval workflows, and integrations typically takes 15-30 minutes depending on your needs.',
      popular: false
    },
    {
      id: 4,
      category: 'billing',
      question: 'How much does Expensify cost?',
      answer: 'We offer flexible pricing starting with a free plan for individuals. Our Team plan starts at $5 per user per month, and our Corporate plan is $9 per user per month. All plans include a 30-day free trial with no credit card required.',
      popular: true
    },
    {
      id: 5,
      category: 'billing',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time with no penalties or cancellation fees. Your account will remain active until the end of your current billing period, and you\'ll retain access to all your data.',
      popular: false
    },
    {
      id: 6,
      category: 'billing',
      question: 'Do you offer discounts for annual plans?',
      answer: 'Yes! We offer a 20% discount when you pay annually. Nonprofits and educational institutions are eligible for additional discounts. Contact our sales team for volume pricing on larger teams.',
      popular: false
    },
    {
      id: 7,
      category: 'features',
      question: 'What integrations do you support?',
      answer: 'We integrate with 45+ platforms including QuickBooks, Xero, NetSuite, Sage Intacct, Workday, Gusto, Slack, and many more. We also offer a robust API for custom integrations. New integrations are added regularly based on customer feedback.',
      popular: true
    },
    {
      id: 8,
      category: 'features',
      question: 'Can I set up approval workflows?',
      answer: 'Yes! You can create custom approval workflows based on expense amount, category, or department. Set up multi-level approvals, delegate approval authority, and get real-time notifications. Approvers can review and approve expenses from anywhere.',
      popular: false
    },
    {
      id: 9,
      category: 'features',
      question: 'Does Expensify work offline?',
      answer: 'Our mobile apps work offline for capturing receipts and creating expenses. Once you\'re back online, everything syncs automatically. The web interface requires an internet connection for real-time collaboration features.',
      popular: false
    },
    {
      id: 10,
      category: 'security',
      question: 'Is my financial data secure?',
      answer: 'Security is our top priority. We use bank-level 256-bit SSL encryption, are SOC 2 Type 2 certified, and maintain PCI DSS compliance. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee.',
      popular: true
    },
    {
      id: 11,
      category: 'security',
      question: 'Who can access my expense data?',
      answer: 'Only authorized users in your organization can access your expense data. You have full control over user permissions and can set different access levels for employees, managers, and administrators. We never share your data with third parties without explicit consent.',
      popular: false
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-emerald-900 to-teal-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-emerald-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Find answers to common questions about Expensify. Can't find what you're looking for? Our support team is here to help.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                    }`}
                  >
                    <span className="font-medium">{category.label}</span>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-600 text-gray-300'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Contact Support */}
              <div className="mt-8 p-4 bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-sm rounded-xl border border-emerald-700/50">
                <h4 className="font-semibold text-white mb-2">Still need help?</h4>
                <p className="text-sm text-gray-300 mb-4">Our support team is available 24/7 to assist you.</p>
                <div className="space-y-2">
                  <a href="#" className="flex items-center text-sm text-emerald-400 hover:text-emerald-300 font-medium">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                  </a>
                  <a href="#" className="flex items-center text-sm text-emerald-400 hover:text-emerald-300 font-medium">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Support
                  </a>
                  <a href="#" className="flex items-center text-sm text-emerald-400 hover:text-emerald-300 font-medium">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No results found</h3>
                <p className="text-gray-400">Try adjusting your search terms or browse different categories.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 ${
                      openItems.has(faq.id)
                        ? 'border-emerald-400/50 shadow-xl shadow-emerald-500/10'
                        : 'border-slate-700/50 hover:border-slate-600/50 hover:shadow-lg'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {faq.popular && (
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                          <h3 className="text-lg font-semibold text-white pr-4">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`flex-shrink-0 transition-transform duration-300 ${
                          openItems.has(faq.id) ? 'transform rotate-180' : ''
                        }`}>
                          {openItems.has(faq.id) ? (
                            <Minus className="w-6 h-6 text-emerald-400" />
                          ) : (
                            <Plus className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openItems.has(faq.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-lg mb-6 opacity-90">Join thousands of companies already using Expensify</p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
