import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  Inbox,
  FileText,
  Users,
  User,
  Bell,
  CheckCircle,
  Mail,
  MailOpen,
  Filter,
  MoreVertical,
  Trash2,
  Star,
} from "lucide-react";

const InboxPage = () => {
  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [messages, setMessages] = useState([
    // ... (keep your existing messages array)
  ]);

  // Helper function to check if a route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // ... (keep all your existing handler functions)

  const filteredMessages = messages.filter((message) => {
    if (selectedFilter === "unread") return !message.read;
    if (selectedFilter === "starred") return message.starred;
    if (selectedFilter === "messages") return message.type === "message";
    if (selectedFilter === "notifications")
      return message.type === "notification";
    return true;
  });

  const unreadCount = messages.filter((msg) => !msg.read).length;

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/40 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/30">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Inbox className="text-slate-900 w-5 h-5" />
            </div>
            <h1 className="text-xl font-semibold text-white">Inbox</h1>
          </Link>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-slate-700/30">
          <div className="space-y-2">
            {/* ... (keep your existing filter buttons) */}
          </div>
        </div>

        {/* Bottom Navigation - Updated with Links */}
        <div className="mt-auto p-4 border-t border-slate-700/30">
          <div className="space-y-1">
            <Link
              to="/dashboard/inbox"
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActiveRoute("/dashboard/inbox")
                  ? "bg-emerald-900/30 border border-emerald-500/20"
                  : "hover:bg-slate-800/40"
              }`}
            >
              <Inbox
                className={`w-5 h-5 ${
                  isActiveRoute("/dashboard/inbox")
                    ? "text-emerald-400"
                    : "text-slate-400 group-hover:text-emerald-400"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isActiveRoute("/dashboard/inbox")
                    ? "text-emerald-300"
                    : "text-slate-300 group-hover:text-white"
                }`}
              >
                Inbox
              </span>
            </Link>

            <Link
              to="/dashboard/reports"
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActiveRoute("/dashboard/reports")
                  ? "bg-emerald-900/30 border border-emerald-500/20"
                  : "hover:bg-slate-800/40"
              }`}
            >
              <FileText
                className={`w-5 h-5 ${
                  isActiveRoute("/dashboard/reports")
                    ? "text-emerald-400"
                    : "text-slate-400 group-hover:text-emerald-400"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isActiveRoute("/dashboard/reports")
                    ? "text-emerald-300"
                    : "text-slate-300 group-hover:text-white"
                }`}
              >
                Reports
              </span>
            </Link>

            <Link
              to="/dashboard/workspaces"
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActiveRoute("/dashboard/workspaces")
                  ? "bg-emerald-900/30 border border-emerald-500/20"
                  : "hover:bg-slate-800/40"
              }`}
            >
              <Users
                className={`w-5 h-5 ${
                  isActiveRoute("/dashboard/workspaces")
                    ? "text-emerald-400"
                    : "text-slate-400 group-hover:text-emerald-400"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isActiveRoute("/dashboard/workspaces")
                    ? "text-emerald-300"
                    : "text-slate-300 group-hover:text-white"
                }`}
              >
                Workspaces
              </span>
            </Link>

            <Link
              to="/dashboard/account"
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActiveRoute("/dashboard/account")
                  ? "bg-emerald-900/30 border border-emerald-500/20"
                  : "hover:bg-slate-800/40"
              }`}
            >
              <User
                className={`w-5 h-5 ${
                  isActiveRoute("/dashboard/account")
                    ? "text-emerald-400"
                    : "text-slate-400 group-hover:text-emerald-400"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isActiveRoute("/dashboard/account")
                    ? "text-emerald-300"
                    : "text-slate-300 group-hover:text-white"
                }`}
              >
                Account
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-slate-900/30 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/30 bg-slate-900/50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Inbox className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Inbox</h2>
              <p className="text-emerald-300/80 text-sm font-medium">
                {filteredMessages.length}{" "}
                {selectedFilter === "all" ? "messages" : selectedFilter}
                {unreadCount > 0 && selectedFilter === "all" && (
                  <span className="text-emerald-400">
                    {" "}
                    • {unreadCount} unread
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
              <Filter className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Messages List */}
        {/* ... (keep your existing messages list code) */}
      </div>
    </div>
  );
};

export default InboxPage;
