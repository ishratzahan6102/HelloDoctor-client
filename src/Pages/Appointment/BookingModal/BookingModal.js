import React, { useContext } from 'react';
import { format, secondsToMilliseconds } from 'date-fns';
import { AuthContext } from '../../Contexts/Context';
import toast from 'react-hot-toast';

const BookingModal = ({treatment, selectedDate, setTreatment, refetch }) => {
    const {user} = useContext(AuthContext)
    //  treatment options
    const {name, slots, price} = treatment       
    const date= format(selectedDate, "PP")


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target ;
        const slot = form.slot.value ;
        const patientName = form.name.value ;
        const email = form.email.value ;
        const phone = form.phone.value ;


        const booking = {
            appointmentDate: date,
            patientName: user.displayName,
            treatment: name,
            email,
            slot,
            phone,
            price

        }

        // TODO : send data to the server and once sent close the modal and show a toast
    //    data post kortesi
    fetch('http://localhost:5000/bookings' , {
        method: 'POST' ,
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
       if(data.acknowledged){
        setTreatment(null)
        toast.success('Booking Confirmed')
        refetch()
       }
       else{
            toast.error(data.message)
       }
    
    
    })

    
        
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg text-neutral text-start font-bold">{name}</h3>
               <form onSubmit={handleBooking} className='mt-10 text-neutral'>

               <input type="text"  value={date} disabled className="input w-full rounded-sm mb-4  input-bordered"/> <br/>
               <select name='slot' className="select select-bordered w-full mb-4">
                    
                   {
                    slots.map((slot,i )=> <option
                    value={slot} 
                    key= {i}>
                        {slot}
                    </option>)
                   }
                </select><br/>
               <input type="text" name='name' defaultValue={user?.displayName}   placeholder="Your name" className="input w-full rounded-sm mb-4 input-bordered " /> <br/>
               <input type="text"  name='email' defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full rounded-sm mb-4 input-bordered " /> <br/>
               <input type="text"  name='phone'  placeholder="Phone number" className="input w-full rounded-sm mb-4 input-bordered " /> <br/>
              
             
               <input type="Submit" value="Submit"  className="input w-full bg-neutral text-white rounded-sm mb-4  max-w-xs"/>
               </form>
            </div>
            </div>
        </>
    );
};

export default BookingModal;