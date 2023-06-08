import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { id, comment, img, name, location } = testimonial
    return (
        <div className="card card-compact p-4 md:w-96 bg-base-100 shadow-xl ">
            <div className="card-body">
                <p className='text-slate-800 my-6'>{comment}</p>
                <div className='flex flex-row gap-4 my-6 '>
                <div className="avatar ">
                    <div className="w-12 shadow-xl shadow-primary rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} className=' ' />
                    </div>
                </div>
                <div>
                    <h4 className='font-bold text-xl'>{name}</h4>
                    <h5 className='text-slate-600'>{location}</h5>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default Testimonial;