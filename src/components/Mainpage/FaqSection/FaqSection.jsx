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
        <div className='bg-[#ffffff] my-10'>
            <div className='flex justify-center mb-8 font-semibold text-2xl xs:px-5'>Frequently <span className="text-orange-600 font-semibold text-2xl ml-2">Asked Questions</span></div>

            <div
                className="flex  justify-center items-center flex-col xs:px-5"
            >
                {questionData.map((question, questionIndex) => {
                    return (
                        <div className="max-w-[60rem] w-full flex  " key={questionIndex}>
                            <div
                                className="w-full cursor-pointer py-5  mb-8 border-b-[1px] border-gray-300  bg-white"
                                onClick={() => toggle(questionIndex)}

                            >
                                <div className='w-full flex justify-start items-center '>
                                    
                                    <h3 className="font-semibold text-[#444649] text-lg lg:text-md capitalize">
                                        {question.question}
                                    </h3>
                                    <span className=''>
                                        {selectedItem === questionIndex ? (
                                            <div className='text-xl ml-3 relative top-0'>
                                                <CgChevronUp />
                                            </div>
                                        ) : (
                                            <div className='text-xl ml-3 relative top-0'>
                                                <CgChevronDown />
                                            </div>
                                        )}
                                    </span>
                                </div>
                                {selectedItem === questionIndex ? (
                                    <div className="text-gray-500 w-full text-base p-2 my-2">{question.answer}</div>
                                ) : (
                                    <div className="hidden">{question.answer}</div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FaqSection