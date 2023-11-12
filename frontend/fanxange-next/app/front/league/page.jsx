'use client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'

const League = () => {
    return (
        <div>
            {/*page wrapper start*/}
            <div className="page_wrapper">
                {/*left sidebar*/}
                <div className="sidebar">
                    <div className="brand_wrapper text-center d-flex align-items-center justify-content-around">
                        <a href="index" className="brand">
                            {/*=;===logo start====*/}
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
                                <a href="user-about" className="profile">
                                    {/*====small profile picture start====*/}
                                    <img src="/assets/images/user/profile-sm.png" alt="Profile Picture" />
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
                                <a href="league" className="nav-link d-flex align-items-center active">
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
                                        <a href="user-about">
                                            <img src="/assets/images/user/profile-sm.png" alt="Profile Picture" />
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
                                    <div className="league_cover_wrapper">
                                        <div className="league_info" style={{ backgroundImage: 'url("/assets/images/league/cover_img.png")' }}>
                                            <p>Trading</p>
                                            <h1 className="name">
                                                NBA Players
                                            </h1>
                                        </div>
                                        <div className="players_tab_wrapper">
                                            <div className="tab_btn_wrapper text-center">
                                                <button className="btn tab_btnp activ" data-tab="best">Best</button>
                                                <button className="btn tab_btnp" data-tab="worst">Worst</button>
                                                <button className="btn tab_btnp" data-tab="recent">Recent</button>
                                            </div>
                                            <div className="player_search_tab_wrapper">
                                                <form action="#" method="post">
                                                    <input type="text" className="form-control" aria-describedby="playerSearch" name="playerSearch" id="playerSearch" required="required" placeholder="Search Players" />
                                                    <button type="submit" className="btn btn-primary d-flex align-items-center"><i className="fab fa-sistrix" /> Search</button>
                                                </form>
                                            </div>
                                            <div id="best" className="player_search_tabs activ">
                                                <div className="players_responsive_table_wrapper">
                                                    <table className="table">
                                                        <tbody><tr>
                                                            <td className="profile_info">
                                                                <div className="d-flex align-items-center justify-content-start">
                                                                    <div className="wrapper">
                                                                        <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                            <img src="/assets/images/player_search/avatar_1.png" alt="Player One" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="player_name">
                                                                        <a href="player-profile">Luguentz Dort</a>
                                                                        <p>Oklahoma City Thunder</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="price_range">
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <div className="price">
                                                                        <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                        <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                    </div>
                                                                    <div id="profile_chart_one" className="charts">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="sell_buy">
                                                                <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                    <a href="trade" className="btn btn-primary">SELL</a>
                                                                    <a href="trade" className="btn btn-primary">BUY</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_2.png" alt="Player Two" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Naji Marshall</a>
                                                                            <p>New Orleans Pelicans</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_two" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_3.png" alt="Player Three" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Adam Thielen</a>
                                                                            <p>Minnesota Vikings</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_three" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_4.png" alt="Player Four" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Noah Fant</a>
                                                                            <p>Denver Bronchos</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_four" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_5.png" alt="Player Five" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Russell Cage</a>
                                                                            <p>Atlanta Falcons</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_five" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_6.png" alt="Player Six" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Don Doyle</a>
                                                                            <p>Los Angeles Lakers</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_six" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_1.png" alt="Player One" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Luguentz Dort</a>
                                                                            <p>Oklahoma City Thunder</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_seven" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_2.png" alt="Player Two" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Naji Marshall</a>
                                                                            <p>New Orleans Pelicans</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_eight" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_3.png" alt="Player Three" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Adam Thielen</a>
                                                                            <p>Minnesota Vikings</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_nine" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_4.png" alt="Player Four" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Noah Fant</a>
                                                                            <p>Denver Bronchos</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_ten" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                </div>
                                                <div className="show_wrapper text-center">
                                                    <a href="#">View More</a>
                                                </div>
                                            </div>
                                            <div id="worst" className="player_search_tabs">
                                                <div className="players_responsive_table_wrapper">
                                                    <table className="table">
                                                        <tbody><tr>
                                                            <td className="profile_info">
                                                                <div className="d-flex align-items-center justify-content-start">
                                                                    <div className="wrapper">
                                                                        <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                            <img src="/assets/images/player_search/avatar_1.png" alt="Player One" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="player_name">
                                                                        <a href="player-profile">Luguentz Dort</a>
                                                                        <p>Oklahoma City Thunder</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="price_range">
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <div className="price">
                                                                        <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                        <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                    </div>
                                                                    <div id="profile_chart_onew" className="charts">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="sell_buy">
                                                                <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                    <a href="trade" className="btn btn-primary">SELL</a>
                                                                    <a href="trade" className="btn btn-primary">BUY</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_2.png" alt="Player Two" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Naji Marshall</a>
                                                                            <p>New Orleans Pelicans</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_twow" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_3.png" alt="Player Three" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Adam Thielen</a>
                                                                            <p>Minnesota Vikings</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_threew" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_4.png" alt="Player Four" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Noah Fant</a>
                                                                            <p>Denver Bronchos</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_fourw" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_5.png" alt="Player Five" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Russell Cage</a>
                                                                            <p>Atlanta Falcons</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_fivew" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_6.png" alt="Player Six" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Don Doyle</a>
                                                                            <p>Los Angeles Lakers</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_sixw" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_1.png" alt="Player One" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Luguentz Dort</a>
                                                                            <p>Oklahoma City Thunder</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_sevenw" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_2.png" alt="Player Two" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Naji Marshall</a>
                                                                            <p>New Orleans Pelicans</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_eightw" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_3.png" alt="Player Three" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Adam Thielen</a>
                                                                            <p>Minnesota Vikings</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_ninew" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_4.png" alt="Player Four" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Noah Fant</a>
                                                                            <p>Denver Bronchos</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_tenw" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                </div>
                                                <div className="show_wrapper text-center">
                                                    <a href="#">View More</a>
                                                </div>
                                            </div>
                                            <div id="recent" className="player_search_tabs">
                                                <div className="players_responsive_table_wrapper">
                                                    <table className="table">
                                                        <tbody><tr>
                                                            <td className="profile_info">
                                                                <div className="d-flex align-items-center justify-content-start">
                                                                    <div className="wrapper">
                                                                        <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                            <img src="/assets/images/player_search/avatar_1.png" alt="Player One" />
                                                                        </a>
                                                                    </div>
                                                                    <div className="player_name">
                                                                        <a href="player-profile">Luguentz Dort</a>
                                                                        <p>Oklahoma City Thunder</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="price_range">
                                                                <div className="d-flex align-items-center justify-content-center">
                                                                    <div className="price">
                                                                        <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                        <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                    </div>
                                                                    <div id="profile_chart_oner" className="charts">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="sell_buy">
                                                                <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                    <a href="trade" className="btn btn-primary">SELL</a>
                                                                    <a href="trade" className="btn btn-primary">BUY</a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_2.png" alt="Player Two" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Naji Marshall</a>
                                                                            <p>New Orleans Pelicans</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_twor" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_3.png" alt="Player Three" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Adam Thielen</a>
                                                                            <p>Minnesota Vikings</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_threer" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_4.png" alt="Player Four" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Noah Fant</a>
                                                                            <p>Denver Bronchos</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_fourr" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_5.png" alt="Player Five" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Russell Cage</a>
                                                                            <p>Atlanta Falcons</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_fiver" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_6.png" alt="Player Six" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Don Doyle</a>
                                                                            <p>Los Angeles Lakers</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_sixr" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_1.png" alt="Player One" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Luguentz Dort</a>
                                                                            <p>Oklahoma City Thunder</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_sevenr" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_2.png" alt="Player Two" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Naji Marshall</a>
                                                                            <p>New Orleans Pelicans</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_eightrr" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_3.png" alt="Player Three" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Adam Thielen</a>
                                                                            <p>Minnesota Vikings</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_niner" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="profile_info">
                                                                    <div className="d-flex align-items-center justify-content-start">
                                                                        <div className="wrapper">
                                                                            <a href="player-profile" className="d-flex align-items-end justify-content-center">
                                                                                <img src="/assets/images/player_search/avatar_4.png" alt="Player Four" />
                                                                            </a>
                                                                        </div>
                                                                        <div className="player_name">
                                                                            <a href="player-profile">Noah Fant</a>
                                                                            <p>Denver Bronchos</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="price_range">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <div className="price">
                                                                            <p><i className="fas fa-dollar-sign" /> 3.91</p>
                                                                            <p>+8.12 <i className="fas fa-caret-up" /></p>
                                                                        </div>
                                                                        <div id="profile_chart_tenr" className="charts">
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td className="sell_buy">
                                                                    <div className="btn_wrapper d-flex align-items-center  justify-content-end">
                                                                        <a href="trade" className="btn btn-primary">SELL</a>
                                                                        <a href="trade" className="btn btn-primary">BUY</a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                </div>
                                                <div className="show_wrapper text-center">
                                                    <a href="#">View More</a>
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
                                            <a href="#">VIEW ALL</a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="inner col-sm-6 col-md-6 col-lg-4 col-xl-12">
                                            <div className="game_wrapper2">
                                                <div className="game_header d-flex align-items-start justify-content-around">
                                                    <div className="left_col text-center">
                                                        <img src="/assets/images/user/new_logo.png" alt="New York Team" />
                                                        <p>
                                                            <a href="league">New York Knicks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/phoenix_logo.png" alt="Phoenix Team" />
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
                                                        <img src="/assets/images/user/atlanta_logo.png" alt="Atlanta Team" />
                                                        <p>
                                                            <a href="league">Atlanta Hawks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/miami.png" alt="Miami Team" />
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
                                                        <img src="/assets/images/user/browns_logo.png" alt="Browns Team" />
                                                        <p>
                                                            <a href="league">Cleveland Browns</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/baltimore_logo.png" alt="Ravens Team" />
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
                                                        <img src="/assets/images/user/new_logo.png" alt="New York Team" />
                                                        <p>
                                                            <a href="league">New York Knicks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/phoenix_logo.png" alt="Phoenix Team" />
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
                                                        <img src="/assets/images/user/atlanta_logo.png" alt="Atlanta Team" />
                                                        <p>
                                                            <a href="league">Atlanta Hawks</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/miami.png" alt="Miami Team" />
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
                                                        <img src="/assets/images/user/browns_logo.png" alt="Browns Team" />
                                                        <p>
                                                            <a href="league">Cleveland Browns</a>
                                                        </p>
                                                    </div>
                                                    <div className="middle_col d-flex align-items-start text-center">
                                                        <img src="/assets/images/user/vs.png" alt="Versus" />
                                                    </div>
                                                    <div className="right_col text-center">
                                                        <img src="/assets/images/user/baltimore_logo.png" alt="Ravens Team" />
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

export default League


