// import React from 'react'
import { questionData } from "../../../data/Mylinks";
import { useState } from 'react';
import { CgChevronUp, CgChevronDown } from "react-icons/cg";

function FaqSection() {
    const [selectedItem, setSelectedItem] = useState(null);
    const toggle = (questionIndex) => {
        if (selectedItem === questionIndex) {
            return setSelectedItem(null);
        }
        setSelectedItem(questionIndex);
    };



    return (
        <div className='py-10 pt-40 bg-black'>
            <div className="grid md:grid-cols-2 gap-14">
                <div className="flex justify-center mr-6 px-6">
                    <div className="max-w-md">
                        <h2 className="font-poppins font-semibold xl:text-4xl mb-6 leading-normal text-start text-white xs:text-3xl lg:text-3xl">
                            Some of the things you may want to know
                        </h2>
                        <p className="text-white text-start font-poppins xs:text-[17px] my-4">
                            We answered questions so you don’t have to ask them.
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-center items-center flex-col xs:px-5"
                >
                    {questionData.map((question, questionIndex) => {
                        return (
                            <div className="max-w-[60rem] w-full flex" key={questionIndex}>
                                <div
             
                                    onClick={() => toggle(questionIndex)}
                                    className={`${
                                        selectedItem === questionIndex ? "bg-[#1A1C1F]" : ""
                                    } w-full cursor-pointer py-5  mb-8 `}

                                >
                                    <div 
                                        className={`w-full flex justify-between items-center px-4 rounded-md`}
                                        
                                    >
                                        <h3 className="font-semibold text-white text-lg lg:text-md capitalize">
                                            {question.question}
                                        </h3>
                                        <span className=''>
                                            {selectedItem === questionIndex ? (
                                                <div className='text-xl ml-3 relative top-0 text-white'>
                                                    <CgChevronUp />
                                                </div>
                                            ) : (
                                                <div className='text-xl ml-3 relative top-0 text-white'>
                                                    <CgChevronDown />
                                                </div>
                                            )}
                                        </span>
                                    </div>
                                    {selectedItem === questionIndex ? (
                                        <div className="text-white w-full text-base p-2 my-2 bg-[#1A1C1F]">{question.answer}</div>
                                    ) : (
                                        <div className="hidden">{question.answer}</div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
            {/* <div className='flex justify-center mb-8 font-semibold text-2xl xs:px-5'>Frequently <span className="text-orange-600 font-semibold text-2xl ml-2">Asked Questions</span></div> */}

        </div>
    )
}

export default FaqSection