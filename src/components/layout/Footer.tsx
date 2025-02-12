import SocialMedia from '../shared/SocialMedia'

export default function Footer() {
   return (
      <>
         <footer className="w-full pb-6 pt-spacing-11">
            <div className="wrapper">
               {/* Footer social links */}
               <SocialMedia />
               {/* Footer copy content */}
               <div className="text-center font-medium">&copy; 2025 Sellwawy. All Rights Reserved.</div>
            </div>
         </footer>
      </>
   )
}
