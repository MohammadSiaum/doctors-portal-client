import React from 'react';

const InfoCard = ({card}) => {
    const {name, bgColor, icon, description} = card
    return (
        <div className={`card md:card-side p-7 shadow-xl ${bgColor}`}>
            <div className="md:flex grid place-items-center gap-3 space-x-9">
                <div className='grid content-center'>
                    <img src={icon} alt="" />

                </div>
                <div className='text-white grid content-center gap-2'>
                    <h3 className='text-2xl'>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;