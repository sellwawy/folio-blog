'use client'

import React from 'react'
import { experiencesData } from '@/constants/experiencesData'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SectionHeading from '@/components/ui/SectionHeading'

function Experience() {
   return (
      <section id="experience" className="bg-quaternary py-spacing-12">
         <SectionHeading>My experience</SectionHeading>
         <VerticalTimeline lineColor={'rgb(2 6 3)'} animate={false}>
            {experiencesData.map((item, index) => (
               <React.Fragment key={index}>
                  <VerticalTimelineElement
                     visible={true}
                     contentStyle={{
                        background: 'white',
                        boxShadow: '0px 1px 4px hsl(0 0 0 / 0.2)',
                        borderTop: '4px solid rgb(2 6 23)',
                        textAlign: 'left',
                        padding: '1.3rem 2rem',
                     }}
                     contentArrowStyle={{
                        borderRight: '0.4rem solid rgb(2 6 23)',
                     }}
                     // date
                     date={item.date}
                     // icon
                     icon={item.icon}
                     iconStyle={{
                        background: 'rgb(2 6 23)',
                        fontSize: '1.5rem',
                        boxShadow: 'none',
                        color: 'white',
                     }}>
                     {/* Title */}
                     <h3 className="font-semibold capitalize">{item.title}</h3>
                     {/* Location */}
                     <p className="font-normal">{item.location}</p>
                     {/* Description */}
                     <p className="text-2xl">{item.description}</p>
                  </VerticalTimelineElement>
               </React.Fragment>
            ))}
         </VerticalTimeline>
      </section>
   )
}

export default Experience
