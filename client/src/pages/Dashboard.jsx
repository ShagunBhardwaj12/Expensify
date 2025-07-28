import React, { useState } from 'react';
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
  const [message, setMessage] = useState('');
  const [selectedActions, setSelectedActions] = useState({});
  const [editingExpense, setEditingExpense] = useState(null);
  const [editForm, setEditForm] = useState({
    amount: '',
    type: 'Cash',
    description: '',
    date: ''
  });
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      amount: 1500,
      type: 'Cash',
      date: 'Jul 12',
      timestamp: 'Jul 12, 2025 at 11:05 PM',
      status: 'pending', // pending, submitted, archived
      submittedTo: null,
      description: 'Initial expense'
    }
  ]);

  const handleActionSelect = (expenseId, action) => {
    if (action === 'submit') {
      // Update expense status to submitted
      setExpenses(expenses.map(expense => 
        expense.id === expenseId 
          ? { ...expense, status: 'submitted', submittedTo: 'Finance Team' }
          : expense
      ));
      setSelectedActions({...selectedActions, [expenseId]: 'submitted'});
    } else if (action === 'nothing') {
      // Update expense status to archived
      setExpenses(expenses.map(expense => 
        expense.id === expenseId 
          ? { ...expense, status: 'archived' }
          : expense
      ));
      setSelectedActions({...selectedActions, [expenseId]: 'archived'});
    }
  };

  const handleDeleteExpense = (expenseId) => {
    setExpenses(expenses.filter(expense => expense.id !== expenseId));
    // Remove from selectedActions as well
    const newSelectedActions = {...selectedActions};
    delete newSelectedActions[expenseId];
    setSelectedActions(newSelectedActions);
    // Close edit mode if deleting currently edited expense
    if (editingExpense === expenseId) {
      setEditingExpense(null);
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense.id);
    setEditForm({
      amount: expense.amount.toString(),
      type: expense.type,
      description: expense.description || '',
      date: expense.date
    });
  };

  const handleSaveEdit = () => {
    if (!editForm.amount || isNaN(editForm.amount)) {
      alert('Please enter a valid amount');
      return;
    }

    setExpenses(expenses.map(expense => 
      expense.id === editingExpense 
        ? {
            ...expense,
            amount: parseFloat(editForm.amount),
            type: editForm.type,
            description: editForm.description,
            date: editForm.date,
            // Reset status to pending if it was submitted/archived
            status: expense.status === 'pending' ? 'pending' : 'pending',
            submittedTo: null
          }
        : expense
    ));

    // Clear selected actions for this expense since we're editing
    const newSelectedActions = {...selectedActions};
    delete newSelectedActions[editingExpense];
    setSelectedActions(newSelectedActions);

    setEditingExpense(null);
    setEditForm({ amount: '', type: 'Cash', description: '', date: '' });
  };

  const handleCancelEdit = () => {
    setEditingExpense(null);
    setEditForm({ amount: '', type: 'Cash', description: '', date: '' });
  };

  const handleAddExpense = () => {
    if (message.trim()) {
      // Simple expense parsing - look for amount in the message
      const amountMatch = message.match(/(\d+(?:\.\d{2})?)/);
      const amount = amountMatch ? parseFloat(amountMatch[1]) : 0;
      
      // Determine type based on keywords
      let type = 'Cash';
      if (message.toLowerCase().includes('card') || message.toLowerCase().includes('credit') || message.toLowerCase().includes('debit')) {
        type = 'Card';
      } else if (message.toLowerCase().includes('upi') || message.toLowerCase().includes('online')) {
        type = 'UPI';
      }

      const newExpense = {
        id: expenses.length + 1,
        amount: amount || Math.floor(Math.random() * 5000) + 100, // Random if no amount found
        type: type,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        timestamp: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }) + ' at ' + new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        }),
        description: message,
        status: 'pending',
        submittedTo: null
      };

      setExpenses([newExpense, ...expenses]);
      setMessage('');
      setSelectedActions({});
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddExpense();
    }
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
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 cursor-pointer group">
              <Inbox className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">Inbox</span>
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
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-slate-200" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">User</h2>
              <p className="text-emerald-300/80 text-sm font-medium">Your space</p>
            </div>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl">
            {/* Welcome Section */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center mb-6 shadow-xl border border-slate-600/30">
                <User className="w-10 h-10 text-slate-300" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Your space</h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                This is your personal space. Use it for notes, tasks, drafts, and reminders. Use the + button to track an expense.
              </p>
            </div>

            {/* Expenses List */}
            {expenses.map((expense, index) => (
              <div key={expense.id} className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/30 p-6 mb-6 shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <User className="w-5 h-5 text-slate-200" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold">User</span>
                        <span className="text-slate-400 text-sm">{expense.timestamp}</span>
                        {/* Status Badge */}
                        {expense.status === 'submitted' && (
                          <div className="flex items-center space-x-1 bg-emerald-900/30 px-2 py-1 rounded-full">
                            <CheckCircle className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400 text-xs font-medium">Submitted</span>
                          </div>
                        )}
                        {expense.status === 'archived' && (
                          <div className="flex items-center space-x-1 bg-slate-700/30 px-2 py-1 rounded-full">
                            <Clock className="w-3 h-3 text-slate-400" />
                            <span className="text-slate-400 text-xs font-medium">Archived</span>
                          </div>
                        )}
                      </div>
                      {/* Delete Button */}
                      <button
                        onClick={() => handleDeleteExpense(expense.id)}
                        className="w-8 h-8 rounded-full hover:bg-red-900/30 flex items-center justify-center transition-all duration-200 group"
                        title="Delete expense"
                      >
                        <Trash2 className="w-4 h-4 text-slate-400 group-hover:text-red-400 transition-colors" />
                      </button>
                    </div>
                    
                    {/* Expense Description */}
                    {expense.description && (
                      <div className="mb-4 p-3 bg-slate-700/30 rounded-lg">
                        <p className="text-slate-300 text-sm">{expense.description}</p>
                      </div>
                    )}
                    
                    {/* Submitted To Info */}
                    {expense.submittedTo && (
                      <div className="mb-4 p-3 bg-emerald-900/20 border border-emerald-500/20 rounded-lg">
                        <p className="text-emerald-300 text-sm">
                          <span className="font-medium">Submitted to:</span> {expense.submittedTo}
                        </p>
                      </div>
                    )}
                    
                    {/* Expense Card */}
                    <div className="bg-gradient-to-br from-slate-700/40 to-slate-800/60 rounded-xl p-8 border border-slate-600/20 shadow-lg mb-6">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-600/50 rounded-full flex items-center justify-center">
                          {expense.type === 'Card' ? (
                            <FileText className="w-8 h-8 text-blue-400" />
                          ) : expense.type === 'UPI' ? (
                            <FileText className="w-8 h-8 text-purple-400" />
                          ) : (
                            <IndianRupee className="w-8 h-8 text-green-400" />
                          )}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-400 text-sm mb-2 font-medium">{expense.date} • {expense.type}</div>
                        <div className="text-3xl font-bold text-white">₹{expense.amount.toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Concierge Response - Only show for pending expenses */}
                    {expense.status === 'pending' && (
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <Users className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-white font-semibold">Concierge</span>
                            <span className="text-slate-400 text-sm">{expense.timestamp}</span>
                          </div>
                          <p className="text-slate-300 mb-5 leading-relaxed">What would you like to do with this expense?</p>
                          
                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-3">
                            <button 
                              onClick={() => handleActionSelect(expense.id, 'submit')}
                              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white border border-emerald-500/50"
                            >
                              Submit it to someone
                            </button>
                            <button 
                              onClick={() => handleActionSelect(expense.id, 'nothing')}
                              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 bg-slate-700/60 text-slate-300 hover:bg-slate-600/60 border border-slate-600/30"
                            >
                              Nothing for now
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Status Messages */}
                    {expense.status === 'submitted' && (
                      <div className="flex items-start space-x-3 mt-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-emerald-400 font-semibold text-sm">System</span>
                            <span className="text-slate-400 text-xs">Just now</span>
                          </div>
                          <p className="text-emerald-300 text-sm">✅ Expense successfully submitted to {expense.submittedTo} for approval.</p>
                        </div>
                      </div>
                    )}

                    {expense.status === 'archived' && (
                      <div className="flex items-start space-x-3 mt-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                          <Clock className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-slate-400 font-semibold text-sm">System</span>
                            <span className="text-slate-400 text-xs">Just now</span>
                          </div>
                          <p className="text-slate-400 text-sm">📁 Expense archived. No further action needed.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
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
      </div>
    </div>
  );
};

export default Dashboard;