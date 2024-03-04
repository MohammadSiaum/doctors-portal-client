import React from 'react';

const ServiceCard = ({card}) => {
    const {title, description, icon} = card;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={icon} alt="teeth" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-2 text-accent">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;