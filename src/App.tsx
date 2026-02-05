import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";

import LoginPage from "./pages/auth/Loginpage";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllInventory from "./pages/Inventory/AllInventory";
import CreateInventory from "./pages/Inventory/CreateInventory";
import AllTask from "./pages/Tasks/AllTask";
import CreateTask from "./pages/Tasks/CreateTask";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/login"
        element={<LoginPage onLogin={() => setIsAuthenticated(true)} />}
      />

      {/* PROTECTED APP */}
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <div className="min-h-screen bg-gray-50">
              {/* Sidebar */}
              <AppSidebar />

              {/* Right Content */}
              <div className="ml-60">
                {/* Header */}
                <AppHeader />

                {/* Pages */}
                <main className="p-6">
                  <Routes>
                    {/* Dashboard */}
                    <Route path="/" element={<Dashboard />} />

                    {/* Inventory */}
                    <Route path="/inventory/all" element={<AllInventory />} />
                    <Route
                      path="/inventory/create"
                      element={<CreateInventory />}
                    />

                    {/* Tasks */}
                    <Route path="/tasks/all" element={<AllTask />} />
                    <Route path="/tasks/create" element={<CreateTask />} />

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>
              </div>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;
