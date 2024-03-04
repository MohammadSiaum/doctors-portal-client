import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ReviewCard from './ReviewCard';

const Testimonial = () => {
    const reviewsData = [
        {
            id: 501,
            name: 'Winson Herry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: people1
        },
        {
            id: 502,
            name: 'Jenson Berry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Cameronia',
            image: people2
        },
        {
            id: 503,
            name: 'Berry Telna',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            image: people3
        }
    ]
    return (
        <section className='mt-40'>
            <div className='flex justify-between'>
                <div className=''>
                    <h3 className='text-secondary font-semibold text-xl'>Testimonial</h3>
                    <h1 className='text-4xl font-semibold py-3 text-accent'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img src={quote} className='w-24 md:w-48' alt="doctor-portal" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-20'>
                {
                    reviewsData.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;