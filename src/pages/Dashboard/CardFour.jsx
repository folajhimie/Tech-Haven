// import React from 'react'
import Ticket from "../../assets/ticket.svg";
import Pending from "../../assets/pending.svg";
import Coin from "../../assets/coin.svg"

function CardFour() {
    return (
            <div className="h-full px-3 items-center grid md:grid-cols-2 xs:grid-cols-1  flex-row w-full rounded-lg border bg-white shadow-md">
                <div className="h-full flex md:flex-col xs:flex-row justify-between">
                    <div>
                        <div className="flex md:flex-col xs:flex-row w-full">
                            <div className="font-medium text-xs text-slate-900 flex md:mt-2 xs:mt-0 justify-start">
                                <div className="font-medium text-xs text-slate-500 mr-1"> Deposit</div>
                                <div className="text-slate-900">$100</div>
                            </div>
                            <div className="flex flex-row items-center md:mt-3 xs:mt-0">
                                <div className="">
                                    <img src={Ticket} alt="" className="" />
                                </div>
                                <div className="font-medium text-xs text-slate-500 ml-1 mr-1"> 
                                    30 
                                    <span className="ml-1">USDT</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:mb-3 xs:mb-0">
                        <div className="flex flex-row items-center">
                            <div className="">
                                <img src={Pending} alt="" />
                            </div>
                            <div className="font-medium text-xs text-slate-500 ml-1 mr-1"> 
                                Pending 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-full flex flex-col">
                    
                    <div className="flex flex-col w-full ">
                        <div className="flex flex-row items-center">
                            <div className="">
                                <img src={Coin} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        // <div className="">
        // </div>
    );
}

export default CardFour