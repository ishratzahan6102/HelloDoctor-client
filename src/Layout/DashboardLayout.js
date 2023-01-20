import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Pages/Contexts/Context';
import Navbar from '../Shared/Navbar';
import useAdmin from '../useAdmin/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)




    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">

                        <li><Link to='/dashboard'>My Appointments</Link></li>
                       {
                       isAdmin &&  
                        <>   
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                            <li><Link to='/dashboard/addDoctor'>Add Doctors</Link></li>
                            <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                        </>
                       }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;