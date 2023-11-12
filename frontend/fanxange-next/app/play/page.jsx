'use client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeOptions from "../../DComponents/TheameOption"
import React from 'react'

const Play = () => {
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
                                    <a className="nav-link active" href="play ">HOW TO PLAY</a>
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
            <section className="play_banner_wrapper">
                <div className="container">
                    <h1 className="hero_title">How to Play</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="dashboard ">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">How to Play</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/*====banner section end====*/}
            {/* theme option start */}
            <ThemeOptions />
            {/* theme option end */}
            {/*====work section start====*/}
            <section className="work_section second_work">
                <div className="container">
                    <div className="work_wrapper text-center">
                        <h1 className="section_title">How does it work?</h1>
                        <p className="section_info">It's easier than you think. Follow 3 simple easy steps</p>
                    </div>
                    <div className="row work_row d-flex align-items-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="inner text-center">
                                <div className="content_wrapper d-flex align-items-center justify-content-center">
                                    <div className="content d-flex align-items-center justify-content-center">
                                        <img src="assets/images/work/deposit.png" alt="Deposit Funds" />
                                    </div>
                                </div>
                                <h4 className="secondary">Deposit Funds</h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner text-center">
                                <div className="content_wrapper arrow_container d-flex align-items-center justify-content-center">
                                    <div className="content d-flex align-items-center justify-content-center">
                                        <img src="assets/images/work/market.png" alt="Watch the market" />
                                    </div>
                                </div>
                                <h4 className="secondary">Watch the market</h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner text-center">
                                <div className="content_wrapper d-flex align-items-center justify-content-center">
                                    <div className="content d-flex align-items-center justify-content-center">
                                        <img src="assets/images/work/trade.png" alt="Make a Trade" />
                                    </div>
                                </div>
                                <h4 className="secondary">Make a trade</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====work section end====*/}
            {/*====watch video section start====*/}
            <section className="video_container">
                <div className="container">
                    <div className="video_wrapper">
                        <div className="poster" id="post">
                            <img src="assets/images/play/video_poster_one.png" alt="Video Poster" />
                            <div className="dlt_btn d-flex align-items-center">
                                <div className="left d-flex align-items-center justify-content-center">
                                    <a href="https://www.youtube.com/watch?v=uCik8-i2Hcc" title="YouTube video player" className="video_popup">
                                        <i className="fas fa-play" />
                                    </a>
                                </div>
                                <div className="right">
                                    <p>Watch Video</p>
                                    <p><i className="far fa-clock" /> 2:20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====watch video section end====*/}
            {/*====testimonial section start====*/}
            <section className="testimonial_section second_testimonial">
                <div className="container">
                    <div className="testimonial_title_wrapper text-center">
                        <h1 className="section_title">What do you like most about the stock market of sports?</h1>
                    </div>
                    <div className="row testimonial_row">
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <p className="para">Fanxange is the future of daily fantasy! Trade teams like stocks, build your
                                    portfolio, and dominate the competition.</p>
                                <div className="members_info d-flex align-items-center">
                                    <div className="avatar">
                                        <a href="player-profile ">
                                            <img src="assets/images/testimonial/ava_1.png" alt="Mike Tucker" />
                                        </a>
                                    </div>
                                    <div className="name flex-grow-1">
                                        <h6>
                                            <a href="player-profile ">Mike Tucker</a>
                                        </h6>
                                        <span>New York</span>
                                    </div>
                                    <div className="twitter_account">
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <p className="para">It is a great idea. It's a ton of fun and I found myself caring about the
                                    results of games that didn't actually happen.</p>
                                <div className="members_info d-flex align-items-center">
                                    <div className="avatar">
                                        <a href="player-profile ">
                                            <img src="assets/images/testimonial/ava_2.png" alt="Mike Tucker" />
                                        </a>
                                    </div>
                                    <div className="name flex-grow-1">
                                        <h6>
                                            <a href="player-profile ">Keith Marsh</a>
                                        </h6>
                                        <span>Washington, DC</span>
                                    </div>
                                    <div className="twitter_account">
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <p className="para">Investing in sports is the future &amp; I look forward to seeing how Fanxange will
                                    continue to innovate way we follow sports.</p>
                                <div className="members_info d-flex align-items-center">
                                    <div className="avatar">
                                        <a href="player-profile ">
                                            <img src="assets/images/testimonial/ava_3.png" alt="Mike Tucker" />
                                        </a>
                                    </div>
                                    <div className="name flex-grow-1">
                                        <h6>
                                            <a href="player-profile ">Vera Brock</a>
                                        </h6>
                                        <span>Chicago, IL</span>
                                    </div>
                                    <div className="twitter_account">
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====testimonial section end====*/}
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
        </div>)
}

export default Play

