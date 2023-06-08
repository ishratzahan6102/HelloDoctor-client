import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <div className="hero mt-44 max-w-[1200px] mx-auto" style={{backgroundImage: `url(${bg})`}}>
        <div className="hero-content flex-col -mb-4 lg:flex-row gap-[20px]">
            <img src={doctor} className="hidden md:block  lg:w-1/2 -mt-44 rounded-lg " />
            <div className='lg:w-1/2 text-white mb-6 p-4'>
                <p className='pb-6 text-primary font-extrabold'>Appointment </p>
                <h1 className="text-4xl font-bold ">Make an appointment Today</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className=" normal-case font-semibold rounded btn border-none text-sm bg-gradient-to-r from-primary to-secondary text-white">GET STARTED</button>
            </div>
        </div>
    </div>
    );
};

export default MakeAppointment;