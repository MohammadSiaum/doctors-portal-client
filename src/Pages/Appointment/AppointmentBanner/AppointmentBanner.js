import React, { useState } from 'react';
import chairImg from '../../../assets/images/chair.png';
import bgImg from '../../../assets/images/bg.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div className="hero h-[600px] bg-gray-100 rounded bg-cover bg-center mb-20" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse max-w-[1440px] lg:gap-44">
                <div className=" md:w-1/2">
                    <img src={chairImg} className="rounded-lg " alt='' />
                </div>
                <div className=''>
                    <div className='bg-white p-2 rounded-md'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AppointmentBanner;