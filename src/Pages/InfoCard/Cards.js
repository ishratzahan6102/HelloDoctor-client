import React from 'react';
import clock from '../../../src/assets/icons/clock.svg'
import marker from '../../../src/assets/icons/marker.svg'
import phone from '../../../src/assets/icons/phone.svg'
import Card from './Card';

const Cards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description : 'Open 9 am to 5 pm today',
            bgClass: " btn-primary bg-gradient-to-r from-primary to-secondary",
            icon: clock
        },
        {
            id: 2,
            name: 'Visit our location',
            description : 'Brooklyn NY, 10036, United States',
            bgClass: "bg-neutral",
            icon: marker
        },
        {
            id: 3,
            name: 'Contact us now',
            description : '+000 123 456 789' ,
            bgClass: " btn-primary bg-gradient-to-r from-primary to-secondary",
            icon: phone,
            border: "10px solid white"
        },   
    ]

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-20 max-w-[1200px] mx-auto'>
                {
                    cardData.map(card => <Card
                    key={card.id}
                    card={card}></Card>)
                }
        </div>
    );
};

export default Cards;