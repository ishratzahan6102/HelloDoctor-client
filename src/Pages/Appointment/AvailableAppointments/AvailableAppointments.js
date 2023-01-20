import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading';

const AvailableAppointments = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)

    // eta use korar jonno tanstack query install kora lagbe
    // const {data:appointmentOptions = []} = useQuery({
    //     queryKey: ['appointmentOptions'],
    //     queryFn: () => fetch("http://localhost:5000/appointmentOptions")
    //     .then(res => res.json())
    // })

    
    const date = format(selectedDate, 'PP')


     const {data : appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () =>{ 
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })


    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setAppointmentOptions(data))
    // } ,[appointmentOptions])



    return (
        <div className='text-center font-bold text-secondary'>
            <p>You have picked {format(selectedDate, "PP")}</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
            {
                appointmentOptions.map(ap => <AppointmentOptions 
                    key={ap._id}
                    ap={ap}
                    setTreatment={setTreatment}
                ></AppointmentOptions>)
            }
            {   treatment  &&
                <BookingModal 
                selectedDate={selectedDate}
                refetch={refetch}
                setTreatment={setTreatment}
                treatment={treatment}
                ></BookingModal>
            }
            </div>
        </div>
    );
};

export default AvailableAppointments;