import React from "react";
import {
  AlertTriangle,
  FileText,
  Calendar,
  Server,
  Home,
  ChevronRight,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 mb-2">

      {/* Top Header */}
      <div
        className="w-full bg-white border-gray-200 rounded-tl-lg rounded-bl-lg h-[90px] overflow-hidden"
        style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.15)" }}
      >
        <div className="flex h-full">
          
          {/* Left Content */}
          <div className="w-2/3 px-5 py-3">
            <h1 className="text-2xl font-semibold text-blue-500">
              Dashboard
            </h1>
            <p className="text-[#4D607F] text-sm mt-2 pl-1">
              Overview Of Incidents
            </p>
          </div>

          {/* Right Image */}
          <div
            className="w-1/3 h-full"
            style={{
              backgroundImage: "url(/images/header-bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto mt-4 max-w-[1200px] bg-white rounded-lg p-6 space-y-6 shadow-md">

        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500">
          <Home className="w-4 h-4 mr-1 text-gray-400" />
          <span className="cursor-pointer hover:text-blue-600">
            Home
          </span>
          <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="font-medium text-gray-700">
            Dashboard
          </span>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-md shadow-sm">
            Last updated: Just now
          </span>
          <button
            type="button"
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md shadow-sm hover:shadow-md transition"
          >
            Generate Report
          </button>
        </div>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between">
              <p className="text-sm text-blue-600">Total CIs</p>
              <Server size={18} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">5</h2>
            <p className="text-xs text-green-600 mt-1">
              ↑ +2.1% from last month
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between">
              <p className="text-sm text-blue-600">
                Active Incidents
              </p>
              <AlertTriangle size={18} className="text-red-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">3</h2>
            <p className="text-xs text-gray-500 mt-1">
              1 Critical Priority
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between">
              <p className="text-sm text-blue-600">
                Expiring Contracts
              </p>
              <FileText size={18} className="text-blue-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">1</h2>
            <p className="text-xs text-gray-500 mt-1">
              Next 90 days
            </p>
          </div>

          <div className="p-4 rounded-lg bg-white shadow-sm">
            <div className="flex justify-between">
              <p className="text-sm text-blue-600">
                Pending PMs
              </p>
              <Calendar size={18} className="text-purple-500" />
            </div>
            <h2 className="text-2xl font-semibold mt-2">1</h2>
            <p className="text-xs text-gray-500 mt-1">
              Scheduled for this week
            </p>
          </div>
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-[260px] rounded-lg bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-blue-600">
              Incidents by Priority
            </h3>
            <p className="text-xs text-gray-500">
              Distribution of current active tickets
            </p>
          </div>

          <div className="h-[260px] rounded-lg bg-white p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-blue-600">
              CI Types
            </h3>
            <p className="text-xs text-gray-500">
              Infrastructure breakdown
            </p>
          </div>
        </section>

        {/* Alerts */}
        <section className="rounded-lg bg-white p-4 space-y-4 shadow-sm">
          <div>
            <h3 className="text-sm font-semibold text-blue-600">
              Critical Health Alerts
            </h3>
            <p className="text-xs text-gray-500">
              CIs reporting issues or non-compliance
            </p>
          </div>

          <div className="flex justify-between items-center bg-white rounded-md p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div>
                <p className="text-sm font-medium">PROD-APP-01</p>
                <p className="text-xs text-gray-500">
                  Server • 10.0.1.20
                </p>
              </div>
            </div>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-md shadow-sm">
              Warning
            </span>
          </div>

          <div className="flex justify-between items-center bg-white rounded-md p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <div>
                <p className="text-sm font-medium">UAT-WEB-01</p>
                <p className="text-xs text-gray-500">
                  Server • 10.0.2.10
                </p>
              </div>
            </div>
            <span className="text-xs px-2 py-1 bg-red-500 text-white rounded-md shadow-sm">
              Critical
            </span>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
