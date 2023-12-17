// import React from 'react'
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import CardThree from "./CardThree";
import CardFour from "./CardFour";
import CardFive from "./CardFive";
import PointOne from "./PointOne";
import PointTwo from "./PointTwo";

const DefaultBoard = () => {
  return (
    <div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7">
        <CardTwo />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7 mt-5">
        <CardOne />
      </div>

      <div className="grid md:grid-cols-2 md:gap-6 xl:grid-cols-7 xl:gap-3 mt-5 xs:gap-0">
        <div className=" w-full col-span-3">
          <CardThree />
        </div>
        <div className=" w-full md:col-span-2 xs:col-span-3 md:mt-0 xs:mt-3 ">
          <CardFour />
        </div>
        <div className=" w-full md:col-span-2 xs:col-span-3 md:mt-0 xs:mt-3">
          <CardFive />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 mt-5">
        <div className=" w-full ">
          <PointOne />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7 mt-5">
        <PointTwo />
      </div>
    </div>
  )
}

export default DefaultBoard