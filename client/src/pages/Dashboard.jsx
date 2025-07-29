import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Search, 
  Inbox, 
  FileText, 
  Users, 
  User, 
  Plus,
  Send,
  Smile,
  Paperclip,
  IndianRupee,
  Trash2,
  CheckCircle,
  Clock,
  MoreVertical,
  Edit3,
  Save,
  X
} from 'lucide-react';

const Dashboard = () => {
  const location = useLocation();
  const [message, setMessage] = useState('');

  const handleAddExpense = () => {
    if (message.trim()) {
      // Handle adding expense logic here
      console.log('Adding expense:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddExpense();
    }
  };

  // Helper function to check if a route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/40 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/30">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-slate-900 font-bold text-lg">E</span>
            </div>
            <h1 className="text-xl font-semibold text-white">Inbox</h1>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {/* Concierge */}
          <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-emerald-900/30 to-emerald-800/20 border border-emerald-500/20 shadow-sm">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold text-sm">Concierge</div>
              <div className="text-emerald-200/80 text-xs truncate">It's great to meet you!</div>
            </div>
            <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-sm animate-pulse"></div>
          </div>

          {/* Personal Space */}
          <div className="flex items-center space-x-3 p-4 rounded-xl hover:bg-slate-800/30 transition-all duration-200 cursor-pointer group">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-sm">
              <User className="w-5 h-5 text-slate-200" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-medium text-sm group-hover:text-emerald-200 transition-colors">User</div>
              <div className="text-slate-400 text-xs truncate">This is your personal space. Use it for...</div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto p-4 border-t border-slate-700/30">
          <div className="space-y-1">
            <Link 
              to="/dashboard/inbox" 
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                isActiveRoute('/dashboard/inbox') 
                  ? 'bg-emerald-900/30 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/40'
              }`}
            >
              <Inbox className={`w-5 h-5 transition-colors ${
                isActiveRoute('/dashboard/inbox') 
                  ? 'text-emerald-400' 
                  : 'text-slate-400 group-hover:text-emerald-400'
              }`} />
              <span className={`text-sm font-medium transition-colors ${
                isActiveRoute('/dashboard/inbox') 
                  ? 'text-emerald-300' 
                  : 'text-slate-300 group-hover:text-white'
              }`}>Inbox</span>
            </Link>
            
            <Link 
              to="/dashboard/reports" 
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                isActiveRoute('/dashboard/reports') 
                  ? 'bg-emerald-900/30 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/40'
              }`}
            >
              <FileText className={`w-5 h-5 transition-colors ${
                isActiveRoute('/dashboard/reports') 
                  ? 'text-emerald-400' 
                  : 'text-slate-400 group-hover:text-emerald-400'
              }`} />
              <span className={`text-sm font-medium transition-colors ${
                isActiveRoute('/dashboard/reports') 
                  ? 'text-emerald-300' 
                  : 'text-slate-300 group-hover:text-white'
              }`}>Reports</span>
            </Link>
            
            <Link 
              to="/dashboard/workspaces" 
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                isActiveRoute('/dashboard/workspaces') 
                  ? 'bg-emerald-900/30 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/40'
              }`}
            >
              <Users className={`w-5 h-5 transition-colors ${
                isActiveRoute('/dashboard/workspaces') 
                  ? 'text-emerald-400' 
                  : 'text-slate-400 group-hover:text-emerald-400'
              }`} />
              <span className={`text-sm font-medium transition-colors ${
                isActiveRoute('/dashboard/workspaces') 
                  ? 'text-emerald-300' 
                  : 'text-slate-300 group-hover:text-white'
              }`}>Workspaces</span>
            </Link>
            
            <Link 
              to="/dashboard/account" 
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group ${
                isActiveRoute('/dashboard/account') 
                  ? 'bg-emerald-900/30 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/40'
              }`}
            >
              <User className={`w-5 h-5 transition-colors ${
                isActiveRoute('/dashboard/account') 
                  ? 'text-emerald-400' 
                  : 'text-slate-400 group-hover:text-emerald-400'
              }`} />
              <span className={`text-sm font-medium transition-colors ${
                isActiveRoute('/dashboard/account') 
                  ? 'text-emerald-300' 
                  : 'text-slate-300 group-hover:text-white'
              }`}>Account</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area - This will render the nested routes */}
      <div className="flex-1 flex flex-col bg-slate-900/30 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/30 bg-slate-900/50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-slate-200" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                {location.pathname === '/dashboard/inbox' && 'Inbox'}
                {location.pathname === '/dashboard/reports' && 'Reports'}
                {location.pathname === '/dashboard/workspaces' && 'Workspaces'}
                {location.pathname === '/dashboard/account' && 'Account'}
                {location.pathname === '/dashboard' && 'Dashboard'}
              </h2>
              <p className="text-emerald-300/80 text-sm font-medium">Your space</p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Content Area - Renders nested route components */}
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>

        {/* Message Input - Only show on certain routes */}
        {(location.pathname === '/dashboard/inbox' || location.pathname === '/dashboard') && (
          <div className="p-4 border-t border-slate-700/30 bg-slate-900/50">
            <div className="max-w-4xl">
              <div className="flex items-end space-x-3 bg-slate-800/60 rounded-2xl p-4 border border-slate-700/40 backdrop-blur-sm">
                <button 
                  onClick={handleAddExpense}
                  className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Plus className="w-5 h-5 text-white" />
                </button>
                <div className="flex-1">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add an expense... (e.g., 'Lunch 250 cash' or 'Groceries 1500 card')"
                    rows="1"
                    className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none resize-none text-sm leading-relaxed"
                    style={{ minHeight: '24px', maxHeight: '120px' }}
                    onInput={(e) => {
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group">
                    <Paperclip className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </button>
                  <button className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group">
                    <Smile className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </button>
                  <button 
                    onClick={handleAddExpense}
                    className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group"
                  >
                    <Send className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;