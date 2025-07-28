// import React, { useState } from 'react';
// import { 
//   Search, 
//   Users, 
//   User, 
//   UserPlus,
//   Settings,
//   Crown,
//   Shield,
//   Eye,
//   Edit3,
//   Trash2,
//   MoreVertical,
//   Plus,
//   Star,
//   Clock,
//   CheckCircle,
//   AlertCircle,
//   X,
//   Mail,
//   Copy,
//   ExternalLink,
//   Filter,
//   Calendar,
//   FileText,
//   Activity,
//   PieChart,
//   TrendingUp,
//   Building,
//   MapPin,
//   Phone,
//   Globe,
//   Briefcase,
//   Lock,
//   Unlock,
//   UserCheck,
//   UserX,
//   Archive,
//   Download
// } from 'lucide-react';

// const Workspaces = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const [selectedWorkspace, setSelectedWorkspace] = useState(null);
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showInviteModal, setShowInviteModal] = useState(false);
//   const [showMemberModal, setShowMemberModal] = useState(false);
//   const [selectedMember, setSelectedMember] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterRole, setFilterRole] = useState('all');

//   const workspaceData = {
//     current: {
//       id: 'ws-001',
//       name: 'Acme Corporation',
//       description: 'Main company workspace for expense management',
//       type: 'Enterprise',
//       status: 'active',
//       members: 24,
//       created: '2024-01-15',
//       owner: 'John Doe',
//       plan: 'Enterprise',
//       avatar: null,
//       settings: {
//         visibility: 'private',
//         joinApproval: true,
//         expenseLimit: 50000,
//         currency: 'INR'
//       }
//     },
//     stats: {
//       totalExpenses: 156780,
//       pendingApprovals: 8,
//       activeMembers: 24,
//       thisMonth: {
//         expenses: 42300,
//         change: 15.2,
//         trend: 'up'
//       }
//     },
//     members: [
//       {
//         id: 1,
//         name: 'John Doe',
//         email: 'john.doe@company.com',
//         role: 'Owner',
//         avatar: null,
//         status: 'active',
//         joinDate: '2024-01-15',
//         lastActive: '2 hours ago',
//         expenses: 12500,
//         department: 'Engineering'
//       },
//       {
//         id: 2,
//         name: 'Sarah Johnson',
//         email: 'sarah.johnson@company.com',
//         role: 'Admin',
//         avatar: null,
//         status: 'active',
//         joinDate: '2024-01-20',
//         lastActive: '5 minutes ago',
//         expenses: 8200,
//         department: 'Marketing'
//       },
//       {
//         id: 3,
//         name: 'Mike Chen',
//         email: 'mike.chen@company.com',
//         role: 'Manager',
//         avatar: null,
//         status: 'active',
//         joinDate: '2024-02-01',
//         lastActive: '1 day ago',
//         expenses: 15600,
//         department: 'Sales'
//       },
//       {
//         id: 4,
//         name: 'Emma Wilson',
//         email: 'emma.wilson@company.com',
//         role: 'Member',
//         avatar: null,
//         status: 'pending',
//         joinDate: '2024-07-25',
//         lastActive: 'Never',
//         expenses: 0,
//         department: 'HR'
//       },
//       {
//         id: 5,
//         name: 'David Kim',
//         email: 'david.kim@company.com',
//         role: 'Member',
//         avatar: null,
//         status: 'inactive',
//         joinDate: '2024-03-10',
//         lastActive: '2 weeks ago',
//         expenses: 3400,
//         department: 'Finance'
//       }
//     ],
//     recentActivity: [
//       {
//         id: 1,
//         type: 'member_joined',
//         user: 'Emma Wilson',
//         description: 'joined the workspace',
//         timestamp: '2 hours ago',
//         icon: UserPlus
//       },
//       {
//         id: 2,
//         type: 'expense_approved',
//         user: 'John Doe',
//         description: 'approved expense report ER-2024-0127',
//         timestamp: '4 hours ago',
//         icon: CheckCircle
//       },
//       {
//         id: 3,
//         type: 'role_changed',
//         user: 'Sarah Johnson',
//         description: 'was promoted to Admin',
//         timestamp: '1 day ago',
//         icon: Crown
//       },
//       {
//         id: 4,
//         type: 'settings_updated',
//         user: 'John Doe',
//         description: 'updated workspace settings',
//         timestamp: '2 days ago',
//         icon: Settings
//       }
//     ],
//     invitations: [
//       {
//         id: 1,
//         email: 'alex.brown@company.com',
//         role: 'Member',
//         status: 'pending',
//         sentDate: '2024-07-26',
//         sentBy: 'John Doe'
//       },
//       {
//         id: 2,
//         email: 'lisa.garcia@company.com',
//         role: 'Manager',
//         status: 'pending',
//         sentDate: '2024-07-25',
//         sentBy: 'Sarah Johnson'
//       }
//     ]
//   };

//   const getRoleColor = (role) => {
//     switch (role.toLowerCase()) {
//       case 'owner': return 'purple';
//       case 'admin': return 'red';
//       case 'manager': return 'blue';
//       case 'member': return 'emerald';
//       default: return 'slate';
//     }
//   };

//   const getRoleIcon = (role) => {
//     switch (role.toLowerCase()) {
//       case 'owner': return Crown;
//       case 'admin': return Shield;
//       case 'manager': return Briefcase;
//       case 'member': return User;
//       default: return User;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'active': return 'emerald';
//       case 'pending': return 'yellow';
//       case 'inactive': return 'slate';
//       default: return 'slate';
//     }
//   };

//   const filteredMembers = workspaceData.members.filter(member => {
//     const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          member.department.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesRole = filterRole === 'all' || member.role.toLowerCase() === filterRole.toLowerCase();
//     return matchesSearch && matchesRole;
//   });

//   const handleInviteMember = (email, role) => {
//     // Simulate sending invitation
//     console.log(`Inviting ${email} as ${role}`);
//     setShowInviteModal(false);
//     // In real app, this would make an API call
//   };

//   const handleMemberAction = (member, action) => {
//     console.log(`${action} for member:`, member);
//     // Handle member actions like promote, demote, remove, etc.
//   };

//   const TabButton = ({ id, label, icon: Icon, active, onClick }) => (
//     <button
//       onClick={() => onClick(id)}
//       className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//         active 
//           ? 'bg-emerald-900/30 text-emerald-200 border border-emerald-500/20' 
//           : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
//       }`}
//     >
//       <Icon className="w-4 h-4" />
//       <span>{label}</span>
//     </button>
//   );

//   return (
//     <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 overflow-hidden">
//       {/* Sidebar */}
//       <div className="w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/40 flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between p-5 border-b border-slate-700/30">
//           <div className="flex items-center space-x-3">
//             <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
//               <Users className="text-slate-900 w-5 h-5" />
//             </div>
//             <h1 className="text-xl font-semibold text-white">Workspaces</h1>
//           </div>
//           <button 
//             onClick={() => setShowCreateModal(true)}
//             className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group"
//           >
//             <Plus className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
//           </button>
//         </div>

//         {/* Current Workspace */}
//         <div className="p-4 border-b border-slate-700/30">
//           <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/30">
//             <div className="flex items-center space-x-3 mb-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
//                 <Building className="w-5 h-5 text-white" />
//               </div>
//               <div className="flex-1">
//                 <h3 className="text-white font-semibold">{workspaceData.current.name}</h3>
//                 <p className="text-slate-400 text-xs">{workspaceData.current.plan} Plan</p>
//               </div>
//               <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
//             </div>
//             <p className="text-slate-300 text-sm mb-3">{workspaceData.current.description}</p>
//             <div className="flex items-center justify-between text-xs text-slate-400">
//               <span>{workspaceData.current.members} members</span>
//               <span>Owner: {workspaceData.current.owner}</span>
//             </div>
//           </div>
//         </div>

//         {/* Quick Stats */}
//         <div className="p-4 border-b border-slate-700/30">
//           <h3 className="text-sm font-medium text-slate-300 mb-3">Quick Stats</h3>
//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
//                 <span className="text-slate-300 text-sm">Active Members</span>
//               </div>
//               <span className="text-white font-medium">{workspaceData.stats.activeMembers}</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                 <span className="text-slate-300 text-sm">Pending Approvals</span>
//               </div>
//               <span className="text-white font-medium">{workspaceData.stats.pendingApprovals}</span>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-2">
//                 <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                 <span className="text-slate-300 text-sm">Total Expenses</span>
//               </div>
//               <span className="text-white font-medium">₹{workspaceData.stats.totalExpenses.toLocaleString()}</span>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex-1 p-4">
//           <div className="space-y-1">
//             <TabButton
//               id="overview"
//               label="Overview"
//               icon={Activity}
//               active={activeTab === 'overview'}
//               onClick={setActiveTab}
//             />
//             <TabButton
//               id="members"
//               label="Members"
//               icon={Users}
//               active={activeTab === 'members'}
//               onClick={setActiveTab}
//             />
//             <TabButton
//               id="settings"
//               label="Settings"
//               icon={Settings}
//               active={activeTab === 'settings'}
//               onClick={setActiveTab}
//             />
//             <TabButton
//               id="analytics"
//               label="Analytics"
//               icon={PieChart}
//               active={activeTab === 'analytics'}
//               onClick={setActiveTab}
//             />
//           </div>
//         </div>

//         {/* Bottom Navigation */}
//         <div className="p-4 border-t border-slate-700/30">
//           <div className="space-y-1">
//             <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 cursor-pointer group">
//               <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
//               <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">Inbox</span>
//             </div>
//             <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 cursor-pointer group">
//               <FileText className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
//               <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">Reports</span>
//             </div>
//             <div className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-900/30 border border-emerald-500/20">
//               <Users className="w-5 h-5 text-emerald-400" />
//               <span className="text-emerald-200 text-sm font-medium">Workspaces</span>
//             </div>
//             <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/40 transition-all duration-200 cursor-pointer group">
//               <User className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
//               <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">Account</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col bg-slate-900/30 backdrop-blur-sm">
//         {/* Header */}
//         <div className="flex items-center justify-between p-6 border-b border-slate-700/30 bg-slate-900/50">
//           <div className="flex items-center space-x-4">
//             <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
//               <Users className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-xl font-semibold text-white">Workspace Management</h2>
//               <p className="text-emerald-300/80 text-sm font-medium">Manage team members and workspace settings</p>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button 
//               onClick={() => setShowInviteModal(true)}
//               className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
//             >
//               <UserPlus className="w-4 h-4" />
//               <span>Invite Member</span>
//             </button>
//             <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
//               <MoreVertical className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
//             </button>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="flex-1 p-6 overflow-y-auto">
//           {activeTab === 'overview' && (
//             <div className="max-w-7xl space-y-6">
//               {/* Summary Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center">
//                       <Users className="w-5 h-5 text-emerald-400" />
//                     </div>
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-1">
//                     {workspaceData.stats.activeMembers}
//                   </div>
//                   <div className="text-slate-400 text-sm">Active Members</div>
//                 </div>

//                 <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
//                       <Clock className="w-5 h-5 text-yellow-400" />
//                     </div>
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-1">
//                     {workspaceData.stats.pendingApprovals}
//                   </div>
//                   <div className="text-slate-400 text-sm">Pending Approvals</div>
//                 </div>

//                 <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
//                       <FileText className="w-5 h-5 text-blue-400" />
//                     </div>
//                     <div className="flex items-center space-x-1 text-emerald-400 text-sm">
//                       <TrendingUp className="w-4 h-4" />
//                       <span>+{workspaceData.stats.thisMonth.change}%</span>
//                     </div>
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-1">
//                     ₹{workspaceData.stats.thisMonth.expenses.toLocaleString()}
//                   </div>
//                   <div className="text-slate-400 text-sm">This Month</div>
//                 </div>

//                 <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
//                       <Star className="w-5 h-5 text-purple-400" />
//                     </div>
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-1">
//                     ₹{workspaceData.stats.totalExpenses.toLocaleString()}
//                   </div>
//                   <div className="text-slate-400 text-sm">Total Expenses</div>
//                 </div>
//               </div>

//               {/* Recent Activity */}
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
//                 <div className="flex items-center justify-between p-6 border-b border-slate-700/30">
//                   <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
//                   <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
//                     View All
//                   </button>
//                 </div>
//                 <div className="divide-y divide-slate-700/30">
//                   {workspaceData.recentActivity.map((activity) => {
//                     const ActivityIcon = activity.icon;
//                     return (
//                       <div key={activity.id} className="p-6 hover:bg-slate-800/30 transition-all duration-200">
//                         <div className="flex items-center space-x-4">
//                           <div className="w-10 h-10 bg-slate-700/40 rounded-lg flex items-center justify-center">
//                             <ActivityIcon className="w-5 h-5 text-slate-400" />
//                           </div>
//                           <div className="flex-1">
//                             <div className="flex items-center space-x-2">
//                               <span className="text-white font-medium">{activity.user}</span>
//                               <span className="text-slate-300">{activity.description}</span>
//                             </div>
//                             <div className="text-slate-400 text-sm mt-1">{activity.timestamp}</div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'members' && (
//             <div className="max-w-7xl space-y-6">
//               {/* Search and Filters */}
//               <div className="flex items-center justify-between space-x-4">
//                 <div className="flex items-center space-x-4 flex-1">
//                   <div className="relative flex-1 max-w-md">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                     <input
//                       type="text"
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       placeholder="Search members..."
//                       className="w-full bg-slate-800/60 border border-slate-700/40 rounded-lg pl-10 pr-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
//                     />
//                   </div>
//                   <select 
//                     value={filterRole}
//                     onChange={(e) => setFilterRole(e.target.value)}
//                     className="bg-slate-800/60 border border-slate-700/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
//                   >
//                     <option value="all">All Roles</option>
//                     <option value="owner">Owner</option>
//                     <option value="admin">Admin</option>
//                     <option value="manager">Manager</option>
//                     <option value="member">Member</option>
//                   </select>
//                 </div>
//                 <div className="text-slate-400 text-sm">
//                   {filteredMembers.length} of {workspaceData.members.length} members
//                 </div>
//               </div>

//               {/* Members List */}
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
//                 <div className="p-6 border-b border-slate-700/30">
//                   <h3 className="text-lg font-semibold text-white">Team Members</h3>
//                 </div>
//                 <div className="divide-y divide-slate-700/30">
//                   {filteredMembers.map((member) => {
//                     const RoleIcon = getRoleIcon(member.role);
//                     const roleColor = getRoleColor(member.role);
//                     const statusColor = getStatusColor(member.status);
                    
//                     return (
//                       <div key={member.id} className="p-6 hover:bg-slate-800/30 transition-all duration-200 group">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-4">
//                             <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
//                               <User className="w-6 h-6 text-slate-300" />
//                             </div>
//                             <div>
//                               <div className="flex items-center space-x-3 mb-1">
//                                 <h4 className="text-white font-medium">{member.name}</h4>
//                                 <div className="flex items-center space-x-2">
//                                   <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium bg-${roleColor}-900/30 text-${roleColor}-400 border border-${roleColor}-500/20`}>
//                                     <RoleIcon className="w-3 h-3" />
//                                     <span>{member.role}</span>
//                                   </div>
//                                   <div className={`w-2 h-2 rounded-full bg-${statusColor}-400`}></div>
//                                 </div>
//                               </div>
//                               <div className="flex items-center space-x-4 text-sm text-slate-400">
//                                 <span>{member.email}</span>
//                                 <span>•</span>
//                                 <span>{member.department}</span>
//                                 <span>•</span>
//                                 <span>Last active: {member.lastActive}</span>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex items-center space-x-4">
//                             <div className="text-right">
//                               <div className="text-white font-semibold">₹{member.expenses.toLocaleString()}</div>
//                               <div className="text-slate-400 text-sm">Total expenses</div>
//                             </div>
//                             <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                               <button 
//                                 onClick={() => {
//                                   setSelectedMember(member);
//                                   setShowMemberModal(true);
//                                 }}
//                                 className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group"
//                               >
//                                 <Eye className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
//                               </button>
//                               <button className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group">
//                                 <Edit3 className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
//                               </button>
//                               <button className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 group">
//                                 <MoreVertical className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Pending Invitations */}
//               {workspaceData.invitations.length > 0 && (
//                 <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
//                   <div className="p-6 border-b border-slate-700/30">
//                     <h3 className="text-lg font-semibold text-white">Pending Invitations</h3>
//                   </div>
//                   <div className="divide-y divide-slate-700/30">
//                     {workspaceData.invitations.map((invitation) => (
//                       <div key={invitation.id} className="p-6 hover:bg-slate-800/30 transition-all duration-200">
//                         <div className="flex items-center justify-between">
//                           <div className="flex items-center space-x-4">
//                             <div className="w-10 h-10 bg-yellow-600/20 rounded-lg flex items-center justify-center">
//                               <Mail className="w-5 h-5 text-yellow-400" />
//                             </div>
//                             <div>
//                               <div className="text-white font-medium">{invitation.email}</div>
//                               <div className="text-slate-400 text-sm">
//                                 Invited as {invitation.role} by {invitation.sentBy} • {invitation.sentDate}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-medium transition-all duration-200">
//                               Resend
//                             </button>
//                             <button className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-md text-sm font-medium transition-all duration-200">
//                               Cancel
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {activeTab === 'settings' && (
//             <div className="max-w-4xl space-y-6">
//               {/* Workspace Information */}
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
//                 <div className="p-6 border-b border-slate-700/30">
//                   <h3 className="text-lg font-semibold text-white">Workspace Information</h3>
//                 </div>
//                 <div className="p-6 space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-sm font-medium text-slate-300 mb-2">Workspace Name</label>
//                       <input
//                         type="text"
//                         defaultValue={workspaceData.current.name}
//                         className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-slate-300 mb-2">Workspace Type</label>
//                       <select className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors">
//                         <option value="enterprise">Enterprise</option>
//                         <option value="business">Business</option>
//                         <option value="team">Team</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
//                     <textarea
//                       rows={3}
//                       defaultValue={workspaceData.current.description}
//                       className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Access & Security */}
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
//                 <div className="p-6 border-b border-slate-700/30">
//                   <h3 className="text-lg font-semibold text-white">Access & Security</h3>
//                 </div>
//                 <div className="p-6 space-y-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="text-white font-medium">Workspace Visibility</h4>
//                       <p className="text-slate-400 text-sm">Control who can discover and join this workspace</p>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       <button className="flex items-center space-x-2 px-3 py-2 bg-slate-700 text-slate-300 rounded-lg text-sm font-medium">
//                         <Lock className="w-4 h-4" />
//                         <span>Private</span>
//                       </button>
//                       <button className="flex items-center space-x-2 px-3 py-2 text-slate-400 hover:bg-slate-700/50 rounded-lg text-sm font-medium transition-colors">
//                         <Unlock className="w-4 h-4" />
//                         <span>Public</span>
//                       </button>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="text-white font-medium">Join Approval</h4>
//                       <p className="text-slate-400 text-sm">Require admin approval for new members</p>
//                     </div>
//                     <button className="w-12 h-6 bg-emerald-600 rounded-full relative transition-colors">
//                       <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
//                     </button>
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h4 className="text-white font-medium">Expense Limit</h4>
//                       <p className="text-slate-400 text-sm">Maximum expense amount per report</p>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <span className="text-slate-400">₹</span>
//                       <input
//                         type="number"
//                         defaultValue={workspaceData.current.settings.expenseLimit}
//                         className="w-24 bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Danger Zone */}
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-red-500/20 shadow-xl">
//                 <div className="p-6 border-b border-slate-700/30">
//                   <h3 className="text-lg font-semibold text-red-400">Danger Zone</h3>
//                 </div>
//                 <div className="p-6 space-y-4">
//                   <div className="flex items-center justify-between p-4 border border-slate-700/30 rounded-lg">
//                     <div>
//                       <h4 className="text-white font-medium">Archive Workspace</h4>
//                       <p className="text-slate-400 text-sm">Archive this workspace and make it read-only</p>
//                     </div>
//                     <button className="px-4 py-2 bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400 border border-yellow-500/20 rounded-lg text-sm font-medium transition-all duration-200">
//                       Archive
//                     </button>
//                   </div>
                  
//                   <div className="flex items-center justify-between p-4 border border-red-500/20 rounded-lg">
//                     <div>
//                       <h4 className="text-white font-medium">Delete Workspace</h4>
//                       <p className="text-slate-400 text-sm">Permanently delete this workspace and all its data</p>
//                     </div>
//                     <button className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/20 rounded-lg text-sm font-medium transition-all duration-200">
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeTab === 'analytics' && (
//             <div className="max-w-7xl space-y-6">
//               {/* Analytics Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-white font-semibold">Member Growth</h3>
//                     <TrendingUp className="w-5 h-5 text-emerald-400" />
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-2">+8</div>
//                   <div className="text-slate-400 text-sm">New members this month</div>
//                   <div className="mt-4 h-2 bg-slate-700/30 rounded-full">
//                     <div className="h-2 bg-emerald-500 rounded-full" style={{ width: '65%' }}></div>
//                   </div>
//                 </div>

//                 <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-white font-semibold">Avg. Expenses</h3>
//                     <FileText className="w-5 h-5 text-blue-400" />
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-2">₹6,532</div>
//                   <div className="text-slate-400 text-sm">Per member per month</div>
//                   <div className="mt-4 h-2 bg-slate-700/30 rounded-full">
//                     <div className="h-2 bg-blue-500 rounded-full" style={{ width: '45%' }}></div>
//                   </div>
//                 </div>

//                 <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 p-6 shadow-xl">
//                   <div className="flex items-center justify-between mb-4">
//                     <h3 className="text-white font-semibold">Approval Rate</h3>
//                     <CheckCircle className="w-5 h-5 text-green-400" />
//                   </div>
//                   <div className="text-2xl font-bold text-white mb-2">92%</div>
//                   <div className="text-slate-400 text-sm">Expenses approved</div>
//                   <div className="mt-4 h-2 bg-slate-700/30 rounded-full">
//                     <div className="h-2 bg-green-500 rounded-full" style={{ width: '92%' }}></div>
//                   </div>
//                 </div>
//               </div>

//               {/* Department Breakdown */}
//               <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 shadow-xl">
//                 <div className="p-6 border-b border-slate-700/30">
//                   <h3 className="text-lg font-semibold text-white">Department Breakdown</h3>
//                 </div>
//                 <div className="p-6">
//                   <div className="space-y-4">
//                     {[
//                       { dept: 'Engineering', members: 8, expenses: 45600, color: 'emerald' },
//                       { dept: 'Sales', members: 6, expenses: 38200, color: 'blue' },
//                       { dept: 'Marketing', members: 4, expenses: 29800, color: 'purple' },
//                       { dept: 'HR', members: 3, expenses: 18400, color: 'orange' },
//                       { dept: 'Finance', members: 3, expenses: 24980, color: 'red' }
//                     ].map((dept, index) => (
//                       <div key={dept.dept} className="flex items-center justify-between">
//                         <div className="flex items-center space-x-4">
//                           <div className={`w-3 h-3 rounded-full bg-${dept.color}-500`}></div>
//                           <div>
//                             <div className="text-white font-medium">{dept.dept}</div>
//                             <div className="text-slate-400 text-sm">{dept.members} members</div>
//                           </div>
//                         </div>
//                         <div className="text-right">
//                           <div className="text-white font-semibold">₹{dept.expenses.toLocaleString()}</div>
//                           <div className="text-slate-400 text-sm">Total expenses</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Create Workspace Modal */}
//       {showCreateModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-slate-800 border border-slate-700/40 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-white">Create New Workspace</h3>
//               <button 
//                 onClick={() => setShowCreateModal(false)}
//                 className="w-8 h-8 rounded-lg hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200"
//               >
//                 <X className="w-4 h-4 text-slate-400" />
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Workspace Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter workspace name"
//                   className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
//                 <textarea
//                   rows={3}
//                   placeholder="Describe your workspace"
//                   className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Workspace Type</label>
//                 <select className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors">
//                   <option value="team">Team</option>
//                   <option value="business">Business</option>
//                   <option value="enterprise">Enterprise</option>
//                 </select>
//               </div>
              
//               <div className="flex space-x-3 pt-4">
//                 <button className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
//                   Create Workspace
//                 </button>
//                 <button 
//                   onClick={() => setShowCreateModal(false)}
//                   className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-all duration-200"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Invite Member Modal */}
//       {showInviteModal && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-slate-800 border border-slate-700/40 rounded-xl p-6 w-full max-w-md mx-4 shadow-2xl">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold text-white">Invite Team Member</h3>
//               <button 
//                 onClick={() => setShowInviteModal(false)}
//                 className="w-8 h-8 rounded-lg hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200"
//               >
//                 <X className="w-4 h-4 text-slate-400" />
//               </button>
//             </div>
            
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
//                 <input
//                   type="email"
//                   placeholder="colleague@company.com"
//                   className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Role</label>
//                 <select className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors">
//                   <option value="member">Member</option>
//                   <option value="manager">Manager</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-slate-300 mb-2">Personal Message (Optional)</label>
//                 <textarea
//                   rows={3}
//                   placeholder="Add a personal message to the invitation"
//                   className="w-full bg-slate-700/60 border border-slate-600/40 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
//                 />
//               </div>
              
//               <div className="flex space-x-3 pt-4">
//                 <button className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
//                   <Mail className="w-4 h-4" />
//                   <span>Send Invitation</span>
//                 </button>
//                 <button 
//                   onClick={() => setShowInviteModal(false)}
//                   className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-all duration-200"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Member Details Modal */}
//       {showMemberModal && selectedMember && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//           <div className="bg-slate-800 border border-slate-700/40 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl">
//             <div className="flex items-center justify-between p-6 border-b border-slate-700/30">
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
//                   <User className="w-6 h-6 text-slate-300" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold text-white">{selectedMember.name}</h3>
//                   <p className="text-slate-400 text-sm">{selectedMember.email}</p>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => setShowMemberModal(false)}
//                 className="w-8 h-8 rounded-lg hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200"
//               >
//                 <X className="w-4 h-4 text-slate-400" />
//               </button>
//             </div>
            
//             <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
//               <div className="space-y-6">
//                 {/* Member Info */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="bg-slate-700/30 rounded-lg p-4">
//                     <div className="text-slate-400 text-sm mb-1">Role</div>
//                     <div className={`text-${getRoleColor(selectedMember.role)}-400 font-semibold`}>
//                       {selectedMember.role}
//                     </div>
//                   </div>
//                   <div className="bg-slate-700/30 rounded-lg p-4">
//                     <div className="text-slate-400 text-sm mb-1">Department</div>
//                     <div className="text-white font-medium">{selectedMember.department}</div>
//                   </div>
//                   <div className="bg-slate-700/30 rounded-lg p-4">
//                     <div className="text-slate-400 text-sm mb-1">Join Date</div>
//                     <div className="text-white font-medium">{selectedMember.joinDate}</div>
//                   </div>
//                   <div className="bg-slate-700/30 rounded-lg p-4">
//                     <div className="text-slate-400 text-sm mb-1">Total Expenses</div>
//                     <div className="text-emerald-400 font-semibold">₹{selectedMember.expenses.toLocaleString()}</div>
//                   </div>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex space-x-3 pt-4 border-t border-slate-700/30">
//                   <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200">
//                     <Edit3 className="w-4 h-4" />
//                     <span>Edit Member</span>
//                   </button>
//                   <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-all duration-200">
//                     <Mail className="w-4 h-4" />
//                     <span>Send Message</span>
//                   </button>
//                   <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-all duration-200">
//                     <Download className="w-4 h-4" />
//                     <span>Export Data</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Workspaces;
import React from 'react'

function Workspace() {
  return (
    <div>
      Workspace
    </div>
  )
}

export default Workspace
