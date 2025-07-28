import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  Users, 
  User, 
  Calendar,
  Download,
  Filter,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  IndianRupee,
  PieChart,
  BarChart3,
  Eye,
  Share,
  Printer,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  FileDown,
  Save
} from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showReportModal, setShowReportModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportFormat, setReportFormat] = useState('pdf');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const reportData = {
    summary: {
      totalExpenses: 45720,
      totalReports: 8,
      pendingAmount: 12500,
      approvedAmount: 33220,
      thisMonth: {
        expenses: 15240,
        change: 12.5,
        trend: 'up'
      }
    },
    monthlyBreakdown: [
      { month: 'Jan', amount: 8500 },
      { month: 'Feb', amount: 12300 },
      { month: 'Mar', amount: 9800 },
      { month: 'Apr', amount: 15600 },
      { month: 'May', amount: 11200 },
      { month: 'Jun', amount: 18400 },
      { month: 'Jul', amount: 15240 }
    ],
    categoryBreakdown: [
      { category: 'Travel', amount: 18500, percentage: 40.5, color: 'emerald' },
      { category: 'Meals', amount: 12300, percentage: 26.9, color: 'blue' },
      { category: 'Office Supplies', amount: 8200, percentage: 17.9, color: 'purple' },
      { category: 'Miscellaneous', amount: 6720, percentage: 14.7, color: 'orange' }
    ],
    recentReports: [
      {
        id: 'ER-2024-0127',
        title: 'July Monthly Expenses',
        date: '2024-07-28',
        amount: 15240,
        status: 'approved',
        submittedBy: 'You',
        expenses: 12,
        details: [
          { item: 'Flight tickets to Mumbai', amount: 8500, category: 'Travel' },
          { item: 'Hotel accommodation', amount: 4200, category: 'Travel' },
          { item: 'Client dinner', amount: 1540, category: 'Meals' },
          { item: 'Taxi fares', amount: 1000, category: 'Travel' }
        ]
      },
      {
        id: 'ER-2024-0115',
        title: 'Conference Travel - Mumbai',
        date: '2024-07-15',
        amount: 8500,
        status: 'pending',
        submittedBy: 'You',
        expenses: 6,
        details: [
          { item: 'Conference registration', amount: 5000, category: 'Miscellaneous' },
          { item: 'Travel expenses', amount: 2500, category: 'Travel' },
          { item: 'Meals during conference', amount: 1000, category: 'Meals' }
        ]
      },
      {
        id: 'ER-2024-0108',
        title: 'Client Meeting Expenses',
        date: '2024-07-08',
        amount: 3200,
        status: 'approved',
        submittedBy: 'You',
        expenses: 4,
        details: [
          { item: 'Client lunch', amount: 1800, category: 'Meals' },
          { item: 'Presentation materials', amount: 800, category: 'Office Supplies' },
          { item: 'Transportation', amount: 600, category: 'Travel' }
        ]
      },
      {
        id: 'ER-2024-0102',
        title: 'Office Supplies & Equipment',
        date: '2024-07-02',
        amount: 12800,
        status: 'rejected',
        submittedBy: 'You',
        expenses: 8,
        details: [
          { item: 'Laptop accessories', amount: 8000, category: 'Office Supplies' },
          { item: 'Stationery', amount: 2800, category: 'Office Supplies' },
          { item: 'Software licenses', amount: 2000, category: 'Office Supplies' }
        ]
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'emerald';
      case 'pending': return 'yellow';
      case 'rejected': return 'red';
      default: return 'slate';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'pending': return Clock;
      case 'rejected': return AlertCircle;
      default: return Clock;
    }
  };

  const handleDownloadReport = (report = null, format = 'pdf') => {
    const reportToDownload = report || {
      title: `${selectedPeriod} Report`,
      data: reportData.summary,
      period: selectedPeriod,
      category: selectedCategory
    };

    // Simulate file download
    const content = generateReportContent(reportToDownload, format);
    const blob = new Blob([content], { 
      type: format === 'pdf' ? 'application/pdf' : 'text/csv' 
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${reportToDownload.title.replace(/\s+/g, '_')}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Show success message (you could use a toast library here)
    alert(`Report downloaded successfully as ${format.toUpperCase()}!`);
  };

  const generateReportContent = (report, format) => {
    if (format === 'csv') {
      let csvContent = 'Item,Amount,Category,Date\n';
      if (report.details) {
        report.details.forEach(detail => {
          csvContent += `"${detail.item}",${detail.amount},"${detail.category}","${report.date}"\n`;
        });
      } else {
        // For summary reports
        reportData.categoryBreakdown.forEach(category => {
          csvContent += `"${category.category}",${category.amount},"${category.category}","${new Date().toISOString().split('T')[0]}"\n`;
        });
      }
      return csvContent;
    } else {
      // For PDF (as text content - in real app you'd use a PDF library)
      return `EXPENSE REPORT: ${report.title}
Generated: ${new Date().toLocaleDateString()}
Period: ${selectedPeriod}
Category: ${selectedCategory}

SUMMARY:
Total Expenses: ₹${reportData.summary.totalExpenses.toLocaleString()}
Total Reports: ${reportData.summary.totalReports}
Pending Amount: ₹${reportData.summary.pendingAmount.toLocaleString()}
Approved Amount: ₹${reportData.summary.approvedAmount.toLocaleString()}

CATEGORY BREAKDOWN:
${reportData.categoryBreakdown.map(cat => 
  `${cat.category}: ₹${cat.amount.toLocaleString()} (${cat.percentage}%)`
).join('\n')}

${report.details ? `
EXPENSE DETAILS:
${report.details.map(detail => 
  `${detail.item}: ₹${detail.amount.toLocaleString()} - ${detail.category}`
).join('\n')}` : ''}`;
    }
  };

  const handleGenerateReport = async () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newReport = {
      title: `Generated Report - ${selectedPeriod}`,
      format: reportFormat,
      period: selectedPeriod,
      category: selectedCategory,
      data: reportData.summary
    };
    
    handleDownloadReport(newReport, reportFormat);
    setIsGenerating(false);
    setShowReportModal(false);
  };

  const handleViewReport = (report) => {
    setSelectedReport(report);
    setShowViewModal(true);
  };

  const handleExportData = (format) => {
    handleDownloadReport(null, format);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/40 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/30">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="text-slate-900 w-5 h-5" />
            </div>
            <h1 className="text-xl font-semibold text-white">Reports</h1>
          </div>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-slate-700/30">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Time Period</label>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
              >
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
              >
                <option value="all">All Categories</option>
                <option value="travel">Travel</option>
                <option value="meals">Meals</option>
                <option value="office">Office Supplies</option>
                <option value="misc">Miscellaneous</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-b border-slate-700/30">
          <h3 className="text-sm font-medium text-slate-300 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button 
              onClick={() => handleExportData('csv')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 group"
            >
              <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm group-hover:text-white transition-colors">Export as CSV</span>
            </button>
            <button 
              onClick={() => handleExportData('pdf')}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 group"
            >
              <FileDown className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm group-hover:text-white transition-colors">Export as PDF</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 group">
              <Mail className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm group-hover:text-white transition-colors">Email Report</span>
            </button>
            <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 group">
              <Printer className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm group-hover:text-white transition-colors">Print Summary</span>
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto p-4 border-t border-slate-700/30">
          <div className="space-y-1">
            <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 cursor-pointer group">
              <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
              <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">Inbox</span>
            </div>
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-900/30 border border-emerald-500/20">
              <FileText className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-200 text-sm font-medium">Reports</span>
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
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Reports & Analytics</h2>
              <p className="text-emerald-300/80 text-sm font-medium">Track your expenses and generate reports</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setShowReportModal(true)}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Generate Report
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
              <MoreVertical className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+{reportData.summary.thisMonth.change}%</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  ₹{reportData.summary.totalExpenses.toLocaleString()}
                </div>
                <div className="text-slate-400 text-sm">Total Expenses</div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  {reportData.summary.totalReports}
                </div>
                <div className="text-slate-400 text-sm">Total Reports</div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  ₹{reportData.summary.pendingAmount.toLocaleString()}
                </div>
                <div className="text-slate-400 text-sm">Pending Approval</div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1">
                  ₹{reportData.summary.approvedAmount.toLocaleString()}
                </div>
                <div className="text-slate-400 text-sm">Approved Amount</div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Monthly Trend */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Monthly Trend</h3>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4 text-slate-400" />
                    <button className="text-slate-400 hover:text-emerald-400 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="h-48 flex items-end justify-between space-x-2">
                  {reportData.monthlyBreakdown.map((month, index) => (
                    <div key={month.month} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg transition-all duration-300 hover:from-emerald-500 hover:to-emerald-300"
                        style={{ 
                          height: `${(month.amount / Math.max(...reportData.monthlyBreakdown.map(m => m.amount))) * 180}px`,
                          minHeight: '20px'
                        }}
                        title={`₹${month.amount.toLocaleString()}`}
                      ></div>
                      <div className="text-xs text-slate-400 mt-2">{month.month}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Breakdown */}
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-white">Category Breakdown</h3>
                  <div className="flex items-center space-x-2">
                    <PieChart className="w-4 h-4 text-slate-400" />
                    <button className="text-slate-400 hover:text-emerald-400 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {reportData.categoryBreakdown.map((category, index) => (
                    <div key={category.category} className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full bg-${category.color}-500`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white text-sm font-medium">{category.category}</span>
                          <span className="text-slate-400 text-sm">₹{category.amount.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-slate-700/30 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-${category.color}-500`}
                            style={{ width: `${category.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-slate-400 text-sm font-medium">{category.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
              <div className="flex items-center justify-between p-6 border-b border-slate-700/30">
                <h3 className="text-lg font-semibold text-white">Recent Reports</h3>
                <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                  View All
                </button>
              </div>
              <div className="divide-y divide-slate-700/30">
                {reportData.recentReports.map((report) => {
                  const StatusIcon = getStatusIcon(report.status);
                  const statusColor = getStatusColor(report.status);
                  
                  return (
                    <div key={report.id} className="p-6 hover:bg-slate-800/30 transition-all duration-200 cursor-pointer group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 bg-${statusColor}-600/20 rounded-lg flex items-center justify-center`}>
                            <StatusIcon className={`w-5 h-5 text-${statusColor}-400`} />
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-1">
                              <h4 className="text-white font-medium group-hover:text-emerald-200 transition-colors">
                                {report.title}
                              </h4>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${statusColor}-900/30 text-${statusColor}-400 border border-${statusColor}-500/20`}>
                                {report.status}
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-slate-400">
                              <span>{report.id}</span>
                              <span>•</span>
                              <span>{report.date}</span>
                              <span>•</span>
                              <span>{report.expenses} expenses</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-white font-semibold">₹{report.amount.toLocaleString()}</div>
                            <div className="text-slate-400 text-sm">by {report.submittedBy}</div>
                          </div>
                          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                              onClick={() => handleViewReport(report)}
                              className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group"
                            >
                              <Eye className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                            </button>
                            <button 
                              onClick={() => handleDownloadReport(report, 'pdf')}
                              className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group"
                            >
                              <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                            </button>
                            <button className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group">
                              <Share className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generate Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-slate-700/40 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Generate Report</h3>
              <button 
                onClick={() => setShowReportModal(false)}
                className="w-8 h-8 rounded-lg hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200"
              >
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Report Format</label>
                <select 
                  value={reportFormat}
                  onChange={(e) => setReportFormat(e.target.value)}
                  className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
                >
                  <option value="pdf">PDF Document</option>
                  <option value="csv">CSV Spreadsheet</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Include Data</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-slate-600 bg-slate-700/60 text-emerald-500 focus:ring-emerald-500/20" />
                    <span className="ml-2 text-sm text-slate-300">Summary Statistics</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-slate-600 bg-slate-700/60 text-emerald-500 focus:ring-emerald-500/20" />
                    <span className="ml-2 text-sm text-slate-300">Category Breakdown</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-slate-600 bg-slate-700/60 text-emerald-500 focus:ring-emerald-500/20" />
                    <span className="ml-2 text-sm text-slate-300">Monthly Trends</span>
                  </label>
                </div>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button 
                  onClick={handleGenerateReport}
                  disabled={isGenerating}
                  className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/50 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Generate & Download</span>
                    </>
                  )}
                </button>
                <button 
                  onClick={() => setShowReportModal(false)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Report Modal */}
      {showViewModal && selectedReport && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-slate-700/40 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-slate-700/30">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-${getStatusColor(selectedReport.status)}-600/20 rounded-lg flex items-center justify-center`}>
                  <FileText className={`w-5 h-5 text-${getStatusColor(selectedReport.status)}-400`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{selectedReport.title}</h3>
                  <p className="text-slate-400 text-sm">{selectedReport.id}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => handleDownloadReport(selectedReport, 'pdf')}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1"
                >
                  <Download className="w-3 h-3" />
                  <span>Download</span>
                </button>
                <button 
                  onClick={() => setShowViewModal(false)}
                  className="w-8 h-8 rounded-lg hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                {/* Report Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-1">Total Amount</div>
                    <div className="text-2xl font-bold text-white">₹{selectedReport.amount.toLocaleString()}</div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-1">Status</div>
                    <div className={`text-${getStatusColor(selectedReport.status)}-400 font-semibold capitalize`}>
                      {selectedReport.status}
                    </div>
                  </div>
                  <div className="bg-slate-700/30 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-1">Date Submitted</div>
                    <div className="text-white font-medium">{selectedReport.date}</div>
                  </div>
                </div>

                {/* Expense Details */}
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Expense Details</span>
                  </h4>
                  <div className="space-y-3">
                    {selectedReport.details?.map((detail, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-700/20 rounded-lg border border-slate-700/30">
                        <div className="flex-1">
                          <div className="text-white font-medium">{detail.item}</div>
                          <div className="text-slate-400 text-sm">{detail.category}</div>
                        </div>
                        <div className="text-emerald-400 font-semibold">₹{detail.amount.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4 border-t border-slate-700/30">
                  <button 
                    onClick={() => handleDownloadReport(selectedReport, 'pdf')}
                    className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                  <button 
                    onClick={() => handleDownloadReport(selectedReport, 'csv')}
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    <Save className="w-4 h-4" />
                    <span>Export CSV</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-all duration-200">
                    <Share className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;