import React, { useState } from "react";
import {
  HomeIcon,
  ComputerDesktopIcon,
  ListBulletIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  CameraIcon,
  ShieldCheckIcon,
  Cog8ToothIcon,
  PhotoIcon,
  DocumentMagnifyingGlassIcon,
  NewspaperIcon,
  UserGroupIcon,
  PrinterIcon,
  ArrowDownTrayIcon,
  ChevronDownIcon,
  BoltIcon,
  Bars3Icon, // Import burger icon
} from "@heroicons/react/24/outline";

const navItems = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    type: "dashboard",
  },
  {
    name: "Admin",
    icon: ComputerDesktopIcon,
    type: "admin",
    hasArrow: true,
  },
  {
    name: "HR",
    icon: UserGroupIcon,
    type: "hr",
    hasArrow: true,
  },
  {
    name: "Reports HR",
    icon: ListBulletIcon,
    type: "reports hr",
    hasArrow: true,
  },
  {
    name: "Reports Admin",
    icon: ListBulletIcon,
    type: "travel-application",
    hasArrow: true,
  },
  {
    name: "Security",
    icon: LockClosedIcon,
    type: "security",
    hasArrow: true,
  },
  {
    name: "Photo Upload",
    icon: CameraIcon,
    type: "photo_upload",
    hasArrow: true,
  },
  {
    name: "Gallery",
    icon: PhotoIcon,
    type: "gallery",
    hasArrow: true,
  },
  {
    name: "Survey",
    icon: DocumentCheckIcon,
    type: "survey",
    hasArrow: true,
  },
  {
    name: "SMS",
    icon: ChatBubbleLeftRightIcon,
    type: "sms",
    hasArrow: true,
  },
  {
    name: "IT Inventory",
    icon: Cog8ToothIcon,
    type: "it_inventory",
    hasArrow: true,
  },
  {
    name: "IT Inventory Report",
    icon: ListBulletIcon,
    type: "it_inventory_report",
    hasArrow: true,
  },
  {
    name: "Employee Photo",
    icon: CameraIcon,
    type: "employee-photo",
    hasArrow: true,
  },
  {
    name: "Guard Patrolling",
    icon: ShieldCheckIcon,
    type: "guard_patrolling",
    hasArrow: true,
  },
  {
    name: "Documents",
    icon: DocumentMagnifyingGlassIcon,
    type: "documents",
    hasArrow: true,
    hasnum: true,
  },
  {
    name: "Requisition",
    icon: NewspaperIcon,
    type: "requisition",
    hasArrow: true,
    hasnum: true,
  },
  {
    name: "Letter Print",
    icon: PrinterIcon,
    type: "letter-print",
    hasArrow: true,
  },
  {
    name: "Atten Download",
    icon: ArrowDownTrayIcon,
    type: "atten_download",
    hasArrow: true,
  },
  {
    name: "Scooter",
    icon: BoltIcon,

    type: "scooter",
    hasArrow: true,
  },
];

function Hr_sidenav() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  return (
    <>
      <div className="lg:basis-1/5 ">
        <div className="md:hidden flex items-center justify-between p-4 bg-transparent absolute top-1.5">
          <Bars3Icon
            className="w-8 h-8 text-primaryColor fixed"
            onClick={toggleSidenav}
          />
        </div>
        <div
          className={`sidenav bg-white mt-6 basis-1/5 transform ${
            isSidenavOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out fixed md:relative z-50 mt-20 md:mt-5`}
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`button bg-white ${
                item.name === activeItem
                  ? "border-l-primaryColor border-l-0 lg:border-l-8"
                  : ""
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <div
                className={`flex justify-between py-3 pl-5 pr-5 rounded-lg place-items-center md:ml-10 cursor-pointer ${
                  item.name === activeItem ? "bg-primaryColor" : "bg-white"
                }`}
              >
                <div className="flex place-items-center">
                  <div className="icon">
                    <item.icon
                      className={`${
                        item.name === activeItem
                          ? "text-white"
                          : "text-primaryColor"
                      } w-5 h-5 md:w-6 md:h-6`}
                    />
                  </div>
                  <div
                    className={`nunito ${
                      item.name === activeItem
                        ? "text-white"
                        : "text-primaryColor"
                    } font-medium text-sm md:text-lg pl-3`}
                  >
                    {item.name}
                  </div>
                  {item.hasnum && (
                    <div
                      className={`${
                        item.name === activeItem
                          ? "text-white"
                          : "text-primaryColor"
                      } ml-2`}
                    >
                      <div className="number bg-red text-white lg:px-1.5 lg:text-sm text-xs px-1 rounded-full">
                        2
                      </div>
                    </div>
                  )}
                </div>

                {item.hasArrow && (
                  <div className="icon">
                    <ChevronDownIcon
                      className={`${
                        item.name === activeItem
                          ? "text-white"
                          : "text-primaryColor"
                      } w-5 h-5 md:w-6 md:h-6`}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hr_sidenav;
