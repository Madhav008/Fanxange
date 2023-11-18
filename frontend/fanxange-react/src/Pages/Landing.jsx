import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Accordion from '../Components/Accordion';
import SliderItem from '../Components/SliderItem';
import CustomCarousel from '../Components/CustomCarosul';
import { Navigate } from 'react-router-dom';

const Landing = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const _handleSignInClick = () => {
        const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
        window.open(`${baseURL}auth/google/login`, "_self");
    };



    const { userData } = useSelector((state) => state.user);
    if (userData.authenticated === true) {
        return <Navigate to="/dashboard" />
    }

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const items = [
        <SliderItem price={"3.84"} priceChange={"+5.54"} name={"DON Delon"} team={"India"} />,
        <SliderItem price={"3.84"} priceChange={"+5.54"} name={"DON Delon"} team={"India"} />,
        <SliderItem price={"3.84"} priceChange={"+5.54"} name={"DON Delon"} team={"India"} />,
        <SliderItem price={"3.84"} priceChange={"+5.54"} name={"DON Delon"} team={"India"} />,
        <SliderItem price={"3.84"} priceChange={"+5.54"} name={"DON Delon"} team={"India"} />,
        <SliderItem price={"3.84"} priceChange={"+5.54"} name={"DON Delon"} team={"India"} />,
        <SliderItem price={"3.84"} priceChange={"+5.54"} name={"DON Delon"} team={"India"} />,
        <SliderItem price={"3.84"} priceChange={"+5.54"} name={"DON Delon"} team={"India"} />,
    ];

    return (
        <div>
            <header className='max-w-full'>
                <div className='flex justify-between mx-auto h-24 items-center px-6 md:px-12 bg-base-100'>
                    <div className='font-bold text-lg uppercase flex-none'>Fanxange</div>
                    <div className='flex gap-6 items-center flex-1 justify-end'>
                        <ul className='gap-4 font-semibold uppercase text-md hidden lg:flex'>
                            <li className='hover:text-primary-content'>Home</li>
                            <li className='hover:text-primary-content'>Rules</li>
                            <li className='hover:text-primary-content'>How to Play</li>
                            <li className='hover:text-primary-content'>FAQ</li>
                        </ul>
                        <div>
                            <button onClick={_handleSignInClick} className=' btn btn-primary rounded-3xl truncate hidden md:flex px-4 bg-info '>
                                <span className='btn btn-info text-white'>
                                    Login With Google
                                </span>
                            </button>
                        </div>
                        <div className='flex lg:hidden ml-4' onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <AiOutlineClose className='text-3xl' />
                            ) : (
                                <AiOutlineMenu className='text-3xl' />
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className={`${isMenuOpen ? 'top-24' : '-top-full'} absolute bg-base-200  w-full transition-all duration-500 ease-in-out`}>
                    <ul className='gap-4 font-semibold uppercase lg:hidden'>
                        <li className='hover:text-primary-content text-sm p-5 border-b'>Home</li>
                        <li className='hover:text-primary-content text-sm p-5 border-b'>Rules</li>
                        <li className='hover:text-primary-content text-sm p-5 border-b'>How to Play</li>
                        <li className='hover:text-primary-content text-sm p-5 border-b'>FAQ</li>
                        <li onClick={_handleSignInClick} className='hover:text-primary-content text-sm p-5 bg-info text-white md:hidden'>
                            Login With Google
                        </li>
                    </ul>
                </div>
            </header>

            <section className='w-full justify-center text-center items-center flex-col lg:flex lg:flex-row p-6 bg-cover bg-left-top bg-no-repeat' style={{ backgroundImage: 'url(/assets/images/home_banner/home_two_banner_sm_bg.png)' }}>
                <div className='col-span-6 flex flex-col justify-start text-start items-start'>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-primary-content'>Invest of Your Favourite Players
                    </h1>
                    <h2 className='text-sm md:text-lg lg:text-xl text-primary-content my-5  max-w-xl'>Best fantasy sports stock exchange where users can buy/sell shares of professional athletes as if they were stocks.</h2>
                    <button onClick={_handleSignInClick} className='bg-info w-[200px] rounded-xl font-bold uppercase text-white my-6  py-3 '>Start Trading </button>
                </div>
                <div class="items-center text-center block my-[30px] col-span-7 ">
                    <div class="text-center">
                        <img src="/assets/images/home_banner/home_two_banner_illustration.png" alt="Home Banner Illustration" />
                    </div>
                </div>
            </section>

            <section class="slider_wrapper w-full mx-auto flex justify-center p-2">
                <div class="container">
                    <div class="slider_row flex gap-4">
                        <CustomCarousel items={items} />
                    </div>
                </div>
            </section>


            <section class=" pt-[74px] w-full mx-auto flex justify-center">
                <div class="container">
                    <div class="max-w-[576px] mx-auto mt-[-10px] mb-[30px] text-center">
                        <h1 class=" leading-[1.2] font-bold text-3xl md:text-4xl lg:text-5xl">How does it work?</h1>
                        <p class="mt-[13px] text-sm md:text-md lg:text-lg">It's easier than you think. Follow 3 simple easy steps</p>
                    </div>
                    <div class="pb-[70px] flex items-center flex-wrap gap-24 justify-center mx-auto font-bold">
                        <div >
                            <div class="text-center">
                                <div class="w-[245px] h-[245px] m-auto border border-solid border-opacity-10 border-primary rounded-full flex items-center justify-center">
                                    <div class="w-[215px] h-[215px] mx-auto p-[15px]  border border-solid border-primary border-opacity-20 rounded-full flex items-center justify-center bg-primary-focus bg-clip-content">
                                        <img src="/assets/images/work/deposit.png" alt="Deposit Funds" />
                                    </div>
                                </div>
                                <h4 class="text-xl leading-5 mt-[25px]">Deposit Funds</h4>
                            </div>
                        </div>
                        <div >
                            <div class="text-center">
                                <div class="w-[245px] h-[245px] m-auto border border-solid border-opacity-10 border-primary rounded-full row_container flex items-center justify-center">
                                    <div class="w-[215px] h-[215px] mx-auto p-[15px]  border border-solid border-primary border-opacity-20 rounded-full flex items-center justify-center bg-primary-focus bg-clip-content">
                                        <img src="/assets/images/work/market.png" alt="Watch the market" />
                                    </div>
                                </div>
                                <h4 class="text-xl leading-5 mt-[25px]">Watch the market</h4>
                            </div>
                        </div>
                        <div >
                            <div class="text-center">
                                <div class="w-[245px] h-[245px] m-auto border border-solid border-opacity-10 border-primary rounded-full flex items-center justify-center">
                                    <div class="w-[215px] h-[215px] mx-auto p-[15px]  border border-solid border-primary border-opacity-20 rounded-full flex items-center justify-center bg-primary-focus bg-clip-content">
                                        <img src="/assets/images/work/trade.png" alt="Make a Trade" />
                                    </div>
                                </div>
                                <h4 class="text-xl leading-5 mt-[25px]">Make a trade</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class=" w-full mx-auto flex justify-center p-2">
                <div class="container ">
                    <div class="bg-primary-focus rounded-xl p-2 lg:p-24 ">
                        <div class="flex flex-col lg:flex-row items-center lg:justify-evenly gap-2">
                            <div class="lg:items-start flex flex-col lg:order-2 order-1 max-w-[420px]">

                                <h1 class="text-4xl lg:text-5xl font-bold my-5">Buy Low, Sell High</h1>
                                <p class="text-lg font-semibold my-6">Changes in Players Share prices provide a valuable opportunity to
                                    profit from trading either long or short term. The concept is simple: buy low and sell
                                    high.
                                </p>
                                <div class="py-[15px] flex items-center">
                                    <img src="assets/images/buy/players.png" alt="Players" />
                                    <p class="font-bold text-lg ml-[20px]">Players who beat projections raise in value</p>
                                </div>
                                <div class="py-[15px] flex items-center">
                                    <img src="assets/images/buy/invest.png" alt="Invest" />
                                    <p class="font-bold text-lg ml-[20px]">Invest in the value of a player</p>
                                </div>
                                <div class="py-[15px] flex items-center">
                                    <img src="assets/images/buy/trade.png" alt="Trade" />
                                    <p class="font-bold text-lg ml-[20px]">Trade from Anywhere, Anytime</p>
                                </div>

                            </div>
                            <div class="md:order-1 order-2">
                                <img src="assets/images/buy/buy_illustration.png" alt="Buy Illustration" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section className=' w-full mx-auto flex justify-center p-2'>
                <div class="container">
                    <div class="py-5 flex items-center justify-center gap-4 flex-col lg:flex-row">
                        <div class="flex flex-col items-center mx-auto">
                            <div class="max-w-lg p-2">
                                <h1 class="text-4xl lg:text-5xl font-bold my-4">Play all the sports you love, all in one place!</h1>
                                <p class="text-lg mb-4 font-semibold">Buy, sell or trade your favourite athletes just like stocks on a stock
                                    market.</p>
                                <div class="flex items-center gap-4 align-middle text-center h-[100px] ">
                                    <img src="assets/images/play/payment.png" alt="Secure Payments" className='w-[100px] h-[100px] m-4' />
                                    <div class="text-lg font-bold">
                                        <h5>Secure Payments</h5>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4 align-middle text-center">
                                    <img src="assets/images/play/transparent.png" alt="Transparent" className='w-[100px] h-[100px] m-4' />
                                    <div class="text-lg font-bold">
                                        <h5>Transparent</h5>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4 align-middle text-center">
                                    <img src="assets/images/play/multi.png" alt="Multi Sports" className='w-[100px] h-[100px] m-4' />
                                    <div class="text-lg font-bold">
                                        <h5>Multi-Sports</h5>
                                    </div>
                                </div>


                                <div class="flex items-center gap-4 align-middle text-center">
                                    <img src="assets/images/play/support.png" alt="24/7 Support" className='w-[100px] h-[100px] m-4' />
                                    <div class="text-lg font-bold">
                                        <h5>24/7 Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-contain bg-center bg-no-repeat mt-30 mb-30" style={{ backgroundImage: 'url(/assets/images/play/circle.png)' }}>
                            <div class="inner text-center text-lg-end">
                                <img src="assets/images/play/illustration.png" alt="Play Illustration" className='w-[800px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <section className='w-full mx-auto flex justify-center p-2'>
                <div class="container">
                    <div className="bg-no-repeat bg-center bg-cover rounded-lg p-6 md:p-12" style={{ backgroundImage: 'url(/assets/images/invite/invite_bg.png)' }}>
                        <div class="flex items-start justify-evenly lg:p-20 flex-col lg:flex-row gap-6">
                            <div className='max-w-2xl'>
                                <h1 className=' truncate text-2xl md:text-3xl lg:text-4xl font-bold my-2'>Invite Friends.</h1>
                                <h1 className=' truncate text-2xl md:text-3xl lg:text-4xl font-bold mb-2'>Get Free Stock.</h1>
                                <p class="font-semibold text-lg max-w-lg">Once your friends sign up and deposit funds, you'll both get a free
                                    stock!</p>
                            </div>
                            <div class="mt-12">
                                <div class="inner text-left text-lg-center">
                                    <a href="affiliate.html" class="bg-info btn truncate rounded-xl font-semibold uppercase text-white p-3">Get Free Stock</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="w-full mx-auto flex justify-center p-2">
                <div class="container">
                    <div className="bg-no-repeat bg-center bg-contain rounded-lg pt-[120px] md:p-12 flex flex-col items-center justify-between" style={{ backgroundImage: 'url("/assets/images/faq/faq_bg.png")' }}>
                        <div class="text-center">
                            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl my-4 ">Frequently asked questions</h1>
                            <p class="text-lg mb-4">If you haven't found an answer to your question, <span className='text-info '>contact us</span></p>
                            <a href="contact.html" class="btn btn-info text-white">ASK A QUESTION</a>
                        </div>
                        <div className='max-w-xl mt-4'>
                            <Accordion question={"What is \"trading\" on PlayerTrader?"} ans={"\"Trading\" refers to the buying and selling of shares of players on the Player Trader Platform"} />
                            <Accordion question={"What drives a player's stock?"} ans={"\"Trading\" refers to the buying and selling of shares of players on the Player Trader Platform"} />
                            <Accordion question={"What sports can I trade players from?"} ans={"\"Trading\" refers to the buying and selling of shares of players on the Player Trader Platform"} />
                            <Accordion question={"What is my reward for reffering a friend?"} ans={"\"Trading\" refers to the buying and selling of shares of players on the Player Trader Platform"} />
                            <Accordion question={"How do I make a deposit?"} ans={"\"Trading\" refers to the buying and selling of shares of players on the Player Trader Platform"} />
                            <Accordion question={"Is my money safe?"} ans={"\"Trading\" refers to the buying and selling of shares of players on the Player Trader Platform"} />
                        </div>
                    </div>
                </div>
            </section>



            <section className='w-full mx-auto flex justify-center p-2'>
                <div class="container">
                    <div class="experience">
                        <div class="experience_content text-center">
                            <h1 class="section_title">Experience the future of fantasy sports</h1>
                            <p class="section_info">Buy &amp; Sell Shares in Favourite Players</p>
                            <a href="trade.html" class="btn btn-info text-white">Start Trading</a>
                        </div>
                    </div>
                </div>
            </section>


            <footer className='w-full mx-auto flex justify-center p-6'>
                <div class="container">
                    <div class="font-bold flex justify-between items-center mb-2">

                        <ul class=" flex flex-wrap gap-10 items-start text-sm lg:text-md   justify-start lg:justify-end">
                            <span>CONTACT US</span>
                            <span>TERMS OF USE</span>
                            <span>PRIVACY POLICY</span>
                        </ul>

                        <ul class="flex flex-wrap gap-5 justify-center lg:justify-end m-4">
                            <span class="nav-link ml-0">
                                <img src="assets/images/footer/apple_store.png" alt="Download from Apple Store" />
                            </span>
                            <span class="nav-link mr-0">
                                <img src="assets/images/footer/google_store.png" alt="Download from Google Play Store" />
                            </span>
                        </ul>
                    </div>
                    <hr className=' border-base-300 ' />
                    <div class="justify-center gap-4 flex items-center mt-4">
                        <p class="para">Copyright © 2023.</p>
                        <p class="para">All rights reserved</p>
                    </div>
                </div >
            </footer >
        </div >
    );


};

export default Landing;
