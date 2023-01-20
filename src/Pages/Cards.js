import React from 'react';
import clock from '../../src/assets/icons/clock.svg'
import marker from '../../src/assets/icons/marker.svg'
import phone from '../../src/assets/icons/phone.svg'
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
            name: 'Location',
            description : 'Open 9 am to 5 pm today',
            bgClass: "bg-neutral",
            icon: marker
        },
        {
            id: 3,
            name: 'Contact us',
            description : 'Open 9 am to 5 pm today',
            bgClass: " btn-primary bg-gradient-to-r from-primary to-secondary",
            icon: phone,
            border: "10px solid white"
        },   
    ]

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2  gap-6  mt-20'>
                {
                    cardData.map(card => <Card
                    key={card.id}
                    card={card}></Card>)
                }
        </div>
    );
};

export default Cards;