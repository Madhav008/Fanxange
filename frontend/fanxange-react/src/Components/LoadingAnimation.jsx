import React from 'react'

const LoadingAnimation = () => {
    return (
        <div class="loader_wrapper" id="preloader">
            <div class="loader">
                <div class="face">
                    <div class="circle"></div>
                </div>
                <div class="face">
                    <div class="circle sd"></div>
                </div>
                <div class="percent">
                    <span class="counterr">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default LoadingAnimation