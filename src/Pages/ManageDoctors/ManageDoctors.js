import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)


    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handleDoctor = () => {

    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                const data = await res.json()
                return data

            }
            catch (errors) {

            }
        }
    })


    const handleDeleteDoctor = (doctor) => {
        console.log(doctor)
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method : "DELETE",
            headers : {
                authorization : `bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch()
                toast.success("Deleted Successfully")
            }
            
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div className='p-8'>
        <h1 className='text-2xl uppercase text-slate-800 font-bold '>Manage Doctors</h1>
        <div className="overflow-y-auto">
          <table className="table w-full mt-4 ">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className=' my-4'>

                        {
                            doctors?.map((doctor, i) =>
                                <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12">
                                            <img src={doctor.img}  alt="doctors-photo"/>
                                        </div>
                                    </div></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                title={`Are you sure tou want to delete this?`}
                message={`If you delete ${deletingDoctor.name} it can not be undone.`}
                closeModal={closeModal}
                successButtonName="Delete"
                successAction={handleDeleteDoctor}
                modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;