import React, { useEffect, useState } from 'react'

const Hero = () => {

    const [auth, setauth] = useState()

    const _handleSignInClick = () => {
        // Authenticate using via passport api in the backend
        // Open Twitter login page
        // Upon successful login, a cookie session will be stored in the client
        window.open("http://localhost:3132/auth/google/login", "_self");
    };

    const _handleLogoutClick = () => {
        // Logout using Twitter passport api
        // Set authenticated state to false in the HomePage
        window.open("http://localhost:3132/auth/google/logout", "_self");
    };

    useEffect(() => {

        function checkAuth() {
            fetch("http://localhost:3132/auth/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true
                }
            })
                .then(response => {
                    if (response.status === 200) return response.json();
                    throw new Error("failed to authenticate user");
                })
                .then(responseJson => {
                    console.log(responseJson);
                    setauth({
                        authenticated: true,
                        user: responseJson.user
                    });
                })
                .catch(error => {
                    setauth({
                        authenticated: false,
                        error: "Failed to authenticate user"
                    });
                });
        }

        checkAuth()
    }, [])


    return (
        <div>

            <div className='flex justify-between p-2 items-center'>
                <div className='flex space-x-1 text-center font-bold text-3xl items-center'>
                    <img src="./src/assets/react.svg" alt="" srcset="" />
                    <span className='text-accent'>Fan</span>Xange
                </div>

                <div className='btn bg-primary text-white' onClick={_handleSignInClick}>
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

                <div className='btn btn-primary w-[250px]'>
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