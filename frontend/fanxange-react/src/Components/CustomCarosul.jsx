import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomCarousel = ({ items }) => {

    const arrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '24px', // Adjust the font size as needed
        cursor: 'pointer',
        zIndex: 1,
    };

    const slickSettings = {
        rtl: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        useCss: true,
        arrows: true,
        prevArrow: <CustomArrow direction="left" />,
        nextArrow: <CustomArrow direction="right" />,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="w-[80%] p-2 mx-auto relative">
            <Slider {...slickSettings}>
                {items.map((item, index) => (
                    <div key={index}>
                        {/* Your SliderItem component or content goes here */}
                        {/* Example: <SliderItem {...item} /> */}
                        {item}
                    </div>
                ))}
            </Slider>
        </div>
    );
};
const CustomArrow = ({ direction }) => (
    <div>
        {direction === 'left' ? <i className="flaticon-left-chevron"></i> : <i className="flaticon-right-chevron"></i>}
    </div>
);


export default CustomCarousel;
