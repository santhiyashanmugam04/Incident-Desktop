import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
// Using Lucide for the icons shown in your image
import { 
  LayoutGrid, 
  Database, 
  ChevronDown, 
  ChevronUp, 
  ClipboardList 
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
      {/* Branding matched to image */}
      <div className="px-3 py-4 mb-2 flex items-center gap-">
        <h1 className="text-xl font-bold text-blue-900">
          NextOpz <span className="text-blue-500 font-semibold">Support</span>
        </h1>
      </div>

      <nav className="space-y-1">
        {sidebarMenu.map(menu => (
          <div key={menu.title}>
            {!menu.subItems ? (
              /* DASHBOARD / SINGLE ITEM */
              <Link
                to={menu.route!}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all
                  ${isActive(menu.route!)
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 font-medium"
                  }`}
              >
                <span className={isActive(menu.route!) ? "text-blue-600" : "text-gray-500"}>
                  {menu.icon}
                </span>
                <span className="text-sm">{menu.title}</span>
              </Link>
            ) : (
              /* DROPDOWN ITEMS */
              <>
                <button
                  onClick={() => toggleMenu(menu.title)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-600 hover:bg-gray-50 font-medium transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500">{menu.icon}</span>
                    <span className="text-sm">{menu.title}</span>
                  </div>
                  {openMenu[menu.title] ? (
                    <ChevronUp size={14} className="text-gray-400" />
                  ) : (
                    <ChevronDown size={14} className="text-gray-400" />
                  )}
                </button>

                {openMenu[menu.title] && (
                  <div className="ml-9 mt-1 space-y-1 border-l border-gray-100">
                    {menu.subItems.map(sub => (
                      <Link
                        key={sub.title}
                        to={sub.route}
                        className={`block px-4 py-1.5 text-xs rounded-mr-md transition-colors
                          ${isActive(sub.route)
                            ? "text-blue-600 font-medium"
                            : "text-gray-500 hover:text-blue-600 hover:bg-gray-50"
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