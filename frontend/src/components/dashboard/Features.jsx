import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import weather from "/weather.svg";
import grow from "/grow.svg";
import add from "/add.svg";
import low from "/low.svg";
import time from "/time.svg";
import cloud_time from "/cloud_time.svg";
import call from "/call.svg";
import travel from "/travel.svg";
import remaining from "/remaining.svg";
import publish from "/publish.svg";
import pending from "/pending.svg";
import expiry from "/expiry.svg";
import edit from "/edit.svg";
import birthday from "/birthday.svg";
import emergency from "/emergency.svg";
import exchange from "/exchange.svg";
import Upcoming from "./Upcoming";
import Attendance from "./Attendance";
import Leave from "./Leave";
import Attendance_all from "./Attendance_all";

// const fetchWeatherData = async (apiKey) => {
//   const response = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=${apiKey}&units=metric`
//   );
//   const data = await response.json();
//   return {
//     temperature: `${data.main.temp}°C`,
//     condition: data.weather[0].main,
//   };
// };
function Features() {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  );
  const cardData = [
    {
      number: 190,
      icon: time,
      label: "Present",
      subtext: "+10% than yesterday",
      subtextIcon: grow,
      className: "present",
    },
    {
      number: 250,
      icon: call,
      label: "Employee Contact No",
      subtext: "2 new employees added!",
      subtextIcon: add,
      className: "contact",
    },
    {
      number: 30,
      icon: cloud_time,
      label: "Absent",
      subtext: "+3% than yesterday",
      subtextIcon: low,
      className: "absent",
    },
    {
      number: 1,
      icon: edit,
      label: "Employee Status",
      subtext: "1 employee is outside",
      subtextIcon: "/low.svg",
      className: "status",
    },
    {
      number: 3,
      icon: birthday,
      label: "Today's birthday",
      className: "birthday",
    },
    {
      number: 79,
      icon: emergency,
      label: "Emergency Number",
      className: "emergency",
    },
    {
      number: 22,
      icon: exchange,
      label: "Exchange Rate 2024-12-02",
      className: "exchange",
    },
    {
      number: 5,
      icon: travel,
      label: "Travel Request",
      className: "travel_request",
      subtextIcon: "/grow.svg",
      subtext: "5 new travel request",
    },
    {
      number: 1,
      icon: expiry,
      label: "Insurance Expiry",
      className: "insurance_expiry",
      subtext: "1 insurance expired",
      subtextIcon: low,
    },
    {
      number: 3,
      icon: exchange,
      label: "Documents Expiry",
      className: "document_expiry",
      subtext: "3 documents expired",
      subtextIcon: low,
    },
    {
      number: 6,
      icon: remaining,
      label: "Probation Remaining",
      className: "probation_remaining",
      subtextIcon: "/grow.svg",
      subtext: "6 probation remaining",
    },
    {
      number: 1,
      icon: pending,
      label: "Leave Approval Pending",
      className: "leave_approval_pending",
      subtextIcon: low,
      subtext: "1 leave approval pending",
    },
    {
      number: 0,
      icon: publish,
      label: "Vacancy Publish",
      className: "vacancy_publish",
      subtextIcon: low,
      subtext: "No vacancy published",
    },
  ];

  // const [weatherData, setWeatherData] = useState({
  //   temperature: "",
  //   condition: "",
  // });
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDate(
        new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const weather = await fetchWeatherData("84a8fc6f6c1b4d35b6a62218241112");
  //     setWeatherData(weather);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <div className="features px-4 sm:px-10 pb-10 ">
        <div className="dashboard">
          <div className=" main flex flex-col lg:flex-row gap-5 lg:gap-16">
            <div className="left w-full lg:3/4">
              <div className="text font-semibold text-xl pl-1.5">Dashboard</div>
              <div className="flex flex-col lg:flex-row gap-1 lg:gap-10">
                <div className="weather w-full sm:basis-1/3 place-items-center mt-5">
                  <div className="box bg-white py-5 px-4 sm:px-6 rounded-lg flex flex-col justify-between w-full h-full">
                    <div className="weather flex place-items-center gap-1">
                      <img
                        src={weather}
                        alt="weather"
                        className="w-16 sm:w-20"
                      />
                      <div className="content ml-5">
                        <div className="nunito text-secondaryColor text-xl sm:text-2xl tracking-wide font-medium">
                          {currentTime}
                        </div>
                        <div className="nunito text-secondaryColor">
                          Real Time Insight
                        </div>
                      </div>
                    </div>
                    <div className="date my-5 sm:my-10">
                      <div className="date nunito text-primaryColor text-lg sm:text-xl font-semibold">
                        Today:
                      </div>
                      <div className="nunito text-primaryColor text-lg sm:text-xl font-semibold">
                        {currentDate}
                      </div>
                    </div>
                    <div className="button bg-primaryColor text-center py-2 sm:py-3 rounded-md cursor-pointer">
                      <button className="text-white nunito">Attendance</button>
                    </div>
                  </div>
                </div>
                <div className="mainbox w-full sm:basis-1/3">
                  {cardData.slice(0, 2).map((card, index) => (
                    <div
                      className={`mainbox w-full sm:basis-1/3 ${card.className}`}
                      key={index}
                    >
                      <Card
                        number={card.number}
                        icon={card.icon}
                        label={card.label}
                        subtext={card.subtext}
                        subtextIcon={card.subtextIcon}
                      />
                    </div>
                  ))}
                </div>
                <div className="mainbox w-full sm:basis-1/3">
                  {cardData.slice(2, 4).map((card, index) => (
                    <div
                      className={`mainbox w-full sm:basis-1/3 ${card.className}`}
                      key={index}
                    >
                      <Card
                        number={card.number}
                        icon={card.icon}
                        label={card.label}
                        subtext={card.subtext}
                        subtextIcon={card.subtextIcon}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row mt-1 lg:mt-5 gap-1 lg:gap-10">
                {cardData.slice(4, 7).map((card, index) => (
                  <div
                    className={`mainbox w-full sm:basis-1/3 ${card.className}`}
                    key={index}
                  >
                    <Card
                      number={card.number}
                      icon={card.icon}
                      label={card.label}
                      subtext={card.subtext}
                    />
                  </div>
                ))}
              </div>

              {location.pathname === "/dashboard_admin" && (
                <div className="flex flex-col lg:flex-row mt-1 lg:mt-5 gap-1 lg:gap-10">
                  {cardData.slice(7, 10).map((card, index) => (
                    <div
                      className={`mainbox w-full sm:basis-1/3 text-primaryColor ${card.className}`}
                      key={index}
                    >
                      <Card
                        number={card.number}
                        icon={card.icon}
                        label={card.label}
                        subtext={card.subtext}
                        subtextIcon={card.subtextIcon}
                      />
                    </div>
                  ))}
                </div>
              )}
              {location.pathname === "/dashboard_admin" && (
                <div className="flex flex-col lg:flex-row mt-1 lg:mt-5 gap-1 lg:gap-10">
                  {cardData.slice(10, 13).map((card, index) => (
                    <div
                      className={`mainbox w-full sm:basis-1/3 text-primaryColor ${card.className}`}
                      key={index}
                    >
                      <Card
                        number={card.number}
                        icon={card.icon}
                        label={card.label}
                        subtext={card.subtext}
                        subtextIcon={card.subtextIcon}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            {location.pathname === "/dashboard_admin" ? (
              <div className="flex flex-col gap-8 ">
                {" "}
                <Upcoming /> <Leave />{" "}
              </div>
            ) : (
              <Upcoming />
            )}
          </div>
          {location.pathname === "/dashboard_admin" ? (
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mt-5 sm:mt-10">
              {" "}
              <Attendance /> <Attendance_all />{" "}
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mt-5 sm:mt-10">
              <Attendance />
              <Leave />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Features;
