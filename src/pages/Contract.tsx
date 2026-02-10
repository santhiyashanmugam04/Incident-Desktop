import React from "react";
import headerBg from "../images/header-bg.png";

const Contract: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* HEADER SECTION */}
      <div
        className="w-full bg-white border-gray-200 rounded-tl-lg rounded-bl-lg h-[90px] overflow-hidden"
        style={{ boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.15)" }}
      >
        <div className="flex h-full">
          {/* Left Content */}
          <div className="flex-1 px-5 py-3">
            <h1 className="text-2xl font-semibold text-blue-500">
              Contracts Repository
            </h1>
            <p className="text-[#4D607F] text-sm mt-2 pl-1">
              Manage AMC contracts, licenses, and warranties Repository
            </p>
          </div>

          {/* Right Background Image */}
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
      </div>

      {/* MAIN WHITE CONTAINER (HEIGHT FIXED ✅) */}
      <div className="w-full h-867px mt-3">
        <div
          className="bg-white rounded-lg p-6"
          style={{ boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)" }}
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between mb-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10"
                />
              </svg>
              <span className="font-medium">Home</span>
              <span>{">"}</span>
              <span className="text-gray-800 font-medium">Contracts</span>
            </div>

            {/* Upload Button */}
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2  font-medium transition">
              Upload Contract
            </button>
          </div>

          {/* CONTRACT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* CARD 1 */}
            <div
              className="bg-white rounded-lg p-4 relative"
              style={{ boxShadow: "0px 3px 8px rgba(0,0,0,0.08)" }}
            >
              <span className="absolute top-3 right-3 border border-green-600 bg-green-100 text-green-700 text-[11px] px-2 py-0.5 rounded-full font-medium">
                Active
              </span>

              <h3 className="text-sm font-semibold text-gray-800 mt-5">
                Dell Enterprise Server Support 2024–2026
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Dell Technologies
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b pb-1">
                  <span className="text-gray-500">Contract ID</span>
                  <span className="font-medium">CTR-2024-001</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-gray-500">Valid Until</span>
                  <span className="font-medium">12/31/2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Value</span>
                  <span className="font-medium">$45,000</span>
                </div>
              </div>

              <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-xs py-1.5 rounded-md font-medium">
                     Download
              </button>
            </div>

            {/* CARD 2 */}
            <div
              className="bg-white rounded-lg p-4 relative"
              style={{ boxShadow: "0px 3px 8px rgba(0,0,0,0.08)" }}
            >
              <span className="absolute top-3 right-3 border border-red-600 bg-red-100 text-red-700 text-[11px] px-2 py-0.5 rounded-full font-medium">
                Expiring Soon
              </span>

              <h3 className="text-sm font-semibold text-gray-800 mt-5">
                Cisco SmartNet Renewal
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Cisco Systems
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b pb-1">
                  <span className="text-gray-500">Contract ID</span>
                  <span className="font-medium">CTR-2023-088</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span className="text-gray-500">Valid Until</span>
                  <span className="font-medium text-red-500">05/14/2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Value</span>
                  <span className="font-medium">$12,500</span>
                </div>
              </div>

              <button className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-xs py-1.5 rounded-md font-medium">
                Download
              </button>
            </div>

            {/* CARD 3 - ADD NEW */}
            <div
              className="bg-white rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition"
              style={{ boxShadow: "0px 3px 8px rgba(0,0,0,0.08)" }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xl mb-3">
                +
              </div>

              <h3 className="text-sm font-semibold text-gray-700">
                Add New Contract
              </h3>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Upload or create a new contract
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contract;
