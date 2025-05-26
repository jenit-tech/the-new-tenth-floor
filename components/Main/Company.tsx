import React from 'react'
import CompanyRightSection from '../sub/CompanyRightSection'

const Company = () => {
  return (
    <div id="company-section" className="pt-17 md:pt-20  bg-gradient-to-b from-purple-50 via-white to-purple-50 ">
      <div className="px-8  md:px-10 flex flex-col lg:flex-row lg:justify-center lg:items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 m-5 pr-7 md:pr-0">
          <div className="sticky top-60">
            <h2 className=" font-roboto font-bold text-[28px] md:text-[32px] leading-[100%]  lg:leading-[38px]   align-middle text-[#570B97] pb-1">
              ACROSS REGIONS,
            </h2>
            <h2 className=" font-roboto font-bold text-[28px] md:text-[32px] leading-[100%] lg:leading-[38px]   align-middle text-[#570B97] pb-4">
              ACROSS INDUSTRIES
            </h2>
            <p className="font-medium text-[14px] md:text-[16px] leading-[140%]   tracking-[0.01em] align-middle font-helveticaNeue text-[#570B97]">
              We have worked with clients across continents and industries, mining insights hiding in plain sight.
            </p>
          </div>
        </div>

        <div className='p-0 md:p-10 '>
          <CompanyRightSection />
        </div>
      </div>
     </div>

  )
}

export default Company