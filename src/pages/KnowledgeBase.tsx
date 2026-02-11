import React, { useState } from "react";
import { Home, ChevronRight, Search, Pencil, Trash2 } from "lucide-react";

const KnowledgeBase: React.FC = () => {
  const [currentView, setCurrentView] = useState<"list" | "create">("list");

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= LIST VIEW ================= */}
      {currentView === "list" && (
        <>
          {/* ================= HEADER ================= */}
          <div
            className="bg-white shadow-sm bg-no-repeat bg-right"
            style={{
              backgroundImage: "url('/images/bg-corner.png')",
              backgroundSize: "auto 100%",
            }}
          >
            <div className="w-full mx-auto px-4 py-4">
              <h1 className="text-[22px] font-semibold text-blue-600">
                Knowledge Base Article
              </h1>
              <p className="text-[14px] text-gray-500 mt-1">
                Information below to a knowledge Base article
              </p>
            </div>
          </div>

          {/* ================= MAIN CONTAINER ================= */}
          <div className="w-full mx-auto px-4 mt-4 flex flex-col gap-6">

            {/* SEARCH & FILTER CARD */}
            <div className="bg-white rounded-lg shadow-md p-5">

              {/* Breadcrumb + Button */}
              <div className="flex justify-between items-center flex-wrap gap-4 mb-5">
                <div className="flex items-center gap-2 text-[13px] text-gray-600">
                  <Home size={14} />
                  <span>Home</span>
                  <ChevronRight size={14} />
                  <span className="font-medium">Knowledge Article</span>
                </div>

                <button
                  className="bg-blue-500 h-[35px] px-4 rounded text-white text-[15px] font-semibold hover:bg-blue-600 transition"
                  onClick={() => setCurrentView("create")}
                >
                  Create New Knowledge Article
                </button>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="text-[13px] font-medium text-blue-600">
                    Search
                  </label>
                  <div className="relative mt-1">
                    <input
                      type="text"
                      placeholder="Search Knowledge Base Article"
                      className="w-full h-[30px] px-2 pr-8 text-[14px] rounded-[5px] border placeholder:text-[13px] placeholder:text-gray-300"
                      style={{ borderColor: "rgba(101,117,143,0.18)" }}
                    />
                    <Search
                      size={14}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[13px] font-medium text-blue-600">
                    Category
                  </label>
                  <select
                    className="w-full h-[30px] px-2 rounded-[5px] border text-[14px] text-gray-400 mt-1"
                    style={{ borderColor: "rgba(101,117,143,0.18)" }}
                  >
                    <option></option>
                  </select>
                </div>

                <div>
                  <label className="text-[13px] font-medium text-blue-600">
                    Sub-Category
                  </label>
                  <select
                    className="w-full h-[30px] px-2 rounded-[5px] border mt-1 text-[14px]"
                    style={{ borderColor: "rgba(101,117,143,0.18)" }}
                  >
                    <option></option>
                  </select>
                </div>
              </div>
            </div>

            {/* KNOWLEDGE CARD */}
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-4 right-4 flex gap-3">
                <Pencil size={16} className="text-blue-500 cursor-pointer" />
                <Trash2 size={16} className="text-red-500 cursor-pointer" />
              </div>

              <div className="border-b pb-3 mb-3">
                <h2 className="text-[18px] font-bold text-blue-600">
                  Knowledge Article Title
                </h2>
                <p className="text-[14px] text-gray-500 mt-1">
                  Category: IT / Access
                </p>
              </div>

              <p className="text-[14px] text-gray-700 mb-2">
                <b>Summary:</b> Short summary of the knowledge article.
              </p>
              <p className="text-[14px] text-gray-700 mb-2">
                <b>Problem:</b> Problem description goes here.
              </p>
              <p className="text-[14px] text-gray-700 mb-4">
                <b>Resolution:</b> Resolution steps explained here.
              </p>

              <div className="border-t pt-3 flex flex-wrap gap-6 text-[13px] text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">Authored By</span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full">
                    Admin
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span>📅 Created On 01/29/2026</span>
                  <span>✏️ Updated On 01/30/2026</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ================= CREATE VIEW ================= */}
      {currentView === "create" && (
        <div className="flex flex-col items-center min-h-screen bg-gray-50">

          {/* HEADER */}
          <div
            className="w-full border-b border-gray-200 bg-white pl-6 pt-3 pb-4 shadow-sm bg-no-repeat bg-right"
            style={{
              backgroundImage: "url('/images/bg-corner.png')",
              backgroundSize: "auto 100%",
            }}
          >
            <h1 className="text-[22px] font-semibold text-blue-500">
              Create Knowledge Article
            </h1>
            <p className="text-[14px] text-gray-600 mt-1">
              Fill in the information below to create a new knowledge article
            </p>
          </div>

          {/* MAIN CONTAINER */}
          <div className="w-full max-w-[1171px] flex flex-col gap-6 mt-4">

            <div className="bg-white rounded-lg shadow-md p-4">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-1 text-[13px] text-slate-600 mb-4">
                <span className="font-medium">Home</span>
                <span>{">"}</span>
                <span className="font-medium">Knowledge Base</span>
                <span>{">"}</span>
                <span className="font-medium">Create</span>
              </nav>

              {/* FORM */}
              <div className="flex flex-col gap-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[13px] font-medium text-blue-500">
                      KB Article Number
                    </label>
                    <div className="h-[30px] mt-1 px-2 flex items-center bg-gray-100 rounded text-[14px] text-gray-500">
                      KB-024-00003
                    </div>
                  </div>

                  <div>
                    <label className="text-[13px] font-medium text-blue-500">
                      KB Article Type
                    </label>
                    <div className="h-[30px] mt-1 border rounded bg-gray-50" />
                  </div>

                  <div>
                    <label className="text-[13px] font-medium text-blue-500">
                      Category
                    </label>
                    <div className="h-[30px] mt-1 border rounded bg-gray-50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[13px] font-medium text-blue-500">
                      Sub Category
                    </label>
                    <div className="h-[30px] mt-1 border rounded bg-gray-50" />
                  </div>

                  <div>
                    <label className="text-[13px] font-medium text-blue-500">
                      KB Owned Assignment Group
                    </label>
                    <div className="h-[30px] mt-1 border rounded bg-gray-50" />
                  </div>

                  <div>
                    <label className="text-[13px] font-medium text-blue-500">
                      KB Owned By
                    </label>
                    <div className="h-[30px] mt-1 border rounded bg-gray-50" />
                  </div>
                </div>

                <div>
                  <label className="text-[13px] font-medium text-blue-500">
                    KB Title
                  </label>
                  <input
                    className="w-full h-[41px] mt-1 px-3 border rounded shadow-sm text-[14px]"
                    placeholder="Type the KB Article Title"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-medium text-blue-500">
                    KB Summary
                  </label>
                  <textarea
                    className="w-full h-[83px] mt-1 p-2 border rounded shadow-sm text-[14px] resize-none"
                    placeholder="Type the Short problem/solution summary"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-medium text-blue-500">
                    Problem Description
                  </label>
                  <textarea
                    className="w-full h-[104px] mt-1 p-2 border rounded shadow-sm text-[14px] resize-none"
                    placeholder="Type the detailed context of the problem"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-medium text-blue-500">
                    Resolution | Workaround
                  </label>
                  <textarea
                    className="w-full h-[112px] mt-1 p-2 border rounded shadow-sm text-[14px] resize-none"
                    placeholder="Type the step-by-step solution or workaround"
                  />
                </div>

              </div>
            </div>

            {/* FOOTER */}
            <div className="w-full h-[65px] bg-white rounded-lg shadow-md border-t flex items-center justify-end gap-4 px-4 mb-10">
              <button className="h-[35px] px-4 bg-gray-100 border border-gray-400 rounded text-[14px] text-gray-700">
                Cancel
              </button>
              <button className="h-[35px] px-4 bg-blue-500 rounded text-[14px] text-white">
                Preview
              </button>
              <button className="h-[35px] px-4 bg-blue-500 rounded text-[14px] text-white">
                Create KB Article
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;
