'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/utils'
import Navbar from './Navbar'

export default function Header() {
   const [hide, sethide] = useState(false)
   const [lastScrollY, setLastScrollY] = useState(0)
   const [isZeroScroll, setIsZeroScroll] = useState(true)

   useEffect(() => {
      const controlNavbar = () => {
         // If scroll down hide the navbar
         if (window.scrollY > lastScrollY && window.scrollY > 500) {
            sethide(true)
            // If scroll up show the navbar
         } else {
            sethide(false)
         }

         if (window.scrollY == 0) {
            setIsZeroScroll(true)
         } else {
            setIsZeroScroll(false)
         }
         // Remember current page location to use in the next scroll move
         setLastScrollY(window.scrollY)
      }

      window.addEventListener('scroll', controlNavbar)

      return () => {
         // Cleanup function
         window.removeEventListener('scroll', controlNavbar)
      }
   }, [lastScrollY, isZeroScroll])

   return (
      // Header
      <header
         className={cn(
            'bg-quinary sticky h-[3.75rem] flex top-0 z-50  items-center justify-center overflow-hidden transition-transform',
            {
               '-translate-y-full': hide,
               'shadow-none': isZeroScroll,
               'shadow-[0_0_4px_hsl(0_0_0/0.3)]': !isZeroScroll,
            },
         )}>
         <div className="wrapper flex py-2 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="me-9" aria-label="Homepage">
               {/* <Image className="w-[9rem] md:w-[10.5rem]"
                  src={siteLogo}
                  alt="TohfaFolio"
                  priority={true}
                  quality={100}
               /> */}
               <div className="text-2xl font-bold">Sellwawy</div>
            </Link>
            <div className="sm-up:gap-x-8 flex items-center gap-x-2">
               {/* Navbar */}
               <Navbar />
            </div>
         </div>
      </header>
   )
}
