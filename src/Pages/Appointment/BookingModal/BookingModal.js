import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, "PP");
    const currentDateDetails = new Date();
    const currentDate = format(currentDateDetails, "Pp");
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatmentTitle: name,
            patient,
            slot,
            email,
            phone,
            currentDate
        }

        // TODO : send data to the server
        // and once data is saved then close the modal
        // and display success toast


        fetch('http://localhost:5000/bookingAppointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    setTreatment(null);
                    refetch();
                    toast.success('Booking have confirmed.');
                    console.log(data);

                }
                else {
                    toast.error(data.message);

                }
            })


    }
    return (

        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle btn-accent absolute right-2 top-2">✕</label>
                    <h3 className="font-semibold text-accent text-xl mb-7">{name}</h3>
                    <form onSubmit={handleBooking} className='grid gap-5'>
                        <p className="input grid content-center text-accent input-md font-semibold w-full items-center bg-slate-200 ">{date}</p>
                        <select name='slot' className='select text-accent font-semibold w-full bg-slate-200'>
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered input-md w-full" required />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered input-md w-full" required />
                        <input name='phone' type="phone" placeholder="Phone Number" className="input input-bordered input-md w-full" required />
                        {
                            user?.uid ?
                                <input className='text-white mt-3 btn btn-accent btn-md w-full' type='submit' value='Submit' />
                                :
                                <input className='text-white mt-3 btn btn-accent btn-md w-full' disabled type='submit' value='Submit' />
                        }
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;