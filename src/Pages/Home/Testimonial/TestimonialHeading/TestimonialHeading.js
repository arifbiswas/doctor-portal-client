import React from 'react';
import quote from '../../../../assets/icons/quote.svg';

const TestimonialHeading = () => {
    return (
        <section className='flex justify-between items-center'>
            <div>
            <h3 className='font-bold text-secondary text-1xl  mb-1'>Appointment</h3>
            <h1 className="text-4xl  ">What Our Patients Says</h1>
            </div>
            <div>
                <img src={quote} className="w-24 lg:w-48" alt="" />
            </div>
        </section>
    );
};

export default TestimonialHeading;