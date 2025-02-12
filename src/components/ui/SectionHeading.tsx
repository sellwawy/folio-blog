import { cn } from '@/utils'
import React from 'react'

type Props = {
   children: React.ReactNode
   className?: string
}

function SectionHeading({ children, className }: Props) {
   return (
      <h2
         className={cn(
            'text-primary pb-spacing-11 text-center text-3xl font-semibold uppercase tracking-widest',
            className,
         )}>
         {children}
      </h2>
   )
}

export default SectionHeading
