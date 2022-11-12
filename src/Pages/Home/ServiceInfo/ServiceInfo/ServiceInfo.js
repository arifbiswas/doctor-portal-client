import React from 'react';

import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceInfo = () => {

    const serviceCadInfo = [
        {
            id : 1,
            icon : fluoride,
            name : "Fluoride Treatment",
            description : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id : 4,
            icon : cavity,
            name : "Cavity Filling",
            description : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the "
        },
        {
            id : 3,
            icon : whitening,
            name : "Teeth Whitening",
            description : "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the "
        }
    ]

    return (
        <div className='mt-16'>
            <h3 className='font-bold text-primary text-1xl text-center mb-1'>OUR SERVICES</h3>
            <h2 className='text-4xl text-center'>Services We Provide</h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {
                serviceCadInfo.map(cardInfo => <ServiceCard key={cardInfo.id} cardInfo={cardInfo} ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default ServiceInfo;