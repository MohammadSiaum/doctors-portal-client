import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptionCard from './AppointmentOptionCard';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppoint = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data:appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['availableAppointments', date],
        /* queryFn: () => fetch('http://localhost:5000/availableAppointments')
            .then(res => res.json()) */
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/availableAppointments?date=${date}`);
            const data = await res.json();
            return data;
        }
    });

    /* useEffect(() => {
        fetch('http://localhost:5000/availableAppointments')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))

    }, []) */

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='mt-16 mb-20'>
            <div>
                <p className='text-center text-xl text-secondary font-semibold'>Available Services on {format(selectedDate, "PP")}</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 mt-14'>
                {
                    appointmentOptions.map(option => <AppointmentOptionCard
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}

                    ></AppointmentOptionCard>)
                }
            </div>

            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppoint;