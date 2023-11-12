"use client"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeOptions from "../../DComponents/TheameOption"
export default function Faq() {
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
                                    <a className="nav-link active" href="faq ">FAQ</a>
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
            <section className="faq_banner_wrapper">
                <div className="container">
                    <h1 className="hero_title">FAQs</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="dashboard ">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                        </ol>
                    </nav>
                </div>
            </section>
            {/*====banner section end====*/}
            {/* theme option start */}
            <ThemeOptions />
            {/* theme option end */}
            {/*====faq section start====*/}
            <section className="faq_section_wrapper">
                <div className="container">
                    <div className="accordion_wrapper">
                        <div className="title_wrapper text-center">
                            <h1 className="section_title">Frequently asked questions</h1>
                            <p className="section_info">If you haven't found an answer to your question, <a href="contact ">contact us</a></p>
                        </div>
                    </div>
                    <div className="row faq_row sec_row">
                        <div className="col-lg-2">
                            <div className="faq_img">
                                <img src="assets/images/faq/general.png" alt="General Questions" />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="faq">
                                <h3>General</h3>
                                {/*general accordion items start*/}
                                <div className="accordion" id="accordionTwo">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> How do I close my account?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionTwo">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> Who can play Fanxange?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionTwo">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> Can I change my Fanxange
                                                Username?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionTwo">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What if I forget my
                                                password?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionTwo">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> Is my money safe?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionTwo">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*general accordion items end*/}
                            </div>
                        </div>
                    </div>
                    <div className="row faq_row sec_row th_row">
                        <div className="col-lg-2">
                            <div className="faq_img">
                                <img src="assets/images/faq/sports.png" alt="General Questions" />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="faq">
                                <h3>Sports</h3>
                                {/*sports accordion items start*/}
                                <div className="accordion" id="accordionThree">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="sportsHeadingOne">
                                            <button className="accordion-button d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#sportsCollapseOne" aria-expanded="true" aria-controls="sportsCollapseOne">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What is "trading" on
                                                PlayerTrader?
                                            </button>
                                        </h2>
                                        <div id="sportsCollapseOne" className="accordion-collapse collapse show" aria-labelledby="sportsHeadingOne" data-bs-parent="#accordionThree">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="sportsHeadingTwo">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#sportsCollapseTwo" aria-expanded="true" aria-controls="sportsCollapseTwo">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What drives a player's
                                                stock?
                                            </button>
                                        </h2>
                                        <div id="sportsCollapseTwo" className="accordion-collapse collapse" aria-labelledby="sportsHeadingTwo" data-bs-parent="#accordionThree">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="sportsHeadingThree">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#sportsCollapseThree" aria-expanded="true" aria-controls="sportsCollapseThree">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What sports can I trade
                                                players from?
                                            </button>
                                        </h2>
                                        <div id="sportsCollapseThree" className="accordion-collapse collapse" aria-labelledby="sportsHeadingThree" data-bs-parent="#accordionThree">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="sportsHeadingFour">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#sportsCollapseFour" aria-expanded="true" aria-controls="sportsCollapseFour">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> What is my reward for
                                                reffering a friend?
                                            </button>
                                        </h2>
                                        <div id="sportsCollapseFour" className="accordion-collapse collapse" aria-labelledby="sportsHeadingFour" data-bs-parent="#accordionThree">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="sportsHeadingFive">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#sportsCollapseFive" aria-expanded="true" aria-controls="sportsCollapseFive">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> How do I make a deposit?
                                            </button>
                                        </h2>
                                        <div id="sportsCollapseFive" className="accordion-collapse collapse" aria-labelledby="sportsHeadingFive" data-bs-parent="#accordionThree">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="sportsHeadingSix">
                                            <button className="accordion-button collapsed d-flex align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#sportsCollapseSix" aria-expanded="true" aria-controls="sportsCollapseSix">
                                                <img src="assets/images/faq/ac-icon.png" alt="Icon" /> Is my money safe?
                                            </button>
                                        </h2>
                                        <div id="sportsCollapseSix" className="accordion-collapse collapse" aria-labelledby="sportsHeadingSix" data-bs-parent="#accordionThree">
                                            <div className="accordion-body">
                                                <p className="para">"Trading" refers to the buying and selling of shares of players
                                                    on the Player Trader Platform</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*sports accordion items end*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====faq section end====*/}
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
        </div>
    )
}



