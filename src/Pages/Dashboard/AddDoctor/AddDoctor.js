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
        <div className='w-96 p-7'>
            <h1 className='text-3xl font-bold'>Add a doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type='text' className='input input-bordered' {...register("name", { required: "Name is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='text' className='input input-bordered' {...register("email", { required: "Email address is required" })} />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>


                <div className="form-control w-full max-w-xs pb-6">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type='file' className='input input-bordered' {...register("img", { required: "Photo is required" })} />
                        {errors.img && <p className='text-error'>{errors.img?.message}</p>}
                    </div>
                </div>


                <input className='btn btn-neutral w-full' value='Add Task' type="submit" />
                {/* {signUpError && <p className='text-error'>{signUpError}</p>} */}
                <Toaster />
            </form>

        </div>
    );
};

export default AddDoctor;