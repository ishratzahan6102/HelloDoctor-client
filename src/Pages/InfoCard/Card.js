import React from 'react';

const Card = ({card}) => {
    const {id, description, icon, name, bgClass, border} = card
    return (
        <div className={`card px-4 justify-center text-white card-side ${bgClass} shadow-xl`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className={`card-actions justify-end ${border}`}>
            </div>
        </div>
        </div>
    );
};

export default Card;