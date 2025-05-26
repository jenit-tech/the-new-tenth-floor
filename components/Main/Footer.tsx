"use client"
import { Mail, TriangleAlert, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Footer = () => {
 
    const [email, setEmail] = useState("")
    const [submissionStatus, setSubmissionStatus] = useState('idle') // 'idle' | 'success' | 'error'
    const [buttonText, setButtonText] = useState("Let's Talk")
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
      setButtonText("Let's Talk")
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
    <div className="pl-11 md:pl-17 pr-5 md:pr-1 py-[40px] bg-white mt-5">
      {/* Flex container replacing grid */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 ">
        {/* Logo */}
        <a href="#home" className="mb-4 md:mb-0 md:w-[92px] mr-0 md:mr-5">
          <Image
            src="/logo.png"
            alt="Description"
            width={92}
            height={92}
            className="w-10 md:w-[92px] " // Using arbitrary value for styling
          />
        </a>
        {/* Navigation links */}
        <div className="pointer-events-none flex flex-col md:gap-2 md:w-auto mr-0 md:mr-20 mb-3 md:mb-0">
          <a
            href="#company-section"
            className="pointer-events-auto font-roboto py-1 md:px-3 mt:0 md:mt-2 font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97] whitespace-nowrap"
          >
            Our Client
          </a>
          <a
            href="#about"
            className="pointer-events-auto font-roboto py-1 md:px-3 font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]"
          >
            About Us
          </a>
          <a
            href="#data-training"
            className="pointer-events-auto font-roboto py-1 md:px-3 font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]"
          >
           Training 
          </a>
        </div>

        {/* Address section */}
        <div className="md:w-[40%]  md:ml-0 mt-0 md:mt-5 mr-0  md:mr-70 lg:mr-5 xl:mr-65 2xl:mr-190">
          <p className="font-roboto font-normal pb-2 text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
            36 Robinson Road, #20-01,
          </p>
          <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[0%] text-[#570B97]">
            City House, Singapore 068877
          </p>
        </div>

        {/* Email input and button */}
        <div className="w-full mt-4 md:mt-0">
          {/* Desktop view */}
          <div className="hidden md:flex md:items-center md:space-x-2 pr-16">
          
        <div className="relative w-full max-w-lg">
  {/* Show success message */}
  {showMessage && submissionStatus === 'success' && (
    <div className="absolute inset-0 flex items-center justify-end px-0 z-50">
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
    <div className="absolute inset-0 flex items-center justify-end z-50">
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
<div className="relative mt-8">
<input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`
      w-full h-11 px-5 rounded-[18px] border-b 
      shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
      bg-transparent outline-none pr-32
       placeholder:text-[#570B974D] text-[16px]

      placeholder:font-roboto placeholder:text-base placeholder:font-medium
      placeholder:tracking-wide placeholder:leading-relaxed placeholder:text-[16px]
     ${
    isSubmitting ? ' text-[#570B974D]' : ' text-[#570B97]'
  }`}
    
          />


        <button
            type="button"
            onClick={handleSubmit}
            disabled={buttonText === "Submitting..." || buttonText === "Submitted"}
            className={`absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px] ${
              buttonText === "Submitting..." || buttonText === "Submitted"
                ? "bg-[#570B974D]"
                : "bg-[#570B97]"
            } flex items-center justify-center hover:bg-[#8C72D0]`}
          >
            <span className="font-roboto text-[14px] md:text-[16px] leading-6 text-[#FAFAFA] text-center align-middle">
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
          {/* Mobile view */}
          <div className="block md:hidden pt-4 space-y-4 pr-7 pl-2">
          <div className="relative w-full">
  {/* Show success message */}
  {showMessage && submissionStatus === 'success' && (
    <div className="absolute inset-0 flex items-center justify-end px-0 z-50">
      {/* Message box */}
      <div className="flex items-center w-full rounded-[4px] gap-[10px] p-[10px] bg-[#DEFED1] shadow-lg z-50">
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
    <div className="absolute inset-0 flex items-center justify-end z-50">
      {/* Error message box */}
      <div className="flex items-center w-full rounded-[4px] gap-[10px] p-[15px] bg-[#DB1A2026] shadow-lg z-50">
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
<div className="relative mt-8">
<input
            id="email"
            type="text"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`
      w-full h-11 px-5 rounded-[18px] border-b 
      shadow-[0_0_4px_0_rgba(0,0,0,0.25)]
      bg-transparent outline-none pr-32
       placeholder:text-[#570B974D] text-[16px]

      placeholder:font-roboto placeholder:text-base placeholder:font-medium
      placeholder:tracking-wide placeholder:leading-relaxed placeholder:text-[16px]
     ${
    isSubmitting ? ' text-[#570B974D]' : ' text-[#570B97]'
  }`}
    
          />


        <button
            type="button"
            onClick={handleSubmit}
            disabled={buttonText === "Submitting..." || buttonText === "Submitted"}
            className={`absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px] ${
              buttonText === "Submitting..." || buttonText === "Submitted"
                ? "bg-[#570B974D]"
                : "bg-[#570B97]"
            } flex items-center justify-center hover:bg-[#8C72D0]`}
          >
            <span className="font-roboto text-[14px] md:text-[16px] leading-6 text-[#FAFAFA] text-center align-middle">
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

      {/* Divider and footer info */}
      <div className="pr-2 md:pr-19 mt-8">
        <hr className="w-full h-0.5 bg-gradient-to-r from-purple-700/25 via-purple-700/40 to-purple-700/25 border-0 my-3 md:my-5" />
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
          <p className="font-roboto font-normal text-[14px] md:text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] mb-2 md:mb-0">
            © 2025 The Tenth Floor Pte Ltd. All rights reserved.
          </p>
          <Link href="/privacy-policy" passHref
           className="font-roboto font-normal text-[14px] md:text-[16px] leading-[140%] tracking-[0.01em] align-middle text-[#570B97] hover:underline cursor-pointer"
          > Privacy Policy 
           
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer