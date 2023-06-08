import comma from '../../assets/icons/quote.svg'
import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import { te } from 'date-fns/locale';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            id: 1,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            name: "Winson Herry",
            location: "California"
        },
        {
            id: 2,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            name: "Winson Herry",
            location: "California"
        },
        {
            id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            name: "Winson Herry",
            location: "California"
        }
    ]
    return (
        <div className='my-32 max-w-[1200px] mx-auto'>
            <div className='flex flex-row justify-between'> 
                <div className=''>
                    <h3 className='font-extrabold uppercase text-primary'>Testimonials</h3>
                    <h2 className='text-slate-800 text-3xl'>What Our Patients Says</h2>
                </div>
                <img src={comma} className='w-1/6' alt='img'/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    testimonialData.map(testimonial => <Testimonial
                    key={testimonial.id}
                    testimonial={testimonial}>

                    </Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;