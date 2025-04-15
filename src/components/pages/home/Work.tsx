'use client'

import { useState } from 'react'
import SectionHeading from '../../ui/SectionHeading'
import WorkCard from '../../ui/WorkCard'
import { PROJECTS_DATA } from '@/constants/projectsData'
import { Button, buttonVariants } from '@/components/ui/Button'
import { cn } from '@/utils'

function Work() {
   const [items, setItems] = useState(PROJECTS_DATA)
   const [active, setActive] = useState('All')

   const projectsData = items.map((project, index) => (
      <WorkCard
         className="mx-auto"
         key={index}
         imageSrc={project.imageSrc}
         projectName={project.title}
         description={project.description}
         previewIcons={project.previewIcons}
      />
   ))
   const filterItems = (category: string) => {
      const newItems = Array.from(new Set(PROJECTS_DATA)).filter((project) => project.category == category)
      setItems(newItems)
      setActive(category)
   }

   const categories = Array.from(new Set(PROJECTS_DATA.map((project) => project.category))).map(
      (category, index) => (
         <Button
            key={index}
            onClick={() => filterItems(category)}
            className={buttonVariants({
               variant: 'secondary',
               className: cn('cursor-pointer self-end', { 'bg-quaternary': active === category }),
            })}>
            {category}
         </Button>
      ),
   )
   return (
      <section id="work" className="bg-quaternary py-spacing-12">
         <div className="wrapper">
            <SectionHeading className="text-center">My Work</SectionHeading>
            <div className="flex flex-wrap pb-spacing-10 justify-center gap-spacing-5">
               <Button
                  onClick={() => {
                     setItems(PROJECTS_DATA)
                     setActive('All')
                  }}
                  className={buttonVariants({
                     variant: 'secondary',
                     className: cn('cursor-pointer self-end', { 'bg-quaternary': active === 'All' }),
                  })}>
                  All
               </Button>
               {categories}
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-spacing-10">
               {projectsData}
            </div>
         </div>
      </section>
   )
}

export default Work
