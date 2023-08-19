import React from 'react'

const Navbar = () => {
    return (


            <nav >
                <div class=" flex flex-wrap items-center justify-between mx-auto">
                    <div className=' flex text-xl font-bold rounded-full p-3 items-center'>
                        <img src="./src/assets/logo-bg.png" height="50px" width="50px" alt="" srcset="" />
                        <h1>Fan</h1><span className='text-accent'>Xange</span>
                    </div>
                   
                    <div class=" w-full md:block md:w-auto">
                        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
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
            </nav>

    )
}

export default Navbar