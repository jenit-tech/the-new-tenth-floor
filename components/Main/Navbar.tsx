"use client"
import  { useState } from "react"
import { Menu, X, Mail, TriangleAlert } from "lucide-react"
import Image from 'next/image'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submissionStatus, setSubmissionStatus] = useState('idle') // 'idle' | 'success' | 'error'
  const [buttonText, setButtonText] = useState("Let's Talk")
  const [showMessage, setShowMessage] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

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
    <nav className="fixed top-0 left-0 right-0 w-full flex items-center justify-between h-[70px] md:h-[144px] px-9 md:px-14  py-3 bg-[#F2F0FA]  z-50 ">
      {/* Logo Image */}
      <a href="#home">
        <Image
          src="/logo.png"
          alt="Description"
          width={120}
          height={120}
          className="w-12 md:w-[120px] "
        />
      </a>
      {/* Desktop & Tablet Menu */}
      <div className="hidden md:flex items-center justify-center flex-1 max-w-4xl space-x-8">
        {/* Button 1 */}
        <div className="flex space-x-2">
          <button
            className="py-1 px-2 rounded-[33px]"

          >
            <a
              href="#company-section"
              className="relative inline-block font-roboto  font-medium text-[#570B97] capitalize transition-all duration-200 hover:text-[#8C72D0]"
            >
              <span className="border-b-2 text-[16px] border-transparent pb-1 hover:border-[#8C72D0]  transition-all duration-200">
                Our Clients
              </span>
            </a>
          </button>
        </div>

        {/* Button 2 */}
        <div className="flex space-x-2">
          <button
            className="py-1 px-2 rounded-[33px]"

          >
            <a
              href="#data-training"
              className="relative inline-block font-roboto  font-medium text-[#570B97] capitalize transition-all duration-200 hover:text-[#8C72D0]"
            >
              <span className="border-b-2 text-[16px] border-transparent pb-1 hover:border-[#8C72D0] px-1 transition-all duration-200">
                Training
              </span>
            </a>
          </button>
        </div>

        {/* Button 3 */}
        <div className="flex space-x-2">
          <button
            className="py-1 px-2 rounded-[33px]" >
            <a
              href="#about"
              className="relative inline-block font-roboto  font-medium text-[#570B97] capitalize transition-all duration-200 hover:text-[#8C72D0]"
            >
              <span className="border-b-2 text-[16px] border-transparent pb-1 hover:border-[#8C72D0] px-1 transition-all duration-200">
                About Us
              </span>
            </a>
          </button>
        </div>


        {/* Email Input & Button */}

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
      bg-[#FFFFFF] outline-none pr-32
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
              className={`absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px] ${buttonText === "Submitting..." || buttonText === "Submitted"
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

      {/* Mobile Hamburger Button */}
      <div className="md:hidden z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}

      <div
        className={`w-full
    fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out bg-gradient-to-b from-purple-50 via-white to-purple-50
    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
      >
        <div className="w-full p-5 flex flex-col space-y-4 h-full overflow-y-auto">
          {/* Navigation items */}
          {[
            { label: "Our Clients", href: "#company-section" },
            { label: "Training", href: "#data-training" },
            { label: "About Us", href: "#about" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-900 hover:text-purple-800 text-[14px] font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Contact form in mobile menu */}
          <div className="relative w-full">
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
        bg-[#FFFFFF]  outline-none pr-32
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
                className={`absolute top-0 right-0 h-11 w-28 rounded-tr-[18px] rounded-br-[18px] ${buttonText === "Submitting..." || buttonText === "Submitted"
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




    </nav>
  )
}

export default Navbar








