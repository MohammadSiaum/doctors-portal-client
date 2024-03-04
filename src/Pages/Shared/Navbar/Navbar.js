import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                localStorage.removeItem("accessToken");
            })
            .catch(error => console.error(error));
    }

    const menuItems = <React.Fragment>
        <li className=''><Link to='/' className=' '>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/contact-us'>Contact Us</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li onClick={handleLogout} className='bg-accent text-white rounded-md hover:bg-slate-300 hover:text-white'><Link to='/login'>Logout</Link></li>

                </>

                :
                <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>


    return (
        <div className="navbar -p-  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow menu-accent rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost mr-3 normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-accent">
                    {menuItems}
                </ul>
            </div>

            <div className='lg:hidden navbar-end'>
                <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;