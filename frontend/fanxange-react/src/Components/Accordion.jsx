import React, { useState } from 'react';
import { SlArrowRight, SlArrowDown } from "react-icons/sl";

const Accordion = ({ question, ans }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`pb-5 bg-primary-focus rounded-lg overflow-hidden transition-all duration-700 ease-in-out mb-6 ${isOpen ? 'h-auto' : 'h-20'}`}>
            <h2 className="border-none p-5 flex items-center gap-4 font-bold text-xl justify-center align-middle">
                <button
                    className="accordion-button flex items-center gap-4 font-bold text-xl justify-center align-middle w-full"
                    onClick={toggleAccordion}
                >
                    <img src="/assets/images/faq/ac-icon.png" alt="Icon" /> {question}
                    <div>
                        {isOpen ? <SlArrowDown onClick={toggleAccordion} /> : <SlArrowRight onClick={toggleAccordion} />}
                    </div>
                </button>
            </h2>
            <div className={`p-5`}>
                <div className="accordion-body">
                    <p className="para">{ans}</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
