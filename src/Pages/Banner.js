import React, { useContext } from 'react';
import chair from "../../src/assets/images/chair.png" ;
import bg from "../../src/assets/images/bg.png" ;
import { AuthContext } from './Contexts/Context';

const Banner = () => {
    const {user, logOut} = useContext(AuthContext) 
    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} alt='' className="max-w-sm w-1/2 rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Hi, 
            <span className="text-5xl font-bold text-teal-500">
                {user?.displayName}
            </span></h1>
            <h1 className="text-4xl font-bold" >Welcome To  <a className="uppercase font-extrabold text-xl">Hello<span className='text-black text-3xl'>Doc</span></a></h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary  text-sm bg-gradient-to-r from-primary to-secondary">Get Started</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;