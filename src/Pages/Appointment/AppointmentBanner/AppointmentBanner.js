import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';





const AppointmentBanner = ({selectedDate , setSelectedDate}) => {
    
    return (
        <div className="hero my-10" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair}   alt='dentist-chair' className="max-w-sm w-5/6 rounded-lg shadow-2xl" />
          <div className='lg:mr-6'>
            <DayPicker
                mode = "single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
               
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;