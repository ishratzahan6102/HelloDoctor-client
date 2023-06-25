import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Pages/Contexts/Context';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menu = <>
        <li><Link className="font-semibold"  to='/'>Home</Link></li>
        <li><Link className="font-semibold " to='/appointment'>Appointment</Link></li>
        <li><Link className="font-semibold " to='/doctorsList'>Specialists</Link></li>
        {user?.uid ?
            <>
                {/* <li><Link className=" font-semibold " to='/myReviews'>Reviews</Link></li> */}
                <li><Link className=" font-semibold " to='/dashboard'>Dashboard</Link></li>
                <li><Link onClick={handleLogout} className="font-semibold">Sign Out</Link></li>
            </>
            :
            <li> <Link className="font-semibold " to='/login'>Login</Link></li>
        }
    </>


    return (
        <div className="navbar bg-transparent max-w-[1200px] mx-auto print:hidden">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                       {menu}
                    </ul>
                </div>
                <Link to='/'>
                <a className="btn btn-ghost font-bold normal-case text-primary text-xl"><span className='text-2xl text-red-700 font-extrabold'>+</span>HelloDoctor</a>
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                  {menu}
                </ul>
            </div>
           
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn  navbar-end btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </label>
        </div>
    );
};

export default Navbar;





