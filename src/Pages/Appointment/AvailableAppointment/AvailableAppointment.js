import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [appointmentTimes , setAppointmentTimes] = useState ([]);
    const [treatment , setTreatment ] = useState({});
    useEffect(()=>{
        fetch("appointmentTimes.json")
        .then(res => res.json())
        .then(data =>setAppointmentTimes(data))
        .catch(e => {
            console.log(e);
        })
    },[])
    return (
        <section className='my-16'>
            <p className='text-1xl font-bold text-secondary text-center'>Available Appointments on {format(selectedDate,"PP")} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                {
                    appointmentTimes.map(option => <AppointmentOption
                    key={option._id}
                    option={option}
                    setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {treatment && <BookingModal
            selectedDate={selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppointment;