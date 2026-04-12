import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My App',
  description: 'A Next.js app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950`}>
        <div className="flex flex-col min-h-screen">
          <Nav />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
