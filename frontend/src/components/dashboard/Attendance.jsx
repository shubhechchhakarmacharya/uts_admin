import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const Attendance = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Attendance (%)",
        data: [75, 80, 45, 91, 88, 70, 78, 84, 82, 20, 49, 50],
        borderColor: "#1f1f1f",
        backgroundColor: "rgba(30, 64, 175, 0.1)",
        fill: true,
        tension: 0.2,
        pointRadius: 6,
        pointBorderColor: "#1F1F1F",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `${value}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: function (value) {
            return `${value}%`;
          },
        },
      },
      x: {
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div className="Attendance w-full basis-3/4">
      <div className="bg-white pt-5 rounded-lg">
        <div className="top px-4 sm:px-10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="title font-semibold text-lg sm:text-xl">
              Attendance Comparison Chart
            </div>
            <div className="buttons flex  sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-0">
              <div className="button flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="weekly"
                  id="weekly"
                  className="h-4 w-4"
                  checked={selectedOption === "weekly"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="weekly"
                  className={`font-medium pl-1 ${
                    selectedOption === "weekly"
                      ? "text-red-600"
                      : "text-primaryColor"
                  }`}
                >
                  Weekly
                </label>
              </div>
              <div className="button flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="monthly"
                  id="monthly"
                  className="h-4 w-4"
                  checked={selectedOption === "monthly"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="monthly"
                  className={`font-medium pl-1 ${
                    selectedOption === "monthly"
                      ? "text-red-600"
                      : "text-primaryColor"
                  }`}
                >
                  Monthly
                </label>
              </div>
              <div className="button flex items-center">
                <input
                  type="radio"
                  name="attendance"
                  value="yearly"
                  id="yearly"
                  className="h-4 w-4"
                  checked={selectedOption === "yearly"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="yearly"
                  className={`font-medium pl-1 ${
                    selectedOption === "yearly"
                      ? "text-red-600"
                      : "text-primaryColor"
                  }`}
                >
                  Yearly
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto p-4 sm:p-6 rounded-lg">
          <Line data={data} options={options} className="h-48 sm:h-64" />
        </div>
      </div>
    </div>
  );
};

export default Attendance;
