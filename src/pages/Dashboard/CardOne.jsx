


const CardOne = () => {
  return (
    <div className="grid items-center md:grid-cols-5 xs:grid-cols-1 gap-3 flex-row w-full">
      <div className="grid items-center  flex-row md:col-span-3 xs:col-span-3 rounded-lg border border-stroke bg-white py-3 shadow-md w-full">
        <div className="flex flex-row w-full justify-around">
          <div className="flex flex-col px-4 rounded-full bg-[#61297F] p-2 text-white ">
            1
          </div>
          <div className="flex flex-col px-4 rounded-full bg-[#e9e7eb] p-2 text-slate-500 ">
            2
          </div>
           
        </div>
      </div>
      <div className="justify-between grid md:grid-cols-2 xs:grid-cols-1 flex-row w-full xs:mt-5 md:mt-0 md:col-span-2 xs:col-span-3 h-full rounded-lg border-[1px] border-stroke bg-white py-3 shadow-md">
        <div className="flex flex-col px-3 h-full   justify-start">
          <div className="text-xs font-medium text-slate-500">Bought Shiba Inu</div>
          <div className="text-xs text-slate-400 mt-1">Yesterday</div>

        </div>
        <div className="flex flex-col px-3 h-full   ">
          <div className="text-xs font-medium text-slate-500 flex w-full justify-end">
            
            <div className="text-xs text-slate-400 ">Avg</div>
            <div className="text-xs text-slate-600 ml-2">$0.000037</div>
          </div>
          <div className="text-xs font-medium text-slate-500 flex w-full justify-end mt-1">
            
            <div className="text-xs text-slate-600 ">22,013,222 </div>
            <div className="text-xs text-slate-400 ml-2">Shib</div>
          </div>

        </div>
        


      </div>




    </div>
  );
};

export default CardOne;
