import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = localFont({
   src: '../fonts/InterVF.woff2',
})

export const metadata: Metadata = {
   title: { default: 'John Doe - Frontend Developer.', template: '%s | John Doe' },
   description: 'The personal website of John Doe, frontend developer.',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${inter.className} min-h-screen text-[1rem] scroll-smooth antialiased`}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   )
}
