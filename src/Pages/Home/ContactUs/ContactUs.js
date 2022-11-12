import React from 'react';
import Appoinment from "../../../assets/images/appointment.png"
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section
        style={{
            background : `url(${Appoinment})`
        }}
        className="py-16 mt-12 lg:mt-28 text-white"
        >
            <div className='text-center mb-12'>
            <h3 className='font-bold text-primary text-1xl  mb-1'>Contact Us</h3>
            <h1 className="text-4xl ">Stay connected with us</h1>
            </div>
            <div className='flex gap-5  flex-col justify-center items-center'>
            <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
            <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Your message"></textarea>
            <PrimaryButton>Submit</PrimaryButton>
            </div>
            
        </section>
    );
};

export default ContactUs;