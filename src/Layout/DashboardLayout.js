import React, { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open mt-11">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ml-3">
                    <Outlet></Outlet>
    
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-7 rounded pt-9 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && <>
                               <li><Link to='/dashboard/allusers'>All Users</Link></li>
                
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;