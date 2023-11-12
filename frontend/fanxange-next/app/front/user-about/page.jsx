'use client'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeOptions from '../DComponents/TheameOption';
import React from 'react'

const UserAbout = () => {
    return (
        <div>
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
                                <a href="user-about " className="nav-link d-flex align-items-center active">
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
                                <a href="affiliate " className="nav-link d-flex align-items-center">
                                    <i className="flaticon-affiliate" /> Affiliate Program
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="rules " className="nav-link d-flex align-items-center">
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
                        <div class="right_col">
                            <div class="switch_wrapper">
                                <button class="btn switcher" id="light" title="Switch to Light Theme">
                                    <i class="fas fa-star-and-crescent"></i>
                                </button>
                                <button class="btn switcher" id="dark" title="Switch to Dark Theme">
                                    <i class="fas fa-adjust"></i>
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
                                    <div className="cover_img d-flex align-items-end align-items-md-end" style={{ backgroundImage: 'url("/assets/images/user/illustration.png")' }}>
                                        <div className="profile_lg_wrapper d-flex align-items-center align-items-md-end">
                                            <div className="profile_content d-flex align-items-center justify-content-center">
                                                <a href="user-about ">
                                                    <img src="/assets/images/user/profile_lg.png" alt="Profile Picture" />
                                                </a>
                                                <span className="d-flex align-items-center justify-content-center">12</span>
                                            </div>
                                            <div className="profile_info">
                                                <p>Poland</p>
                                                <a href="user-about ">ED WALSH</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_info_wrapper">
                                        <div className="row tag_icon_wrapper d-flex align-items-center justify-content-between">
                                            <div className="col-sm-7 tag_icon text-center text-sm-start">
                                                <a href="league " className="d-inline-flex align-items-center justify-content-center badge">
                                                    <img src="/assets/images/user/badge.png" alt="Badge" />
                                                </a>
                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                    <i className="flaticon-basketball-ball-variant" />
                                                </a>
                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                    <i className="flaticon-rugby" />
                                                </a>
                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                    <i className="flaticon-baseball-ball-1" />
                                                </a>
                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                    <i className="flaticon-ice-hockey" />
                                                </a>
                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                    <i className="flaticon-football" />
                                                </a>
                                            </div>
                                            <div className="col-sm-5 follow_wrapper d-flex align-items-center justify-content-between justify-content-sm-around">
                                                <div className="follower d-flex align-items-center justify-content-between">
                                                    <div className="icon">
                                                        <i className="flaticon-user-profile" />
                                                    </div>
                                                    <div className="amount">
                                                        <a href="#followers">2,239</a>
                                                        <p>FOLLOWERS</p>
                                                    </div>
                                                </div>
                                                <div className="following d-flex align-items-center justify-content-between">
                                                    <div className="icon">
                                                        <i className="flaticon-user-profile" />
                                                    </div>
                                                    <div className="amount">
                                                        <a href="#followers">5,339</a>
                                                        <p>FOLLOWING</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab_wrapper">
                                        <div className="row tab_btn_row d-flex align-items-center justify-content-between">
                                            <div className="tab_btn_wrapper col-sm-8 order-last order-sm-first text-center text-sm-start">
                                                <button className="btn tab_btn active" data-tab="about">About</button>
                                                <div className="f_drop">
                                                    <button className="btn dr_btn">Followers <i className="fas fa-sort-down" /></button>
                                                    <div className="f_con">
                                                        <button className="btn tab_btn" data-tab="followers">Layout One</button>
                                                        <button className="btn tab_btn" data-tab="followers2">Layout Two</button>
                                                    </div>
                                                </div>
                                                <button className="btn tab_btn" data-tab="stats">Stats</button>
                                            </div>
                                            <div className="social_wrapper col-sm-4 text-center text-sm-end">
                                                <a href="#" className="fb d-inline-flex align-items-center justify-content-center">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                                <a href="#" className="tw d-inline-flex align-items-center justify-content-center">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                                <a href="#" className="ins d-inline-flex align-items-center justify-content-center">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                        <div id="about" className="profile_tab active">
                                            <h3>About</h3>
                                            <p className="para">Praesent enim felis, sagittis ut mollis a, sodales a lacus.
                                                Suspendisse potenti. Etiam a felis urna. Pellentesque nec urna sed dui vulputate
                                                blandit tincidunt at risus. Morbi erat ligula, venenatis et tempus a, eleifend
                                                commodo ipsum. Phasellus porttitor egestas interdum. Donec quis lacinia ante.
                                            </p>
                                            <ul>
                                                <li>
                                                    <i className="fas fa-angle-right" /> Vestibulum rutrum tortor eu lobortis
                                                    fringilla, Pha.sellus mollis rhoncus nisl eget finibus.
                                                </li>
                                                <li>
                                                    <i className="fas fa-angle-right" /> Maecenas eleifend sagittis varius. Etiam
                                                    erat nisl.
                                                </li>
                                                <li>
                                                    <i className="fas fa-angle-right" /> Etiam a felis urna. Pellentesque nec urna
                                                    sed dui vulputate blandit tincidunt at risus.
                                                </li>
                                            </ul>
                                            <div className="revenue_chart_wrapper">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="left_col">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <h4>Revenue Statistics</h4>
                                                                <div className="dropdown">
                                                                    <a className="btn btn-secondary dropdown-toggle d-flex align-items-center" href="#" role="button" id="month" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Current Month <i className="fas fa-chevron-down" />
                                                                    </a>
                                                                    <ul className="dropdown-menu" aria-labelledby="month">
                                                                        <li><a className="dropdown-item" href="#">Jan</a></li>
                                                                        <li><a className="dropdown-item" href="#">Feb</a></li>
                                                                        <li><a className="dropdown-item" href="#">Mar</a></li>
                                                                        <li><a className="dropdown-item" href="#">Apr</a></li>
                                                                        <li><a className="dropdown-item" href="#">May</a></li>
                                                                        <li><a className="dropdown-item" href="#">June</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="revenue_chart">
                                                                <div id="revenue">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="right_col">
                                                            <ul className="nav nav-fill">
                                                                <li className="nav-item">
                                                                    <a className="nav-link active chartHover" href="#">01M</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link chartHover" href="#">06M</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link chartHover" href="#">01Y</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link chartHover" href="#">ALL</a>
                                                                </li>
                                                            </ul>
                                                            <div className="income_chart_wrapper">
                                                                <h3 className="balance"><i className="fas fa-dollar-sign" /> 125952
                                                                </h3>
                                                                <p>Income</p>
                                                                <div id="incomeChart">
                                                                </div>
                                                            </div>
                                                            <div className="invest_chart_wrapper">
                                                                <h3 className="invest">65%</h3>
                                                                <p>Return on Investment</p>
                                                                <div id="investChart">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="followers" className="profile_tab">
                                            <div className="search_wrapper">
                                                <form action="#" method="post" id="searchFriend" className="search_wrapper d-md-flex align-items-center justify-content-between">
                                                    <div className="input_wrapper">
                                                        <input type="search" name="searchFriend" id="searchFriends" placeholder="Search Friends" required="required" />
                                                        <i className="flaticon-loupe" />
                                                    </div>
                                                    <div className="submit_wrapper">
                                                        <button type="submit" className="d-flex align-items-center" title="Find Your Friends">
                                                            <i className="fas fa-users" /> Find Friends
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="row followers_row_first">
                                                <div className="col-lg-6">
                                                    <div className="left_col">
                                                        <div className="d-sm-flex align-items-center justify-content-around">
                                                            <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                                                                <div className="profile_wrapper">
                                                                    <div className="profile_content">
                                                                        <a href="player-profile " className="profile">
                                                                            {/*====small profile picture start====*/}
                                                                            <img src="/assets/images/followers/gera.png" alt="Profile Picture" />
                                                                            {/*====small profile picture end====*/}
                                                                        </a>
                                                                        <span className="d-flex align-items-center justify-content-center">18</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info_wrapper text-center text-sm-start">
                                                                    <a href="player-profile " className="name">Gerard Cain</a>
                                                                    <p className="percentage">ROI 21%</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon_wrapper text-center text-sm-start">
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-basketball-ball-variant" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-rugby" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-baseball-ball-1" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-golf" />
                                                                </a>
                                                            </div>
                                                            <div className="follow_wrapper text-center text-sm-start">
                                                                <a href="#">Unfollow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="left_col">
                                                        <div className="d-sm-flex align-items-center justify-content-around">
                                                            <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                                                                <div className="profile_wrapper">
                                                                    <div className="profile_content">
                                                                        <a href="player-profile " className="profile">
                                                                            {/*====small profile picture start====*/}
                                                                            <img src="/assets/images/followers/eva.png" alt="Profile Picture" />
                                                                            {/*====small profile picture end====*/}
                                                                        </a>
                                                                        <span className="d-flex align-items-center justify-content-center">28</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info_wrapper text-center text-sm-start">
                                                                    <a href="player-profile " className="name">Eva Doyle</a>
                                                                    <p className="percentage">ROI 21%</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon_wrapper text-center text-sm-start">
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-basketball-ball-variant" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-rugby" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-baseball-ball-1" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-golf" />
                                                                </a>
                                                            </div>
                                                            <div className="follow_wrapper text-center text-sm-start">
                                                                <a href="league ">Unfollow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row followers_row_first">
                                                <div className="col-lg-6">
                                                    <div className="left_col">
                                                        <div className="d-sm-flex align-items-center justify-content-around">
                                                            <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                                                                <div className="profile_wrapper">
                                                                    <div className="profile_content">
                                                                        <a href="player-profile " className="profile">
                                                                            {/*====small profile picture start====*/}
                                                                            <img src="/assets/images/followers/greg.png" alt="Profile Picture" />
                                                                            {/*====small profile picture end====*/}
                                                                        </a>
                                                                        <span className="d-flex align-items-center justify-content-center">22</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info_wrapper text-center text-sm-start">
                                                                    <a href="player-profile " className="name">Greg Hardy</a>
                                                                    <p className="percentage">ROI 21%</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon_wrapper text-center text-sm-start">
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-basketball-ball-variant" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-rugby" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-baseball-ball-1" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-golf" />
                                                                </a>
                                                            </div>
                                                            <div className="follow_wrapper text-center text-sm-start">
                                                                <a href="#">Unfollow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="left_col">
                                                        <div className="d-sm-flex align-items-center justify-content-around">
                                                            <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                                                                <div className="profile_wrapper">
                                                                    <div className="profile_content">
                                                                        <a href="player-profile " className="profile">
                                                                            {/*====small profile picture start====*/}
                                                                            <img src="/assets/images/followers/wise.png" alt="Profile Picture" />
                                                                            {/*====small profile picture end====*/}
                                                                        </a>
                                                                        <span className="d-flex align-items-center justify-content-center">16</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info_wrapper text-center text-sm-start">
                                                                    <a href="player-profile " className="name">Horace Wise</a>
                                                                    <p className="percentage">ROI 21%</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon_wrapper text-center text-sm-start">
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-basketball-ball-variant" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-rugby" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-baseball-ball-1" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-golf" />
                                                                </a>
                                                            </div>
                                                            <div className="follow_wrapper text-center text-sm-start">
                                                                <a href="#">Unfollow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row followers_row_first">
                                                <div className="col-lg-6">
                                                    <div className="left_col">
                                                        <div className="d-sm-flex align-items-center justify-content-around">
                                                            <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                                                                <div className="profile_wrapper">
                                                                    <div className="profile_content">
                                                                        <a href="player-profile " className="profile">
                                                                            {/*====small profile picture start====*/}
                                                                            <img src="/assets/images/followers/boone.png" alt="Profile Picture" />
                                                                            {/*====small profile picture end====*/}
                                                                        </a>
                                                                        <span className="d-flex align-items-center justify-content-center">13</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info_wrapper text-center text-sm-start">
                                                                    <a href="player-profile " className="name">Willie Boone</a>
                                                                    <p className="percentage">ROI 21%</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon_wrapper text-center text-sm-start">
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-basketball-ball-variant" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-rugby" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-baseball-ball-1" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-golf" />
                                                                </a>
                                                            </div>
                                                            <div className="follow_wrapper text-center text-sm-start">
                                                                <a href="#">Unfollow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="left_col">
                                                        <div className="d-sm-flex align-items-center justify-content-around">
                                                            <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                                                                <div className="profile_wrapper">
                                                                    <div className="profile_content">
                                                                        <a href="player-profile " className="profile">
                                                                            {/*====small profile picture start====*/}
                                                                            <img src="/assets/images/followers/alyssa.png" alt="Profile Picture" />
                                                                            {/*====small profile picture end====*/}
                                                                        </a>
                                                                        <span className="d-flex align-items-center justify-content-center">19</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info_wrapper text-center text-sm-start">
                                                                    <a href="player-profile " className="name">Alyssa loyd</a>
                                                                    <p className="percentage">ROI 21%</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon_wrapper text-center text-sm-start">
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-basketball-ball-variant" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-rugby" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-baseball-ball-1" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-golf" />
                                                                </a>
                                                            </div>
                                                            <div className="follow_wrapper text-center text-sm-start">
                                                                <a href="#">Unfollow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row followers_row_first">
                                                <div className="col-lg-6">
                                                    <div className="left_col">
                                                        <div className="d-sm-flex align-items-center justify-content-around">
                                                            <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                                                                <div className="profile_wrapper">
                                                                    <div className="profile_content">
                                                                        <a href="player-profile " className="profile">
                                                                            {/*====small profile picture start====*/}
                                                                            <img src="/assets/images/followers/lionel.png" alt="Profile Picture" />
                                                                            {/*====small profile picture end====*/}
                                                                        </a>
                                                                        <span className="d-flex align-items-center justify-content-center">27</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info_wrapper text-center text-sm-start">
                                                                    <a href="player-profile " className="name">Lionel Moody</a>
                                                                    <p className="percentage">ROI 21%</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon_wrapper text-center text-sm-start">
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-basketball-ball-variant" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-rugby" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-baseball-ball-1" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-golf" />
                                                                </a>
                                                            </div>
                                                            <div className="follow_wrapper text-center text-sm-start">
                                                                <a href="#">Unfollow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="left_col">
                                                        <div className="d-sm-flex align-items-center justify-content-around">
                                                            <div className="friends_wrapper d-sm-flex align-items-center justify-content-between">
                                                                <div className="profile_wrapper">
                                                                    <div className="profile_content">
                                                                        <a href="player-profile " className="profile">
                                                                            {/*====small profile picture start====*/}
                                                                            <img src="/assets/images/followers/joanna.png" alt="Profile Picture" />
                                                                            {/*====small profile picture end====*/}
                                                                        </a>
                                                                        <span className="d-flex align-items-center justify-content-center">18</span>
                                                                    </div>
                                                                </div>
                                                                <div className="info_wrapper text-center text-sm-start">
                                                                    <a href="player-profile " className="name">Joanna Grey</a>
                                                                    <p className="percentage">ROI 21%</p>
                                                                </div>
                                                            </div>
                                                            <div className="icon_wrapper text-center text-sm-start">
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-basketball-ball-variant" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-rugby" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-baseball-ball-1" />
                                                                </a>
                                                                <a href="league " className="d-inline-flex align-items-center justify-content-center">
                                                                    <i className="flaticon-golf" />
                                                                </a>
                                                            </div>
                                                            <div className="follow_wrapper text-center text-sm-start">
                                                                <a href="#">Unfollow</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row followers_row_first">
                                            </div>
                                            <div className="show_wrapper text-center">
                                                <a href="#">View More</a>
                                            </div>
                                        </div>
                                        <div id="followers2" className="profile_tab">
                                            <div className="search_wrapper">
                                                <form action="#" method="post" id="searchFriend2" className="search_wrapper d-md-flex align-items-center justify-content-between">
                                                    <div className="input_wrapper">
                                                        <input type="search" name="searchFriend" id="searchFriends2" placeholder="Search Friends" required="required" />
                                                        <i className="flaticon-loupe" />
                                                    </div>
                                                    <div className="submit_wrapper">
                                                        <button type="submit" className="d-flex align-items-center" title="Find Your Friends">
                                                            <i className="fas fa-users" /> Find Friends
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="row followers_two_row">
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/kurt_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/kurt.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">KURT SHAW</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/dennis_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/dennis.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">DENNIS MEYER</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/lyle_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/lyle.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">LYLE REED</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/larry_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/larry.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">LARRY CHAVEZ</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row followers_two_row">
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/debra_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/debra.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">DEBRA YATES</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/megan_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/megan.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">MEGAN JENSEN</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/sam_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/sam.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">SAM GILBERT</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/elena_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/elena.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">ELLENA CANNON</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row followers_two_row">
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/gina_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/gina.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">GINA FLORES</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/abel_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/abel.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">ABEL WARREN</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/ollie_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/ollie.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">OLLIE FLOYD</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xxl-3">
                                                    <div className="followers_col">
                                                        <div className="member_wrapper">
                                                            <div className="bg_head">
                                                                <img src="/assets/images/followers/noel_bg.png" alt="Cover Image" />
                                                            </div>
                                                            <div className="profile_wrapper text-center">
                                                                <div className="profile_content">
                                                                    <a href="#" className="profile">
                                                                        {/*====small profile picture start====*/}
                                                                        <img src="/assets/images/followers/noel.png" alt="Profile Picture" />
                                                                        {/*====small profile picture end====*/}
                                                                    </a>
                                                                    <span className="d-flex align-items-center justify-content-center">18</span>
                                                                </div>
                                                                <h5 className="text-center">
                                                                    <a href="player-profile ">NOEL THOMAS</a>
                                                                </h5>
                                                            </div>
                                                            <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                                <div className="follower d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">2,239</a>
                                                                        <p>FOLLOWERS</p>
                                                                    </div>
                                                                </div>
                                                                <div className="following d-flex align-items-center justify-content-between">
                                                                    <div className="icon">
                                                                        <i className="flaticon-user-profile" />
                                                                    </div>
                                                                    <div className="amount">
                                                                        <a href="#">5,339</a>
                                                                        <p>FOLLOWING</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="follow_btn text-center">
                                                                <a href="#">FOLLOW</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="show_wrapper text-center">
                                                <a href="#">View More</a>
                                            </div>
                                        </div>
                                        <div id="stats" className="profile_tab">
                                            <div className="revenue_chart_wrapper">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <div className="left_col">
                                                            <div className="d-flex justify-content-between align-items-center">
                                                                <h4>Revenue Statistics</h4>
                                                                <div className="dropdown">
                                                                    <a className="btn btn-secondary dropdown-toggle d-flex align-items-center" href="#" role="button" id="monthDuplicate" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        Current Month <i className="fas fa-chevron-down" />
                                                                    </a>
                                                                    <ul className="dropdown-menu" aria-labelledby="monthDuplicate">
                                                                        <li><a className="dropdown-item" href="#">Jan</a></li>
                                                                        <li><a className="dropdown-item" href="#">Feb</a></li>
                                                                        <li><a className="dropdown-item" href="#">Mar</a></li>
                                                                        <li><a className="dropdown-item" href="#">Apr</a></li>
                                                                        <li><a className="dropdown-item" href="#">May</a></li>
                                                                        <li><a className="dropdown-item" href="#">June</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="revenue_chart">
                                                                <div id="revenueDuplicate">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="right_col">
                                                            <ul className="nav nav-fill">
                                                                <li className="nav-item">
                                                                    <a className="nav-link active chartHover" href="#">01M</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link chartHover" href="#">06M</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link chartHover" href="#">01Y</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link chartHover" href="#">ALL</a>
                                                                </li>
                                                            </ul>
                                                            <div className="income_chart_wrapper">
                                                                <h3 className="balance"><i className="fas fa-dollar-sign" /> 125952
                                                                </h3>
                                                                <p>Income</p>
                                                                <div id="incomeChartDuplicate">
                                                                </div>
                                                            </div>
                                                            <div className="invest_chart_wrapper">
                                                                <h3 className="invest">65%</h3>
                                                                <p>Return on Investment</p>
                                                                <div id="investChartDuplicate">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
                                            <h5>Top Investors</h5>
                                        </div>
                                        <div className="link">
                                            <a href="league ">VIEW ALL</a>
                                        </div>
                                    </div>
                                    <div className="row member_row">
                                        <div className="member_col col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="member_wrapper">
                                                <div className="bg_head">
                                                    <img src="/assets/images/user/side_bar_bg_one.png" alt="Sidebar Image" />
                                                </div>
                                                <div className="profile_wrapper text-center">
                                                    <div className="profile_content">
                                                        <a href="player-profile " className="profile">
                                                            {/*====small profile picture start====*/}
                                                            <img src="/assets/images/user/member_one.png" alt="Profile Picture" />
                                                            {/*====small profile picture end====*/}
                                                        </a>
                                                        <span className="d-flex align-items-center justify-content-center">18</span>
                                                    </div>
                                                    <h5 className="text-center">
                                                        <a href="player-profile ">RAUL QUINN</a>
                                                    </h5>
                                                </div>
                                                <div className="follow_wrapper d-flex align-items-center justify-content-around">
                                                    <div className="follower d-flex align-items-center justify-content-between">
                                                        <div className="icon">
                                                            <i className="flaticon-user-profile" />
                                                        </div>
                                                        <div className="amount">
                                                            <a href="user-about #followers">2,239</a>
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
                                                <div className="income_wrapper d-flex align-items-center justify-content-around">
                                                    <div className="income">
                                                        <p className="income_amount"><i className="fas fa-dollar-sign" />1259</p>
                                                        <span>Income</span>
                                                    </div>
                                                    <div className="percentage">
                                                        <p className="income_percent">40%</p>
                                                        <span>ROI</span>
                                                    </div>
                                                </div>
                                                <div className="follow_btn text-center">
                                                    <a href="#">FOLLOW</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="member_col col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="member_wrapper">
                                                <div className="bg_head">
                                                    <img src="/assets/images/user/side_bar_bg_two.png" alt="Sidebar Image" />
                                                </div>
                                                <div className="profile_wrapper text-center">
                                                    <div className="profile_content">
                                                        <a href="player-profile " className="profile">
                                                            {/*====small profile picture start====*/}
                                                            <img src="/assets/images/user/member_two.png" alt="Profile Picture" />
                                                            {/*====small profile picture end====*/}
                                                        </a>
                                                        <span className="d-flex align-items-center justify-content-center">24</span>
                                                    </div>
                                                    <h5 className="text-center">
                                                        <a href="player-profile ">MARRION CURRY</a>
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
                                                <div className="income_wrapper d-flex align-items-center justify-content-around">
                                                    <div className="income">
                                                        <p className="income_amount"><i className="fas fa-dollar-sign" />1259</p>
                                                        <span>Income</span>
                                                    </div>
                                                    <div className="percentage">
                                                        <p className="income_percent">40%</p>
                                                        <span>ROI</span>
                                                    </div>
                                                </div>
                                                <div className="follow_btn text-center">
                                                    <a href="#">FOLLOW</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="member_col col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="member_wrapper">
                                                <div className="bg_head">
                                                    <img src="/assets/images/user/side_bar_bg_three.png" alt="Sidebar Image" />
                                                </div>
                                                <div className="profile_wrapper text-center">
                                                    <div className="profile_content">
                                                        <a href="player-profile " className="profile">
                                                            {/*====small profile picture start====*/}
                                                            <img src="/assets/images/user/member_three.png" alt="Profile Picture" />
                                                            {/*====small profile picture end====*/}
                                                        </a>
                                                        <span className="d-flex align-items-center justify-content-center">22</span>
                                                    </div>
                                                    <h5 className="text-center">
                                                        <a href="player-profile ">HUBERT WEST</a>
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
                                                <div className="income_wrapper d-flex align-items-center justify-content-around">
                                                    <div className="income">
                                                        <p className="income_amount"><i className="fas fa-dollar-sign" />1259</p>
                                                        <span>Income</span>
                                                    </div>
                                                    <div className="percentage">
                                                        <p className="income_percent">40%</p>
                                                        <span>ROI</span>
                                                    </div>
                                                </div>
                                                <div className="follow_btn text-center">
                                                    <a href="#">FOLLOW</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="member_col col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="member_wrapper">
                                                <div className="bg_head">
                                                    <img src="/assets/images/user/side_bar_bg_four.png" alt="Sidebar Image" />
                                                </div>
                                                <div className="profile_wrapper text-center">
                                                    <div className="profile_content">
                                                        <a href="player-profile " className="profile">
                                                            {/*====small profile picture start====*/}
                                                            <img src="/assets/images/user/member_four.png" alt="Profile Picture" />
                                                            {/*====small profile picture end====*/}
                                                        </a>
                                                        <span className="d-flex align-items-center justify-content-center">27</span>
                                                    </div>
                                                    <h5 className="text-center">
                                                        <a href="player-profile ">BARRY HARPER</a>
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
                                                <div className="income_wrapper d-flex align-items-center justify-content-around">
                                                    <div className="income">
                                                        <p className="income_amount"><i className="fas fa-dollar-sign" />1259</p>
                                                        <span>Income</span>
                                                    </div>
                                                    <div className="percentage">
                                                        <p className="income_percent">40%</p>
                                                        <span>ROI</span>
                                                    </div>
                                                </div>
                                                <div className="follow_btn text-center">
                                                    <a href="#">FOLLOW</a>
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
            {/*wow animation js source*/}
            {/*custom js source*/}
        </div>
    )
}

export default UserAbout

