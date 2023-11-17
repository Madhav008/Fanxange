import React from 'react'

const Home = () => {
    return (
        <>
            <header class="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 mt-2 dark">
                <div class="flex-1 flex justify-between items-center">
                    <a href="#">
                        <img src="/assets/images/logo.png" alt="" srcset="" />
                    </a>
                </div>

                <label for="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                <input class="hidden" type="checkbox" id="menu-toggle" />

                <div class="lg:flex lg:items-center lg:w-auto w-full " id="menu">
                    <nav>
                        <ul class="lg:flex items-center justify-between pt-4 lg:pt-0 mt-4">
                            <li><a class="lg:p-4 py-3 px-0 block uppercase font-semibold text-md m-2 p-5 bg-base-200 border-gray-300 border-b lg:border-0 lg:bg-transparent" href="#">Home</a></li>
                            <li><a class="lg:p-4 py-3 px-0 block uppercase font-semibold text-md m-2 p-5 bg-base-200 border-gray-300 border-b lg:border-0 lg:bg-transparent" href="#">About</a></li>
                            <li><a class="lg:p-4 py-3 px-0 block uppercase font-semibold text-md m-2 p-5 bg-base-200 border-gray-300 border-b lg:border-0 lg:bg-transparent" href="#">How To Play</a></li> 
                            <li><a class="lg:p-4 py-3 px-0 block uppercase font-semibold text-md m-2 p-5 bg-base-200 border-gray-300 border-b lg:border-0 lg:bg-transparent" href="#">FAQ</a></li>
                            <li><a class="lg:p-4 py-3 px-0 block uppercase font-semibold text-md m-2 p-5 bg-base-200 border-gray-300 border-b lg:border-0 lg:bg-transparent" href="#">Contact Us</a></li>

                        </ul>
                    </nav>

                    <div className='btn btn-primary text-white rounded-2xl px-5 py-2 border border-gray-400 mt-4 text-md'>
                        <ion-icon name="logo-google"></ion-icon>
                        Login With Google
                    </div>
                </div>

            </header>

            <section className="">
                <div class="container ">
                    <div class="row home_banner_row d-flex align-items-center">
                        <div class="col-lg-5">
                            <div class="inner">
                                <h1 class="hero_title">The New Way to Invest in Sports</h1>
                                <p class="section_info">Best fantasy sports stock exchange where users can buy/sell shares of
                                    professional athletes as if they
                                    were stocks.</p>
                                <div class="btn_wrapper d-flex align-items-center">
                                    <div class="trade_btn">
                                        <a href="trade.html" class="btn btn-primary">Start Trading</a>
                                    </div>
                                    <div class="video_btn">
                                        <a class="video_popup" href="https://www.youtube.com/watch?v=uCik8-i2Hcc" title="YouTube video player">
                                            <i class="flaticon-play-arrow"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="inner text-center">
                                <img src="/assets/images/home_banner/players.png" alt="Home Banner Illustration"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home