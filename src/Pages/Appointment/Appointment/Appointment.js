import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoint from '../AvailableAppointments/AvailableAppoint';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>

            <AvailableAppoint
                selectedDate={selectedDate}
            ></AvailableAppoint>
        </div>
    );
};

export default Appointment;