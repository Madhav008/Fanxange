"use client";

// import ThemeOptions from "@/DComponents/TheameOption";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ThemeOptions from '../DComponents/TheameOption';
export default function Dashboard() {


    const slickSettings = {
        rtl: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <i className='flaticon-left-chevron'></i>,
        nextArrow: <i className='flaticon-right-chevron'></i>,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div>

            {/* <!--====header navbar start====--> */}
            <header>
                <nav className="navbar fixed-top navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="dashboard ">
                            <img src="/assets/images/Logo-dark-n.png" alt="Fanxange Logo" id="logo" />
                        </a>
                        <div className="d-flex flex-row order-2 order-lg-3 user_info">
                            <div className="group_btn d-none d-sm-block">
                                <a href="login " className="group_link log_in registration">LOG IN</a>
                                <a href="signup " className="group_link registration hover">SIGN UP</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navDefault"
                                aria-controls="navDefault" aria-expanded="false" aria-label="Toggle navigation" id="toggleIcon">
                                <span className="bar_one"></span>
                                <span className="bar_two"></span>
                                <span className="bar_three"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse justify-content-end order-3 order-lg-2" id="navDefault">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
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
            {/* <!--====header navbar end====--> */}

            {/* <!--====banner section start====--> */}
            <section className="home_two_banner_wrapper">
                <div className="container">
                    <div className="row home_banner_row d-flex align-items-center">
                        <div className="col-lg-5 col-xl-6">
                            <div className="inner">
                                <h1 className="hero_title">Invest of Your Favourite Players</h1>
                                <p className="section_info">Best fantasy sports stock exchange where users can buy/sell shares of
                                    professional athletes as if they
                                    were stocks.</p>
                                <div className="btn_wrapper d-flex align-items-center">
                                    <div className="trade_btn">
                                        <a href="trade " className="btn btn-primary">Start Trading</a>
                                    </div>
                                    <div className="video_btn">
                                        <a href="https://www.youtube.com/watch?v=uCik8-i2Hcc" title="YouTube video player" className="video_popup">
                                            <i className="flaticon-play-arrow" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-6">
                            <div className="inner text-center">
                                <img src="/assets/images/home_banner/home_two_banner_illustration.png" alt="Home Banner Illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====banner section end====--> */}

            {/* <!--====slider section start====--> */}
            <section className="slider_wrapper">
                <div className="container">
                    <div className="slider_row">
                        <Slider {...slickSettings}>
                            <div className="slider_items d-flex align-items-center">
                                <div className="left_col">
                                    <div className="img_wrapper d-flex align-items-center justify-content-center">
                                        <a href="player-profile " className="bg_pink">
                                            <img src="/assets/images/slider/trader_1.png" alt="Trader One" />
                                        </a>
                                        <span className="bg_pink d-inline-flex align-items-center justify-content-center">NBA</span>
                                    </div>
                                </div>
                                <div className="right_col flex-grow-1">
                                    <h5>
                                        <a href="player-profile ">Don Doyle</a>
                                    </h5>
                                    <p>Los Angeles Lakers</p>
                                    <div className="price_line d-flex align-items-center">
                                        <div className="price">
                                            <p><i className="fas fa-dollar-sign"></i> 3.91</p>
                                        </div>
                                        <div className="rate">
                                            <p>+8.12 <i className="fas fa-caret-up"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider_items d-flex align-items-center">
                                <div className="left_col">
                                    <div className="img_wrapper img_bg_two d-flex align-items-center justify-content-center">
                                        <a href="player-profile " className="bg_purple">
                                            <img src="/assets/images/slider/trader_2.png" alt="Trader Two" />
                                        </a>
                                        <span className="bg_purple d-inline-flex align-items-center justify-content-center">NFL</span>
                                    </div>
                                </div>
                                <div className="right_col flex-grow-1">
                                    <h5>
                                        <a href="player-profile ">Lynn Green</a>
                                    </h5>
                                    <p>Washington Football Team</p>
                                    <div className="price_line d-flex align-items-center">
                                        <div className="price">
                                            <p><i className="fas fa-dollar-sign"></i> 3.91</p>
                                        </div>
                                        <div className="rate">
                                            <p>+8.12 <i className="fas fa-caret-up"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider_items d-flex align-items-center">
                                <div className="left_col">
                                    <div className="img_wrapper img_bg_three d-flex align-items-center justify-content-center">
                                        <a href="player-profile " className="bg_cyan">
                                            <img src="/assets/images/slider/trader_3.png" alt="Trader Three" />
                                        </a>
                                        <span className="bg_cyan d-inline-flex align-items-center justify-content-center">MLB</span>
                                    </div>
                                </div>
                                <div className="right_col flex-grow-1">
                                    <h5>
                                        <a href="player-profile ">Ricky Scott</a>
                                    </h5>
                                    <p>Los Angeles Lakers</p>
                                    <div className="price_line d-flex align-items-center">
                                        <div className="price">
                                            <p><i className="fas fa-dollar-sign"></i> 3.91</p>
                                        </div>
                                        <div className="rate">
                                            <p>+8.12 <i className="fas fa-caret-up"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider_items d-flex align-items-center">
                                <div className="left_col">
                                    <div className="img_wrapper d-flex align-items-center justify-content-center">
                                        <a href="player-profile " className="bg_pink">
                                            <img src="/assets/images/slider/trader_1.png" alt="Trader One" />
                                        </a>
                                        <span className="bg_pink d-inline-flex align-items-center justify-content-center">NBA</span>
                                    </div>
                                </div>
                                <div className="right_col flex-grow-1">
                                    <h5>
                                        <a href="player-profile ">Don Doyle</a>
                                    </h5>
                                    <p>Los Angeles Lakers</p>
                                    <div className="price_line d-flex align-items-center">
                                        <div className="price">
                                            <p><i className="fas fa-dollar-sign"></i> 3.91</p>
                                        </div>
                                        <div className="rate">
                                            <p>+8.12 <i className="fas fa-caret-up"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider_items d-flex align-items-center">
                                <div className="left_col">
                                    <div className="img_wrapper img_bg_two d-flex align-items-center justify-content-center">
                                        <a href="player-profile " className="bg_purple">
                                            <img src="/assets/images/slider/trader_2.png" alt="Trader Two" />
                                        </a>
                                        <span className="bg_purple d-inline-flex align-items-center justify-content-center">NFL</span>
                                    </div>
                                </div>
                                <div className="right_col flex-grow-1">
                                    <h5>
                                        <a href="player-profile ">Lynn Green</a>
                                    </h5>
                                    <p>Washington Football Team</p>
                                    <div className="price_line d-flex align-items-center">
                                        <div className="price">
                                            <p><i className="fas fa-dollar-sign"></i> 3.91</p>
                                        </div>
                                        <div className="rate">
                                            <p>+8.12 <i className="fas fa-caret-up"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider_items d-flex align-items-center">
                                <div className="left_col">
                                    <div className="img_wrapper img_bg_three d-flex align-items-center justify-content-center">
                                        <a href="player-profile " className="bg_cyan">
                                            <img src="/assets/images/slider/trader_3.png" alt="Trader Three" />
                                        </a>
                                        <span className="bg_cyan d-inline-flex align-items-center justify-content-center">MLB</span>
                                    </div>
                                </div>
                                <div className="right_col flex-grow-1">
                                    <h5>
                                        <a href="player-profile ">Ricky Scott</a>
                                    </h5>
                                    <p>Los Angeles Lakers</p>
                                    <div className="price_line d-flex align-items-center">
                                        <div className="price">
                                            <p><i className="fas fa-dollar-sign"></i> 3.91</p>
                                        </div>
                                        <div className="rate">
                                            <p>+8.12 <i className="fas fa-caret-up"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
            {/* <!--====slider section end====--> */}
            <ThemeOptions />
            {/* <!--====work section start====--> */}
            <section className="work_section">
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
                                        <img src="/assets/images/work/deposit.png" alt="Deposit Funds" />
                                    </div>
                                </div>
                                <h4 className="secondary">Deposit Funds</h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner text-center">
                                <div className="content_wrapper arrow_container d-flex align-items-center justify-content-center">
                                    <div className="content d-flex align-items-center justify-content-center">
                                        <img src="/assets/images/work/market.png" alt="Watch the market" />
                                    </div>
                                </div>
                                <h4 className="secondary">Watch the market</h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner text-center">
                                <div className="content_wrapper d-flex align-items-center justify-content-center">
                                    <div className="content d-flex align-items-center justify-content-center">
                                        <img src="/assets/images/work/trade.png" alt="Make a Trade" />
                                    </div>
                                </div>
                                <h4 className="secondary">Make a trade</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====work section end====--> */}

            {/* <!--====buy section start====--> */}
            <section>
                <div className="container">
                    <div className="buy_wrapper">
                        <div className="row buy_row d-flex align-items-center">
                            <div className="col-lg-6 order-last order-lg-first">
                                <div className="left_inner text-center text-lg-left">
                                    <img src="/assets/images/buy/buy_illustration.png" alt="Buy Illustration" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right_inner">
                                    <h1 className="section_title">Buy Low, Sell High</h1>
                                    <p className="section_info">Changes in Players Share prices provide a valuable opportunity to
                                        profit from trading either long or short term. The concept is simple: buy low and sell
                                        high.
                                    </p>
                                    <div className="inner_row d-flex align-items-center">
                                        <div className="left_col">
                                            <div className="inner">
                                                <img src="/assets/images/buy/players.png" alt="Players" />
                                            </div>
                                        </div>
                                        <div className="right_col">
                                            <div className="inner">
                                                <p className="para">Players who beat projections raise in value</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner_row d-flex align-items-center">
                                        <div className="left_col">
                                            <div className="inner">
                                                <img src="/assets/images/buy/invest.png" alt="Invest" />
                                            </div>
                                        </div>
                                        <div className="right_col">
                                            <div className="inner">
                                                <p className="para">Invest in the value of a player</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner_row d-flex align-items-center">
                                        <div className="left_col">
                                            <div className="inner">
                                                <img src="/assets/images/buy/trade.png" alt="Trade" />
                                            </div>
                                        </div>
                                        <div className="right_col">
                                            <div className="inner">
                                                <p className="para">Trade from Anywhere, Anytime</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====buy section end====--> */}

            {/* <!--====play section start====--> */}
            <section>
                <div className="container">
                    <div className="row play_row d-flex align-items-center">
                        <div className="col-lg-5">
                            <div className="inner">
                                <h1 className="section_title">Play all the sports you love, all in one place!</h1>
                                <p className="section_info">Buy, sell or trade your favourite athletes just like stocks on a stock
                                    market.</p>
                                <div className="inner_row d-flex align-items-center">
                                    <div className="inner_col">
                                        <div className="left_col">
                                            <img src="/assets/images/play/payment.png" alt="Secure Payments" />
                                        </div>
                                    </div>
                                    <div className="inner_col">
                                        <div className="right_col">
                                            <h5>Secure Payments</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_row d-flex align-items-center">
                                    <div className="inner_col">
                                        <div className="left_col">
                                            <img src="/assets/images/play/transparent.png" alt="Transparent" />
                                        </div>
                                    </div>
                                    <div className="inner_col">
                                        <div className="right_col">
                                            <h5>Transparent</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_row d-flex align-items-center">
                                    <div className="inner_col">
                                        <div className="left_col">
                                            <img src="/assets/images/play/multi.png" alt="Multi Sports" />
                                        </div>
                                    </div>
                                    <div className="inner_col">
                                        <div className="right_col">
                                            <h5>Multi-Sports</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner_row d-flex align-items-center">
                                    <div className="inner_col">
                                        <div className="left_col">
                                            <img src="/assets/images/play/support.png" alt="24/7 Support" />
                                        </div>
                                    </div>
                                    <div className="inner_col">
                                        <div className="right_col">
                                            <h5>24/7 Support</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="inner text-center text-lg-end">
                                <img src="/assets/images/play/illustration.png" alt="Play Illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====play section end====--> */}

            {/* <!--====invite section start====--> */}
            <section>
                <div className="container">
                    <div className="invite_wrapper">
                        <div className="row invite_row d-flex align-items-center">
                            <div className="col-lg-8">
                                <div className="inner">
                                    <h1>Invite Friends.</h1>
                                    <h1>Get Free Stock.</h1>
                                    <p className="section_info">Once your friends sign up and deposit funds, you'll both get a free
                                        stock!</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="inner text-left text-lg-center">
                                    <a href="affiliate " className="btn btn-primary">Get Free Stock</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====invite section end====--> */}

            {/* <!--====testimonial section start====--> */}
            <section className="testimonial_section">
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
                                            <img src="/assets/images/testimonial/ava_1.png" alt="Mike Tucker" />
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
                                            <i className="fab fa-twitter"></i>
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
                                            <img src="/assets/images/testimonial/ava_2.png" alt="Mike Tucker" />
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
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="inner">
                                <p className="para">Investing in sports is the future & I look forward to seeing how Fanxange will
                                    continue to innovate way we follow sports.</p>
                                <div className="members_info d-flex align-items-center">
                                    <div className="avatar">
                                        <a href="player-profile ">
                                            <img src="/assets/images/testimonial/ava_3.png" alt="Mike Tucker" />
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
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====testimonial section end====--> */}

            {/* <!--====accordion section start====--> */}
            <section className="accordion_section">
                <div className="container">
                    <div className="accordion_wrapper">
                        <div className="title_wrapper text-center">
                            <h1 className="section_title">Frequently asked questions</h1>
                            <p className="section_info">If you haven't found an answer to your question, <a
                                href="contact ">contact us</a></p>
                            <a href="contact " className="btn btn-primary">ASK A QUESTION</a>
                        </div>
                        {/* <!--accordion items start--> */}
                        <div className="accordion" id="accordionOne">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button d-flex align-items-center" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                        <img src="/assets/images/faq/ac-icon.png" alt="Icon" /> What is "trading" on PlayerTrader?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p className="para">"Trading" refers to the buying and selling of shares of players on the
                                            Player Trader Platform</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed d-flex align-items-center" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                                        aria-controls="collapseTwo">
                                        <img src="/assets/images/faq/ac-icon.png" alt="Icon" /> What drives a player's stock?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p className="para">"Trading" refers to the buying and selling of shares of players on the
                                            Player Trader Platform</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed d-flex align-items-center" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true"
                                        aria-controls="collapseThree">
                                        <img src="/assets/images/faq/ac-icon.png" alt="Icon" /> What sports can I trade players
                                        from?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p className="para">"Trading" refers to the buying and selling of shares of players on the
                                            Player Trader Platform</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed d-flex align-items-center" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"
                                        aria-controls="collapseFour">
                                        <img src="/assets/images/faq/ac-icon.png" alt="Icon" /> What is my reward for reffering a
                                        friend?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p className="para">"Trading" refers to the buying and selling of shares of players on the
                                            Player Trader Platform</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed d-flex align-items-center" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true"
                                        aria-controls="collapseFive">
                                        <img src="/assets/images/faq/ac-icon.png" alt="Icon" /> How do I make a deposit?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p className="para">"Trading" refers to the buying and selling of shares of players on the
                                            Player Trader Platform</p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed d-flex align-items-center" type="button"
                                        data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true"
                                        aria-controls="collapseSix">
                                        <img src="/assets/images/faq/ac-icon.png" alt="Icon" /> Is my money safe?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                    data-bs-parent="#accordionOne">
                                    <div className="accordion-body">
                                        <p className="para">"Trading" refers to the buying and selling of shares of players on the
                                            Player Trader Platform</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--accordion items end--> */}
                    </div>
                </div>
            </section>
            {/* <!--====accordion section end====--> */}

            {/* <!--====experience section start====--> */}
            <section>
                <div className="container">
                    <div className="experience">
                        <div className="experience_content text-center">
                            <h1 className="section_title">Experience the future of fantasy sports</h1>
                            <p className="section_info">Buy & Sell Shares in Favourite Players</p>
                            <a href="trade " className="btn btn-primary">Start Trading</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====experience section end====--> */}

            {/* <!--====footer navbar start--> */}
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
                            <p className="para">Copyright &#169; 2021. Made with passion by <a
                                href="https://themeforest.net/user/pixelaxis/portfolio">Pixelaxis</a></p>
                        </div>
                        <div className="col-lg-5 text-center text-sm-start text-lg-end">
                            <p className="para">All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" className="scrollToTop"><i className="flaticon-up-chevron"></i></a>



        </div>
    )
}
