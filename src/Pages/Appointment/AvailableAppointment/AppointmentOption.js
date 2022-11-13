import React from "react";


const AppointmentOption = ({ option,setTreatment }) => {
  const { name, slots } = option;
  
  return (
    <div>
      <div className="card  shadow-xl">
        <div className="card-body flex justify-center items-center ">
          <h2 className="card-title text-secondary text-center">{name}</h2>
          <p>
            {
                slots.length > 0 ?slots[0] :"Try Another Day"
            }
          </p>
          <p>
            {slots.length} {slots.length > 0 ?"spaces" :"space"} are available
          </p>
          <div className="card-actions justify-end">
            <label 
              disabled = {slots.length === 0 }
            onClick={()=>setTreatment(option)}
            htmlFor="booking-modal" className="btn btn-primary  font-bold text-white">BOOK APPOINTMENT</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
