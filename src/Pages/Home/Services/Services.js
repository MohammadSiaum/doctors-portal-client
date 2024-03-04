import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceData = [
        {
            _id: 201,
            title: 'Fluoride Treatment',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities.',
            icon: fluoride,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            _id: 202,
            title: 'Cavity Filling',
            description: 'A filling seals a hole, or cavity, in a tooth. This helps treat tooth decay.',
            icon: cavity,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            _id: 203,
            title: 'Teeth Whitening',
            description: 'Teeth whitening involves bleaching your teeth to make them lighter.',
            icon: whitening,
            bgColor: 'bg-gradient-to-r from-secondary to-primary'
        }
    ]
    return (
        <div className='mt-28'>
            <div className='text-center grid gap-4'>
                <h3 className='text-secondary text-xl font-semibold uppercase'>Our Services</h3>
                <h2 className='text-3xl text-accent font-semibold'>Services We Provide</h2>
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-stretch gap-9'>
                {
                    serviceData.map(card => <ServiceCard
                        key={card._id}
                        id={card._id}
                        card={card}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;