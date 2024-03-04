import React from 'react';

const ReviewCard = ({ review }) => {
    const { name, image, reviews, location } = review;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{reviews}</p>
                <div className="mt-9 flex space-x-9">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='doctor-review' />
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-accent text-lg'>{name}</h2>
                        <p className='text-sm'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;