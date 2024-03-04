import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Treatment = () => {
    return (
        <div className="mt-28 py-9 card rounded-lg gap-7 lg:card-side bg-slate-100">
            <figure><img src={treatment} className=' w-2/3 md:w-1/2 rounded-lg' alt="treatment" /></figure>
            <div className="grid content-center gap-6 lg:w-1/3">
                <h2 className="card-title text-4xl text-accent">Exceptional Dental Care, on Your Terms</h2>
                <p className='text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <p><PrimaryButton>Get Started</PrimaryButton></p>
                
            </div>
        </div>
    );
};

export default Treatment;