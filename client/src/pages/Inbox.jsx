import React, { useState } from 'react';
import { 
  Search, 
  Inbox, 
  FileText, 
  Users, 
  User, 
  Bell,
  CheckCircle,
  Clock,
  Mail,
  MailOpen,
  Filter,
  MoreVertical,
  Reply,
  Forward,
  Trash2,
  Star,
  Archive
} from 'lucide-react';

const InboxPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'message',
      from: 'Finance Team',
      subject: 'Expense Report #ER-2024-0127 Approved',
      preview: 'Your expense report for July 2024 has been approved and processed for reimbursement...',
      timestamp: '2 hours ago',
      read: false,
      starred: true,
      priority: 'high'
    },
    {
      id: 2,
      type: 'notification',
      from: 'System',
      subject: 'Monthly Expense Summary Available',
      preview: 'Your monthly expense summary for July 2024 is now available for download...',
      timestamp: '4 hours ago',
      read: true,
      starred: false,
      priority: 'normal'
    },
    {
      id: 3,
      type: 'message',
      from: 'HR Department',
      subject: 'Policy Update: Travel Expense Guidelines',
      preview: 'We have updated our travel expense policies. Please review the new guidelines...',
      timestamp: '1 day ago',
      read: false,
      starred: false,
      priority: 'normal'
    },
    {
      id: 4,
      type: 'notification',
      from: 'Concierge',
      subject: 'Expense Reminder',
      preview: 'You have 3 pending expenses that need action. Would you like to review them?',
      timestamp: '2 days ago',
      read: true,
      starred: false,
      priority: 'low'
    },
    {
      id: 5,
      type: 'message',
      from: 'Admin',
      subject: 'Welcome to Expense Management System',
      preview: 'Welcome! Here\'s a quick guide to get you started with managing your expenses...',
      timestamp: '1 week ago',
      read: true,
      starred: false,
      priority: 'normal'
    }
  ]);

  const handleMessageClick = (messageId) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, read: true } : msg
    ));
  };

  const handleSelectMessage = (messageId) => {
    setSelectedMessages(prev => 
      prev.includes(messageId) 
        ? prev.filter(id => id !== messageId)
        : [...prev, messageId]
    );
  };

  const handleStarMessage = (messageId) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, starred: !msg.starred } : msg
    ));
  };

  const handleDeleteMessage = (messageId) => {
    setMessages(messages.filter(msg => msg.id !== messageId));
    setSelectedMessages(prev => prev.filter(id => id !== messageId));
  };

  const handleMarkAsRead = (messageId) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, read: true } : msg
    ));
  };

  const filteredMessages = messages.filter(message => {
    if (selectedFilter === 'unread') return !message.read;
    if (selectedFilter === 'starred') return message.starred;
    if (selectedFilter === 'messages') return message.type === 'message';
    if (selectedFilter === 'notifications') return message.type === 'notification';
    return true;
  });

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/40 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/30">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Inbox className="text-slate-900 w-5 h-5" />
            </div>
            <h1 className="text-xl font-semibold text-white">Inbox</h1>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-slate-700/30">
          <div className="space-y-2">
            <button 
              onClick={() => setSelectedFilter('all')}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedFilter === 'all' 
                  ? 'bg-emerald-900/30 text-emerald-200 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/30 text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Inbox className="w-4 h-4" />
                <span className="text-sm font-medium">All Messages</span>
              </div>
              <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                {messages.length}
              </span>
            </button>

            <button 
              onClick={() => setSelectedFilter('unread')}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedFilter === 'unread' 
                  ? 'bg-emerald-900/30 text-emerald-200 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/30 text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">Unread</span>
              </div>
              {unreadCount > 0 && (
                <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => setSelectedFilter('starred')}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedFilter === 'starred' 
                  ? 'bg-emerald-900/30 text-emerald-200 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/30 text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Star className="w-4 h-4" />
                <span className="text-sm font-medium">Starred</span>
              </div>
              <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                {messages.filter(msg => msg.starred).length}
              </span>
            </button>

            <button 
              onClick={() => setSelectedFilter('messages')}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedFilter === 'messages' 
                  ? 'bg-emerald-900/30 text-emerald-200 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/30 text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <MailOpen className="w-4 h-4" />
                <span className="text-sm font-medium">Messages</span>
              </div>
              <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                {messages.filter(msg => msg.type === 'message').length}
              </span>
            </button>

            <button 
              onClick={() => setSelectedFilter('notifications')}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                selectedFilter === 'notifications' 
                  ? 'bg-emerald-900/30 text-emerald-200 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/30 text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Bell className="w-4 h-4" />
                <span className="text-sm font-medium">Notifications</span>
              </div>
              <span className="text-xs bg-slate-700/50 px-2 py-1 rounded-full">
                {messages.filter(msg => msg.type === 'notification').length}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto p-4 border-t border-slate-700/30">
          <div className="space-y-1">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-900/30 border border-emerald-500/20">
              <Inbox className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-200 text-sm font-medium">Inbox</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 cursor-pointer group">
              <FileText className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">Reports</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 cursor-pointer group">
              <Users className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">Workspaces</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 cursor-pointer group">
              <User className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">Account</span>
            </div>
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
                {filteredMessages.length} {selectedFilter === 'all' ? 'messages' : selectedFilter}
                {unreadCount > 0 && selectedFilter === 'all' && (
                  <span className="text-emerald-400"> • {unreadCount} unread</span>
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
        <div className="flex-1 overflow-y-auto">
          {filteredMessages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                <Inbox className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-400 mb-2">No messages found</h3>
              <p className="text-slate-500">
                {selectedFilter === 'all' ? 'Your inbox is empty' : `No ${selectedFilter} messages`}
              </p>
            </div>
          ) : (
            <div className="p-4 space-y-2">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => handleMessageClick(message.id)}
                  className={`group relative bg-slate-800/40 backdrop-blur-sm rounded-xl border transition-all duration-200 cursor-pointer hover:bg-slate-800/60 hover:border-emerald-500/30 hover:shadow-lg ${
                    message.read 
                      ? 'border-slate-700/30' 
                      : 'border-emerald-500/20 bg-slate-800/60'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                        message.type === 'notification' 
                          ? 'bg-gradient-to-br from-orange-500 to-orange-600' 
                          : 'bg-gradient-to-br from-blue-500 to-blue-600'
                      }`}>
                        {message.type === 'notification' ? (
                          <Bell className="w-5 h-5 text-white" />
                        ) : (
                          <Mail className="w-5 h-5 text-white" />
                        )}
                      </div>

                      {/* Message Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className={`font-semibold ${message.read ? 'text-slate-300' : 'text-white'}`}>
                              {message.from}
                            </span>
                            {message.priority === 'high' && (
                              <span className="bg-red-900/30 text-red-400 text-xs px-2 py-1 rounded-full font-medium">
                                High Priority
                              </span>
                            )}
                            {!message.read && (
                              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-400 text-sm">{message.timestamp}</span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleStarMessage(message.id);
                              }}
                              className={`w-6 h-6 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 ${
                                message.starred ? 'text-yellow-400' : 'text-slate-500 hover:text-yellow-400'
                              }`}
                            >
                              <Star className="w-4 h-4" fill={message.starred ? 'currentColor' : 'none'} />
                            </button>
                          </div>
                        </div>
                        
                        <h3 className={`font-medium mb-2 ${message.read ? 'text-slate-200' : 'text-white'}`}>
                          {message.subject}
                        </h3>
                        
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                          {message.preview}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons (Hidden by default, shown on hover) */}
                    <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <div className="flex items-center space-x-1">
                        {!message.read && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMarkAsRead(message.id);
                            }}
                            className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group"
                            title="Mark as read"
                          >
                            <CheckCircle className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                          </button>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteMessage(message.id);
                          }}
                          className="w-8 h-8 rounded-full hover:bg-red-900/30 flex items-center justify-center transition-all duration-200 group"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4 text-slate-400 group-hover:text-red-400 transition-colors" />
                        </button>
                        <button
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group"
                          title="More actions"
                        >
                          <MoreVertical className="w-4 h-4 text-slate-400 group-hover:text-slate-300 transition-colors" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InboxPage;