'use client'

import * as React from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'

const groupedLogos = [
  [
    '/20.png', '/3.png', '/1.png', '/31.png',
    '/11.png', '/6.png', '/8.png', '/17.png',
    '/7.png', '/2.png', '/0.png', '/18.png',
    '/19.png', '/4.png', '/10.png', '/28.png',
  ],
  [
    '/expedia.png', '/9.png', '/15.png', '/wagely.png',
    '/12.png', '/23.png', '/24.png', '/13.png',
    '/29.png', '/32.png', '/euyan.png', '/30.png',
    '/14.png', '/25.png', '/27.png', '/21.png',
  ],
  [
    '/5.png', '/16.png',
  ],
]

const CompanyRightSection = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = React.useState(0)


  // Handle slide selection (manual or autoplay)
  React.useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()

    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])


  // ---- Autoplay every 2 seconds  ----

  React.useEffect(() => {
    if (!emblaApi) return

    const id = setInterval(() => {
      emblaApi.scrollNext()
    }, 2_000) // 2 second

    return () => clearInterval(id)
  }, [emblaApi])

  const scrollTo = (index: number) => emblaApi?.scrollTo(index)

  return (
    <div className="w-full  px-4 py-8 ">
      <div ref={emblaRef} className="overflow-hidden w-full">
        <div className="flex select-none">
          {groupedLogos.map((group, index) => (
            <div
              key={index}
              className="min-w-full p-4 bg-white rounded-[28px]"  // <-- added background & border-radius here
            >
              <div
                className={`grid gap-4 ${group.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"
                  }`}
              >
                {group.map((src, idx) => (
                  <div key={idx} className="flex items-center justify-center">
                    <Image
                      src={src}
                      alt={`logo-${index}-${idx}`}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {groupedLogos.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors duration-200",
              selectedIndex === index ? "bg-[#674EA7]" : "bg-[#B4A7D5] border border-[#570B97]"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default CompanyRightSection


// import * as React from "react"
// import Image from "next/image"
// import useEmblaCarousel from "embla-carousel-react"
// import { cn } from "@/lib/utils"

// const groupedLogos = [
//   [
//     "/20.png", "/3.png", "/1.png", "/31.png",
//     "/11.png", "/6.png", "/8.png", "/17.png",
//     "/7.png", "/2.png", "/0.png", "/18.png",
//     "/19.png", "/4.png", "/10.png", "/28.png",
//   ],
//   [
//     "/expedia.png", "/9.png", "/15.png", "/wagely.png",
//     "/12.png", "/23.png", "/24.png", "/13.png",
//     "/29.png", "/32.png", "/euyan.png", "/30.png",
//     "/14.png", "/25.png", "/27.png", "/21.png",
//   ],
//   [
//     "/5.png", "/16.png"
//   ],
// ]

// const CompanyRightSection = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
//   const [selectedIndex, setSelectedIndex] = React.useState(0)

//   React.useEffect(() => {
//     if (!emblaApi) return

//     const onSelect = () => {
//       setSelectedIndex(emblaApi.selectedScrollSnap())
//     }

//     emblaApi.on("select", onSelect)
//     onSelect()
//   }, [emblaApi])

//   const scrollTo = (index: number) => {
//     emblaApi?.scrollTo(index)
//   }

//   return (
//     <div className="w-full  px-4 py-8 ">
//       <div ref={emblaRef} className="overflow-hidden w-full">
//         <div className="flex select-none">
//           {groupedLogos.map((group, index) => (
//             <div
//               key={index}
//               className="min-w-full p-4 bg-white rounded-[28px]"  // <-- added background & border-radius here
//             >
//               <div
//                 className={`grid gap-4 ${
//                   group.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"
//                 }`}
//               >
//                 {group.map((src, idx) => (
//                   <div key={idx} className="flex items-center justify-center">
//                     <Image
//                       src={src}
//                       alt={`logo-${index}-${idx}`}
//                       width={80}
//                       height={40}
//                       className="object-contain"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Dot Indicators */}
//       <div className="flex justify-center mt-4 space-x-2">
//         {groupedLogos.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => scrollTo(index)}
//             className={cn(
//               "h-2 w-2 rounded-full transition-colors duration-200",
//               selectedIndex === index ? "bg-[#674EA7]" : "bg-[#B4A7D5] border border-[#570B97]"
//             )}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default CompanyRightSection