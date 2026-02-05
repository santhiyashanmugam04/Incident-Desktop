import { useState } from "react";
import { Icon } from "@iconify/react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-[50px] px-6 flex items-center justify-between bg-gray-50 ">
      {/* Left - Search */}
      <div className="relative w-54">
        <Icon
          icon="material-symbols:search"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
        />
        <input
          placeholder="Search"
          className="h-7 w-full pl-9 pr-3 rounded-full bg-white border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none"
        />
      </div>

      {/* Right - Actions */}
      <div className="flex items-center gap-2">
        {/* Settings */}
        <button className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-gray-100">
          <Icon icon="material-symbols:settings" className="w-4 h-4" />
        </button>

        {/* Notification */}
        <button className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-gray-100">
          <Icon icon="solar:bell-bing-bold" className="w-4 h-4" />
        </button>

        {/* More */}
        <button className="h-9 w-9 flex items-center justify-center rounded-md hover:bg-gray-100">
          <Icon icon="hugeicons:more-01" className="w-4 h-4" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <Icon icon="ix:user-profile-filled" className="w-4 h-4" />
          </button>

          {/* Dropdown UI */}
          {open && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border text-sm z-50">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <Icon icon="mdi:account" className="w-4 h-4" />
                Profile
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
                <Icon icon="mdi:cog-outline" className="w-4 h-4" />
                Settings
              </div>
              <div className="border-t my-1" />
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2 text-red-600">
                <Icon icon="mdi:logout" className="w-4 h-4" />
                Log out
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
