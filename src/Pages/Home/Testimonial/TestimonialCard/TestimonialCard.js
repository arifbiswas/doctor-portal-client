import React from "react";

const TestimonialCard = ({ testiInfo }) => {
  const { name, testimonial, location, img } = testiInfo;
  return (
    <div>
      <div className="card p-12 bg-base-100 shadow-xl">
        <p>{testimonial}</p>

        <div className="flex gap-5 items-center mt-12">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="flex flex-col">
          <h2 className="card-title">
            {name}
          </h2>
            <p className=" ">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
