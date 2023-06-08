import React from 'react';
import { toast } from 'react-hot-toast';
import bg from '../../assets/images/appointment.png'

const ContactUs = () => {

    const handleContactUs = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const messageInfo = {
            email: email,
            subject: subject,
            message: message
        }

        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messageInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('We will get back to you soon.')
                    form.reset()
                }
                else {
                    toast.error(data.message)
                }

            })
    }



    return (
        <div className='mt-32 py-20 max-w-[1200px] mx-auto' style={{backgroundImage: `url(${bg})`}}>
            <div className='text-center'>
                <h3 className='font-extrabold uppercase text-primary'>Contact Us</h3>
                <h2 className='text-white text-3xl'>Stay Connected With Us</h2>
            </div>
            <form onSubmit={handleContactUs} className='mt-10 text-neutral text-center'>

                <input type="text" name='email' defaultValue="" placeholder="Email" className="input w-1/2 rounded-sm mb-4 input-bordered input-primary " /> <br />

                <input type="text" name='subject' defaultValue="" placeholder="Subject" className="input w-1/2 rounded-sm mb-4 input-bordered input-primary " /> <br />

                <textarea type="text" name='message' defaultValue="" placeholder="Your Message" className="textarea w-1/2 rounded-sm mb-4 textarea-bordered  textarea-primary" /> <br />

                <input type="Submit" value="Submit" className="input font-semibold rounded btn btn-wide border-none bg-gradient-to-r from-primary to-secondary text-white" />
            </form>
        </div>
    );
};

export default ContactUs;