// import React from 'react'
import ArrowDown from "../../assets/arrowDown.svg";
import ArrowUp from "../../assets/arrowUp.svg";

const PointOne = () => {
  return (
    <div className=" flex-row w-full bg-white grid md:grid-cols-5 xs:grid-cols-1 px-2 py-1 rounded-lg border shadow-md">
        <div className=" flex flex-col px-3 py-3 w-full justify-center items-center ">
            <div className="md:w-4/5 xs:w-full h-full flex flex-row justify-center items-center">
                <div className="flex justify-between items-center h-full w-full">
                    <div className="text-xs text-slate-900 font-medium flex justify-center items-center h-full">
                        BTC
                    </div>
                    <div className="text-rose-600 text-xs font-medium flex justify-center items-center h-full">
                        -0.45%
                    </div>
                    <div className="">
                        <div className="flex flex-row items-center md:mt-3 xs:mt-0 h-full rounded-lg bg-slate-300 text-xs p-1">
                            <div className="">
                                <img src={ArrowDown} alt="" className="w-4 h-4" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="w-full h-full flex flex-row justify-center items-center">
                <div className="flex justify-center items-center h-full ">
                    <div className="text-3xl text-slate-900 font-medium flex justify-center items-center h-full ">
                        41,302.02
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col px-3 py-3 w-full justify-center items-center ">
            <div className="md:w-4/5 xs:w-full  h-full flex flex-row justify-center items-center">
                <div className="flex justify-between items-center h-full w-full">
                    <div className="text-xs text-slate-900 font-medium flex justify-center items-center h-full ">
                        ETH/USDT
                    </div>
                    <div className=" text-rose-600 text-xs font-medium flex justify-center items-center h-full ">
                        -1.75%
                    </div>
                    <div className="">
                        <div className="flex flex-row items-center md:mt-3 xs:mt-0 h-full rounded-lg bg-slate-300 text-xs p-1">
                            <div className="">
                                <img src={ArrowDown} alt="" className="w-4 h-4" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="w-full h-full flex flex-row justify-center items-center mt-4">
                <div className="flex justify-center items-center h-full">
                    <div className="text-3xl text-slate-900 font-medium flex justify-center items-center h-full ">
                        2,272.21
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col px-3 py-3 w-full justify-center items-center">
            <div className="md:w-4/5 xs:w-full h-full flex flex-row justify-center items-center">
                <div className="flex justify-between items-center h-full w-full">
                    <div className="text-xs text-slate-900 font-medium flex justify-center items-center h-full">
                        BNB
                    </div>
                    <div className="text-lime-600 text-xs font-medium flex justify-center items-center h-full">
                        +2.35%
                    </div>
                    <div className="">
                        <div className="flex flex-row items-center md:mt-3 xs:mt-0 h-full rounded-lg bg-slate-300 text-xs p-1">
                            <div className="">
                                <img src={ArrowUp} alt="" className="w-4 h-4" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="w-full h-full flex flex-row justify-center items-center">
                <div className="flex justify-center items-center h-full">
                    <div className="text-3xl text-slate-900 font-medium flex justify-center items-center h-full ">
                        253.81
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col px-3 py-3 w-full justify-center items-center">
            <div className="md:w-4/5 xs:w-full h-full flex flex-row justify-center items-center">
                <div className="flex justify-between items-center h-full w-full">
                    <div className="text-xs text-slate-900 font-medium flex justify-center items-center h-full">
                        1000SATS
                    </div>
                    <div className="text-lime-600 text-xs font-medium flex justify-center items-center h-full">
                        +2.72%
                    </div>
                    <div className="">
                        <div className="flex flex-row items-center md:mt-3 xs:mt-0 h-full rounded-lg bg-slate-300 text-xs p-1">
                            <div className="">
                                <img src={ArrowUp} alt="" className="w-4 h-4" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="w-full h-full flex flex-row justify-center items-center">
                <div className="flex justify-center items-center h-full">
                    <div className="text-3xl text-slate-900 font-medium flex justify-center items-center h-full ">
                        113.81
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col px-3 py-3 w-full justify-center items-center">
            <div className="md:w-4/5 xs:w-full h-full flex flex-row justify-center items-center">
                <div className="flex justify-between items-center h-full w-full">
                    <div className="text-xs text-slate-900 font-medium flex justify-center items-center h-full">
                        SOL
                    </div>
                    <div className="text-rose-600 text-xs font-medium flex justify-center items-center h-full">
                        -4.42%
                    </div>
                    <div className="">
                        <div className="flex flex-row items-center md:mt-3 xs:mt-0 h-full rounded-lg bg-slate-300 text-xs p-1">
                            <div className="">
                                <img src={ArrowDown} alt="" className="w-4 h-4" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="w-full h-full flex flex-row justify-center items-center">
                <div className="flex justify-center items-center h-full">
                    <div className="text-3xl text-slate-900 font-medium flex justify-center items-center h-full ">
                        268.49.81
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PointOne