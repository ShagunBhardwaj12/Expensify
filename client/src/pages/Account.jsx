// import React from 'react'

// function Account() {
//   return (
//     <div>
//       Account
//     </div>
//   )
// }

// export default Account
import React from 'react';
import { LogOut, User } from 'lucide-react';

const Account = () => {
  const handleLogout = () => {
    // Clear any stored authentication data (Note: localStorage not available in Claude environment)
    // In a real app, you would do:
    // localStorage.removeItem('authToken');
    // sessionStorage.clear();
    
    // Navigate to login page - you would implement this based on your routing setup
    // navigate('/login');
    
    // You can also add additional logout logic here like:
    // - API call to logout endpoint
    // - Clear user context/state
    // - Show logout confirmation
    console.log('User logged out');
    alert('Logout successful! (In a real app, this would redirect to login)');
  };

  return (
    <div className="h-full bg-slate-900/30 backdrop-blur-sm">
      <div className="p-6 max-w-2xl">
        {/* Account Header */}
        <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/40 backdrop-blur-sm mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">User Account</h3>
              <p className="text-emerald-300/80 text-sm">Manage your account settings</p>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/40 backdrop-blur-sm">
          <h4 className="text-lg font-medium text-white mb-4">Account Actions</h4>
          
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full p-4 rounded-xl bg-red-900/30 hover:bg-red-900/50 border border-red-500/20 hover:border-red-500/40 transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
            <div className="text-left">
              <div className="text-red-300 font-medium text-sm">Logout</div>
              <div className="text-red-200/60 text-xs">Sign out of your account</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;