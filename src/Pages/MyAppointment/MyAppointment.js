import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/Context';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
  const { user } = useContext(AuthContext)

  const url = `http://localhost:5000/bookings?email=${user?.email}`;


  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
      });
      const data = await res.json();
      return data;
    }
  })

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='p-8'>
      <h1 className='text-2xl uppercase text-slate-800 font-bold '>Appointments</h1>
      <div className="overflow-y-auto">
        <table className="table w-full mt-4 ">

          <thead>

            <tr>
              <th>Index</th>
              <th>Image</th>
              <th>Treatment</th>
              <th>Patient Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Price</th>
            </tr>

          </thead>
          <tbody>
            {
              bookings?.map((booking, i) =>
                <tr key={booking._id}>
                  <th>{i + 1}</th>
                 
                  <td><div className="avatar">
                                        <div className="w-12">
                                            <img src={booking.img}  alt="photo"/>
                                        </div>
                                    </div></td>
                  <td>{booking.treatment}</td>
                  <td>{booking.patientName}</td>
                  <td>{booking.appointmentDate}</td>
                  <td>{booking.slot}</td>
                  <td>
                    {
                      booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="normal-case font-semibold rounded-sm btn btn-sm border-none text-sm bg-gradient-to-r from-primary to-secondary text-white">Pay</button>
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