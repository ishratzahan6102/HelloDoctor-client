import React from 'react';

const AppointmentOptions = ({ap, setTreatment}) => {
    const {name, slots} = ap
    return (
        <div className="card rounded-sm shadow-xl text-gray-700">
        <div className="card-body text-sm">
            <h2 className="text-center text-xl text-primary">{name}</h2>
            <p className='text-gray '>{slots.length > 0 ?  slots[0] : 'Try another day'}</p>
            <p className='text-gray'>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
            <div className="card-actions justify-center">
            <label 
                disabled={slots.length === 0} 
                onClick={()=>setTreatment(ap)} 
                htmlFor="booking-modal" 
                className="btn btn-primary text-white"
                >Book Appointment</label>
            </div>
        </div>
        </div>
    );
};

export default AppointmentOptions;