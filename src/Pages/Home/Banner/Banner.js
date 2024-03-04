import React from 'react';

import chairImg from '../../../assets/images/chair.png';
import bgImg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero h-[600px] bg-gray-100 rounded bg-cover bg-center" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="hero-content flex-col lg:flex-row-reverse max-w-[1440px] gap-12 ">
                <div className="">
                    <img src={chairImg} className="rounded-lg " alt='' />
                </div>
                <div className=''>
                    <h1 className="text-5xl font-bold lg:w-3/4 text-accent">Your New Smile Starts Here</h1>
                    <p className="py-6 text-accent">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;