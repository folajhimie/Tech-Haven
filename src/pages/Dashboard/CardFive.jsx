
import Frame from "../../assets/frame.svg"

function CardFive() {
    return (
        <div className="h-full px-3 items-center grid md:grid-cols-2 xs:grid-cols-1  flex-row w-full rounded-lg border bg-white shadow-md">
            <div className="flex md:flex-col xs:flex-row w-full justify-between h-full  py-2">
                <div className="flex flex-row items-center md:mt-3 xs:mt-0">
                    <div className="">
                        <img src={Frame} alt="" className="" />
                    </div>
                </div>
                <div className="flex flex-col font-medium text-xs text-slate-900  md:mt-2 xs:mt-0 justify-start">
                    <div className="font-medium text-xs text-slate-400 mr-1"> Total transactions</div>
                    <div className="font-medium text-xs text-slate-400 mr-1 mt-2"> This Week</div>
                    {/* <div className="text-slate-900">$100</div> */}
                </div>
            </div>
            <div className="h-full flex flex-col text-end">
                
                <div className="flex flex-col w-full">
                <div className="font-medium text-slate-900 mr-1 mt-2 text-2xl">0</div>
                </div>
            </div>
        </div>
    );
}

export default CardFive