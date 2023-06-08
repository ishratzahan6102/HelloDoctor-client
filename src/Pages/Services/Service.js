import React from 'react';

const Service = ({ service }) => {
    const {id, headings, icon, description} = service
    return (
        <div className="card card-compact p-4 md:w-96 bg-base-100 shadow-primary shadow-inner ">
            <figure><img src={icon}   alt="img" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{headings}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default Service;