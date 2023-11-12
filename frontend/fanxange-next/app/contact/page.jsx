'use client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeOptions from "../../DComponents/TheameOption"
function Contact() {
    return (
        <div>
            {/*====header navbar start====*/}
            <header>
                <nav className="navbar fixed-top navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="dashboard ">
                            <img src="assets/images/logo.png" alt="Fanxange Logo" id="logo" />
                        </a>
                        <div className="d-flex flex-row order-2 order-lg-3 user_info">
                            <div className="group_btn d-none d-sm-block">
                                <a href="login " className="group_link log_in registration">LOG IN</a>
                                <a href="signup " className="group_link registration hover">SIGN UP</a>
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
                                    <a className="nav-link pd_right active" href="contact ">CONTACT US</a>
                                </li>
                                <li className="nav-item d-block d-sm-none">
                                    <a className="nav-link registration" href="login ">LOG IN</a>
                                </li>
                                <li className="nav-item d-block d-sm-none">
                                    <a className="nav-link registration hover" href="signup ">SIGN UP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {/*====header navbar end====*/}
            {/*====banner section start====*/}
            <section className="contact_banner_wrapper bg-dark">
                <div className="container">
                    <h1 className="hero_title">Contact</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="dashboard ">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/*====banner section end====*/}
            {/* theme option start */}
            <ThemeOptions />
            {/* theme option end */}
            {/*====contact form section start====*/}
            <section className="contact_form_wrapper">
                <div className="container">
                    <div className="row contact_row d-flex align-items-center">
                        <div className="col-lg-4">
                            <div className="left_side_content">
                                <h1>Have questions?</h1>
                                <p className="section_info">Have questions? We have answers!</p>
                                <div className="read d-flex align-items-center">
                                    <a href="faq ">Read F.A.Q <i className="fa fa-chevron-right" /></a>
                                </div>
                                <div className="inner_row d-flex align-items-center">
                                    <div className="inner_left">
                                        <img src="assets/images/contact/email.png" alt="Email Us" />
                                    </div>
                                    <div className="inner_right">
                                        <h4>Email Us</h4>
                                        <p><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d6bfb8b0b996a5a6b9a0b3a5a2f8b5b9bb">[email&nbsp;protected]</a></p>
                                    </div>
                                </div>
                                <div className="inner_row d-flex align-items-center">
                                    <div className="inner_left">
                                        <img src="assets/images/contact/call.png" alt="Call Us" />
                                    </div>
                                    <div className="inner_right">
                                        <h4>Call Us</h4>
                                        <p>+1 (987) 664-32-11</p>
                                        <p>+1 (987) 664-32-11</p>
                                    </div>
                                </div>
                                <div className="inner_row d-flex align-items-center">
                                    <div className="inner_left">
                                        <img src="assets/images/contact/visit.png" alt="Visit Us" />
                                    </div>
                                    <div className="inner_right">
                                        <h4>Visit Us</h4>
                                        <p>4293 Euclid Avenue, Los Angeles, CA 90012</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className="right_side_content d-flex justify-content-lg-end">
                                <div className="form_wrapper">
                                    <h1>We'd love to hear from you</h1>
                                    <form action="#" method="post">
                                        <div className="mb-3">
                                            <label htmlFor="exampleName5" className="form-label">
                                                Your Full Name
                                            </label>
                                            <input type="text" className="form-control para" id="exampleName5" placeholder="Enter Your Full Name" required="required" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail5" className="form-label">
                                                Your Email
                                            </label>
                                            <input type="email" className="form-control para" id="exampleInputEmail5" placeholder="Enter Your Email" required="required" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleSubject5" className="form-label">
                                                Subject
                                            </label>
                                            <input type="text" className="form-control para" id="exampleSubject5" placeholder="Enter Your Subject" required="required" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleMessage5" className="form-label">
                                                Message
                                            </label>
                                            <textarea name="message" id="exampleMessage5" className="form-control para" cols={30} rows={4} placeholder="Enter Your Message" required="required" defaultValue={""} />
                                        </div>
                                        <div className="mb-3 check d-flex align-items-start">
                                            <input type="checkbox" id="agree" name="agreed" defaultValue="promotional message" />
                                            <label htmlFor="agree"> I agree to receive emails, newsletters and promotional
                                                messages</label><br />
                                        </div>
                                        <button type="submit" className="btn btn-primary">SEND MESSAGE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====contact form section end====*/}
            {/*====footer navbar start*/}
            <footer className="con_footer">
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
                                        <img src="assets/images/footer/apple_store.png" alt="Download from Apple Store" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mr-0" href="#">
                                        <img src="assets/images/footer/google_store.png" alt="Download from Google Play Store" />
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
            {/* Mirrored from pixner.net/Fanxange/dark/contact  by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 11 Nov 2023 08:47:20 GMT */}
        </div>)
}

export default Contact

