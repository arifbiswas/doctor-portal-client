import React from 'react';
import Banner from '../Banner/Banner';
import BannerInfo from '../BannerInfo/BannerInfo';
import CareSection from '../CareSection/CareSection';
import ContactUs from '../ContactUs/ContactUs';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceInfo from '../ServiceInfo/ServiceInfo/ServiceInfo';
import Testimonial from '../Testimonial/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-0 lg:mx-5 my-12'>
            <Banner></Banner>
            <BannerInfo></BannerInfo>
            <ServiceInfo></ServiceInfo>
            <CareSection></CareSection>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;