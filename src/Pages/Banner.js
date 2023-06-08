import React, { useContext } from 'react';
import chair from "../../src/assets/images/chair.png" ;
import bg from "../../src/assets/images/bg.png" ;
import { AuthContext } from './Contexts/Context';

const Banner = () => {
    const {user, logOut} = useContext(AuthContext) 
    return (
        <div className="hero min-h-screen " style={{backgroundImage: `url(${bg})`}}>
        <div className='max-w-[1200px] mx-auto'>
        <div className="hero-content  flex-col  lg:flex-row-reverse gap-[60px]">
            <img src={chair} alt='' className="lg:w-1/3 rounded-lg shadow-2xl" />
            <div>
           
            <p className='py-4 font-bold  text-primary'>By The Doctors of Community Hospital</p>
            <h1 className=" text-5xl font-bold  text-slate-800 " >Your New Smile Starts<br></br>Here.</h1>
            <p className=" py-4 font-sans text-md text-justify">The hospital is a showcase of synergy of medical technology and advances in ICT through paperless medical records.  The skilled nurses, technologists and administrators of Bangladesh.</p>
            <button className="normal-case font-semibold rounded btn border-none  text-sm bg-gradient-to-r from-primary to-secondary text-white">MAKE AN APPOINTMENT</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Banner;