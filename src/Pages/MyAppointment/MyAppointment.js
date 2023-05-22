import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/Context';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const {user} = useContext(AuthContext) 

    const url = `http://localhost:5000/bookings?email=${user?.email}` ;


    const { data : bookings = [] , isLoading } = useQuery({
        queryKey : ['bookings', user?.email] ,
        queryFn : async () => {
            const res = await fetch(url, {
              headers: {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
              }
            }) ;
            const data = await res.json() ;
            return data ;
        }
    })

    if (isLoading) {
      return <Loading></Loading>
  }
    return (
        <div className='p-8 '> 
            <h1 className='text-3xl'>My Appointments</h1>
            <div className="overflow-x-auto">
  <table className="table w-full mt-10">
    
    <thead>

      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Price</th>
      </tr>

    </thead>
    <tbody>
        {
            bookings?.map((booking, i) => 
                <tr key={booking._id}>
                  <th>{i+1}</th>
                  <td>{booking.patientName}</td>
                  <td>{booking.treatment}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {
                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className='btn btn-info btn-sm'>Pay</button>
                    </Link>
                    
                    }
                    {
                    booking.price && booking.paid && <button className='btn btn-warning btn-sm'>Paid</button>
                    }
                  </td>
                </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointment;