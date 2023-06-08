import React from 'react';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Pages/Contexts/Context';

const DisplayError = () => {
    const error = useRouteError()

    const { logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <p className='text-red-500'>Something went wrong!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <p className='text-3xl'>Please <button className='btn btn-info' onClick={handleLogout}>Sign out</button> and Log back in!</p>
        </div>
    );
};

export default DisplayError;