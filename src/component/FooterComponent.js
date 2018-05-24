import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="logo">
                                <h6 className="text-white">Bootstrap Blog</h6>
                            </div>
                            <div className="contact-details">
                                <p>53 Broadway, Broklyn, NY 11249</p>
                                <p>Phone: (020) 123 456 789</p>
                                <p>Email: <a href="mailto:info@company.com">Info@Company.com</a></p>
                                <ul className="social-menu">
                                    <li className="list-inline-item"><a href={null}><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href={null}><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href={null}><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href={null}><i className="fa fa-behance"></i></a></li>
                                    <li className="list-inline-item"><a href={null}><i className="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="menus d-flex">
                                <ul className="list-unstyled">
                                    <li> <a href={null}>My Account</a></li>
                                    <li> <a href={null}>Add Listing</a></li>
                                    <li> <a href={null}>Pricing</a></li>
                                    <li> <a href={null}>Privacy &amp; Policy</a></li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li> <a href={null}>Our Partners</a></li>
                                    <li> <a href={null}>FAQ</a></li>
                                    <li> <a href={null}>How It Works</a></li>
                                    <li> <a href={null}>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyrights">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>&copy; 2017. All rights reserved. Your great site.</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p>Template By <a href="https://bootstraptemple.com" className="text-white">Bootstrap Temple</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;