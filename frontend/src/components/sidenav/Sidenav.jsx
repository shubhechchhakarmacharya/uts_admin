import React, { useState } from "react";
import {
  HomeIcon,
  ArrowsUpDownIcon,
  PencilSquareIcon,
  DocumentDuplicateIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  NewspaperIcon,
  CameraIcon,
  ClipboardDocumentListIcon,
  PhotoIcon,
  UserGroupIcon,
  ChevronDownIcon,
  Bars3Icon, // Import burger icon
} from "@heroicons/react/24/outline";

const navItems = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    type: "dashboard",
  },
  {
    name: "In/Out",
    icon: ArrowsUpDownIcon,
    type: "in-out",
  },
  {
    name: "Leave Application",
    icon: PencilSquareIcon,
    type: "leave-application",
  },
  {
    name: "Leave Register",
    icon: DocumentDuplicateIcon,
    type: "leave-register",
  },
  {
    name: "Travel Application",
    icon: GlobeAltIcon,
    type: "travel-application",
  },
  {
    name: "Monthly Attendance",
    icon: CalendarDaysIcon,
    type: "monthly-attendance",
  },
  {
    name: "Salary Slip",
    icon: BanknotesIcon,
    type: "salary-slip",
  },
  {
    name: "Requisition",
    icon: NewspaperIcon,
    type: "requisition",
    hasArrow: true,
  },
  {
    name: "Payroll",
    icon: NewspaperIcon,
    type: "payroll",
    hasArrow: true,
  },
  {
    name: "Photo Upload",
    icon: CameraIcon,
    type: "photo-upload",
  },
  {
    name: "Survey",
    icon: ClipboardDocumentListIcon,
    type: "survey",
    hasArrow: true,
  },
  {
    name: "Gallery",
    icon: PhotoIcon,
    type: "gallery",
    hasArrow: true,
  },
  {
    name: "Employee Details",
    icon: UserGroupIcon,
    type: "employee-details",
  },
];

function Sidenav() {
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
            className="w-8 h-8 text-primaryColor"
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

export default Sidenav;
