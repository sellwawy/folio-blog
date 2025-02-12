'use client'

import { Button } from '../../ui/Button'
import SectionHeading from '../../ui/SectionHeading'
import { cn } from '@/utils'

function Contact({}) {
   return (
      <section id="contact" className="py-spacing-12">
         <div className="wrapper">
            <div className="flex flex-col items-center justify-center">
               <SectionHeading className={cn()}>Contact Me</SectionHeading>
               <p className="text-xl">
                  please contact me directly at{' '}
                  <a className="underline" href="mailto:example@gmail.com">
                     example@gmail.com
                  </a>{' '}
                  or through this form.
               </p>
               <form
                  action={async (FormData) => {
                     alert([FormData.get('email'), FormData.get('message')])
                  }}
                  className="px- w-full max-w-[50rem] rounded-lg py-spacing-8">
                  <div className="md-up:flex mt-4">
                     {/* Email */}
                     <input
                        className="border-secondary w-full rounded-lg border-2 p-2 focus:outline-teal-500"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        autoComplete="email"
                        maxLength={50}
                     />
                  </div>
                  {/* Message */}
                  <textarea
                     rows={4}
                     placeholder="Your Message"
                     required
                     maxLength={500}
                     name="message"
                     className="border-secondary mb-spacing-3 mt-spacing-7 w-full rounded-lg border-2 p-2 focus:outline-teal-500"
                  />
                  {/* Submit */}
                  <Button type="submit" className={'text-quinary'}>
                     Submit
                  </Button>
               </form>
            </div>
         </div>
      </section>
   )
}

export default Contact
