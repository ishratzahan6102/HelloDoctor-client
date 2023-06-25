import { useQueries, useQuery } from '@tanstack/react-query';
import { Result } from 'postcss';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../Loading';
import { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const Allusers = () => {
  const [deleteUser, setDeleteUser] = useState(null)


  const closeModal = () => {
    setDeleteUser(null)
  }

  const { data: users = [], refetch, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`)
      const data = await res.json()
      return data;
    }
  })


  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful")
          refetch()
        }
      })
  }

  const handleDeleteUser = (user) => {
    console.log(user)
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          refetch()
          toast.success("Deleted Successfully")
        }

      })
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className='p-8'>
      <h1 className='text-2xl uppercase text-slate-800 font-bold '>USERS</h1>
      <div className="overflow-y-auto">
        <table className="table w-full mt-4 ">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody >

            {
              users.map((user, i) =>
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role !== "admin" && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                  <td>
                    {user?.role !== "admin" &&  <label  onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                    }
                   
                  </td>
                </tr>)
            }

          </tbody>
        </table>
      </div>
      {
        deleteUser && <ConfirmationModal
          title={`Are you sure tou want to delete this?`}
          message={`If you delete ${deleteUser.name} it can not be undone.`}
          closeModal={closeModal}
          successButtonName="Delete"
          successAction={handleDeleteUser}
          modalData={deleteUser}
        ></ConfirmationModal>
      }
    </div>
  );
};

export default Allusers;