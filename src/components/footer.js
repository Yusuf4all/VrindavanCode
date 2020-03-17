import React from 'react';
import './footerStyle.css';
export const Footer = (props) => {
    return (
        <footer>
            <div className='manage'>
                <div className='address'>
                    <h5>Vrida anandam</h5>
                    <h6>RESORT</h6>

                    <div className='addressCato'>
                        <p>Address: VPI Road, Sunrakh,opposite Iskon Food for life,Vrindavan, Mathura,Utter Pardesh (281121)</p>
                        <p>Phone: 8802130906</p>
                        <p>Email: YUSUFKHANYK098@GMAIL.COM</p>
                    </div>
                    <div className='socialMedia'>
                        <ul className='d-flex'>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-facebook-square"></i></li>
                            <li><i className="fab fa-youtube-square"></i></li>
                        </ul>
                    </div>
                </div>

                <div className='findUs'>
                    <h5>Find us On:</h5>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='logoOfCompany'>
                                <img src='https://seeklogo.net/wp-content/uploads/2016/07/hotelscom-vector-logo.png' alt='' />

                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='logoOfCompany'>
                                <img src='https://www.vatc.org/wp-content/uploads/2018/07/TripAdvisor-logo-300x146.png' alt='' />

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='logoOfCompany'>
                                <img src='https://www.tajhotels.com/content/dam/tajhotels/icons/style-icons/TIC%20logo-02.png' alt='' />

                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <div className='logoOfCompany'>
                                <img src='https://logos-download.com/wp-content/uploads/2018/12/Royce_Hotel_Logo.png' alt='' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer_Nav'>
                <ul className='d-flex justify-content-center'>
                    <li>Wedding</li>
                    <li>Bhagwat</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
                <h5>Vrinda Anandam Resort</h5>
                <p>1717 Harrison St, San Francisco, CA 94103,USA</p>
            </div>
        </footer>
    )
}