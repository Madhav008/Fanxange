'use client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'

const Trade = () => {
    return (
        <div>

            {/*page wrapper start*/}
            <div className="page_wrapper">
                {/*left sidebar*/}
                <div className="sidebar">
                    <div className="brand_wrapper text-center d-flex align-items-center justify-content-around">
                        <a href="index" className="brand">
                            {/*====logo start====*/}
                            <img src="assets/images/logo.png" alt="Fanxange Logo" id="logo" />
                            {/*====logo end====*/}
                        </a>
                        <div className="close_sidenav d-xxl-none" title="Close Side Bar">
                            <i className="flaticon-back" />
                        </div>
                    </div>
                    <div className="user_wrapper">
                        <div className="profile_wrapper text-center">
                            <div className="profile_content">
                                <a href="user-about" className="profile">
                                    {/*====small profile picture start====*/}
                                    <img src="assets/images/user/profile-sm.png" alt="Profile Picture" />
                                    {/*====small profile picture end====*/}
                                </a>
                                <span className="d-flex align-items-center justify-content-center">12</span>
                            </div>
                            <h5 className="text-center">
                                <a href="user-about">ED WALSH</a>
                            </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                            <div className="follower d-flex align-items-center justify-content-between">
                                <div className="icon">
                                    <i className="flaticon-user-profile" />
                                </div>
                                <div className="amount">
                                    <a href="user-about">2,239</a>
                                    <p>FOLLOWERS</p>
                                </div>
                            </div>
                            <div className="following d-flex align-items-center justify-content-between">
                                <div className="icon">
                                    <i className="flaticon-user-profile" />
                                </div>
                                <div className="amount">
                                    <a href="user-about">5,339</a>
                                    <p>FOLLOWING</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_wrapper">
                        <ul className="nav flex-column portfolio">
                            <li className="nav-item">
                                <a href="user-portfolio" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-briefcase" /> My Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="user-about" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-user" /> About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="trading_wrapper">
                        <h5>Trading</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="league" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-basketball-ball-variant" /> NBA
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-rugby" /> NFL
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-baseball-ball-1" /> MLB
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-ice-hockey" /> NHL
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-football" /> Soccer
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-golf" /> Golf
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-swords" /> ESports
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="affiliate_wrapper">
                        <ul className="nav flex-column affiliate">
                            <li className="nav-item">
                                <a href="affiliate" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-affiliate" /> Affiliate Program
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="contact" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-chat" /> Support
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="rules" className="nav-link d-flex align-items-center">
                                    <i className="flaticon-document" /> Rules
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar_footer d-flex align-items-center justify-content-around">
                        <div className="left_col">
                            <select name="selectPicker" id="language">
                                <option value="english">English</option>
                                <option value="spain">Spanish</option>
                                <option value="bangla">Bangla</option>
                            </select>
                        </div>
                        <div className="right_col">
                            <div className="switch_wrapper">
                                <button className="btn switcher" id="light" title="Switch to Light Theme">
                                    <i className="fas fa-star-and-crescent" />
                                </button>
                                <button className="btn switcher" id="dark" title="Switch to Dark Theme">
                                    <i className="fas fa-adjust" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*left sidebar*/}
                {/*body content*/}
                <div className="body_content">
                    {/*top bar*/}
                    <div className="container-fluid top_bar fixed-top">
                        <div className="top_bar_wrapper d-flex align-items-center justify-content-between">
                            <div className="search_bar d-flex align-items-center">
                                <div className="show_hide d-flex align-items-center">
                                    <button type="button" id="click" title="Toggle Side Bar">
                                        <span className="toggle_bar_one" />
                                        <span className="toggle_bar_two" />
                                        <span className="toggle_bar_three" />
                                    </button>
                                </div>
                                <div className="form">
                                    <form action="#" method="post" id="forSm">
                                        <input type="search" name="searchBar" id="searchPlayers" placeholder="Search Players" required="required" />
                                        <button type="submit">
                                            <i className="flaticon-loupe" />
                                        </button>
                                    </form>
                                    <a href="javascript:void(0)" className="search_toggle d-block d-md-none">
                                        <i className="flaticon-loupe" />
                                    </a>
                                </div>
                            </div>
                            <div className="user_bar d-flex align-items-center justify-content-end">
                                <div className="search_wrapper">
                                    <a href="javascript:void(0)" className="search_sm d-none">
                                        <i className="flaticon-loupe d-flex align-items-center" />
                                    </a>
                                </div>
                                <div className="dollar_wrapper">
                                    <a href="#">$500.00</a>
                                </div>
                                <div className="wallet_wrapper">
                                    <a href="#">
                                        <i className="flaticon-wallet-filled-money-tool" />
                                    </a>
                                </div>
                                <div className="notification_wrapper">
                                    <a href="#">
                                        <i className="flaticon-bell" />
                                    </a>
                                </div>
                                <div className="profile_wrapper d-flex align-items-center">
                                    <div className="img_wrapper">
                                        <a href="#">
                                            <img src="assets/images/user/profile-sm.png" alt="Profile Picture" />
                                        </a>
                                    </div>
                                    <div className="drop">
                                        <a href="javascript:void(0)" className="profile_link disable">Ed Walsh <i className="fas fa-caret-down" /></a>
                                        <div className="drop_content">
                                            <a href="user-about">Profile</a>
                                            <a href="#">Settings</a>
                                            <a href="#">Log Out</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*top bar*/}
                    {/*main content*/}
                    <div className="container-fluid main_content">
                        <div className="row d-flex flex-wrap">
                            <div className="col-xl-9 d-flex flex-column">
                                <div className="inner_left">
                                    <div className="profile_cover_wrapper">
                                        <div className="cover_wrapper d-flex align-items-end" style={{ backgroundImage: 'url("assets/images/profile/profile_bg.png")' }}>
                                            <div className="profile_wrapper d-flex align-items-center align-items-md-start">
                                                <div className="img_wrapper">
                                                    <a href="user-about">
                                                        <img src="assets/images/profile/profile.png" alt="Profile Picture" />
                                                    </a>
                                                </div>
                                                <div className="info_wrapper">
                                                    <a href="user-about">Stephen Curry</a>
                                                    <p>Golden State Warriors</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="price_info_wrapper">
                                            <div className="hst sta">
                                                <div className="row d-flex align-items-center">
                                                    <div className="col-sm text-center shares">
                                                        <h4><i className="fas fa-dollar-sign" /> 0.00 <span>(0 Shares)</span></h4>
                                                        <p>Total Value</p>
                                                    </div>
                                                    <div className="col-sm text-center price">
                                                        <h4><i className="fas fa-dollar-sign" /> 1.06</h4>
                                                        <p>Current Price</p>
                                                    </div>
                                                    <div className="col-sm text-center change">
                                                        <h4><i className="fas fa-dollar-sign" /> 0.21 (11%) <span className="fas fa-sort-up" /></h4>
                                                        <p>24H Change</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="range_wrapper">
                                        <div className="btns text-center">
                                            <button className="btn trd_tab activeb" data-tab="buy">BUY SHARES</button>
                                            <button className="btn trd_tab" data-tab="sell">SELL SHARES</button>
                                        </div>
                                        <div id="buy" style={{ backgroundImage: 'url("assets/images/profile/trade_bg.png")' }} className="trade_tab activet">
                                            <div className="content">
                                                <p className="tit">Amount of Shares to Buy</p>
                                                <div className="wrap text-center">
                                                    <div className="rangee_wrapper d-inline-flex align-items-center">
                                                        <div className="minus d-flex align-items-center justify-content-center">
                                                            <i className="fas fa-minus" />
                                                        </div>
                                                        <div className="number d-flex align-items-center justify-content-center">
                                                            <p>10</p>
                                                        </div>
                                                        <div className="plus d-flex align-items-center justify-content-center">
                                                            <i className="fas fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="txt_wrapper text-center">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="sha">10 Shares * $1.85: </p>
                                                        <p className="val">$18.50</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="sha">2.5% Fee: </p>
                                                        <p className="val">$0.46</p>
                                                    </div>
                                                    <div className="tot d-flex align-items-center justify-content-between">
                                                        <p className="sha">Total: </p>
                                                        <p className="val">$18.96</p>
                                                    </div>
                                                    <a href="#">BUY SHARES NOW</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="sell" style={{ backgroundImage: 'url("assets/images/profile/trade_bg.png")' }} className="trade_tab">
                                            <div className="content">
                                                <p className="tit">Amount of Shares to Buy</p>
                                                <div className="wrap text-center">
                                                    <div className="rangee_wrapper d-inline-flex align-items-center">
                                                        <div className="minus d-flex align-items-center justify-content-center">
                                                            <i className="fas fa-minus" />
                                                        </div>
                                                        <div className="number d-flex align-items-center justify-content-center">
                                                            <p>10</p>
                                                        </div>
                                                        <div className="plus d-flex align-items-center justify-content-center">
                                                            <i className="fas fa-plus" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="txt_wrapper text-center">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="sha">10 Shares * $1.85: </p>
                                                        <p className="val">$18.50</p>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="sha">2.5% Fee: </p>
                                                        <p className="val">$0.46</p>
                                                    </div>
                                                    <div className="tot d-flex align-items-center justify-content-between">
                                                        <p className="sha">Total: </p>
                                                        <p className="val">$18.96</p>
                                                    </div>
                                                    <a href="#">BUY SHARES NOW</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 d-flex flex-column">
                                <div className="inner_right">
                                    <div className="view_wrapper d-flex align-items-center justify-content-between">
                                        <div className="text">
                                            <h5>Upcoming Games</h5>
                                        </div>
                                        <div className="link">
                                            <a href="league">VIEW ALL</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="game_wrapper2">
                                                <div className="game_header d-flex align-items-start justify-content-around">
                                                    <div className="left_col text-center">
                                                        <img src="assets/images/user/new_logo.png" alt="New York Team" />
                                                        <p>
                                                            <a href="league">New York Knicks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="assets/images/user/phoenix_logo.png" alt="Phoenix Team" />
                                                        <p>
                                                            <a href="league">Phoenix Suns</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="game_footer d-flex align-items-center justify-content-around">
                                                    <p className="date">April 14, 2021</p>
                                                    <p className="time">02:00 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="game_wrapper2">
                                                <div className="game_header d-flex align-items-start justify-content-around">
                                                    <div className="left_col text-center">
                                                        <img src="assets/images/user/atlanta_logo.png" alt="Atlanta Team" />
                                                        <p>
                                                            <a href="league">Atlanta Hawks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="assets/images/user/miami.png" alt="Miami Team" />
                                                        <p>
                                                            <a href="league">Miami Heat</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="game_footer d-flex align-items-center justify-content-around">
                                                    <p className="date">April 14, 2021</p>
                                                    <p className="time">02:00 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="game_wrapper2">
                                                <div className="game_header d-flex align-items-start justify-content-around">
                                                    <div className="left_col text-center">
                                                        <img src="assets/images/user/browns_logo.png" alt="Browns Team" />
                                                        <p>
                                                            <a href="league">Cleveland Browns</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="assets/images/user/baltimore_logo.png" alt="Ravens Team" />
                                                        <p>
                                                            <a href="league">Baltimore Ravens</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="game_footer d-flex align-items-center justify-content-around">
                                                    <p className="date">April 14, 2021</p>
                                                    <p className="time">02:00 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="game_wrapper2">
                                                <div className="game_header d-flex align-items-start justify-content-around">
                                                    <div className="left_col text-center">
                                                        <img src="assets/images/user/new_logo.png" alt="New York Team" />
                                                        <p>
                                                            <a href="league">New York Knicks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="assets/images/user/phoenix_logo.png" alt="Phoenix Team" />
                                                        <p>
                                                            <a href="league">Phoenix Suns</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="game_footer d-flex align-items-center justify-content-around">
                                                    <p className="date">April 14, 2021</p>
                                                    <p className="time">02:00 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="game_wrapper2">
                                                <div className="game_header d-flex align-items-start justify-content-around">
                                                    <div className="left_col text-center">
                                                        <img src="assets/images/user/atlanta_logo.png" alt="Atlanta Team" />
                                                        <p>
                                                            <a href="league">Atlanta Hawks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="assets/images/user/miami.png" alt="Miami Team" />
                                                        <p>
                                                            <a href="league">Miami Heat</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="game_footer d-flex align-items-center justify-content-around">
                                                    <p className="date">April 14, 2021</p>
                                                    <p className="time">02:00 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="game_wrapper2">
                                                <div className="game_header d-flex align-items-start justify-content-around">
                                                    <div className="left_col text-center">
                                                        <img src="assets/images/user/browns_logo.png" alt="Browns Team" />
                                                        <p>
                                                            <a href="league">Cleveland Browns</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="assets/images/user/baltimore_logo.png" alt="Ravens Team" />
                                                        <p>
                                                            <a href="league">Baltimore Ravens</a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="game_footer d-flex align-items-center justify-content-around">
                                                    <p className="date">April 14, 2021</p>
                                                    <p className="time">02:00 AM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-9">
                                <footer className="user_footer">
                                    <div className="container-fluid p-0">
                                        <div className="row footer_nav d-flex align-items-center">
                                            <div className="col-lg-7">
                                                <ul className="nav justify-content-center justify-content-sm-start">
                                                    <li className="nav-item">
                                                        <a className="nav-link ml-0" href="contact">CONTACT US</a>
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
                                                <p className="para">Copyright © 2021. Made with passion by <a href="https://themeforest.net/user/pixelaxis/portfolio">Pixelaxis</a>
                                                </p>
                                            </div>
                                            <div className="col-lg-5 text-center text-sm-start text-lg-end">
                                                <p className="para">All rights reserved</p>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                    {/*main content*/}
                </div>
                {/*body content*/}
            </div>
            {/*page wrapper end*/}
            {/*jquery-3.6.0 minified source*/}
            {/*bootstrap 5 minified bundle js source*/}
            {/*owl carousel-2.3.4 minified js source*/}
            {/*jquery waypoints minified source*/}
            {/*magnific popup-1.1.0 minified source*/}
            {/*counter up-1.0.0 minified js source*/}
            {/*jquery nice select minified source*/}
            {/*apexs chart minified js source*/}
            {/*apex chart customization js source*/}
            {/*wow animation js source*/}
            {/*custom js source*/}
        </div>
    )
}

export default Trade


