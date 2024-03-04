import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className=' bg-gray-200 py-11 mb-10 rounded-b-lg' style={{
            backgroundImage: `url(${footer})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"

        }}>
            <footer className="">
                <div className="footer grid justify-items-center pt-8">
                    <nav>
                        <header className="font-bold uppercase  text-accent mb-3">Services</header>
                        <Link className=" font-medium text-accent link-hover">Emergency Checkup</Link>
                        <Link className="font-medium text-accent link-hover">Monthly Checkup</Link>
                        <Link className="font-medium text-accent link-hover">Weekly Checkup</Link>
                        <Link className="font-medium text-accent link-hover">Deep Checkup</Link>

                    </nav>
                    <nav>
                        <header className="font-bold uppercase  text-accent mb-3">Oral Health</header>
                        <Link className="font-medium text-accent link-hover">Fluoride Treatment</Link>
                        <Link className="font-medium text-accent link-hover">Cavity Filling</Link>
                        <Link className="font-medium text-accent link-hover">Teath Whitening</Link>

                    </nav>
                    <nav>
                        <header className="font-bold uppercase  text-accent mb-3">Our Address</header>
                        <Link className="font-medium text-accent link-hover">Natun Bazar, Badda, Dhaka</Link>
                        <Link className="font-medium text-accent link-hover">Gulshan-1, Dhaka</Link>
                        <Link className="font-medium text-accent link-hover">Bhola, Barisal ( Key Brance )</Link>
                    </nav>
                </div>
                <div className='text-center mt-32 text-accent font-semibold'>
                    <p>Copyright © 2023 - All right reserved by Mohammad Siam</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;