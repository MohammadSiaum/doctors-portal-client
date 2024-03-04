import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 3.00 pm everyday.',
            icon: clock,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            name: 'Vist our Location',
            description: 'Notun Bazar, Badda, Dhaka',
            icon: marker,
            bgColor: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: '+8801645452599',
            icon: phone,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        }
    ]
    return (
        <div className='mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
            {
                cardData.map(card => <InfoCard
                   key={card.id}
                   card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;