import React from 'react'
import AboutUsRightSection from '../sub/AboutUsRightSection' // Adjust path as needed

const AboutUs = () => {
  return (
    <div id="about" className=" pt-17 md:pt-40  bg-gradient-to-b from-purple-50 via-white to-purple-50 ">
      <div className="px-8  md:px-11 flex flex-col lg:flex-row  pb-15 md:pb-30 ">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 m-5 pr-7 md:pr-0">
          <div className="sticky top-80">
            <h2 className="font-heleveticaNeue font-bold text-[28px] md:text-[32px] leading-[1.2] tracking-[0.01em] align-middle text-[#570B97] whitespace-pre-line">
              Established in 2015 in Singapore, The Tenth Floor is led by professionals who bring experience form diverse fields. </h2>
            <p className="font-heleveticaNeue font-normal text-[14px] md:text-[16px] leading-[1.4] tracking-[0.01em] text-[#570B97] mt-4 whitespace-pre-line">
              It is this unique mix and collaborative thinking that allows us to see data from multiple perspectives, uncover insights and transform complex information into creative yet clear business solutions.  </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-0 md:p-10 px-5">
          <AboutUsRightSection />
        </div>
      </div>
    </div>

  )
}

export default AboutUs