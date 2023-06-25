import React from 'react';
import Banner from './Banner';
import Cards from './InfoCard/Cards';
import Services from './Services/Services';
import Description from './Description/Description';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonial/Testimonials';
import ContactUs from './ContactUs/ContactUs';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Cards></Cards>
            <Services></Services>
            <Description></Description>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
      
    );
};

export default Home;