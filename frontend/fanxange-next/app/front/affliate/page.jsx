'use client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeOptions from '../DComponents/TheameOption';
import React from 'react'

const Affiliate = () => {
    return (
        <div className='cs'>
            {/*page wrapper start*/}
            <div className="page_wrapper">
                {/*left sidebar*/}
                <div className="sidebar">
                    <div className="brand_wrapper text-center d-flex align-items-center justify-content-around">
                        <a href="dashboard " className="brand">
                            {/*====logo start====*/}
                            <img src="/assets/images/logo.png" alt="Fanxange Logo" id="logo" />
                            {/*====logo end====*/}
                        </a>
                        <div className="close_sidenav d-xxl-none" title="Close Side Bar">
                            <i className="flaticon-back" />
                        </div>
                    </div>
                    <div className="user_wrapper">
                        <div className="profile_wrapper text-center">
                            <div className="profile_content">
                                <a href="user-about " className="profile">
                                    {/*====small profile picture start====*/}
                                    <img src="/assets/images/user/profile-sm.png" alt="Profile Picture" />
                                    {/*====small profile picture end====*/}
                                </a>
                                <span className="d-flex align-items-center justify-content-center">12</span>
                            </div>
                            <h5 className="text-center">
                                <a href="user-about ">ED WALSH</a>
                            </h5>
                        </div>
                        <div className="follow_wrapper d-flex align-items-center justify-content-around">
                            <div className="follower d-flex align-items-center justify-content-between">
                                <div className="icon">
                                    <i className="flaticon-user-profile" />
                                </div>
                                <div className="amount">
                                    <a href="user-about ">2,239</a>
                                    <p>FOLLOWERS</p>
                                </div>
                            </div>
                            <div className="following d-flex align-items-center justify-content-between">
                                <div className="icon">
                                    <i className="flaticon-user-profile" />
                                </div>
                                <div className="amount">
                                    <a href="user-about ">5,339</a>
                                    <p>FOLLOWING</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio_wrapper">
                        <ul className="nav flex-column portfolio">
                            <li className="nav-item">
                                <a href="user-portfolio " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-briefcase" /> My Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="user-about " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-user" /> About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="trading_wrapper">
                        <h5>Trading</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="league " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-basketball-ball-variant" /> NBA
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-rugby" /> NFL
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-baseball-ball-1" /> MLB
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-ice-hockey" /> NHL
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-football" /> Soccer
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-golf" /> Golf
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="league " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-swords" /> ESports
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="affiliate_wrapper">
                        <ul className="nav flex-column affiliate">
                            <li className="nav-item">
                                <a href="affiliate " className="nav-link d-flex align-items-center active">
                                    <i className="flaticon-affiliate" /> Affiliate Program
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="contact " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-chat" /> Support
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="rules " className="nav-link d-flex align-items-center">
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
                                        <a href="user-about ">
                                            <img src="/assets/images/user/profile-sm.png" alt="Profile Picture" />
                                        </a>
                                    </div>
                                    <div className="drop">
                                        <a href="javascript:void(0)" className="profile_link disable">Ed Walsh <i className="fas fa-caret-down" /></a>
                                        <div className="drop_content">
                                            <a href="user-about ">Profile</a>
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
                                    <div className="affiliate_cover" style={{ backgroundImage: 'url("/assets/images/followers/affiliate_bg.png")' }}>
                                        <div className="row">
                                            <div className="col-8 offset-4 col-sm-4 offset-sm-8 col-xxl-3 offset-xxl-9">
                                                <h1>REFER A FRIEND</h1>
                                                <p>EARN $50 REFERRAL COMMISION</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="copy_wrapper">
                                        <div className="affiliate_link">
                                            <div className="link_wrapper d-md-flex align-items-center justify-content-between text-center text-md-start">
                                                <div className="left d-md-flex align-items-center text-center text-md-start">
                                                    <div className="link_icon d-flex align-items-center justify-content-center">
                                                        <i className="fas fa-link" />
                                                    </div>
                                                    <div className="link_text">
                                                        <p>Refarrel Link: <span>https://www.Fanxange.com?ardf0u4803</span></p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button className="btn">COPY LINK</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="affi_income text-center">
                                        <div className="wrapper d-md-flex align-items-center justify-content-center">
                                            <div className="reffarel d-flex align-items-center justify-content-start justify-content-md-center">
                                                <div className="left">
                                                    <img src="/assets/images/profile/referral.png" alt="Total Refarrel" />
                                                </div>
                                                <div className="right text-start">
                                                    <h3>$2956.00</h3>
                                                    <p>Earned Referral</p>
                                                </div>
                                            </div>
                                            <div className="reffarel d-flex align-items-center justify-content-start justify-content-md-center">
                                                <div className="left">
                                                    <img src="/assets/images/profile/last_month.png" alt="Last Month" />
                                                </div>
                                                <div className="right text-start">
                                                    <h3>$208.70</h3>
                                                    <p>Last Month</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="date_wrapper">
                                        <div className="d-sm-flex align-items-center justify-content-between">
                                            <div className="left">
                                                <h3>Your Partners:</h3>
                                            </div>
                                            <div className="right_date d-flex align-items-center justify-content-between">
                                                <div className="left">
                                                    <p>15/08/2020 - 25/01/2021</p>
                                                </div>
                                                <div className="right">
                                                    <i className="fas fa-calendar-alt" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="date_table">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>DATE</th>
                                                        <th>LEVEL</th>
                                                        <th>USERNAME</th>
                                                        <th>EMAIL</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>16 <br />
                                                            <span>APR</span>
                                                        </td>
                                                        <td>Level01</td>
                                                        <td>Maxine24</td>
                                                        <td><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="c78aa6bfaea9a2f5f387a0aaa6aeabe9a4a8aa">[email&nbsp;protected]</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>16 <br />
                                                            <span>APR</span>
                                                        </td>
                                                        <td>Level01</td>
                                                        <td>Maxine24</td>
                                                        <td><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="2469455c4d4a411610644349454d480a474b49">[email&nbsp;protected]</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>16 <br />
                                                            <span>APR</span>
                                                        </td>
                                                        <td>Level01</td>
                                                        <td>Maxine24</td>
                                                        <td><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="034e627b6a6d66313743646e626a6f2d606c6e">[email&nbsp;protected]</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>16 <br />
                                                            <span>APR</span>
                                                        </td>
                                                        <td>Level01</td>
                                                        <td>Maxine24</td>
                                                        <td><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="0a476b7263646f383e4a6d676b636624696567">[email&nbsp;protected]</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>16 <br />
                                                            <span>APR</span>
                                                        </td>
                                                        <td>Level01</td>
                                                        <td>Maxine24</td>
                                                        <td><a href="https://pixner.net/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a3eec2dbcacdc69197e3c4cec2cacf8dc0ccce">[email&nbsp;protected]</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="show_friends text-center">
                                            <a href="#">Show More <i className="fas fa-angle-down" /></a>
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
                                            <a href="league ">VIEW ALL</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="game_wrapper2">
                                                <div className="game_header d-flex align-items-start justify-content-around">
                                                    <div className="left_col text-center">
                                                        <img src="/assets/images/user/new_logo.png" alt="New York Team" />
                                                        <p>
                                                            <a href="league ">New York Knicks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/phoenix_logo.png" alt="Phoenix Team" />
                                                        <p>
                                                            <a href="league ">Phoenix Suns</a>
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
                                                        <img src="/assets/images/user/atlanta_logo.png" alt="Atlanta Team" />
                                                        <p>
                                                            <a href="league ">Atlanta Hawks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/miami.png" alt="Miami Team" />
                                                        <p>
                                                            <a href="league ">Miami Heat</a>
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
                                                        <img src="/assets/images/user/browns_logo.png" alt="Browns Team" />
                                                        <p>
                                                            <a href="league ">Cleveland Browns</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/baltimore_logo.png" alt="Ravens Team" />
                                                        <p>
                                                            <a href="league ">Baltimore Ravens</a>
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
                                                        <img src="/assets/images/user/new_logo.png" alt="New York Team" />
                                                        <p>
                                                            <a href="league ">New York Knicks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/phoenix_logo.png" alt="Phoenix Team" />
                                                        <p>
                                                            <a href="league ">Phoenix Suns</a>
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
                                                        <img src="/assets/images/user/atlanta_logo.png" alt="Atlanta Team" />
                                                        <p>
                                                            <a href="league ">Atlanta Hawks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/miami.png" alt="Miami Team" />
                                                        <p>
                                                            <a href="league ">Miami Heat</a>
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
                                                        <img src="/assets/images/user/browns_logo.png" alt="Browns Team" />
                                                        <p>
                                                            <a href="league ">Cleveland Browns</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/baltimore_logo.png" alt="Ravens Team" />
                                                        <p>
                                                            <a href="league ">Baltimore Ravens</a>
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
        </div>)
}

export default Affiliate
