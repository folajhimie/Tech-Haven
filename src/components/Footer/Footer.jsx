// import React from 'react'
// import { Link } from "react-router-dom";
// import { HiArrowSmRight } from "react-icons/hi";
// import { FaRegPaperPlane } from "react-icons/fa";
import Brass from "../../assets/svg/business/brass.svg";
import Ios from "../../assets/svg/business/ios.svg";
import Android from "../../assets/svg/business/android.svg"

function Footer() {
    return (
        <footer id='footer'>
            <div className="bg-black px-2 py-10 flex justify-center">
                <div className="grid lg:grid-cols-7 xl:grid-cols-7 md:grid-cols-7 xs:grid-cols-1 w-full ">
                        <div className="text-center p-6 xl:flex justify-center ">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-500'>Industry</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-white hover:text-primary font-poppins cursor-pointer'>Retail Businesses</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Internet Companies</span>
                                </li>                                
                            </ul>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center ">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-500'>Product</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-white hover:text-primary font-poppins cursor-pointer'>Brass Capital</span>
                                </li>
                            </ul>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center ">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-500'>About</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-white hover:text-primary font-poppins cursor-pointer'>Customers</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Company</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Why Brass</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Press resources</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Careers</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center ">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-500'>Support</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-white hover:text-primary font-poppins cursor-pointer'>Blog</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Guides</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Help</span>
                                </li>                                
                            </ul>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center ">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-500'>Legal</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-white hover:text-primary font-poppins cursor-pointer'>Terms of service</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Privacy Policy</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Capital TOS</span>
                                </li>
                            </ul>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center ">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-500'>Follow</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-white hover:text-primary font-poppins cursor-pointer'>LinkedIn</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>Instagram</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>YouTube</span>
                                </li>
                            </ul>
                        </div>
                        <div className=" text-center p-6 xl:flex justify-center">
                            <ul className=''>
                                <h2 className='text-start font-poppins font-semibold mb-6 text-xl text-slate-500'>Contact</h2>

                                <li className='mb-4 text-start'>
                                    <span className=' text-white hover:text-primary font-poppins cursor-pointer'>01-700-2000</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>sales@trybrass.com</span>
                                </li>
                                <li className='mb-4 text-start'>
                                    <span className='text-white hover:text-primary font-poppins cursor-pointer'>help@trybrass.com</span>
                                </li>
                            </ul>
                        </div>                   
                </div>
            </div>
            <div className="bg-black pt-[12rem] md:px-20 xs:px-5  py-3 flex md:flex-col justify-around xs:flex-col ">
                {/* <p className="text-gray-800 font-poppins text-sm">© Copyright {new Date().getFullYear()} Techevin. All rights reserved</p> */}
                <div className="flex">
                    <div className="block ">
                        <div className="">
                        <div className="">
                            <img
                            src={Brass}
                            alt="Techcrunch"
                            className="z-10 relative"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="text-white">Big starts Small</div>
                </div>
                <div className="mt-5"> 
                    <div className="text-white">Available on</div>
                </div>

                <div className="flex justify-between md:w-1/4 xs:w-full">
                    <div className="flex mt-4 bg-slate-900 rounded-md p-2 w-[9rem]">
                        <div className="block ">
                            <div className="">
                            <div className="">
                                <img
                                src={Android}
                                alt="Techcrunch"
                                className="z-10 relative"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="text-white ml-6">Android</div>
                    </div>
                    
                    <div className="flex mt-4 bg-slate-900 rounded-md p-2 w-[6rem]">
                        <div className="block ">
                            <div className="">
                            <div className="">
                                <img
                                src={Ios}
                                alt="Techcrunch"
                                className="z-10 relative"
                                />
                            </div>
                            </div>
                        </div>
                        <div className="text-white ml-6">iOS</div>
                    </div>
                </div>
                <div className='text-white font-poppins cursor-pointer text-sm pt-5'>
                    Banking services backed by Bancorp MFB & FCMB and regulated by the Central Bank of Nigeria.  
                </div><div className='text-white font-poppins cursor-pointer text-sm pb-5'>
                    Brass Technology Nigeria Limited, DBA: Brass is a Brass Technologies, Inc company. 
                </div>

            </div>
        </footer>
    );
}

export default Footer