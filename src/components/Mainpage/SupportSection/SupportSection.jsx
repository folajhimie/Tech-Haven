// import React from 'react'
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import costSave from "../../../assets/wrapper/costsave.svg";
import drone from "../../../assets/wrapper/drone.svg";
import order from "../../../assets/wrapper/order.svg";
import support from "../../../assets/wrapper/support.svg";

function SupportSection() {
    return (
        <div>
            <section
                id="careers"
                className=" lg:px-8 md:px-0 py-12 font-poppins bg-[#f4f7ff] "
            >
                <div className="grid md:grid-cols-2 gap-14">
                    <div className="flex justify-center items-center mr-6 px-6">
                        <div className="max-w-md">
                            <h2 className="font-poppins font-semibold xl:text-4xl mb-6 leading-normal text-start text-slate-800 xs:text-3xl lg:text-3xl">
                                Why Tech Haven
                            </h2>
                            <p className="text-gray-700 text-start font-poppins xl:text-xl xs:text-xs my-4">
                                We are an impact-driven financial technology platform that creates financial solutions for a community of individuals and organizations that are committed to long-term growth and financial freedom.
                            </p>

                            <div className="my-12">
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
                                        className="flex justify-center items-center bg-white py-[10px] px-[36px] w-full h-full border-[1px] border-slate-700"
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
                    <div className="">
                        <Fade left delay={1000}>
                            <div className="justify-between gap-14 grid lg:grid-cols-2 xs:grid-cols-1 pt-0">

                                <div>
                                    <div className="flex justify-between  mb-5">
                                        <div className="flex mr-5 w-48 h-48  justify-center">
                                            <img src={support} alt="" className="lg:w-1/2 md:w-1/2 xs:w-1/2" />
                                        </div>
                                        <div className="flex flex-col justify-evenly">
                                            <div className="text-xl font-semibold mb-1 flex items-center ">We are flexible</div>

                                            <div className="mb-2">
                                                Aliquam porta nisl dolor, olestie pellentesque elit
                                                molestie in.
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex justify-between ">
                                        <div className="flex mr-5 w-48 h-48  justify-center">
                                            <img src={drone} alt="" className="lg:w-1/2 md:w-1/2 xs:w-1/2" />
                                        </div>
                                        <div className="flex flex-col justify-evenly">
                                            <div className="text-xl font-semibold mb-2 flex items-center ">We are committed to you</div>

                                            <div className="mb-2">
                                                Aliquam porta nisl dolor, olestie pellentesque elit
                                                molestie in.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:mt-20">
                                    <div className="flex justify-between  mb-10">
                                        <div className="flex mr-5 w-48 h-48  justify-center">
                                            <img src={order} alt="" className="lg:w-1/2 md:w-1/2 xs:w-1/2 " />
                                        </div>
                                        <div className="flex flex-col justify-evenly">
                                            <div className="text-xl font-semibold mb-2 flex items-center ">We are transparent</div>

                                            <div className="mb-2">
                                                Aliquam porta nisl dolor, olestie pellentesque elit
                                                molestie in.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between ">
                                        <div className="flex mr-5 w-48 h-48  justify-center">
                                            <img src={costSave} alt="" className="lg:w-1/2 md:w-1/2 xs:w-1/2" />
                                        </div>
                                        <div className="flex flex-col justify-evenly">
                                            <div className="text-xl font-semibold mb-2 flex items-center ">We are here to help</div>

                                            <div className="mb-2">
                                                Aliquam porta nisl dolor, olestie pellentesque elit
                                                molestie in.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SupportSection;
