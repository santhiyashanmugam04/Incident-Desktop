import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutGrid,
  Database,
  ClipboardList,
  FileText,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const sidebarMenu = [
  {
    title: "Dashboard",
    route: "/",
    icon: <LayoutGrid size={18} />,
  },
  {
    title: "Inventory",
    icon: <Database size={18} />,
    subItems: [
      { title: "All Inventory", route: "/inventory/all" },
      { title: "Create Inventory", route: "/inventory/create" },
    ],
  },
  {
    title: "Tasks",
    icon: <ClipboardList size={18} />,
    subItems: [
      { title: "All Tasks", route: "/tasks/all" },
      { title: "Create Task", route: "/tasks/create" },
    ],
  },
  {
    title: "Contracts",
    route: "/contracts",
    icon: <FileText size={18} />,
  },
  {
    title: "Knowledge Base",
    route: "/knowledge-base",
    icon: <BookOpen size={18} />,
  },
];

const AppSidebar = () => {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({
    Inventory: false,
    Tasks: false,
  });

  const toggleMenu = (title: string) => {
    setOpenMenu(prev => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 fixed top-0 left-0 h-screen bg-white border-r border-gray-100 p-3">
      {/* Branding */}
      <div className="px-3 py-4 mb-2">
        <h1 className="text-xl font-bold text-blue-900">
          NextOpz <span className="text-blue-500">Support</span>
        </h1>
      </div>

      <nav className="space-y-1">
        {sidebarMenu.map(menu => (
          <div key={menu.title}>
            {!menu.subItems ? (
              /* SINGLE ITEM */
              <Link
                to={menu.route!}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all
                  ${
                    isActive(menu.route!)
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-50 font-medium"
                  }`}
              >
                <span>{menu.icon}</span>
                <span className="text-sm">{menu.title}</span>
              </Link>
            ) : (
              /* DROPDOWN */
              <>
                <button
                  onClick={() => toggleMenu(menu.title)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 font-medium"
                >
                  <div className="flex items-center gap-3">
                    {menu.icon}
                    <span className="text-sm">{menu.title}</span>
                  </div>
                  {openMenu[menu.title] ? (
                    <ChevronUp size={14} />
                  ) : (
                    <ChevronDown size={14} />
                  )}
                </button>

                {openMenu[menu.title] && (
                  <div className="ml-9 mt-1 space-y-1 border-l border-gray-100">
                    {menu.subItems.map(sub => (
                      <Link
                        key={sub.title}
                        to={sub.route}
                        className={`block px-4 py-1.5 text-xs rounded-md
                          ${
                            isActive(sub.route)
                              ? "text-blue-600 font-medium"
                              : "text-gray-500 hover:text-blue-600"
                          }`}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default AppSidebar;
