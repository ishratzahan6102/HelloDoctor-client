import React from 'react';
import dentalCare from '../../assets/images/treatment.png'

const Description = () => {
    return (
        <div className="hero my-28 max-w-[1200px] mx-auto">
            <div className="hero-content w-5/6 flex-col lg:flex-row gap-[80px]">
                <img src={dentalCare} className=" lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='lg:w-1/2'>
                    <h1 className="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="normal-case font-semibold rounded btn border-none text-sm bg-gradient-to-r from-primary to-secondary text-white">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Description;