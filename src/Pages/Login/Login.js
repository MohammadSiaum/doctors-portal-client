import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import GoogleLogin from '../Google/GoogleLogin';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);

    if(token) {
        navigate(from, {replace: true});
    }

    const handleLogin = data => {
        console.log(data);
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login successfully')
                reset();
                setUserEmail(data.email);
                
            })
            .catch(error => {
                console.error(error);
                toast.error("Invalid user Or wrong password");
            
            });


    }
    return (
        <div className='flex justify-center items-center py-20'>
            <div className=' w-96 p-8 rounded-lg shadow-xl'>
                <h2 className='text-3xl mb-9 text-center font-semibold text-accent'>Login</h2>
                <div>

                    <form onSubmit={handleSubmit(handleLogin)} className='grid gap-4'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type='email'
                                {...register("email", {
                                    required: "Email address is required !"
                                })}
                                placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='mt-2 text-red-500'>{errors.email?.message}</p>}

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type='password'
                                {...register("password", {
                                    required: "Password is required !",
                                    minLength: { value: 8, message: 'Password at least 8 characters or longer !' },
                                    pattern: { value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$&*%])(?=.*[0-9])/, message: 'Password contains at least 1 upper, lower letter, 1 special character and 1 digit.' }
                                })}
                                placeholder="password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='mt-2 text-red-500'>{errors.password?.message}</p>}
                            <label className="label">
                                <span className="label-text-alt font-semibold hover:underline">Forgot password?</span>
                            </label>
                        </div>

                        <div className="form-control mt-1">
                            <input className="btn btn-accent w-full max-w-xs" type="submit" value='Login' />
                        </div>
                        <div className='form-contral flex space-x-2 justify-center items-center cursor-pointer'>
                            <h2 className='label-text font-semibold'>New to Doctors Portal?</h2>
                            <h2 className='label-text font-semibold text-secondary underline'><Link to='/signup'>Create new account</Link></h2>
                        </div>
                        <div className='form-contral flex space-x-4 justify-center items-center'>
                            <h2 className='w-32 h-px label-text bg-gray-300 font-semibold'> </h2>
                            <h2 className='label-text text-gray-500 font-semibold'>OR</h2>
                            <h2 className='w-32 h-px label-text bg-gray-300 font-semibold'> </h2>
                        </div>
                    </form>
                    <div className="form-control mt-3">
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;