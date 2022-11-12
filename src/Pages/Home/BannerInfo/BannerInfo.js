import React from 'react';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"
const BannerInfo = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-8 '>
            
            <div className='bg-gradient-to-r from-primary to-secondary font-bold w-full  rounded-lg py-2 my-5'>
               <div className='flex flex-col lg:flex-row gap-5  p-8 items-center text-white '>
                     <div>
                    <img src={clock} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-[20px] my-3 '>Opening Hours</h1>
                        <p className='text-1xl font-extralight'>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
               </div>
            </div>
            
            <div className='bg-accent font-bold  rounded-lg py-2 my-5'>
               <div className='flex gap-5 flex-col lg:flex-row  p-8 items-center text-white '>
                     <div>
                    <img src={marker} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-[20px] my-3'>Visit our location</h1>
                        <p className='text-1xl'>Brooklyn, NY 10036, United States</p>
                    </div>
               </div>
            </div>
            
            <div className='bg-gradient-to-r from-primary w-full to-secondary font-bold   rounded-lg py-2 my-5' >
               <div className='flex gap-5 flex-col lg:flex-row  p-8 items-center text-white '>
                     <div>
                    <img src={phone} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-[20px] my-3'>Contact us now</h1>
                        <p className='text-1xl font-extralight'>+000 123 456789</p>
                    </div>
               </div>
            </div>

        </div>
    );
};

export default BannerInfo;