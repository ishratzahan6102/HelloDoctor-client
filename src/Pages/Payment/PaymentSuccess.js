import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation()
    console.log(location.search)

    const query = new URLSearchParams(location.search);
    const transactionId = query.get("transactionId")
    console.log(transactionId)


    const [orders, setOrders] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders/by-transaction-id/${transactionId}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            }
            )
    }, [transactionId])
    return (
        <div className='p-8'>
        <h1 className='text-2xl uppercase text-slate-800 font-bold '>PAYMENT HISTORY</h1>
        <div className="overflow-y-auto">
          <table className="table w-full mt-4 ">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Treatment</th>
                            <th>Address</th>
                            <th>Time</th>
                            <th>Amount Paid</th>
                            <th>Transaction Id</th>
                            <th>Print</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                          
                            <td>
                                <div className="flex items-center space-x-3">
                                   
                                    <div>
                                        <div className="font-bold">{orders.treatment}</div>
                                       
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                   
                                    <div>
                                        <div className="">{orders.address}</div>
                                       
                                    </div>
                                </div>
                            </td>
                            <td>
                                {orders.paidAt}
                               
                            </td>
                            <td>{orders.price}</td>
                            <td>{orders.transactionId}</td>
                            <th>
                                <button className="btn btn-sm normal-case font-semibold rounded border-none bg-gradient-to-r from-primary to-secondary text-white" onClick={() => window.print()}>Print</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}
                </table>
            </div>
        </div>
    );
};

export default PaymentSuccess;