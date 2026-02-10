import React from "react";
import {
  AlertTriangle,
  FileText,
  Calendar,
  Server,
  Home,
  ChevronRight,
} from "lucide-react";

// ✅ IMPORT IMAGE FROM SRC
import headerBg from "../../images/header-bg.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 mb-6">

      {/* ================= TOP HEADER ================= */}
      <div
        className="w-full mb-3 bg-white border-gray-200 rounded-tl-lg rounded-bl-lg
                   h-[90px] overflow-hidden flex"
        style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.15)" }}
      >
        {/* Left Content */}
        <div className="w-2/3 px-5 py-3 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-blue-500">
            Dashboard
          </h1>
          <p className="text-[#4D607F] text-sm mt-1 pl-1">
            Overview Of Incidents
          </p>
        </div>

        {/* Right Image */}
        <div
          className="w-1/3 h-full"
          style={{
            backgroundImage: `url(${headerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <main className="bg-white p-6 space-y-6">

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
          <span className="text-sm text-gray-500 px-3 py-2 rounded-md">
            Last updated: Just now
          </span>
          <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md hover:bg-blue-700 transition">
            Generate Report
          </button>
        </div>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="p-5 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <p className="text-sm text-blue-600 font-medium">Total CIs</p>
              <div className="p-2 bg-gray-50 rounded-md">
                <Server size={20} className="text-gray-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-3 text-gray-800">5</h2>
            <p className="text-xs text-green-600 mt-2">
              +2.1% from last month
            </p>
          </div>

          <div className="p-5 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <p className="text-sm text-blue-600 font-medium">
                Active Incidents
              </p>
              <div className="p-2 bg-red-50 rounded-md">
                <AlertTriangle size={20} className="text-red-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-3 text-gray-800">3</h2>
            <p className="text-xs text-gray-500 mt-2">
              1 Critical Priority
            </p>
          </div>

          <div className="p-5 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <p className="text-sm text-blue-600 font-medium">
                Expiring Contracts
              </p>
              <div className="p-2 bg-blue-50 rounded-md">
                <FileText size={20} className="text-blue-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-3 text-gray-800">1</h2>
            <p className="text-xs text-gray-500 mt-2">
              Next 90 days
            </p>
          </div>

          <div className="p-5 rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <p className="text-sm text-blue-600 font-medium">
                Pending PMs
              </p>
              <div className="p-2 bg-purple-50 rounded-md">
                <Calendar size={20} className="text-purple-500" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mt-3 text-gray-800">1</h2>
            <p className="text-xs text-gray-500 mt-2">
              Scheduled for this week
            </p>
          </div>
    </section>
           {/* Charts Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="h-[280px] rounded-lg bg-white p-5 shadow-sm border border-gray-100">
            <h3 className="text-base font-semibold text-blue-600">
              Incidents by Priority
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Distribution of current active tickets
            </p>
            <div className="mt-4 flex items-center justify-center h-[180px] text-gray-400 text-sm">
              Chart visualization goes here
            </div>
          </div>

          <div className="h-[280px] rounded-lg bg-white p-5 shadow-sm border border-gray-100">
            <h3 className="text-base font-semibold text-blue-600">
              CI Types
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Infrastructure breakdown
            </p>
            <div className="mt-4 flex items-center justify-center h-[180px] text-gray-400 text-sm">
              Chart visualization goes here
            </div>
          </div>
        </section>

        {/* Critical Health Alerts */}
        <section className="rounded-lg bg-white p-5 space-y-4 shadow-sm border border-gray-100">
          <div>
            <h3 className="text-base font-semibold text-blue-600">
              Critical Health Alerts
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              CIs reporting issues or non-compliance
            </p>
          </div>

          {/* WARNING */}
          <div className="flex justify-between items-center bg-white rounded-md p-4 border border-gray-200 hover:bg-gray-50 transition">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-gray-800">PROD-APP-01</p>
                <p className="text-xs text-gray-500">
                  Server • 10.0.1.20
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-3 py-1.5 bg-yellow-50 text-yellow-700 border rounded-md">
                Warning
              </span>
              <button className="text-xs text-blue-600 hover:underline">
                View
              </button>
            </div>
          </div>

          {/* CRITICAL */}
          <div className="flex justify-between items-center bg-white rounded-md p-4 border border-gray-200 hover:bg-gray-50 transition">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-gray-800">UAT-WEB-01</p>
                <p className="text-xs text-gray-500">
                  Server • 10.0.2.10
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-3 py-1.5 bg-red-500 text-white rounded-md">
                Critical
              </span>
              <button className="text-xs text-blue-600 hover:underline">
                View
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
