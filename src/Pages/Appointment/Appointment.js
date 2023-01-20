import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div className='p-10'>
           <AppointmentBanner selectedDate={selectedDate}
           setSelectedDate={setSelectedDate}></AppointmentBanner>
           <AvailableAppointments  setSelectedDate={setSelectedDate} 
            selectedDate={selectedDate}></AvailableAppointments>
        </div>
    );
};

export default Appointment;