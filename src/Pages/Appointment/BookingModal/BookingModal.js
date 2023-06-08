import React, { useContext } from 'react';
import { format, secondsToMilliseconds } from 'date-fns';
import { AuthContext } from '../../Contexts/Context';
import toast from 'react-hot-toast';

const BookingModal = ({treatment, selectedDate, setTreatment, refetch }) => {
    const {user} = useContext(AuthContext)
    //  treatment options
    const {name, slots, price, img} = treatment       
    const date= format(selectedDate, "PP")


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target ;
        const slot = form.slot.value ;
        const patientName = form.name.value ;
        const email = user?.email ;
        const phone = form.phone.value ;
        const comment = form.comment.value ;


        const booking = {
            appointmentDate: date,
            patientName: user.displayName,
            treatment: name,
            email,
            slot,
            phone,
            price,
            img,
            comment

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
            <div className="modal ">
            <div className="modal-box relative shadow-inner shadow-teal-400 p-10">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute btn-primary right-6 top-6">✕</label>
                <h3 className="text-2xl text-primary text-start font-bold">{name}</h3>
               <form onSubmit={handleBooking} className='mt-10 text-slate-800 font-normal '>
               <label className="label">
                            <span className="label-text">Appointment date</span>
                        </label>
               <input type="text"  value={date} readOnly className="input w-full file-input-primary rounded-sm mb-4  input-bordered input-primary"/> <br/>
               <label className="label">
                            <span className="label-text">Schedule</span>
                        </label>
               <select name='slot' className="select rounded-none select-primary select-bordered w-full mb-4">
                    
                   {
                    slots.map((slot,i )=> <option
                    value={slot} 
                    key= {i}>
                        {slot}
                    </option>)
                   }
                </select><br/>
                <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
               <input type="text" name='name' defaultValue={user?.displayName}  className="input w-full rounded-sm mb-4 input-bordered input-primary " /> <br/>
               <label className="label">
                            <span className="label-text">Your email</span>
                        </label>
               <input type="text"  name='email' defaultValue={user?.email} readOnly  className="input w-full rounded-sm mb-4 input-bordered input-primary " /> <br/>
               <label className="label">
                            <span className="label-text">Your number</span>
                        </label>
               <input type="text"  name='phone'  className="input w-full rounded-sm mb-4 input-bordered input-primary " /> <br/>
               <label className="label">
                            <span className="label-text">Comment</span>
                        </label>
               <textarea type="text"  name='comment'  className="textarea w-full rounded-sm mb-4 textarea-bordered textarea-primary " /> <br/>
              
             
               <input type="Submit" value="Submit"  className="input btn-wide normal-case font-semibold rounded btn border-none bg-gradient-to-r from-primary to-secondary text-white"/>
               </form>
            </div>
            </div>
        </>
    );
};

export default BookingModal;