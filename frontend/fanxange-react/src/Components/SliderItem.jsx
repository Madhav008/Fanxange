import React from 'react'

const SliderItem = ({price,name,priceChange,team}) => {
    return (
        <div class="slider_items flex items-center rounded-2xl bg-cover bg-center bg-no-repeat relative justify-center" style={{ backgroundImage: 'url("assets/images/slider/line.png")' }}>
            <div class="left_col">
                <div className="img_wrapper w-[140px] h-[140px] bg-cover bg-center bg-no-repeat relative flex items-center justify-center" style={{ backgroundImage: 'url("assets/images/slider/circle_one.png")' }}>
                    <a class="bg-info">
                        <img src="assets/images/slider/trader_1.png" alt="Trader One" />
                    </a>
                    <span class="bg-info flex items-center justify-center">Cricket</span>
                </div>
            </div>
            <div class="right_col flex-1">
                <h5>
                    <a >{name}</a>
                </h5>
                <p>{team}</p>
                <div class="price_line flex items-center">
                    <div class="price">
                        <p><i class="fas fa-dollar-sign"></i> {price}</p>
                    </div>
                    <div class="rate">
                        <p>{priceChange} <i class="fas fa-caret-up"></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem