import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBar from './components/Announcement-bar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beastwear',
  description: 'Your favourite gym hoodies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body className={`${inter.className} h-96`}>
        <Navbar/>
        <AnnouncementBar />
        {children}
        <Footer/>
      </body>
    </html>
    </>
  )
}
