import React from 'react';
import bannerImage from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero my-16"
        style={{  
            backgroundImage: `url( ${bannerImage} )`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className=" rounded-lg w-full lg:w-1/2 shadow-2xl" alt='' />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
        
      </div>
    );
};

export default Banner;