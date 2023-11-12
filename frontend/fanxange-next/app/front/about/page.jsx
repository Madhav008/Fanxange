'use client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import ThemeOptions from '../DComponents/TheameOption';

const About = () => {
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
                                    <a className="nav-link active" href="about">ABOUT US</a>
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
            <section className="about_banner_wrapper">
                <div className="container">
                    <h1 className="hero_title">About Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="dashboard ">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/*====banner section end====*/}
            {/* theme option start */}
            <ThemeOptions />
            {/* theme option end */}
            {/*====passion section start====*/}
            <section className="passion_wrapper">
                <div className="container">
                    <div className="row passion_row d-flex align-items-center">
                        <div className="col-lg-6 order-last order-lg-first">
                            <div className="left_col text-center text-lg-start">
                                <img src="/assets/images/about/illustration.png" alt="Love and Passion" />
                            </div>
                        </div>
                        <div className="col-lg-6 order-first order-lg-last">
                            <div className="right_col">
                                <h4 className="secondary">A Few Words About Us</h4>
                                <h1 className="section_title">Love and Passion for the Game</h1>
                                <p className="para">Fanxange is an investment platform that allows fans and investors all over the
                                    world to own shares of unique assets in sports.Buy and Sell Your Favorite Players On The
                                    World's First Sports Stock Market.</p>
                                <p className="para">A new type of fantasy football league where you create your
                                    ultimate portfolio and watch your portfolio grow. Buy shares from as many players.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====passion section end====*/}
            {/*====counter up section start====*/}
            <section className="counter_wrapper">
                <div className="container">
                    <div className="counter_content_wrapper">
                        <div className="title_wrapper text-center">
                            <h1 className="section_title">A Sports trading experience like you have never seen before</h1>
                        </div>
                        <div className="row counter_row">
                            <div className="col-md-6 col-lg-4">
                                <div className="counter_content d-flex align-items-center justify-content-evenly">
                                    <div className="left_col">
                                        <img src="/assets/images/about/players.png" alt="Players Counter" />
                                    </div>
                                    <div className="right_col">
                                        <h1 className="counter">3917</h1>
                                        <span className="para">Users</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="counter_content d-flex align-items-center justify-content-evenly">
                                    <div className="left_col">
                                        <img src="/assets/images/about/users.png" alt="User Counter" />
                                    </div>
                                    <div className="right_col">
                                        <h1 className="counter">1678</h1>
                                        <span className="para">Users</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="counter_content d-flex align-items-center justify-content-evenly">
                                    <div className="left_col">
                                        <img src="/assets/images/about/volume.png" alt="Volume Counter" />
                                    </div>
                                    <div className="right_col">
                                        <h1 className="counter">60309502</h1>
                                        <span className="para">Volume traded</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====counter up section end====*/}
            {/*====team section start====*/}
            <section className="team_wrapper">
                <div className="container">
                    <div className="title_wrapper text-center">
                        <h4>Meet the</h4>
                        <h1 className="section_title">Fanxange Team</h1>
                    </div>
                    <div className="row team_row d-flex align-items-center">
                        <div className="col-md-6 col-lg-3 members_info">
                            <div className="inner text-center">
                                <div className="outline_hex d-flex align-items-center justify-content-center mx-auto">
                                    <div className="inline_hex d-flex align-items-center justify-content-center">
                                        <img src="/assets/images/about/team_1.png" alt="Team One" />
                                    </div>
                                </div>
                                <h4>
                                    <a href="#">Elijah Ryan</a>
                                </h4>
                                <p>Co Founder</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 members_info">
                            <div className="inner text-center">
                                <div className="outline_hex d-flex align-items-center justify-content-center mx-auto">
                                    <div className="inline_hex d-flex align-items-center justify-content-center">
                                        <img src="/assets/images/about/team_2.png" alt="Team Two" />
                                    </div>
                                </div>
                                <h4>
                                    <a href="#">Sammey Kelley</a>
                                </h4>
                                <p>Co Founder</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 members_info">
                            <div className="inner text-center">
                                <div className="outline_hex d-flex align-items-center justify-content-center mx-auto">
                                    <div className="inline_hex d-flex align-items-center justify-content-center">
                                        <img src="/assets/images/about/team_3.png" alt="Team Three" />
                                    </div>
                                </div>
                                <h4>
                                    <a href="#">Bobby Smith</a>
                                </h4>
                                <p>Software Engineer</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 members_info">
                            <div className="inner text-center">
                                <div className="outline_hex d-flex align-items-center justify-content-center mx-auto">
                                    <div className="inline_hex d-flex align-items-center justify-content-center">
                                        <img src="/assets/images/about/team_4.png" alt="Team Four" />
                                    </div>
                                </div>
                                <h4>
                                    <a href="#">Lillie Bryant</a>
                                </h4>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====team section end====*/}
            {/*====experience section start====*/}
            <section>
                <div className="container">
                    <div className="experience">
                        <div className="experience_content text-center">
                            <h1 className="section_title">Experience the future of fantasy sports</h1>
                            <p className="section_info">Buy &amp; Sell Shares in Favourite Players</p>
                            <a href="trade " className="btn btn-primary">Start Trading</a>
                        </div>
                    </div>
                </div>
            </section>
            {/*====experience section end====*/}
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
        </div>
    )
}

export default About
