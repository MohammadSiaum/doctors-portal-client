import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';



const GoogleLogin = () => {
    const { logInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleGoogle = () => {
        logInWithGoogle()
         .then(result => {
            const user = result.user;
            toast.success('Google login successful');
            navigate(from, {replace: true});
            
         })
         .catch(err => {
            toast.error(err.message);
         })

    }
    return (
        <input onClick={handleGoogle} className="btn bg-white border-accent text-accent w-full max-w-xs" type="submit" value='Continue with Google' />
    );
};

export default GoogleLogin;