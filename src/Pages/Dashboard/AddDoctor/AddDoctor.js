import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imgbbHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate()

    const handleAddDoctor = data => {

        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctors = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        specialty: data.specialty,
                        img: imgData.data.url


                    }



                    // post doctors information to the database
                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctors)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/managedoctors')
                        })

                }
            })

    }

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentSpecialty`)
            const data = await res.json()
            return data
        }
    })



    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='p-8 flex justify-center text-white items-center '>
            <div className='lg:w-1/2 p-10 bg-gradient-to-r from-primary to-secondary rounded shadow-lg shadow-teal-300'>
            <h1 className='text-xl uppercase font-bold '>Add Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)} >

            <div className="form-control text-slate-800 ">
                    <label className="label">
                        <span className="label-text ">Name</span>
                    </label>
                    <input  type='text'  className=' text-slate-800 input input-bordered input-primary ' {...register("name" , {required: "name is required"})}  />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>
                <label className="label">
                            <span className="label-text">Schedule</span>
                        </label>
               <select name='specialty' defaultValue='Teeth Orthodontics' className="select rounded-none text-slate-800 select-primary select-bordered w-full mb-4">
                    
                   <option value='Teeth Orthodontics'>Teeth Orthodontics</option>
                   <option value='Cosmetic Dentistry'>Cosmetic Dentistry</option>
                   <option value='Pediatric Dental'>Pediatric Dental</option>
                   <option value='Oral Surgery'>Oral Surgery</option>
                   <option value='Teeth Cleaning'>Teeth Cleaning</option>
                   <option value='Cavity Protection'>Cavity Protection</option>
                  
                   
                </select><br/>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='text'  className=' text-slate-800 input input-bordered input-primary ' {...register("email", { required: "Email address is required" })} />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Cell number</span>
                    </label>
                    <input type='text'  className=' text-slate-800 input input-bordered input-primary ' {...register("phone", { required: "cell number address is required" })} />
                    {errors.phone && <p className='text-error'>{errors.phone?.message}</p>}
                </div>


                <div className="form-control">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type='file' className=' text-slate-800 input input-bordered input-primary ' {...register("img", { required: "Photo is required" })} />
                        {errors.img && <p className='text-error'>{errors.img?.message}</p>}
                    </div>
                </div>


                <input className='btn btn-neutral normal-case w-full text-white my-4' value='Add a profile' type="submit" />
                {/* {signUpError && <p className='text-error'>{signUpError}</p>} */}
                <Toaster />
            </form>

            </div>
       
        </div>
    );
};

export default AddDoctor;