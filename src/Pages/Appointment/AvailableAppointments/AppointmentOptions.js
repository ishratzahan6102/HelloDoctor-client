import React from 'react';

const AppointmentOptions = ({ap, setTreatment}) => {
    const {name, slots, price, img} = ap
    return (
        <div className="card  image-full  shadow-xl text-white-700">  
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body text-sm">
            <h2 className="text-center text-xl text-primary">{name}</h2>
            <p className='text-white '>{slots.length > 0 ?  slots[0] : 'Try another day'}</p>
            <p className='text-white'>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
            <p className='text-white'> Price: ${price}</p>
            <div className="card-actions justify-center">
            <label 
                disabled={slots.length === 0} 
                onClick={()=>setTreatment(ap)} 
                htmlFor="booking-modal" 
                className="normal-case font-semibold rounded btn border-none  text-sm bg-gradient-to-r from-primary to-secondary text-white"
                >Book Appointment</label>
        </div>
        </div>
        </div>
    );
};

export default AppointmentOptions;