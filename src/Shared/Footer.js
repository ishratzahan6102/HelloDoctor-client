import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../src/assets/images/footer.png'

const Footer = () => {
  return (
    <footer className="mt-32 " style={
      {
        backgroundImage: ` url(${footerBg})`,
        backgroundSize: 'contain'
      }}>


      <div className='footer p-4 mt-20 justify-start md:justify-around ' >
        <div>
          <span className="footer-title text-emerald-700 font-bold underline">SERVICES</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>

        <div>
          <span className="footer-title text-emerald-700 font-bold underline">ORAL HEALTH</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>

        </div>

        <div>
          <span className="footer-title text-emerald-700 font-bold underline">OUR ADDRESS</span>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
        </div>
        
        
        </div>

        <div className="footer text-slate-800 items-center p-4 mt-20  ">
       
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-center">
        <p>Copyright © 2023 - All right reserved</p>
          
        </div>
      </div>

     


    </footer>
  );
};

export default Footer;