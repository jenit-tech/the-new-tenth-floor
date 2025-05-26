"use client"
import { Mail, TriangleAlert, X } from 'lucide-react'
import React, { useState } from 'react'

const RightSideDataTraining = () => {
  const [email, setEmail] = useState("")
  const [submissionStatus, setSubmissionStatus] = useState('idle') // 'idle' | 'success' | 'error'
  const [buttonText, setButtonText] = useState("I want to know more")
  const [showMessage, setShowMessage] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');


  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCloseSuccess = () => {
    setSubmissionStatus('idle')
    setEmail('')
    setButtonText("I want to know more")
    setShowMessage(false)
  }

  const handleSubmit = () => {
    // Simulate async submission
    setErrorMessage('');
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return; // Stop submission
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const isSuccess = true // Change as needed
      if (isSuccess) {
        setButtonText("Submitted")
        setSubmissionStatus('success')
        setShowMessage(true)
        setButtonText("Submitted")
      } else {
        setSubmissionStatus('error')
        setShowMessage(true)
      }
      setIsSubmitting(false);
    }, 1000)
  }


  return (
    <div className="w-full ">
      <div className="rounded-[28px]  px-5 md:px-14 pt-10 pb-5   border-b bg-[#361C75]">
        <div className="mb-0">
          <div className="font-sans text-[14px] md:text-[16px] text-white text-base leading-[140%] tracking-[0.01em]">
            <p>
              At The Tenth Floor, we believe digital is just human behavior captured in data. Our training is designed to help you uncover meaning in that behavior, then act on it with clarity and confidence.
              This is not a course in tools. It’s a way of thinking.
            </p>

            <br />
            <p>
              You’ll learn how to investigate real-world business problems using live data, unearth human motivations beneath the noise, and make insight-led decisions that create impact.
            </p>
            <br />
            <p>
              Whether you’re in marketing, product, strategy, or innovation, our approach equips you to move fast, ask sharper questions, and build smarter hypotheses. You’ll leave with a repeatable decision framework, a deeper comfort with ambiguity and the confidence to build ideas rooted in reality, not opinion.
            </p>
            <br />
          
          </div>
          <div className="relative w-full max-w-lg">
          {/* Show success message */}
          {showMessage && submissionStatus === 'success' && (
            <div className="absolute inset-0 flex items-center justify-end px-0 z-50 mb-4">
              {/* Message box */}
              <div className="flex items-center w-[320px] rounded-[4px] gap-[10px] p-[10px] bg-[#DEFED1] shadow-lg z-50">
                <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[18.29px] bg-[#38AE051A]">
                  <Mail width={18} height={14} className="w-[17.5px] h-[14px] text-[#38AE05]" />
                </div>
                <div>
                  <p className="font-roboto font-medium text-[14px] leading-[1.4] tracking-[0.01em] text-[#38AE05]">
                    Thank You! We’ll be in touch soon.
                  </p>
                  <p className="font-roboto font-normal text-[12px] leading-[1.4] tracking-[0.01em] text-[#38AE05]">
                    Email Verified Successfully
                  </p>
                </div>
                {/* Close icon */}
                <X
                  className="h-[12px] w-[12px] text-[#38AE05] cursor-pointer ml-auto"
                  onClick={handleCloseSuccess}
                />
              </div>
            </div>
          )}

          {/* Show error message similarly */}
          {showMessage && submissionStatus === 'error' && (
            <div className="absolute inset-0 flex items-center justify-end z-50 mb-4">
              {/* Error message box */}
              <div className="flex items-center w-[260px] rounded-[4px] gap-[10px] p-[10px] bg-[#DB1A2026] shadow-lg z-50">
                <div className="flex items-center justify-center w-[32px] h-[32px] rounded-[18.29px] bg-[#DB1A2033]">
                  <TriangleAlert width={17} height={15} className="w-[17px] h-[15px] text-[#E04449]" />
                </div>
                <div>
                  <p className="font-roboto font-medium text-[14px] leading-[1.4] tracking-[0.01em] text-[#E04449]">
                    Something went wrong.
                  </p>
                  <p className="font-roboto font-normal text-[12px] leading-[1.4] tracking-[0.01em] text-[#DB1A20]">
                    Please try again later.
                  </p>
                </div>
                {/* Close icon */}
                <X
                  className="h-[12px] w-[12px] text-[#E04449] cursor-pointer ml-auto"
                  onClick={handleCloseSuccess}
                />
              </div>
            </div>
          )}

          {/* Input container */}
          <div className="relative mt-0">
            <input
              id="email"
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-50
      md:w-80 h-11 px-5 rounded-[18px] border-b bg-[#FFFFFF]
      shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
      outline-none pr-32
       placeholder:text-[#570B974D] text-[16px]

      placeholder:font-roboto placeholder:text-base placeholder:font-medium
      placeholder:tracking-wide placeholder:leading-relaxed placeholder:text-[16px]
     ${isSubmitting ? ' text-[#570B974D]' : ' text-[#570B97]'
                }`}

            />


            <button
              type="button"
              onClick={handleSubmit}
              disabled={buttonText === "Submitting..." || buttonText === "Submitted"}
              className={`absolute top-0 right-0 h-11 w-30  md:w-48 rounded-tr-[18px] rounded-br-[18px] ${buttonText === "Submitting..." || buttonText === "Submitted"
                  ? "bg-[#570B974D]"
                  : "bg-[#570B97]"
                } flex items-center justify-center hover:bg-[#8C72D0] `}
            >
              <span className="font-roboto text-[14px] md:text-[16px] leading-4 text-[#FAFAFA] text-center align-middle p-0">
                {buttonText}
              </span>
            </button>
          </div>
          <div className="h-[16px] mt-2">
            {errorMessage && (
              <p className="font-roboto font-normal text-[12px] leading-[1.4] tracking-[0.01em] align-middle text-[#DB1A20]">
                {errorMessage}
              </p>
            )}
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default RightSideDataTraining
