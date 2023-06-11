import { useState } from 'react';
import { CgChevronUp, CgChevronDown } from "react-icons/cg";
import { questionItems } from '../../../data/Mylinks';

const Section = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const toggle = (questionIndex) => {
        if (selectedItem ===  questionIndex) {
            return setSelectedItem(null);
        }
        setSelectedItem( questionIndex);
    };

    return (
        <div className=''>
            <div className='flex justify-center mb-8 font-semibold text-lg'>How to ship with Reporite.</div>
            
            <div
                className="flex  justify-center items-center flex-col "
            >
                {questionItems.map((question, questionIndex) => {
                    return (
                        <div className="max-w-[24rem] w-full flex flex-col justify-center items-center " key={questionIndex}>
                            <div
                                className="w-full cursor-pointer p-5 rounded mb-8 border bg-white"
                                onClick={() => toggle(questionIndex)}

                            >
                                <div className='w-full flex justify-around items-center '>
                                    <div className='w-6 h-6 mr-5'>
                                        {/* <img src={question.icon} alt="pic"/> */}
                                        {question.icon}
                                        
                                    </div>
                                    <h3 className="font-semibold text-[#444649] text-base lg:text-md capitalize">
                                        {question.question}
                                    </h3>
                                    <span className=''>
                                        {selectedItem ===  questionIndex ? (
                                            <div className='text-xl ml-10 relative top-0'>
                                                <CgChevronUp />
                                            </div>
                                        ) : (
                                            <div className='text-xl ml-10 relative top-0'>
                                                <CgChevronDown/>
                                            </div>
                                        )}
                                    </span>
                                </div>
                                {selectedItem === questionIndex ? (
                                    <div className="text-gray-500 w-full text-xs p-2 my-2">{question.answer}</div>
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

export default Section