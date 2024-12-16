import React from "react";

const Card = ({ number, icon, label, subtext, subtextIcon }) => (
  <div className="box bg-white px-5 py-5 rounded-lg mt-2 sm:mt-5">
    {" "}
    {/* Adjusted margin-top */}
    <div className="flex place-items-center justify-between">
      <div className="number text-primaryColor text-4xl">{number}</div>
      <div className="icon bg-gray-200 p-2.5 rounded-full">
        <img src={icon} alt="icon" className="text-primaryColor size-6" />
      </div>
    </div>
    <div className="lower pt-5">
      <div className="text-primaryColor font-light text-lg">{label}</div>
      {subtext && (
        <div className="flex pt-1">
          <div className="image">
            <img src={subtextIcon} alt="sub-icon" className="size-5" />
          </div>
          <div className="text-secondaryColor pl-2">{subtext}</div>
        </div>
      )}
    </div>
  </div>
);

export default Card;
