import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    const { treatment, appointmentDate, slot, price, _id, img } = booking
    // console.log("booking data", booking);

    const handleOrder = event => {

        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const address = form.address.value;
        const postalCode = form.postalCode.value;
        const currency = form.currency.value;

        const service = {
            service_id: _id,
            address,
            currency,
            firstName,
            lastName,
            email,
            postalCode,
            treatment
        }

        // console.log(service)

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data.url)
                form.reset()
            })
            .catch((err) => console.error(err))
    }


    return (
        <div className='p-8'>
            <h3 className='text-xl uppercase font-bold '>Payment for {treatment}</h3>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}.</p>
            <div className="mt-6 ">
                <div className="flex-col flex lg:flex-row gap-4">
                    <div className="card rounded-none">
                        <figure><img src={img} alt="Shoes" /></figure>
                    </div>

                    <div className='lg:w-1/2 p-10 bg-gradient-to-r from-primary to-secondary rounded shadow-lg shadow-teal-300'>
                        <h3 className='text-xl uppercase font-bold '>Payment Form</h3>
                        <form onSubmit={handleOrder} className='mt-6 text-neutral'>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name='firstName' defaultValue="" placeholder="First Name" className=' text-slate-800 input input-bordered input-primary ' />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name='lastName' defaultValue="" placeholder="Last Name" className=' text-slate-800 input input-bordered input-primary ' />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="text" name='email' defaultValue="" placeholder="Your email" className=' text-slate-800 input input-bordered input-primary ' />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Post Code</span>
                                </label>
                                <input type="text" name='postalCode' placeholder="Post Code" className=' text-slate-800 input input-bordered input-primary ' />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Choose Currency</span>
                                </label>
                                <select defaultValue="USD" name="currency" className="text-slate-800  select select-bordered select-primary ">
                                    <option>BDT</option>
                                    <option>USD</option>
                                </select>
                            </div>

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Your message</span>
                                </label>
                                <textarea name='address' className="textarea textarea-primary textarea-bordered" placeholder="Your address"></textarea> <br />

                            </div>

                            <input className='btn btn-neutral  w-full text-white my-4' value='Proceed to Pay' type="Submit" />

                            <Toaster />
                        </form>
                    </div>

                </div>


            </div>
        </div>

    );
};

export default Payment;