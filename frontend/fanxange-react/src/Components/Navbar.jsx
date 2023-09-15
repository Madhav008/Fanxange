import React from 'react'
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
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
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div className='flex items-center gap-2'>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="rounded-full ">
                                <img src="https://pixner.net/spovest/dark/assets/images/user/profile-sm.png" />
                            </div>
                        </label>
                        <span className='font-semibold cursor-pointer' tabIndex={0}>
                            Madhav Jindal
                        </span>
                    </div>
                    <ul tabIndex={0} className="menu lg:menu-lg md:menu-md dropdown-content mt-5 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Notifications
                            <span className="badge border-gray-100 text-red-600 font-bold">New</span>
                        </a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Navbar