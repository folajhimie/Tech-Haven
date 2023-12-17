import RightArrow from "../../assets/arrowRight.svg";
import Vector from "../../assets/vector.svg";
import Send from "../../assets/send.svg";

const CardTwo = () => {
    return (
        <div className="grid items-center md:grid-cols-5 sm:grid-cols-1 gap-3 flex-row rounded-lg border border-stroke bg-white py-3 shadow-md w-full">
            <div className="grid items-center md:grid-cols-2 sm:grid-cols-1 gap-3 flex-row w-full col-span-3">
                <div className="flex flex-col px-4 w-full">
                    <div className="font-medium text-xs">
                        Your balance is equivalent
                    </div>
                    <div className="font-semibold text-xl w-full justify-between flex flex-row mt-2">
                        <div>
                            $0.00
                        </div>
                        <div className="bg-[#F6F7F9] rounded-lg p-1 flex items-center justify-center">
                            <div>
                                <div className="flex  ">
                                    <img src={RightArrow} alt="" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="text-slate-500 text-xs ml-3">USD</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col px-4 w-full">
                    <div>
                        <div className="font-medium text-xs text-slate-500">
                            User ID
                        </div>
                        <div className="font-medium text-xs text-slate-900 flex flex-row mt-2">
                            <div>8182736776485</div>
                            <div className="font-medium text-xs text-slate-500 ml-5">Copy</div>

                        </div>

                    </div>
                    <div className=" font-semibold text-xl w-full mt-2 grid md:grid-cols-2 xs:grid-cols-2 xs:gap-5 md:gap-10">
                        <div className="px-2 py-1 bg-[#F7D800] rounded-lg flex flex-row justify-between items-center ">
                            <div className="">
                                <div className="flex  ">
                                    <img src={Vector} alt="" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="font-medium text-xs text-slate-900 flex flex-row">Unverified</div>
                        </div>
                        <div className="flex items-center justify-center ">
                            <div className="font-medium text-xs text-slate-900 flex flex-col mt-2 justify-start">
                                <div className="font-medium text-xs text-slate-500">VIP Level</div>
                                <div className="text-slate-900">Rookie User</div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid md:grid-cols-1 xs:grid-cols-1 flex-row w-full xs:mt-5 md:mt-0 md:col-span-2 xs:col-span-3 h-full ">
                <div className="grid md:grid-cols-4 xs:grid-cols-2 xs:gap-10 md:gap-5 px-4 w-full">
                    <div className="py-1 bg-[#F6F7F9] rounded-lg flex flex-row justify-center items-center w-full h-10 border-[1px] border-gray-200">
                        <div className="font-medium text-xs text-slate-900">Buy</div>
                    </div>
                    <div className="py-1 bg-[#F6F7F9] rounded-lg flex flex-row justify-center items-center w-full h-10 border-[1px] border-gray-200">
                        <div className="font-medium text-xs text-slate-900">Sell</div>
                    </div>
                    <div className="py-1 bg-[#F6F7F9] rounded-lg flex flex-row justify-center items-center w-full h-10 border-[1px] border-gray-200">
                        <div className="font-medium text-xs text-slate-900">Receive</div>
                    </div>
                    <div className="px-2 py-1 bg-[#F6F7F9] rounded-lg flex flex-row justify-between items-center h-10 border-[1px] border-gray-200">
                        <div className="font-medium text-xs text-slate-900 flex flex-row">Send</div>
                        <div className="">
                            <div className="flex  ">
                                <img src={Send} alt="" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CardTwo;
