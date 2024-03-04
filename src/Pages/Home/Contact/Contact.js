import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const Contact = () => {
    return (
        <div className='mt-32 rounded-t-lg' style={{background : `url(${appointment})`}}>
            <div className='text-lg text-center grid gap-4 py-11'>
                <h2 className='font-semibold text-secondary'>Contact Us</h2>
                <h2 className=' text-white text-3xl mb-4'>Stay connected with us</h2>
                <p><input type="text" placeholder="Email Address" className="input input-md rounded-md w-full max-w-xs" /></p>
                <p><input type="text" placeholder="Subject" className="input input-md rounded-md w-full max-w-xs" /></p>
                <p><textarea placeholder="Your message" className="textarea textarea-bordered rounded-md textarea-md w-full max-w-xs" ></textarea></p>
                <p><PrimaryButton><span className='capitalize px-3'>Submit</span></PrimaryButton></p>
            </div>
        </div>
    );
};

export default Contact;