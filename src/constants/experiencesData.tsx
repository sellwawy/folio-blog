import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact, FaUserGraduate } from 'react-icons/fa6'

export const experiencesData = [
   {
      title: 'Graduated bootcamp',
      location: 'Miami, FL',
      description:
         'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
      icon: <FaUserGraduate />,
      date: '2019',
   },
   {
      title: 'Front-End Developer',
      location: 'Orlando, FL',
      description:
         'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
      icon: <CgWorkAlt />,
      date: '2019 - 2021',
   },
   {
      title: 'Full-Stack Developer',
      location: 'Houston, TX',
      description:
         "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: <FaReact />,
      date: '2021 - present',
   },
]
