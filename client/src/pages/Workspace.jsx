
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Inbox, 
  FileText, 
  Users, 
  User, 
  Plus,
  Settings,
  Lock,
  Bell,
  MoreVertical,
  Trash2,
  Star,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const WorkspacesPage = () => {
  const location = useLocation();
  const [expandedTeams, setExpandedTeams] = useState([]);
  const [workspaces, setWorkspaces] = useState([
    {
      id: 1,
      name: 'Finance Team',
      description: 'Company financial operations and reporting',
      members: 12,
      unread: 3,
      starred: true,
      teams: [
        { id: 11, name: 'Accounting', unread: 2 },
        { id: 12, name: 'Budgeting', unread: 1 },
        { id: 13, name: 'Audit', unread: 0 }
      ]
    },
    {
      id: 2,
      name: 'Marketing',
      description: 'Campaigns and promotional activities',
      members: 8,
      unread: 0,
      starred: false,
      teams: [
        { id: 21, name: 'Digital', unread: 0 },
        { id: 22, name: 'Content', unread: 0 }
      ]
    },
    {
      id: 3,
      name: 'Product Development',
      description: 'New features and product improvements',
      members: 15,
      unread: 5,
      starred: true,
      teams: [
        { id: 31, name: 'Frontend', unread: 3 },
        { id: 32, name: 'Backend', unread: 2 },
        { id: 33, name: 'QA', unread: 0 }
      ]
    },
    {
      id: 4,
      name: 'Human Resources',
      description: 'Employee relations and development',
      members: 6,
      unread: 1,
      starred: false,
      teams: [
        { id: 41, name: 'Recruiting', unread: 1 },
        { id: 42, name: 'Training', unread: 0 }
      ]
    }
  ]);

  const toggleTeamExpansion = (workspaceId) => {
    setExpandedTeams(prev => 
      prev.includes(workspaceId) 
        ? prev.filter(id => id !== workspaceId)
        : [...prev, workspaceId]
    );
  };

  const handleStarWorkspace = (workspaceId) => {
    setWorkspaces(workspaces.map(ws => 
      ws.id === workspaceId ? { ...ws, starred: !ws.starred } : ws
    ));
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/30 overflow-hidden">
      {/* Sidebar (same as Inbox) */}
      <div className="w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/40 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/30">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-slate-900 font-bold text-lg">E</span>
            </div>
            <h1 className="text-xl font-semibold text-white">Expensify</h1>
          </Link>
          <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
            <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-auto p-4 border-t border-slate-700/30">
          <div className="space-y-1">
            <Link 
              to="/dashboard/inbox" 
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActiveRoute('/dashboard/inbox') 
                  ? 'bg-emerald-900/30 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/40'
              }`}
            >
              <Inbox className={`w-5 h-5 ${
                isActiveRoute('/dashboard/inbox') 
                  ? 'text-emerald-400' 
                  : 'text-slate-400 group-hover:text-emerald-400'
              }`} />
              <span className={`text-sm font-medium ${
                isActiveRoute('/dashboard/inbox') 
                  ? 'text-emerald-300' 
                  : 'text-slate-300 group-hover:text-white'
              }`}>Inbox</span>
            </Link>
            
            <Link 
              to="/dashboard/reports" 
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActiveRoute('/dashboard/reports') 
                  ? 'bg-emerald-900/30 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/40'
              }`}
            >
              <FileText className={`w-5 h-5 ${
                isActiveRoute('/dashboard/reports') 
                  ? 'text-emerald-400' 
                  : 'text-slate-400 group-hover:text-emerald-400'
              }`} />
              <span className={`text-sm font-medium ${
                isActiveRoute('/dashboard/reports') 
                  ? 'text-emerald-300' 
                  : 'text-slate-300 group-hover:text-white'
              }`}>Reports</span>
            </Link>
            
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-900/30 border border-emerald-500/20">
              <Users className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Workspaces</span>
            </div>
            
            <Link 
              to="/dashboard/account" 
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActiveRoute('/dashboard/account') 
                  ? 'bg-emerald-900/30 border border-emerald-500/20' 
                  : 'hover:bg-slate-800/40'
              }`}
            >
              <User className={`w-5 h-5 ${
                isActiveRoute('/dashboard/account') 
                  ? 'text-emerald-400' 
                  : 'text-slate-400 group-hover:text-emerald-400'
              }`} />
              <span className={`text-sm font-medium ${
                isActiveRoute('/dashboard/account') 
                  ? 'text-emerald-300' 
                  : 'text-slate-300 group-hover:text-white'
              }`}>Account</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-slate-900/30 backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/30 bg-slate-900/50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Workspaces</h2>
              <p className="text-emerald-300/80 text-sm font-medium">
                {workspaces.length} workspaces • {workspaces.reduce((sum, ws) => sum + ws.members, 0)} members
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white text-sm font-medium flex items-center space-x-2 transition-all duration-200">
              <Plus className="w-4 h-4" />
              <span>New Workspace</span>
            </button>
            <button className="w-8 h-8 rounded-lg hover:bg-slate-800/50 flex items-center justify-center transition-all duration-200 group">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Workspaces List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {workspaces.map(workspace => (
              <div 
                key={workspace.id} 
                className="bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all duration-200"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-white truncate">
                          {workspace.name}
                        </h3>
                        {workspace.unread > 0 && (
                          <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                            {workspace.unread} new
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-sm mb-3">
                        {workspace.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-slate-400 flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {workspace.members} members
                        </span>
                        <span className="text-slate-400 flex items-center">
                          <Lock className="w-4 h-4 mr-1" />
                          Private
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleStarWorkspace(workspace.id)}
                        className={`w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 ${
                          workspace.starred ? 'text-yellow-400' : 'text-slate-500 hover:text-yellow-400'
                        }`}
                      >
                        <Star className="w-4 h-4" fill={workspace.starred ? 'currentColor' : 'none'} />
                      </button>
                      <button
                        onClick={() => toggleTeamExpansion(workspace.id)}
                        className="w-8 h-8 rounded-full hover:bg-slate-700/50 flex items-center justify-center transition-all duration-200 text-slate-400 hover:text-emerald-400"
                      >
                        {expandedTeams.includes(workspace.id) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Teams list (shown when expanded) */}
                  {expandedTeams.includes(workspace.id) && (
                    <div className="mt-4 pt-4 border-t border-slate-700/30 space-y-3">
                      {workspace.teams.map(team => (
                        <div key={team.id} className="flex items-center justify-between p-3 hover:bg-slate-800/50 rounded-lg transition-all duration-200 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-slate-700/50 rounded-lg flex items-center justify-center">
                              <Users className="w-4 h-4 text-slate-300" />
                            </div>
                            <span className="text-slate-300 text-sm font-medium">{team.name}</span>
                          </div>
                          {team.unread > 0 && (
                            <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                              {team.unread} new
                            </span>
                          )}
                        </div>
                      ))}
                      <button className="w-full flex items-center justify-center p-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-200">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Team
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Empty state */}
            {workspaces.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-slate-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-400 mb-2">No workspaces yet</h3>
                <p className="text-slate-500 mb-6">
                  Create your first workspace to collaborate with your team
                </p>
                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white text-sm font-medium flex items-center space-x-2 transition-all duration-200">
                  <Plus className="w-4 h-4" />
                  <span>New Workspace</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacesPage;
