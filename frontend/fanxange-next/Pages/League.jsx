import React, { useEffect } from 'react'
import { themeChange } from 'theme-change'
import './index.css'

const League = () => {
    const themeValues = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",]

    useEffect(() => {
        themeChange(false)
    })

    return (
        <div className='mx-auto container'>

            <select className='select w-full max-w-xs' data-choose-theme>
                <option className='text-primary' option value="">Default Value</option>
                {themeValues.map((value) => (
                    <option value={value}>{value}</option>
                ))}
            </select>

            {/* Heading  */}
            <div className='bg-base-300 rounded-md p-5'>
                <span className='text-lg '>Upcoming Games</span>
            </div>


        </div>
    )
}

export default League