import React, { useEffect } from 'react';

const Redirect = () => {
    useEffect(() => {
        // Redirect to the custom URL scheme immediately after the component mounts
        window.location.href = 'fanxange://orders';
    }, []); // The empty array ensures this effect runs only once after the initial render

    return (
        <div>Redirecting...</div>
    )
}

export default Redirect;
