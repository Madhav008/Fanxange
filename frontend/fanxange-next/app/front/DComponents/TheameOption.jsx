'use client';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const ThemeOptions = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);
    const [isOpen, setOpen] = useState(false);

    // Helper function to update theme-related images
    const updateThemeImages = () => {
        // ... (Your existing logic for updating theme-related images)
    };

    // Handle dark theme toggle
    const toggleTheme = () => {
        const newIsDarkTheme = !isDarkTheme;
        setDarkTheme(newIsDarkTheme);
        const themeClass = newIsDarkTheme ? 'dark' : '';
        localStorage.setItem('dark-theme', themeClass);
        document.body.classList.toggle('dark', newIsDarkTheme);
        updateThemeImages();
    };

    // Handle toggle for theme-active
    const toggleThemeActive = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        // Set initial theme
        if (localStorage.getItem('dark-theme')) {
            setDarkTheme(true);
            document.body.classList.add('dark');
            document.getElementById('light').classList.remove('actives');
            document.getElementById('dark').classList.add('actives');
            document.querySelectorAll('.th-t').forEach(element => element.classList.remove('oactive'));
            document.querySelectorAll('.th-o').forEach(element => element.classList.add('oactive'));
        } else {
            document.getElementById('dark').classList.remove('actives');
            document.querySelectorAll('.th-o').forEach(element => element.classList.remove('oactive'));
            document.querySelectorAll('.th-t').forEach(element => element.classList.add('oactive'));
        }

        // Set theme-related images on page load
        updateThemeImages();

        // Cleanup
        return () => {
            // Remove event listeners or do any cleanup if needed
        };
    }, []); // The dependency array should be empty to run the effect only once on mount

    return (
        <div onClick={toggleThemeActive} className={`theme-option ${isOpen ? 'theme-active' : ''}`}>
            <button id="light" onClick={() => { toggleTheme(); }} className={`out-theme ${!isDarkTheme ? 'th-o' : 'th-t'} ${!isDarkTheme ? '' : 'oactive'}`}>
                Light
            </button>
            <button id="dark" onClick={() => { toggleTheme(); }} className={`out-theme ${!isDarkTheme ? 'th-t oactive' : 'th-o'}`}>
                Dark
            </button>
            <a id="cog" className="d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faCog} spin />
            </a>
        </div>
    );
};

export default ThemeOptions;
