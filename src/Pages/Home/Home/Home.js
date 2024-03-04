import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Term from '../Treatment/Treatment';
import Treatment from '../Treatment/Treatment';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <AppointmentCard></AppointmentCard>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;