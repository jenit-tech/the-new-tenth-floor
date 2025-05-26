import React from 'react'
import RightSideDataTraining from '../sub/RightSideDataTraining'

const DataTraining = () => {
  return (
    <div id='data-training' className=" pt-17 md:pt-20  bg-gradient-to-b from-purple-50 via-white to-purple-50 ">
      <div className="px-8  md:px-10 flex flex-col lg:flex-row lg:justify-center lg:items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 m-5 pr-7 md:pr-0">
          <h2 className="font-helveticaNeue font-bold text-[28px] md:text-[32px] leading-[1.2] tracking-[0.01em] text-[#570B97] mb-4">
            We preach what we practice: <span className="hidden sm:inline"> <br /></span> Data Training from Real World <span className="hidden sm:inline"> <br /></span> Practitioners
          </h2>
          <p className="font-helveticaNeue font-normal text-[14px] md:text-[16px] leading-[1.4] tracking-[0.01em] text-[#570B97] mt-4">
            No Code, Low Code, Data-Driven Insights is a dynamic training program designed <span className="hidden sm:inline"> <br /></span> to equip managers with essential tools for making informed, day-to-day decisions<span className="hidden sm:inline"> <br /></span> with ease and efficiency.
          </p>
        </div>

        <div className="w-full lg:w-1/2 p-0 md:p-8 px-5 ">
          <RightSideDataTraining />
        </div>

      </div>
    </div>


  )
}

export default DataTraining
