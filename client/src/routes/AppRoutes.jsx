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

      {/* Nest all dashboard children under Dashboard layout */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Inbox />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="reports" element={<Reports />} />
        <Route path="workspaces" element={<Workspace />} />
        <Route path="account" element={<Account />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
