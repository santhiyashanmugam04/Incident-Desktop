import React from "react";
import {
  Home,
  ChevronRight,
  Clock,
  FileText,
  AlertTriangle,
  Calendar,
  Database,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-poppins font-medium">
      {/* HEADER */}
      <header className="bg-white px-8 pt-3 pb-6 shadow-sm relative overflow-hidden border-b border-gray-100">
        <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-blue-50/60 to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <h1 className="text-2xl text-blue-600 tracking-tight font-medium">
            Dashboard
          </h1>
          <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-wider">
            Overview of incidents
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main className="mt-4 p-8 max-w-[1600px] bg-white mx-auto space-y-6">
        {/* BREADCRUMB & ACTIONS */}
        <div className="flex items-center justify-between mb-4">
          <nav className="flex items-center gap-2 text-[11px] text-gray-400">
            <Home size={12} className="text-gray-300" />
            <ChevronRight size={12} />
            <span className="text-gray-500 uppercase tracking-tight">
              Dashboard
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-[11px] text-blue-900 shadow-sm">
              <Clock size={14} className="text-blue-500" />
              LAST UPDATED: JUST NOW
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-xs font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-100 uppercase tracking-wide">
              Generate Report
            </button>
          </div>
        </div>

        {/* METRIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative group">
            <h3 className="text-[10px] text-blue-500 uppercase tracking-widest">
              Total CIs
            </h3>
            <p className="text-3xl font-semibold text-slate-800 mt-2">5</p>
            <p className="text-[10px] text-green-500 mt-2 flex items-center gap-1">
              <span className="text-xs">↗</span> +2.1%
              <span className="text-gray-400 lowercase">
                from last month
              </span>
            </p>
            <Database
              size={24}
              className="absolute top-5 right-5 text-slate-300 group-hover:text-blue-200 transition-colors"
            />
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
            <h3 className="text-[10px] text-blue-500 uppercase tracking-widest">
              Active Incidents
            </h3>
            <p className="text-3xl font-semibold text-slate-800 mt-2">3</p>
            <p className="text-[10px] text-gray-400 mt-2 uppercase">
              1 critical priority
            </p>
            <AlertTriangle
              size={24}
              className="absolute top-5 right-5 text-orange-400"
            />
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
            <h3 className="text-[10px] text-blue-500 uppercase tracking-widest">
              Expiring Contracts
            </h3>
            <p className="text-3xl font-semibold text-slate-800 mt-2">1</p>
            <p className="text-[10px] text-gray-400 mt-2 uppercase">
              Next 90 days
            </p>
            <FileText
              size={24}
              className="absolute top-5 right-5 text-blue-300"
            />
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative">
            <h3 className="text-[10px] text-blue-500 uppercase tracking-widest">
              Pending PMs
            </h3>
            <p className="text-3xl font-semibold text-slate-800 mt-2">1</p>
            <p className="text-[10px] text-gray-400 mt-2 uppercase">
              Scheduled this week
            </p>
            <Calendar
              size={24}
              className="absolute top-5 right-5 text-purple-300"
            />
          </div>
        </div>

        {/* CHART PLACEHOLDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-72">
            <h3 className="text-xs text-blue-600 uppercase tracking-wider">
              Incidents by Priority
            </h3>
            <p className="text-[11px] text-gray-400 mt-1">
              Distribution of current active tickets
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-72">
            <h3 className="text-xs text-blue-600 uppercase tracking-wider">
              CI Types
            </h3>
            <p className="text-[11px] text-gray-400 mt-1">
              Infrastructure breakdown
            </p>
          </div>
        </div>

        {/* HEALTH ALERTS */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-xs text-blue-600 uppercase tracking-wider">
            Critical Health Alerts
          </h3>
          <p className="text-[11px] text-gray-400 mt-1 mb-6">
            CIs reporting issues or non-compliance
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 border rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                <div>
                  <h4 className="text-sm text-slate-700">
                    PROD-APP-01
                  </h4>
                  <p className="text-[11px] text-gray-400 uppercase">
                    Server • 10.0.1.20
                  </p>
                </div>
              </div>
              <button className="text-xs font-semibold text-blue-600">
                VIEW
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-xl shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div>
                  <h4 className="text-sm text-slate-700">
                    UAT-WEB-01
                  </h4>
                  <p className="text-[11px] text-gray-400 uppercase">
                    Server • 10.0.2.10
                  </p>
                </div>
              </div>
              <button className="text-xs font-semibold text-blue-600">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
