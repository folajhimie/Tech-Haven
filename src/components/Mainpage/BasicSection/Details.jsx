/* eslint-disable react/prop-types */
// import React from 'react'



const Details = ({item}) => {
    return (
        <div className="bg-transparent xl:w-96 xsl:w-80 lg:w-96 md:w-96 sm:w-80 h-full rounded-xl hover:scale-105 transition-all duration-300">
            <div className='rounded-b-2xl p-6 flex justify-around flex-row'>
                <div className='flex flex-row mb-5  w-11 mr-10'>
                    <span className={` mr-5 text-gray-500 p-3 rounded-md hover:scale-105 transition-all duration-300 `}>
                        <div className='text-5xl font-light w-20'>{item.icon}</div>
                    </span>
                </div>
                <div>
                    <div className='text-start mb-6'>
                        <div className="text-[#254664] md:text-lg xs:text-lg sm:text-[1rem]">{item.title}</div>
                        <div className="text-xs ">{item.font}</div>
                    </div>
                    <div className='text-[#4a647a] md:text-xs text-start xs:text-xs '>
                        <span className="desc">{item.desc}</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Details