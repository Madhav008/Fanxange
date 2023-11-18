import React, { useState } from 'react'
import { Button } from 'flowbite-react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaClock, FaWallet } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { RiLuggageDepositFill } from "react-icons/ri";

const Navbar = ({ wallet }) => {

    const handleLogout = () => {
        const baseURL = import.meta.env.VITE_APP_BACKEND_URL;
        // window.open(`${baseURL}auth/google/login`, "_self");
        window.open(`${baseURL}auth/logout`, "_self");

    };

    const [time, settime] = useState();

    useEffect(() => {

        const currentDate = new Date();

        // Target date (March 3, 2024)
        const targetDate = new Date('2024-03-03');

        // Calculate the difference in milliseconds
        const differenceInMilliseconds = targetDate - currentDate;

        // Convert milliseconds to days
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

        settime(differenceInDays.toFixed(0))

    }, [])
    const [isMenuOpen, setMenuOpen] = useState(false);





    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const { userData } = useSelector((state) => state.user);
    const { name, picture } = userData.user;
    return (
        <>
            <header className='max-w-full bg-secondary'>
                <div className='flex justify-between mx-auto h-24 items-center px-6 md:px-12 '>
                    <div className='font-bold text-lg uppercase flex-none'>
                        <Link to='/'>
                            <div className=' flex flex-col md:flex-row md:text-lg text-xs font-bold rounded-full p-3 items-center'>
                                <img src="/logo-bg.png" height="50px" width="50px" alt="" srcSet="" />
                                <div className='flex items-center'>
                                    <h1>Fan</h1><span className='text-accent'>Xange</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='flex gap-6 items-center flex-1 justify-end'>
                        <ul className='gap-4  text-md hidden lg:flex '>

                            <li>
                                <Link to='/wallet'>
                                    <div className={`${wallet ? `border-blue-500  border-2` : ''} bg-neutral rounded-md m-4  cursor-pointer items-start flex flex-col`}>
                                        <h1 className='mx-2 text-white  p-4'>
                                            <span className='items-center flex gap-2'>
                                                <RiLuggageDepositFill />
                                                <span>Deposit</span>
                                            </span>
                                        </h1 >
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <div className={`border-2 rounded-md m-4  cursor-pointer items-start flex flex-col`}>
                                    <h1 className='mx-2 text-white  p-4'>
                                        <span className='items-center flex gap-2'>
                                            <FaWallet />
                                            <span>₹100</span>

                                        </span>
                                    </h1 >
                                </div>
                            </li>
                            <li className='hidden lg:flex items-center '>
                                <div className=' rounded-md m-4 bg-neutral p-2 cursor-pointer items-start flex flex-col'>
                                    <span className='font-bold font-mono'>{time} days left</span>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <button className=' rounded-3xl truncate hidden md:flex px-4 items-center gap-2'>

                                <img className='rounded-full hidden md:flex w-[40px]' src={picture ? picture : "/assets/images/user/profile-sm.png"} />
                                <span className='font-bold text-lg font-open-sans'> {name}</span>

                                <div className='hidden lg:flex' onClick={toggleMenu}>
                                    {isMenuOpen ? (
                                        <IoIosArrowUp className='transition-all duration-500 ease-in-out' />
                                    ) : (
                                        <IoIosArrowDown className='transition-all duration-500 ease-in-out' />
                                    )}
                                </div>
                            </button>
                        </div>


                        <div className='flex lg:hidden items-center gap-2' onClick={toggleMenu}>
                            <div className={`${wallet ? `border-blue-500  border-2` : ''} bg-neutral rounded-md cursor-pointer items-start flex flex-col`}>
                                <h1 className='mx-2 text-white '>
                                    <span className='items-center flex gap-2'>
                                        <FaWallet />
                                        <span>₹100</span>
                                    </span>
                                </h1 >
                            </div>
                            <img className='rounded-full  md:hidden w-[40px]' src={picture ? picture : "/assets/images/user/profile-sm.png"} />
                            {isMenuOpen ? (
                                <AiOutlineClose className='transition-all duration-500 ease-in-out' />
                            ) : (
                                <AiOutlineMenu className='transition-all duration-500 ease-in-out' />
                            )}
                        </div>
                    </div>
                </div>
                <div
                    className={`${isMenuOpen ? 'top-24' : '-top-full'} absolute z-10 bg-base-200  w-full transition-all duration-500 ease-in-out`}>
                    <ul className='gap-4 font-semibold uppercase lg:hidden'>
                        <Link to="/portfolio"><li className='hover:text-primary-content text-sm p-5 border-b'>My Portfolio</li></Link>
                        <Link to="/wallet"><li className='hover:text-primary-content text-sm p-5 border-b'>Wallet</li></Link>

                        <li className='hover:text-primary-content text-sm p-5 border-b'>Profile</li>

                        <li className='hover:text-primary-content text-sm p-5 border-b'>Settings</li>
                        <li className='hover:text-primary-content text-sm p-5 border-b'>Notifications</li>
                        <li onClick={handleLogout} className='hover:text-primary-content text-sm p-5 border-b'>Logout</li>


                        {/*   <li className='hover:text-primary-content text-sm p-5 md:hidden flex justify-between items-center '>
                            <span> {name}</span>
                            <img className='rounded-full hidden md:flex w-[40px]' src={picture ? picture : "/assets/images/user/profile-sm.png"} />
                        </li> */}
                    </ul>
                </div>


                <div className={`${isMenuOpen ? 'top-22' : '-top-full'} absolute z-10 right-0  bg-base-200 transition-all duration-500 ease-in-out hidden lg:flex`}>
                    <ul className='gap-4 font-semibold uppercase'>
                        <Link to="/portfolio"><li className='hover:text-primary-content text-sm p-5 border-b'>My Portfolio</li></Link>
                        <li className='hover:text-primary-content text-sm p-5 border-b'>Profile</li>
                        <li className='hover:text-primary-content text-sm p-5 border-b'>Settings</li>
                        <li className='hover:text-primary-content text-sm p-5 border-b'>Notifications</li>
                        <li onClick={handleLogout} className='hover:text-primary-content text-sm p-5 border-b'>Logout</li>
                    </ul>

                </div>
            </header >
        </>
    )
}

export default Navbar
