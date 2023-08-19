import React from 'react'

const Navneet = () => {
    return (
        <div>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl  items-center justify-between mx-auto p-4">
                    <div className=''>
                        <div className='text-sm'>PLAN SETUP</div>
                        <div class="text-3xl font-semibold  dark:text-white">Stragic Plan 2023 </div>
                    </div>
                </div>
            </nav>


            {/* Body  */}

            <div className=' w-[100vw]'>
                <div className='flex justify-between m-5 '>
                    <div className=' whitespace-pre-wrap '>
                        <span className=' w-[calc(100%-80px)]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta explicabo quos quod vel excepturi. Voluptatum corporis recusandae optio! Ab optio voluptas cum. Accusantium labore blanditiis magni repellendus aperiam velit ea!</span>
                    </div>
                    <div className='flex-1'>
                       
                        {/* Open the modal using ID.showModal() method */}
                        <button className="btn w-max relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => window.my_modal_2.showModal()}>
                                <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                    Create Stargic Priority
                                </span>
                            
                             </button>
                        <dialog id="my_modal_2" className="modal">
                            <form method="dialog" className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click outside to close</p>
                            </form>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>
                </div>

                {/* Card */}


                <div class="w-[calc(100%-50px)] m-5 text-start p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    {/* <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5> */}
                    {/* <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p> */}
                    <h1 className=' text-lg font-semibold text-white '> 1. Student Access</h1>
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum totam deserunt pariatur aliquam exercitationem, velit architecto molestiae eius optio animi maiores quis impedit omnis amet iste tempore eos aut?</p>

                    <button class="w-max relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Purple to blue
                        </span>
                    </button>



                    <dl class=" mt-5 border-t-2 border-gray-400 border- max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class="flex flex-col pb-3 text-sm ml-5 mt-2">
                            <h1 className='mb-5 text-lg text-white '> 1.1 Student Access</h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum totam deserunt pariatur aliquam exercitationem, velit architecto molestiae eius optio animi maiores quis impedit omnis amet iste tempore eos aut?</p>
                        </div>
                        <div class="flex flex-col pb-3 text-sm ml-5 mt-2">
                            <h1 className='mb-5 text-lg text-white '> 1.2 Student Access</h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum totam deserunt pariatur aliquam exercitationem, velit architecto molestiae eius optio animi maiores quis impedit omnis amet iste tempore eos aut?</p>
                        </div>
                        <div class="flex flex-col pb-3 text-sm ml-5 mt-2">
                            <h1 className='mb-5 text-lg text-white '> 1.3 Student Access</h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum totam deserunt pariatur aliquam exercitationem, velit architecto molestiae eius optio animi maiores quis impedit omnis amet iste tempore eos aut?</p>
                        </div>
                    </dl>


                </div>

                <div class="w-[calc(100%-50px)] m-5 text-start p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    {/* <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5> */}
                    {/* <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p> */}
                    <h1 className=' text-lg font-semibold text-white '> 1. Student Access</h1>
                    <p className='my-5 w-[calc(100%-80px)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum totam deserunt pariatur aliquam exercitationem, velit architecto molestiae eius optio animi maiores quis impedit omnis amet iste tempore eos aut?</p>

                    <button class="w-max relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Purple to blue
                        </span>
                    </button>



                    <dl class=" mt-5 border-t-2 border-gray-400 border- max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
                        <div class="flex flex-col pb-3 text-sm ml-5 mt-2">
                            <h1 className='mb-5 text-lg text-white '> 1.1 Student Access</h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum totam deserunt pariatur aliquam exercitationem, velit architecto molestiae eius optio animi maiores quis impedit omnis amet iste tempore eos aut?</p>
                        </div>
                        <div class="flex flex-col pb-3 text-sm ml-5 mt-2">
                            <h1 className='mb-5 text-lg text-white '> 1.2 Student Access</h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum totam deserunt pariatur aliquam exercitationem, velit architecto molestiae eius optio animi maiores quis impedit omnis amet iste tempore eos aut?</p>
                        </div>
                        <div class="flex flex-col pb-3 text-sm ml-5 mt-2">
                            <h1 className='mb-5 text-lg text-white '> 1.3 Student Access</h1>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nostrum totam deserunt pariatur aliquam exercitationem, velit architecto molestiae eius optio animi maiores quis impedit omnis amet iste tempore eos aut?</p>
                        </div>
                    </dl>


                </div>
            </div>


        </div>
    )
}

export default Navneet