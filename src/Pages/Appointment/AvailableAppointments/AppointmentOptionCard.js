import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOptionCard = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center items-center">
                <h2 className="card-title mb-2 text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='text-lg'>{slots.length > 0 ? slots.length + `${slots.length > 1 ? ' spaces available' : ' space available'}` : 'No space availabe currently'}</p>
                <div className="card-actions mt-2">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(appointmentOption)}
                        htmlFor="booking-modal"
                        className="capitalize btn bg-gradient-to-r from-primary to-secondary border-none text-white">Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptionCard;