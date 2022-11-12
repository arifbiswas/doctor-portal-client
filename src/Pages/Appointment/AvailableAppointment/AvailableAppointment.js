import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({selectedDate}) => {
    return (
        <section className='my-16'>
            <p className='text-1xl font-bold text-secondary text-center'>Available Appointments on {format(selectedDate,"PP")} </p>
        </section>
    );
};

export default AvailableAppointment;