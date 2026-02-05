import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const sidebarMenu = [
  {
    title: "Dashboard",
    route: "/",
  },
  {
    title: "Inventory",
    subItems: [
      { title: "All Inventory", route: "/inventory/all" },
      { title: "Create Inventory", route: "/inventory/create" },
    ],
  },
  {
    title: "Tasks",
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
    <aside className="w-60 fixed top-0 left-0 h-screen bg-white  p-4">
      <nav className="space-y-2 text-sm">
        {sidebarMenu.map(menu => (
          <div key={menu.title}>
            {/* MAIN MENU */}
            {!menu.subItems ? (
              <Link
                to={menu.route!}
                className={`block px-3 py-2 rounded
                  ${
                    isActive(menu.route!)
                      ? "bg-blue-100 text-blue-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {menu.title}
              </Link>
            ) : (
              <>
                {/* PARENT */}
                <button
                  onClick={() => toggleMenu(menu.title)}
                  className="w-full text-left px-3 py-2 rounded text-gray-700 hover:bg-gray-100 font-medium"
                >
                  {menu.title}
                </button>

                {/* CHILDREN */}
                {openMenu[menu.title] && (
                  <div className="ml-4 mt-1 space-y-1">
                    {menu.subItems.map(sub => (
                      <Link
                        key={sub.title}
                        to={sub.route}
                        className={`block px-3 py-2 rounded
                          ${
                            isActive(sub.route)
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-600 hover:bg-gray-100"
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
