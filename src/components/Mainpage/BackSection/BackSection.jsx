import lock from '../../../assets/svg/lock.svg';
import shield from '../../../assets/svg/shield.svg';
import holes from '../../../assets/svg/holes.svg';
import video from '../../../assets/svg/video.svg';
import blueArrow from '../../../assets/svg/blue-arrow.svg';
import lightArrow from '../../../assets/svg/lightArrow.svg';
import greenArrow from '../../../assets/svg/green-arrow.svg';
import redArrow from '../../../assets/svg/red-arrow.svg';
import { Link } from 'react-router-dom';
import { Fade } from "react-reveal";





const BackSection = () => {
    return (
        <section id='trading' className="">
            <div className='bg-[#e0f0ff] py-20 lg:px-6 sm:px-0'>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-1 xl:grid-cols-2 justify-between">
                    <Fade left delay={1000}>
                        <div className=' max-w-lg flex justify-center items-center flex-col lg:p-10 sm:p-2'>
                            <h2 className="font-bold md:text-5xl xs:text-3xl leading-[4rem] mb-6 font-poppins">
                                4 ways to build your savings
                            </h2>

                            {/* <div className="mb-6">
                                <h3 className='font-semibold text-xl mb-4'>Customer Support</h3>
                                <p className='text-gray-500 font-poppins'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                            </div> */}
                            <div className='font-light text-[#353535] text-[16.5px] leading-[27.2px]'>
                                Earn 5%-15% when you save with any of these PiggyVest plans.
                            </div>

                            <div className='my-8 flex flex-start w-full'>

                                <div className="my-10">
                                    <div
                                        style={{
                                            transform:
                                                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d",
                                        }}
                                        className="pl-[10px] relative z-10 inline-block"
                                    >
                                        <Link
                                            to="/auth"
                                            style={{ boxShadow: "-7px 7px 0 0 #000" }}
                                            className="flex justify-center items-center bg-white py-[10px] px-[30px] w-full h-full border-[1px] border-slate-700"
                                        >
                                            <div>
                                                <div className="text-slate-800 text-sm font-semibold">
                                                    Learn More
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade right delay={1000}>
                        <div className='flex md:justify-center md:flex-row md:items-center mdl:justify-end mdl:items-center '>
                            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-10'>

                                <div className='bg-[#f9f9f9] rounded-lg p-3 max-w-[352px]'>
                                    <div className='flex mr-4 w-fit mb-7'>
                                        <img alt="" src={shield} className="text-[1px] w-8 h-8" />
                                    </div>

                                    <div>
                                        <div className='text-zinc-800 font-semibold text-sm'>
                                            Faster means of making payments:
                                        </div>
                                        <div className='font-light text-[#353535] text-xs leading-[27.2px]'>
                                            Build a dedicated savings faster on your terms automatically or manually.
                                        </div>
                                    </div>

                                    <div className='flex mt-12'>
                                        <img alt="" src={blueArrow} className="text-[1px] w-5 h-5" />
                                        <span className='ml-3 text-sm text-zinc-800'>Piggy Vest</span>
                                    </div>
                                </div>

                                <div className='bg-[#f9f9f9] rounded-lg p-3 max-w-[352px]'>
                                    <div className='flex mr-4 w-fit mb-7'>
                                        <img alt="" src={lock} className="text-[1px] w-8 h-8" />
                                    </div>

                                    <div>
                                        <div className='text-zinc-800 font-semibold text-sm'>
                                            Smart Budgeting system:
                                        </div>
                                        <div className='font-light text-[#353535] text-xs leading-[27.2px]'>
                                            Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit.
                                        </div>
                                    </div>

                                    <div className='flex mt-12'>
                                        <img alt="" src={lightArrow} className="text-[1px] w-5 h-5" />
                                        <span className='ml-3 text-sm text-zinc-800'>Safelock</span>
                                    </div>
                                </div>

                                <div className='bg-[#f9f9f9]  rounded-lg p-3 max-w-[352px]'>
                                    <div className='flex mr-4 w-fit mb-7'>
                                        <img alt="" src={holes} className="text-[1px] w-8 h-8" />
                                    </div>

                                    <div>
                                        <div className='text-zinc-800 font-semibold text-sm'>
                                            Cheaper Boat Ticket Fee
                                        </div>
                                        <div className='font-light text-[#353535] text-xs leading-[27.2px]'>
                                            Reach all your savings goals faster. Save towards multiple goals on your own or with a group.
                                        </div>
                                    </div>

                                    <div className='flex mt-12'>
                                        <img alt="" src={greenArrow} className="text-[1px] w-5 h-5" />
                                        <span className='ml-3 text-sm text-zinc-800'>Target Savings</span>
                                    </div>
                                </div>

                                <div className='bg-[#f9f9f9]  rounded-lg p-3 max-w-[352px]'>
                                    <div className='flex mr-4 w-fit mb-7'>
                                        <img alt="" src={video} className="text-[1px] w-8 h-8" />
                                    </div>

                                    <div>
                                        <div className='text-zinc-800 font-semibold text-sm'>
                                            Flexible Savings
                                        </div>
                                        <div className='font-light text-[#353535] text-xs leading-[27.2px]'>
                                            Save, transfer, withdraw, manage and organise your money for free at any time.
                                        </div>
                                    </div>

                                    <div className='flex mt-12'>
                                        <img alt="" src={redArrow} className="text-[1px] w-5 h-5" />
                                        <span className='ml-3 text-sm text-zinc-800'>Flex Naira</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BackSection