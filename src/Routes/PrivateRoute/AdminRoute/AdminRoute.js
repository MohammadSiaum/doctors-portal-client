import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../../Pages/Shared/Loading/Loading';
import useAdmin from '../../../hooks/useAdmin';



const AdminRoute = ({children}) => {
    // const { user, loading } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
 
    console.log('isAdmin:', isAdmin)
    if(loading || isAdminLoading) {
        return <Loading></Loading>
    }

    if (user &&  isAdmin) {
        console.log(user, isAdmin)
        return children;
    }

    return <Navigate to='/' state={{from:location}} replace ></Navigate>
};

export default AdminRoute;