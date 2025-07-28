import { useState } from 'react';
import { ArrowRight, CheckCircle, Star, Play } from 'lucide-react';

const CTA = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailOrPhone) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmailOrPhone("");
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-full text-emerald-700 font-medium mb-6">
            <span>Join thousands of happy users</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to simplify your expense management?
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get started with Expensify today and experience the fastest way to track expenses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              placeholder="Email or phone"
              className="flex-1 px-6 py-3 border border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button
              onClick={handleSubmit}
              disabled={isSubmitted}
              className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-colors flex items-center justify-center"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Sent!
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <Star className="w-5 h-5 text-emerald-600 fill-current" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">4.8/5 Rating</h3>
            </div>
            <p className="text-gray-600">
              Rated by thousands of users for its simplicity and effectiveness.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">5-Minute Setup</h3>
            </div>
            <p className="text-gray-600">
              Get up and running in minutes with our intuitive interface.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Free Trial</h3>
            </div>
            <p className="text-gray-600">
              Try all features risk-free with our 30-day trial.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold group">
            <Play className="w-5 h-5 mr-2 text-emerald-600 group-hover:text-emerald-700" />
            Watch product demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;