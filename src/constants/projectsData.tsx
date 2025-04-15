/* eslint-disable react/jsx-key */
import React from 'react'
import project_1 from '@/../public/images/project-1.jpg'
import project_2 from '@/../public/images/project-2.jpg'
import project_3 from '@/../public/images/project-3.jpg'
import { FaBehance, FaGlobe, FaGithub } from 'react-icons/fa6'

export const PROJECTS_DATA = [
   {
      imageSrc: project_1,
      title: 'Lorem ipsum dgolor sit amet voluptatibus',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eum iste quidem consequatur qui numquam.',
      category: 'Next.js',
      previewIcons: [<FaGlobe className="" />, <FaBehance />],
   },
   {
      imageSrc: project_2,
      title: 'Lorem ipsum dgolor sit amet',
      description:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero aspernatur corrupti. Cumque nihil facilis dolores natus.',
      category: 'Next.js',
      previewIcons: [<FaGlobe />, <FaGithub />],
   },
   {
      imageSrc: project_3,
      title: 'Lorem ipsum dgolor sit amet elit',
      description: 'Lorem ipsum dgolor sit amet Lorem ipsum dgolor sit amet consequatur qui numquam.',
      category: 'Next.js',
      previewIcons: [<FaGlobe />, <FaGithub />],
   },
   {
      imageSrc: project_3,
      title: 'Lorem ipsum dgolor sit amet elit',
      description: 'Lorem ipsum dgolor sit amet Lorem ipsum dgolor sit amet consequatur qui numquam.',
      category: 'UX/UI',
      previewIcons: [<FaGlobe />, <FaGithub />],
   },
   {
      imageSrc: project_3,
      title: 'Lorem ipsum dgolor sit amet elit',
      description: 'Lorem ipsum dgolor sit amet Lorem ipsum dgolor sit amet consequatur qui numquam.',
      category: 'UX/UI',
      previewIcons: [<FaGlobe />, <FaGithub />],
   },
   {
      imageSrc: project_3,
      title: 'Lorem ipsum dgolor sit amet elit',
      description: 'Lorem ipsum dgolor sit amet Lorem ipsum dgolor sit amet consequatur qui numquam.',
      category: 'React.js',
      previewIcons: [<FaGlobe />, <FaGithub />],
   },
]
