import React from 'react'
import RightSideBox from '../sub/RightSideBox'


const HomePage = () => {

  return (
    <>

      <div id="home" className="bg-gradient-to-b from-purple-50 via-white to-purple-50 z-50">
        <div className="px-8 md:px-10 flex flex-col lg:flex-row  ">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 m-5 pr-7 md:pr-0  pt-20  md:pt-50 ">
            <div className="sticky top-60">
              <h2 className="font-helveticaNeue font-bold text-[28px] md:text-[32px] leading-[1.2] tracking-[0.01em] text-[#570B97] mb-4">
              We know the most powerful insights are  
               often missed and ignored.  That is why we are 
              experts in mining messy and imperfect data that reveal how people behave, think and make decisions.  
              </h2>
              
              <div className="space-y-6">
                <p className=" font-heleveticaNeue font-normal text-[14px] md:text-[16px] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
                We listen to what the patterns and numbers are really saying. That is how we transform complex business challenges into clear, actionable insights. Create meaningful impact. Fast. Focused. Human-centered.

                </p>

                <p className=" font-heleveticaNeue font-normal text-[14px] md:text-[16px] leading-[1.4] tracking-[0.01em] align-middle text-[#570B97] mt-4 whitespace-pre-line">
                Because the best decisions aren't just data-driven. They're human-inspired.

                </p>

                

              </div>
            </div>
          </div>

          {/* Right Side Box with scroll */}
          <div className="w-full lg:w-1/2 p-0 md:p-5 z-30">
            <RightSideBox />
          </div>
        </div>
      </div>




 

    










































































    </>
  )
}

export default HomePage