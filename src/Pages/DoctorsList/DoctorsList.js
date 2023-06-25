import React from 'react';
import bg from '../../assets/images/DoctorsBg.jpg'
import { useQuery } from '@tanstack/react-query';
import Card from './Card';
import { Link } from 'react-router-dom';
const DoctorsList = () => {

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                })
                const data = await res.json()
                return data
            }
            catch (errors) {
            }
        }
    })

    return (

        <>
            <div className="">
                <div className="w-fit ">
                    <img className='h-fit border-b-8 border-teal-500' src={bg} alt='bg' />
                </div>
                <section className='w-10/12 mx-auto'>
                    <div className='space-y-5 text-justify '>
                        <h2 className='text-4xl uppercase font-semibold text-primary text-center my-10'>Dental & Maxillofacial Surgery</h2>
                        <h3 className='text-2xl  font-semibold'>ABOUT THE DEPARTMENT</h3>
                        <p>Department of Dental & Maxillofacial Surgery of Evercare Hospital Dhaka offers full scope of the dental specialty, including general dentistry and specialized services in oral & maxillofacial surgery, orthodontics and restorative dentistry (endodontics and prosthodontics). Our aim is to deliver oral health care of the highest standard to our patients through experienced dental surgeons and modern technology. The department provides diagnosis, management and surgical treatment of defects and injuries related to the function and aesthetics of the teeth, gums and jaws. It also provides excellent surgical service for all sorts of maxillofacial surgery & disease.</p>
                        <h3 className='text-2xl  font-semibold'>CONSULTATION & APPOINTMENTS</h3>
                        <p>The department provides consultation services in level-4 (OPD) through highly qualified and experienced Consultants, who carefully evaluate each patient. After diagnosing the patient’s condition, our Consultants discuss available treatment options and recommend the most effective treatment.</p>
                    </div>

                   
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 my-32'>
                            <div className='space-y-4 flex flex-col justify-center '>
                                <h3 className='text-2xl text-primary uppercase font-semibold'>List of Doctors</h3>
                                <p>We can help you choose top specialists from our pool of expert doctors, physicians and surgeons.</p>
                                <Link to='/dashboard/managedoctors'>
                                <button  className="font-semibold rounded btn w-2/3 border-none bg-gradient-to-r from-primary to-secondary text-white ">View List of Doctors</button>
                                </Link>
                            </div>
                            {
                                doctors &&
                                doctors.map(doctor => <Card
                                    doctor={doctor}
                                    key={doctor._id}
                                ></Card>)
                            }
                        </div>
                    

                </section>
            </div>

        </>
    );
};

export default DoctorsList;