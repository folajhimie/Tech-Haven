// import React from 'react'
import { Link } from "react-router-dom";
// import { HiArrowSmRight } from "react-icons/hi";
// import { FaRegPaperPlane } from "react-icons/fa";

function Footer() {
    return (
        <footer id='footer'>
            <div className="bg-[#f5f6f7] px-2 border-y border-lightgray py-10 flex justify-center">
                <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 xs:grid-cols-1 w-full  max-w-[75rem]">
                        <div className="flex items-center pl-4 ">
                        
                            <div className="md:flex items-center mb-4 text-start">
                                
                                <div className="logo">
                                    <Link className="link" to="/">
                                        <span className="text-secondary text-3xl font-semibold ">Techevin</span>
                                    </Link>
                                    <span className="dot font-bold text-primary w-5 text-3xl">.</span>

                                    <div className='mt-8 text-start leading-8'>
                                        TECHEVIN is a Lagos-based website design agency serving clients within and outside of Africa. After 10 years and over 450 projects, we are proud of our reputation for excellence, client service and success.
                                    </div>

                                    <div className='mt-10 text-gray-500'>Email: <span>Tech.hevin@gmail.com</span></div>
                                    <div className='mt-3 text-gray-500'>Phone: <span>+234 816 868 8859</span></div>
                                </div>
                            </div>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center xl:border-r border-lightgray">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-900'>Solutions</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-gray-800 hover:text-primary font-poppins cursor-pointer'>Blockchain</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer'>Big Analytics</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer'>Machine Learning</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer'>Artificial Intelligence</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center xl:border-r border-lightgray">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-900'>Products</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-gray-800 hover:text-primary font-poppins cursor-pointer'>Swift Ticket</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer'>Ferry Transport</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer'>Personal Rides</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer'>Bus Transport</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-900'>Resources</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-gray-800 hover:text-primary font-poppins cursor-pointer'>About Us</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer'>Contact Us</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer'>Blog</span>
                                </li>
                                
                                
                            </ul>
                        </div>                   
                    {/* <div className="">

                    </div> */}
                </div>
            </div>
            <div className="bg-[#f5f6f7] text-center py-3 flex md:flex-row justify-around xs:flex-col border-t border-[#DDDDDD]">
                <p className="text-gray-800 font-poppins text-sm">© Copyright {new Date().getFullYear()} Techevin. All rights reserved</p>
                <ul className='text-gray-800 font-poppins flex justify-center lg:mt-0 md:mt-0 sm:mt-0 xs:mt-6'>
                    <li className=''>
                        <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer text-sm'>Terms of Service </span>
                    </li>
                    <li className=''>
                        <span className='text-gray-800 hover:text-primary font-poppins cursor-pointer ml-7 text-sm'> Privacy Policy </span>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer