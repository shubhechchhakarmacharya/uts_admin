function Leave() {
  const leave = [
    {
      number: "05",
      name: "Annual Leave",
      imgSrc: "/annual.png",
    },
    {
      number: "00",
      name: "Compensatory Leave",
      imgSrc: "/compensatory.png",
    },
    {
      number: "05",
      name: "Sick Leave",
      imgSrc: "/sick.png",
    },
    {
      number: "01",
      name: "LWOP",
      imgSrc: "/lwop.png",
    },
  ];
  return (
    <>
      <div className="right basis-1/4">
        <div className="text font-semibold text-xl pl-1.5">Leave Taken</div>
        <div className="upcoming bg-white p-5 rounded-lg mt-2 sm:mt-5 flex flex-col gap-3  justify-center">
          {leave.map((holiday, index) => (
            <div key={index} className="voithday">
              <div className="flex place-items-center">
                <div className="image">
                  <img src={holiday.imgSrc} alt={holiday.name} />
                </div>
                <div className="text ml-5">
                  <div className="title font-medium text-xl text-primaryColor">
                    {holiday.number}
                  </div>
                  <div className="date font-medium nunito text-xl ">
                    {holiday.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Leave;
