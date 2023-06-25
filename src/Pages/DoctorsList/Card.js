import React from 'react';

const Card = ({doctor}) => {
    const {name, designation, img, email, phone, specialty} = doctor
    return (
       <>
        <div class="rounded overflow-hidden shadow-sm shadow-primary">
      <img class="object-cover h-48 w-full" src={img} alt="Mountain" />
      <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2">{name}</div>
        <p class="text-gray-900 text-xl font-semibold">
         {specialty}
        </p>
        <p class="text-gray-800 text-sm ">
         {designation}
        </p>
        <p class="text-gray-600 text-sm ">
        {email}
        </p>
       
      </div>
     
    </div>
       </>
    );
};

export default Card;