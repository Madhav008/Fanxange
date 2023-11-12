import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const ThemeOptions = () => {

    const [isDarkTheme, setDarkTheme] = useState(false);

    // Helper function to update theme-related images
    const updateThemeImages = () => {
        const body = document.body;
        const lightLogo = "assets/images/logo.png";
        const darkLogo = "assets/images/logo-dark-n.png";
        const vsImage = "assets/images/user/vs.png";
        const acVsImage = "assets/images/user/ac-vs.png";
        const referralImage = "assets/images/profile/referral.png";
        const acReferralImage = "assets/images/profile/ac-ref.png";
        const lastMonthImage = "assets/images/profile/last_month.png";
        const acLastMonthImage = "assets/images/profile/ac-last.png";

        const logoImage = isDarkTheme ? darkLogo : lightLogo;
        const vsSrc = isDarkTheme ? acVsImage : vsImage;
        const referralSrc = isDarkTheme ? acReferralImage : referralImage;
        const lastMonthSrc = isDarkTheme ? acLastMonthImage : lastMonthImage;

        document.getElementById('logo').src = logoImage;
        // document.querySelector(`img[src='${vsImage}']`).src = vsSrc;
        // document.querySelector(`img[src='${referralImage}']`).src = referralSrc;
        // document.querySelector(`img[src='${lastMonthImage}']`).src = lastMonthSrc;
    };

    // Handle dark theme toggle
    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
        const themeClass = isDarkTheme ? 'dark' : '';
        localStorage.setItem('dark-theme', themeClass);
        document.body.classList.toggle('dark', isDarkTheme);
        updateThemeImages();
    };

    useEffect(() => {
        const body = document.body;

        // Set initial theme
        if (localStorage.getItem('dark-theme')) {
            setDarkTheme(true);
            body.classList.add('dark');
        }

        // Set theme-related images on page load
        updateThemeImages();

        // Cleanup
        return () => {
            // Remove event listeners or do any cleanup if needed
        };
    }, [isDarkTheme]);

    return (
        <div className='theme-option'>
            {/* Your JSX goes here */}
            <button id="light" onClick={toggleTheme} className={`out-theme ${isDarkTheme ? 'th-o' : 'th-t'} ${isDarkTheme ? '' : 'oactive'}`}>
                Light
            </button>
            <button id="dark" onClick={toggleTheme} className={`out-theme ${isDarkTheme ? 'th-t oactive' : 'th-o'}`}>
                Dark
            </button>
            <a id="cog" class="d-flex align-items-center justify-content-center">
                <i class="fas fa-cog fa-spin"></i>
            </a>
        </div>
    );
};

export default ThemeOptions;
