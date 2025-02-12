import { SocialMediaIcons } from '@/constants/SocialMediaIcons'
import React from 'react'

function SocialMedia() {
   return (
      <ul className="mb-spacing-4 flex items-center justify-center gap-spacing-9 text-xl">
         {SocialMediaIcons.map((item, index) => (
            <li className="justify-self-center" key={index}>
               {item}
            </li>
         ))}
      </ul>
   )
}

export default SocialMedia
