'use client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeOptions from '../DComponents/TheameOption';
import React from 'react'

const Login = () => {
    return (
        <div>
            {/*====header navbar start====*/}
            <header>
                <nav className="navbar fixed-top navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="dashboard ">
                            <img src="/assets/images/logo.png" alt="Fanxange Logo" id="logo" />
                        </a>
                        <div className="d-flex flex-row order-2 order-lg-3 user_info">
                            <div className="group_btn d-none d-sm-block">
                                <a href="login " className="group_link log_in registration hover">LOG IN</a>
                                <a href="signup " className="group_link registration">SIGN UP</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDefault" aria-controls="navDefault" aria-expanded="false" aria-label="Toggle navigation" id="toggleIcon">
                                <span className="bar_one" />
                                <span className="bar_two" />
                                <span className="bar_three" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end order-3 order-lg-2" id="navDefault">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        HOME
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="dashboard ">HOME</a></li>
                                        <li><a className="dropdown-item" href="dashboard-two ">HOME TWO</a></li>
                                        <li><a className="dropdown-item" href="user-portfolio ">Admin Panel</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="about ">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="play ">HOW TO PLAY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="faq ">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pd_right" href="contact ">CONTACT US</a>
                                </li>
                                <li className="nav-item d-block d-sm-none">
                                    <a className="nav-link registration hover" href="login ">LOG IN</a>
                                </li>
                                <li className="nav-item d-block d-sm-none">
                                    <a className="nav-link registration" href="signup ">SIGN UP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/*====header navbar end====*/}
            {/*====login section start====*/}
            <section className="form_bg">
                <div className="container">
                    <div className="form_container">
                        <div className="form_header">
                            <a href="dashboard " className="registration_logo">
                                <img src="/assets/images/logo.png" alt="Fanxange Logo" />
                            </a>
                        </div>
                        <form action="https://pixner.net/Fanxange/dark/contact.php" method="POST" className="mt-60">
                            <h1 className="form_title">Log in</h1>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" placeholder="Enter Your Email" className="form-control para" id="email" required="required" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password-field" className="form-label">Password</label>
                                <div className="show_password">
                                    <input type="password" placeholder="Enter Your Password" className="form-control para" id="password-field" required="required" />
                                    <i className="fas fa-eye toggle-password" />
                                </div>
                                <a href="#" className="para" id="forgot">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn btn-primary">Register Now!</button>
                            <div className="form_footer">
                                <span>OR</span>
                                <div className="social_container d-flex align-items-center">
                                    <div className="facebook">
                                        <a href="#" className="para d-flex align-items-center justify-content-evenly"><img src="/assets/images/contact/facebook.png" alt="Sign Up With Facebook" />
                                            FACEBOOK</a>
                                    </div>
                                    <div className="google">
                                        <a href="#" className="para d-flex align-items-center justify-content-evenly"><img src="/assets/images/contact/google.png" alt="Sign Up With Google" /> GOOGLE</a>
                                    </div>
                                </div>
                                <p className="para">I don't have an account. <a href="signup ">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/*====login section end====*/}
            {/* theme option start */}
            <ThemeOptions />
            {/* theme option end */}
            {/*====footer navbar start*/}
            <footer>
                <div className="container">
                    <div className="row footer_nav d-flex align-items-center">
                        <div className="col-lg-7">
                            <ul className="nav justify-content-center justify-content-sm-start">
                                <li className="nav-item">
                                    <a className="nav-link ml-0" href="contact ">CONTACT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">TERMS OF USE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">PRIVACY POLICY</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <ul className="nav justify-content-center justify-content-sm-start justify-content-lg-end">
                                <li className="nav-item">
                                    <a className="nav-link ml-0" href="#">
                                        <img src="/assets/images/footer/apple_store.png" alt="Download from Apple Store" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mr-0" href="#">
                                        <img src="/assets/images/footer/google_store.png" alt="Download from Google Play Store" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row footer_copyright d-flex align-items-center">
                        <div className="col-lg-7 text-center text-sm-start">
                            <p className="para">Copyright © 2021. Made with passion by <a href="https://themeforest.net/user/pixelaxis/portfolio">Pixelaxis</a></p>
                        </div>
                        <div className="col-lg-5 text-center text-sm-start text-lg-end">
                            <p className="para">All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*====footer navbar end====*/}
            {/*===scroll bottom to top===*/}
            <a href="#" className="scrollToTop"><i className="flaticon-up-chevron" /></a>
            {/*===scroll bottom to top===*/}
            {/*====js scripts start====*/}
            {/*jquery-3.6.0 minified source*/}
            {/*bootstrap 5 minified bundle js source*/}
            {/*waypoints-4.0.0 minified js source*/}
            {/*counter up-1.0.0 minified js source*/}
            {/*owl carousel-2.3.4 minified js source*/}
            {/*magnific popup-1.1.0 js source*/}
            {/*jquery nice select minified source*/}
            {/*wow-1.1.3 minified js source*/}
            {/*custom js source*/}
            {/*====js scripts end====*/}
        </div>)
}

export default Login


