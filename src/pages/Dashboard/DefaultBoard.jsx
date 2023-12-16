// import React from 'react'
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

const DefaultBoard = () => {
  return (
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7">
          <CardTwo />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-6 xl:grid-cols-1 2xl:gap-7 mt-5">
          <CardOne />
        </div>

      </div>

  )
}

export default DefaultBoard