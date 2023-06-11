// import React from 'react';
import { Fade } from 'react-reveal';
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// import AirPlane from '../../assets/images/Freight.mp4'
import { BiBus } from "react-icons/bi";
import { GiCommercialAirplane, GiDeliveryDrone } from "react-icons/gi";
import { BsBuildingGear, BsDatabaseCheck } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbTruckDelivery, TbBuildingWarehouse } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { VscServer } from "react-icons/vsc";



const ServiceSection = () => {
    return (
        <section id="home" className="mx-auto py-32 px-8">
            <div className="">
                <Fade right>
                    <div className='flex justify-center '>
                        <div className='flex justify-center flex-col w-full'>
                            <p className="text-slate-900 mb-6 font-poppins text-3xl font-semibold flex justify-center w-full">We provide the best Services </p>
                            <div className='flex'>
                                <div className=' text-slate-400 mb-6 font-poppins text-md font-semibold flex justify-center w-full'>
                                    Our global Logistics, expertise, advanced supply chain technology. 
                                    and customized logistics solutions will assist you in analyzing. <br/>
                                    developing, and implementing and successful end-to-end supply chain 
                                    Management strategies
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <div className='mt-20 xl:px-32 md:px-12 xs:px-2'>
                    <Fade left>
                        <ul className='grid lg:grid-cols-4 items-center gap-10 md:grid-cols-2'>
                            {/* 1st Row  */}
                            <li>
                                <div className='bg-rose-600 rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer '>
                                    <BiBus />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Local Moving</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-secondary rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <GiCommercialAirplane />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>International Shipping</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-pink-600 rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <BsBuildingGear />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Corporate Moving</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-third rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <TbBuildingWarehouse />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Safe WareHousing</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>

                            {/* 2nd Row  */}
                            <li>
                                <div className='bg-primary rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <FaRegPaperPlane />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Long Distance Moving</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-sky-600 rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <IoSpeedometerOutline />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Instant Courier</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-zinc-600 rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <GiDeliveryDrone />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Speedy Delivery</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-orange-600 rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>                                  
                                    <VscServer />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Quick Request</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>

                            {/* 3rd Row  */}
                            <li>
                                <div className='bg-purple-600 rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <FiMonitor />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Track Monitoring</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-amber-600 rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <MdPayment />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Easy Payment</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-[#ff4560] rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <BsDatabaseCheck />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Data App Management</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                            <li>
                                <div className='bg-[#28a745] rounded-lg text-white p-2 text-3xl w-10 flex justify-center hover:scale-110 cursor-pointer'>
                                    <TbTruckDelivery />
                                </div>
                                <div className='mb-3 text-start mt-5 text-md font-semibold'>Logistics</div>
                                <div className='text-start text-xs'> Our global Logistics, expertise, advanced supply chain technology. </div>
                            </li>
                        </ul>
                    </Fade>

                </div>

            </div>
        </section >
    )
}

export default ServiceSection