// import React from 'react'
import Gift from "../../assets/gift.svg"

const CardThree = () => {
    return (
        <div className="">
            <div className="grid items-center md:grid-cols-4 sm:grid-cols-1 gap-3 flex-row w-full col-span-2 rounded-lg border border-stroke bg-white shadow-md ">
                <div className="flex flex-col px-4 w-full col-span-2">
                    <div className="font-medium text-xs text-slate-400">
                        Verify your Identity to get 
                    </div>
                    <div className="font-medium text-xs text-slate-400">
                        <span className="text-slate-900">2- USDT</span> trading fee
                    </div>
                    <div className="font-medium text-xs text-slate-400">
                        rebate voucher
                    </div>
                    <div className="font-semibold text-xl w-full justify-between flex flex-row mt-6">
                        <div className="text-white bg-[#61297f] px-6 py-2 rounded-lg text-xs">
                            Verify Now
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-4 w-full col-span-2">
                    
                    <div className="font-semibold text-xl w-full mt-2">
                        <div className="">
                            <div className="flex items-center justify-between w-full">
                                <div className="font-medium text-xs text-slate-900 flex mt-2 justify-start">
                                    <div className="text-slate-900 mr-1">15</div>
                                    <div className="font-medium text-xs text-slate-500"> Days</div>

                                </div>
                                <div className="font-medium text-xs text-slate-900 flex mt-2 justify-start">
                                    <div className="text-slate-900 mr-1">23</div>
                                    <div className="font-medium text-xs text-slate-500"> Hours</div>

                                </div>
                                <div className="font-medium text-xs text-slate-900 flex mt-2 justify-start">
                                    <div className="text-slate-900 mr-1">23</div>
                                    <div className="font-medium text-xs text-slate-500"> Minutes</div>

                                </div>
                                
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                <div className="">
                                    <img src={Gift} alt="" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default CardThree