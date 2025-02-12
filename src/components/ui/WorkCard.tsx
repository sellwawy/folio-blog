import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { cn } from '@/utils'
import { Key } from 'react'

type CardProps = {
   projectName: string
   description: string
   imageSrc: StaticImageData
   previewIcons: React.ReactNode[]
   className?: string
}
function WorkCard({ projectName, description, imageSrc, previewIcons, className }: CardProps) {
   return (
      <div
         className={cn(
            'bg-quinary flex flex-col relative rounded-lg shadow-custom max-md:max-w-96',
            className,
         )}>
         {/* Image */}
         <Image src={imageSrc} alt="John doe" placeholder="blur" className="rounded-t-lg object-cover" />
         <div className="p-spacing-7 h-full flex flex-col">
            {/* Title */}
            <h3 className="text-2xl pb-spacing-2 font-bold tracking-tight text-gray-900">{projectName}</h3>
            {/* Description */}
            <p className="text-gray-700 pb-spacing-3">{description}</p>
            {/* Icons */}
            <div className="flex gap-spacing-3 mt-auto">
               {previewIcons.map((item: React.ReactNode, index: Key) => (
                  <Link href="/" key={index} className="text-3xl">
                     {item}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}

export default WorkCard
