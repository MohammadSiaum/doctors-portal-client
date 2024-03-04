import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentCard = () => {
    return (
        <div className="hero mt-32 rounded-lg"  style={{background : `url(${appointment})`}}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} className="hidden md:block max-w-lg " alt='doctors-appoint' />
                <div>
                    <h3 className='text-lg text-secondary font-semibold mb-5'>Appointment</h3>
                    <h1 className="text-5xl font-bold text-white">Make a appointment Today</h1>
                    <p className="py-7 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Click Here</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;