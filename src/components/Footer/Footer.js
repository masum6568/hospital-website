
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarked, faPhone } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div>

            <footer className="footer-distributed " >

                <div className="footer-left">

                    <h3>Our <span> Educational Teach </span></h3>

                    <p className="footer-links">
                        <Link to="/home">Home</Link>
                        <br />

                        <Link to="/about">About</Link>
                        <br />

                        <Link to="/service">Service</Link>



                    </p>

                    <p className="footer-company-name">Company Name Initiatives to educate </p>
                </div>

                <div className="footer-center">

                    <div >
                        <FontAwesomeIcon className="icon" icon={faMapMarked} size='2x' />
                        <p className="d-inline-block"><span>444 S. Cedros Ave</span>Dhaka, Bangladesh</p>
                    </div>

                    <div >
                        <FontAwesomeIcon className="icon" icon={faPhone} size='2x' />
                        <p>+09456398445</p>
                    </div>

                    <div >
                        <FontAwesomeIcon className="icon" icon={faEnvelope} size='2x' />
                        <p><a href="mailto:support@company.com">Educational Teach Group LTD</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About Us</span>
                        It was formed in an initiative to educate the people. I hope everyone will take a good look at it and take it well.
                    </p>



                </div>

                <h5>Time To Update Your @Copyright Info For 2020</h5>
            </footer>
        </div>
    );
};

export default Footer;