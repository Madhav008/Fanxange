import React from 'react'

const Hero = () => {
    return (
        <div>

            <div className='flex justify-between p-2 items-center'>
                <div className='flex space-x-1 text-center font-bold text-3xl items-center'>
                    <img src="./src/assets/react.svg" alt="" srcset="" />
                    <span className='text-accent'>Fan</span>Xange
                </div>

                <div className='btn bg-primary text-secondary'>
                    Login With Google
                </div>
            </div>
            {/* Hero Section */}
            <section className='flex-col text-center mx-auto mt-10 h-[500px]'>
                <div className='absolute -z-10 left-40 blur-sm opacity-40 h-[500px] '>
                    <img className="h-full" src="./src/assets/bg.png" alt="" />
                </div>

                <div className='text-5xl font-bold'>
                    Reliable trading platform
                </div>
                <div className='py-6 text-lg'>
                    Invest with Fanxange, and make profit from your favourite players.
                </div>
                <div className='flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-center justify-center py-6 font-bold '>
                    <div className='p-2'>Quick start</div>
                    <div className='p-2'>24/7 trading</div>
                    <div className='p-2'>Easy to use</div>
                </div>
                </div>

                <div className='btn btn-primary text-secondary  w-[250px]'>
                    Login With Google
                </div>
                <div className='mt-3'>
                    No registration required
                </div>
            </section>
            {/* Feature Section */}
            <section className='flex-col text-center mx-auto my-20 '>
                {/* <div className='absolute -z-10 blur-sm opacity-40'>
                    <img src="./src/assets/bg.png" alt="" />
                </div> */}

                <div className='text-5xl font-bold'>
                    Fast deposits and withdrawals
                </div>
                <div className='py-6 text-lg'>
                    Transfer your funds safely via reliable payment methods.
                    All transactions are securely encrypted
                </div>
               <div className='flex justify-center w-max mx-auto '>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-center justify-center py-6 font-bold'>
                    <div className='border card p-2 m-5'><img src="./src/assets/imps.svg" alt="" srcset="" /></div>
                    <div className=' border card p-2 m-5'><img src="./src/assets/paytm.svg" alt="" /></div>
                    <div className=' border card p-2 m-5'><img src="./src/assets/upi.svg" alt="" /></div>
                </div>
               </div>

                <div className='btn btn-primary text-secondary  w-[250px]'>
                    Try trading now
                </div>
            </section>


        </div>
    )
}

export default Hero