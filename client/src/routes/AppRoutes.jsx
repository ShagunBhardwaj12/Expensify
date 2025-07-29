import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Inbox from "../pages/Inbox";
import Reports from "../pages/Reports";
import Workspace from "../pages/Workspace";
import Account from "../pages/Account";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      
      {/* Dashboard routes - all under /dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/inbox" element={<Inbox />} />
      <Route path="/dashboard/reports" element={<Reports />} />
      <Route path="/dashboard/workspaces" element={<Workspace />} />
      <Route path="/dashboard/account" element={<Account />} />
      
      {/* Redirect /dashboard to /dashboard/inbox by default */}
      <Route path="/dashboard" element={<Navigate to="/dashboard/inbox" replace />} />
      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;