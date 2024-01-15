import Nav from '@/components/nav'
import Providers from '@/provivers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s - RentCar',
    absolute: 'RentCar',
  },
  description: 'You favorite rent car web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="flex min-h-screen flex-col space-y-12 overflow-x-hidden">
            <header className="w-screen h-16 bg-zinc-800 flex items-center justify-center">
              <Nav />
            </header>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
