// import React from 'react';
import { Fade } from 'react-reveal';

// import { TbCircleCheck } from "react-icons/tb";
import { items } from '../../../data/Mylinks.jsx';
// import { BsCheckCircleFill } from "react-icons/bs";
import Section from './Section.jsx';
import Details from './Details.jsx';

// import { tools } from '../../../Mixins/data';

const BasicSection = () => {
    return (
        <section id="home" className="mx-auto px-2 bg-[#e0f0ff]">
            <Fade up>
                <div className='flex justify-center flex-col'>
                    <div className="flex justify-center">
                        <div className="">
                            <div 
                                className="font-light text-2xl leading-normal text-start text-secondary font-poppins capitalize py-4"
                            >
                                Ship your packages to Nigeria with ease whenever you shop on e-commerce stores in the USA
                            </div>
                        </div>
                    </div>
                    <Fade left delay={500}>
                        <div className='flex justify-center w-full xs:grid xs:grid-cols-1 md:grid md:grid-cols-1 text-gray-500'>
                            <p className="flex justify-center mb-6 font-poppins text-md font-medium">
                                Automation tools that simplify your shipping
                            </p>
                        </div>
                    </Fade>


                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 items-center justify-center '>
                    <div className=''>
                        <div>
                            <Section/>
                        </div>
                    </div>


                    <Fade right delay={1000}>
                        <div className='cursor-pointer bg-[#e0f0ff] flex justify-center'>
                            <div className=' p-5 flex-row grid xsl:grid-cols-1 xl:grid-cols-1 gap-5 lg:grid-cols-1'>
                                {items.map((item, itemSlide) => (
                                    <Details key={itemSlide} item={item} />
                                ))}
                            </div>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </section >
    )
}

export default BasicSection