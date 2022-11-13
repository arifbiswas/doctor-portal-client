
import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
    const {name,slots} = treatment;
    const date = format(selectedDate,"PP");

    const handleBooking = e => {
      e.preventDefault();
      const form = e.target ;
      const name = form.name.value ;
      const phone = form.phone.value ;
      const slot = form.slot.value;
      const email = form.email.value ;
      console.log(name , slot,email , phone);
      const booking = {
        appointmentDate : date ,
        treatment_name : treatment.name ,
        patient : name ,
        phone,
        slot,
        email,
      }
      console.log(booking);
      // set modal value null and madal close 
      setTreatment(null)
    }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 mt-12">
            <input
              type="text"
              placeholder="Full Name"
              defaultValue={date}
              disabled
              className="input w-full border-2 border-gray-200"
            />
            <select className="select select-bordered w-full "
            name="slot"
            >
              {slots &&
                slots.map((slot,i) => <option
                key={i}
                value={slot}
                >{slot}</option>)
              }
            </select>
            <input
            name="name"
              type="text"
              placeholder="Full Name"
              className="input w-full input-bordered "
            />
            <input
            name="phone"
              type="tel"
              placeholder="Phone Number"
              className="input w-full input-bordered "
            />
            <input
            name="email"
              type="email"
              placeholder="Email"
              className="input w-full input-bordered "
            />
            <input
          
              className="btn btn-accent w-full "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
