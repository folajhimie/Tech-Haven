// import React from 'react'
import Check from "../../assets/check.svg"
import { Link } from "react-router-dom"

function Verification() {
    return (
        <div className='bg-[#F4F7FA] h-screen'>
            <div className="grid md:grid-cols-1 xs:grid-cols-1 justify-center items-center flex-row h-screen">
                <div className='flex justify-start items-start bg-[#F4F7FA] md:flex sm:hidden xs:hidden '>
                    <div className=" w-full h-screen flex items-center justify-center" >

                        <div className=" ">
                            <div className="flex flex-row items-center justify-center md:mt-3 xs:mt-0">
                                <div className="">
                                    <img src={Check} alt="" className="" />
                                </div>
                            </div>
                            <div className="  w-full flex flex-row items-center justify-center text-center md:mt-10 xs:mt-5 text-2xl font-semibold text-[#474747]">
                                Account Verified Successfully
                            </div>
                            <div className="w-full flex flex-row items-center text-center md:mt-5 xs:mt-3 text-md font-semibold text-[#878787]">
                                Lorem ipsum dolor sit amet consectetur. Luctus amet.
                            </div>

                            <div className="justify-center items-center w-full flex mt-5">
                                <Link to="/admin/dashboard">
                                    <button className="bg-[#61297F] text-white font-semibold rounded-lg px-20 py-3 justify-center items-center  flex">Login</button>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Verification