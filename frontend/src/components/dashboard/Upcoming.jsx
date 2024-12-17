function Upcoming() {
  const holidays = [
    {
      title: "Voith Annual Day",
      date: "07 December 2024",
      info: "No Holiday",
      imgSrc: "/voithday.png",
    },
    {
      title: "Dhanya Purnima / Yomari Purnima",
      date: "01 January 2025",
      info: "Holiday",
      imgSrc: "/yomari.png",
    },
    {
      title: "Makar Sankranti",
      date: "01 January 2025",
      info: "Holiday",
      imgSrc: "/makar.png",
    },
    {
      title: "Sahid Diwas",
      date: "01 January 2025",
      info: "Holiday",
      imgSrc: "/sahid.png",
    },
  ];
  return (
    <>
      <div className="right basis-4/12">
        <div className="text font-semibold text-xl pl-1.5">
          Upcoming Holidays
        </div>
        <div className="upcoming bg-white p-5 rounded-lg mt-2 sm:mt-5 flex flex-col gap-3 sm:gap-4 justify-center">
          {holidays.map((holiday, index) => (
            <div key={index} className="voithday">
              <div className="flex place-items-center">
                <div className="image">
                  <img src={holiday.imgSrc} alt={holiday.title} />
                </div>
                <div className="text ml-5">
                  <div className="title font-medium text-xl text-primaryColor">
                    {holiday.title}
                  </div>
                  <div className="date font-medium nunito text-lg">
                    {holiday.date}
                  </div>
                  <div className="info font-medium text-lg nunito text-red">
                    {holiday.info}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="button bg-primaryColor py-2 cursor-pointer rounded-lg text-center">
            <button className="text-white nunito text-lg font-medium">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upcoming;
