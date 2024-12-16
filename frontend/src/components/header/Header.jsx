import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  CalendarDateRangeIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import logo from "/logo.svg";
import profile from "/profile.png";

function Header() {
  const [notifications, setNotifications] = useState(2);
  const [calendarEvents, setCalendarEvents] = useState(2);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="header bg-white">
      <div className="header ml-8 mr-0 lg:mx-10 my-2">
        <div className="flex justify-between place-items-center">
          <div className="logo flex place-items-center basis-1/3 ml-4 lg:ml-0">
            <div className="image">
              <img src={logo} alt="logo" className="lg:w-auto" />
            </div>
            <div className="text lg:font-bold font-medium text-sm text-primaryColor pl-4 sm:text-lg  ">
              UTS | HR/Admin
            </div>
          </div>
          <div className="right">
            <div className="flex place-items-center">
              <div className="search bg-tertiaryColor border pl-5 pr-20 py-2 rounded-md hidden lg:flex ">
                <div className="icon">
                  <MagnifyingGlassIcon className="w-7 h-6 text-secondaryColor" />
                </div>
                <input
                  type="text"
                  placeholder="Quick Search"
                  className="pl-2 text-primaryColor text-sm bg-tertiaryColor"
                  style={{ width: "25rem" }}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div className="icons content-center flex sm:gap-3  ml-12 pl-5 sm:border-l-gray-300 lg:border-l-2">
                <div className="calendar bg-tertiaryColor p-2 rounded-full relative cursor-pointer lg:p-4">
                  <CalendarDateRangeIcon className="text-primaryColor size-5 sm:size-7" />
                  {calendarEvents > 0 && (
                    <div className="number absolute top-0 lg:left-10 bg-red text-white lg:px-1.5 px-1 lg:text-sm text-xs right-0 rounded-full">
                      {calendarEvents}
                    </div>
                  )}
                </div>
                <div className="notification bg-tertiaryColor p-2 rounded-full relative lg:ml-4 ml-2 lg:mr-10 mr-3 cursor-pointer lg:p-4">
                  <BellIcon className="text-primaryColor size-5 sm:size-7" />
                  {notifications > 0 && (
                    <div className="number absolute top-0 lg:left-10 bg-red text-white lg:px-1.5 px-1 lg:text-sm text-xs right-0 rounded-full">
                      {notifications}
                    </div>
                  )}
                </div>
              </div>
              <div className="profile">
                <div className="flex cursor-pointer">
                  <div className="image">
                    <img src={profile} alt="profileimage" className="w-auto" />
                  </div>
                  <div className="info ml-2 hidden sm:block">
                    <div className="name font-light text-primaryColor">
                      Admin
                    </div>
                    <div className="email font-light text-primaryColor">
                      admin@voith.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
