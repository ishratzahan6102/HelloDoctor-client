import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../src/assets/images/footer.png'

const Footer = () => {
    return (
        <footer className=" p-10  mt-20" style={
          {backgroundImage:` url(${footerBg})` ,
           backgroundSize: 'cover'
          }}>
          

          <div className='footer justify-center   md:justify-around '>
          <div>
            <span className="footer-title">Services</span> 
            <Link className="link link-hover">Branding</Link> 
            <Link className="link link-hover">Design</Link> 
            <Link className="link link-hover">Marketing</Link> 
            <Link className="link link-hover">Advertisement</Link>
          </div> 
        
          <div>
            <span className="footer-title">Company</span> 
            <Link className="link link-hover">About us</Link> 
            <Link className="link link-hover">Contact</Link> 
            <Link className="link link-hover">Jobs</Link> 
            <Link className="link link-hover">Press kit</Link>
          </div> 
        
          <div>
            <span className="footer-title">Social</span> 
            <a className="link link-hover">Twitter</a> 
            <a className="link link-hover">Instagram</a> 
            <a className="link link-hover">Facebook</a> 
            <a className="link link-hover">Github</a>
          </div> 
          </div>


        
            <div className='text-center mt-32' >
              <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
  
 
        </footer>
    );
};

export default Footer;