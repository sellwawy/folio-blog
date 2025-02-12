import Image from 'next/image'
import Link from 'next/link'
import personal_2 from '@/../public/images/personal-2.jpg'
import SectionHeading from '@/components/ui/SectionHeading'
import { buttonVariants } from '@/components/ui/Button'
import SocialMedia from '@/components/shared/SocialMedia'

function About() {
   return (
      <section id="about" className="py-spacing-12">
         <div className="wrapper">
            <SectionHeading className="text-center">About Me</SectionHeading>
            <div className="flex">
               {/* Image */}
               <div className="hidden basis-[35%] overflow-hidden md:inline">
                  <Image
                     src={personal_2}
                     alt="John doe"
                     placeholder="blur"
                     className="h-full min-w-full rounded-s-xl object-cover"
                  />
               </div>
               <div className="flex flex-col justify-between gap-spacing-10 px-spacing-10 pb-spacing-9 md:flex-1 md:pt-spacing-9">
                  {/* About */}
                  <p>
                     <span className="text-xl font-semibold">Hi, I&apos;m John.</span> Lorem ipsum dgolor sit
                     amet consectetur adipisicing elit. Aliquam veritatis, assumenda necessitatibus
                     voluptatibus totam blanditiis aut molestiae. Lorem, ipsum dolor sit amet consectetur
                     adipisicing elit. Sed minus harum.Lorem ipsum dolor sit amet consectetur adipisicing
                     elit.
                  </p>
                  <ul className="flex flex-wrap gap-x-spacing-11">
                     <li>
                        <ul className="space-y-spacing-1">
                           <li>
                              <strong className="pe-1.5">First Name:</strong>
                              <u>John</u>
                           </li>
                           <li>
                              <strong>Last Name: </strong>
                              <u>Doe</u>
                           </li>
                           <li>
                              <strong>Age: </strong>
                              <u>25 years</u>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <ul className="space-y-spacing-1">
                           <li>
                              <strong>Nationality: </strong>
                              <u>American</u>
                           </li>
                           <li>
                              <strong>Living in: </strong>
                              <u>California, USA</u>
                           </li>
                           <li>
                              <strong>Languages: </strong>
                              <u>English</u>
                           </li>
                        </ul>
                     </li>
                  </ul>
                  {/* Download CV */}
                  <Link
                     href="/"
                     className={buttonVariants({
                        className: 'mx-auto self-end',
                     })}>
                     Download CV
                  </Link>
                  {/* Social links */}
                  <SocialMedia />
               </div>
            </div>
         </div>
      </section>
   )
}
export default About
