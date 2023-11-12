"use client"
import React, { useState } from 'react'
import { Button } from 'flowbite-react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaClock, FaWallet } from 'react-icons/fa';
import { RiArrowDownSFill, RiWalletLine } from "react-icons/ri"
import { useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {

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


    const { userData } = useSelector((state) => state.user);
    const { name, picture } = userData.user;
    return (


        /*  <nav >
             <div className=" flex flex-wrap items-center justify-between mx-auto">
                 <div className=' flex text-xl font-bold rounded-full p-3 items-center'>
                     <img src="./src/assets/logo-bg.png" height="50px" width="50px" alt="" srcset="" />
                     <h1>Fan</h1><span className='text-accent'>Xange</span>
                 </div>
                
                 <div className=" w-full md:block md:w-auto">
                     <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                         <li>
                             <a href="#" >Home</a>
                         </li>
                         <li>
                             <a href="#" >Services</a>
                         </li>
                         <li>
                             <a href="#" >Pricing</a>
                         </li>
                         <li>
                             <a href="#" >Contact</a>
                         </li>
                     </ul>
                 </div>
             </div>
         </nav> */


        <div className="navbar bg-neutral-focus mb-2">
            <div className="flex-1">
                <Link to='/'>
                    <div className=' flex text-xl font-bold rounded-full p-3 items-center'>
                        <img src="/logo-bg.png" height="50px" width="50px" alt="" srcSet="" />
                        <h1>Fan</h1><span className='text-accent'>Xange</span>
                    </div>
                </Link>

                <div>
                    <h1 className='text-white text-sm font-bold font-mono'>Time Left in IPL2024 <span className='flex gap-1 text-center items-center'><FaClock /> {time} Days</span></h1>
                </div>
            </div>
            <div className="flex-none ">
                <Link to='/wallet'>
                    <div className='border-gray-200 border rounded-md m-4 cursor-pointer '>
                        <h1 className='mx-2 text-white text-sm font-mono'> <span className='items-center flex gap-2'><FaWallet /> <span className='text-lg'>₹0.00</span></span></h1>
                        {/* <h2 className='m-2 flex items-center'> <span className='mx-2'><FaWallet /></span> <span className='font-bold uppercase '>Deposit</span></h2> */}
                    </div>
                </Link>
                <div className="dropdown dropdown-end ">
                    <div className='flex items-center'>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="rounded-full ">
                                <img src={picture ? picture : "https://pixner.net/spovest/dark/assets/images/user/profile-sm.png"} />
                            </div>
                        </label>
                        <span className='mx-3 flex items-center font-semibold cursor-pointer' tabIndex={0}>
                            {name}
                            <RiArrowDownSFill />
                        </span>
                    </div>
                    <ul tabIndex={0} className="menu lg:menu-lg md:menu-md dropdown-content mt-5 z-[2] p-2 shadow bg-base-100 rounded-box w-52 ">
                        <li>
                            <Link to="/portfolio"
                                className="justify-between">
                                My Portfolio
                            </Link>
                        </li>
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Notifications
                            <span className="badge border-gray-100 text-red-600 font-bold">New</span>
                        </a></li>
                        <li onClick={handleLogout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Navbar