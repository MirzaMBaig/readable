import React, {Component} from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <footer class="main-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="logo">
                                <h6 class="text-white">Bootstrap Blog</h6>
                            </div>
                            <div class="contact-details">
                                <p>53 Broadway, Broklyn, NY 11249</p>
                                <p>Phone: (020) 123 456 789</p>
                                <p>Email: <a href="mailto:info@company.com">Info@Company.com</a></p>
                                <ul class="social-menu">
                                    <li class="list-inline-item"><a href={null}><i class="fa fa-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href={null}><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href={null}><i class="fa fa-instagram"></i></a></li>
                                    <li class="list-inline-item"><a href={null}><i class="fa fa-behance"></i></a></li>
                                    <li class="list-inline-item"><a href={null}><i class="fa fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="menus d-flex">
                                <ul class="list-unstyled">
                                    <li> <a href={null}>My Account</a></li>
                                    <li> <a href={null}>Add Listing</a></li>
                                    <li> <a href={null}>Pricing</a></li>
                                    <li> <a href={null}>Privacy &amp; Policy</a></li>
                                </ul>
                                <ul class="list-unstyled">
                                    <li> <a href={null}>Our Partners</a></li>
                                    <li> <a href={null}>FAQ</a></li>
                                    <li> <a href={null}>How It Works</a></li>
                                    <li> <a href={null}>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyrights">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <p>&copy; 2017. All rights reserved. Your great site.</p>
                            </div>
                            <div class="col-md-6 text-right">
                                <p>Template By <a href="https://bootstraptemple.com" class="text-white">Bootstrap Temple</a>
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