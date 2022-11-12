import React from "react";
import banner from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ setSelectedDate, selectedDate }) => {
  return (
    <header
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="my-16 lg:py-40"
    >
      <div className="hero ">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt="" />
          <div className="bg-white rounded-lg p-5">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
