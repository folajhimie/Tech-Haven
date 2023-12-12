import { Link } from 'react-router-dom';
import { Fade } from "react-reveal";





const BottomSection = () => {
    return (
        <section id='trading' className="w-full">
            <div className='bg-black py-10 lg:px-1 sm:px-0 '>
                <div className="justify-center items-center ">
                    <div className="flex">
                        <Fade left delay={1000}>
                            <div className='bg-black w-full flex justify-center items-center flex-col lg:p-10 sm:p-2'>
                                <h2 className="text-white text-center font-bold md:text-5xl xs:text-3xl mb-6 font-poppins">
                                    Get started for free in 10 minutes
                                </h2>

                                <div className='text-white font-light text-[16.5px] leading-[27.2px] px-3'>
                                    Get all the best financial products for your business growth for free. Open the last current account you will ever need for your business
                                </div>

                                <div className='my-8  flex-start w-full flex justify-center items-center'>
                                    <Link
                                        to="/auth"
                                        style={{ boxShadow: "-7px 7px 0 0 #000" }}
                                        className=" bg-[#61297f] py-[10px] px-[30px] md:w-1/5 xs:w-4/5 h-full border-[1px] border-slate-700"
                                    >
                                        <div>
                                            <div className="text-white text-sm font-semibold text-center">
                                                Get Started in minutes
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Fade>
                    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BottomSection