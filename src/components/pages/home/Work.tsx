import React from 'react'
import SectionHeading from '../../ui/SectionHeading'
import WorkCard from '../../ui/WorkCard'
import { PROJECTS_DATA } from '@/constants/projectsData'

function Work() {
   const projectsData = PROJECTS_DATA.map((project, index) => (
      <WorkCard
         className="mx-auto"
         key={index}
         imageSrc={project.imageSrc}
         projectName={project.title}
         description={project.description}
         previewIcons={project.previewIcons}
      />
   ))

   return (
      <section id="work" className="bg-quaternary py-spacing-12">
         <div className="wrapper">
            <SectionHeading className="text-center">My Work</SectionHeading>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-spacing-10">
               {projectsData}
            </div>
         </div>
      </section>
   )
}

export default Work
