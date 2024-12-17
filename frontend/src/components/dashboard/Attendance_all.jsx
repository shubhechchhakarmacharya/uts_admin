import React from "react";

const Attendance_all = () => {
  // Data for the chart
  const data = [
    { name: "Mobility", value: 35 },
    { name: "Ather", value: 65 },
    { name: "Toyota", value: 86, highlight: true },
    { name: "Tadi", value: 60 },
    { name: "Huaxin", value: 20 },
  ];

  // Minimum and maximum values in the data
  const minValue = Math.min(...data.map((item) => item.value));
  const maxValue = Math.max(...data.map((item) => item.value));

  // Set the maximum and minimum heights in rem
  const maxHeightRem = 10;
  const minHeightRem = 1;

  return (
    <>
      <div className="px-8 py-5 bg-white rounded-lg ">
        <h2 className="font-semibold text-lg sm:text-xl mb-5">
          Weekly Attendance
        </h2>

        <div className="relative flex">
          {/* Vertical axis with labels */}
          <div className="flex flex-col justify-between h-64 mr-4">
            {[100, 80, 60, 40, 20, 0].map((value) => (
              <div key={value} className="text-gray-600 text-sm ">
                {value}%
              </div>
            ))}
          </div>

          {/* Chart with bars and grid lines */}
          <div className="relative flex items-end h-64 w-full">
            {/* Horizontal grid lines */}
            {[20, 40, 60, 80, 100].map((value) => (
              <div
                key={value}
                className="absolute w-full border-t border-gray-300"
                style={{ bottom: `${(value / 100) * 100}%` }}
              ></div>
            ))}

            <div className="relative flex items-end w-full space-x-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-16 relative"
                >
                  <div
                    className={`w-10 rounded-t-md ${
                      item.highlight ? "bg-gray-900" : "bg-gray-300"
                    } transition-all duration-300`}
                    style={{
                      height: `${
                        ((item.value - minValue) / (maxValue - minValue)) *
                          (maxHeightRem - minHeightRem) +
                        minHeightRem
                      }rem`,
                    }}
                  >
                    <div
                      className="absolute bottom-full mb-1 text-center text-secondaryColor text-sm"
                      style={{ left: "50%", transform: "translateX(-50%)" }}
                    >
                      {item.value}%
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-gray-600">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance_all;
