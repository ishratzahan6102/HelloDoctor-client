import React from 'react';
import Fluoride from '../../assets/images/fluoride.png';
import Cavity from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const serviceData = [
        {
            id: 1,
            headings:"Fluoride Treatment",
            icon: Fluoride,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            headings:"Cavity Filling",
            icon: Cavity,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            headings:"Teeth Whitening",
            icon: Whitening,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
    ]


    return (
        <div className='my-32 max-w-[1200px] mx-auto'>
            <div className='text-center'>
                <h3 className='font-bold uppercase text-primary'>Our Services</h3>
                <h2 className='text-slate-800 text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
                {
                serviceData.map(service => <Service 
                key= {service.id}
                service={service}>
                </Service>)
                }
            </div>
        </div>
    );
};

export default Services;