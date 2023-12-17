// import React from 'react'
import LongBitcoin from "../../assets/longBitcoin.svg";
import Card from "../../assets/card.svg";

const PointTwo = () => {
    return (
        <div className="grid items-center md:grid-cols-5 xs:grid-cols-1 gap-3 flex-row w-full">
            <div className="grid items-center flex-row md:col-span-3 xs:col-span-3">
                <div>
                    <div className="flex  ">
                        <img src={LongBitcoin} alt="" className="" />
                    </div>
                </div>
            </div>
            <div className="justify-between grid md:grid-cols-2 xs:grid-cols-1 flex-row w-full xs:mt-5 md:mt-0 md:col-span-2 xs:col-span-3 h-full">
                <div className="grid items-center justify-center flex-row md:col-span-3 xs:col-span-3">
                    <div>
                        <div className="flex  ">
                            <img src={Card} alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PointTwo