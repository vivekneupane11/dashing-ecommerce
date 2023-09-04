import type { Metadata } from 'next'
import { Frank_Ruhl_Libre } from 'next/font/google'
import './globals.css'

const frank_Ruhl_Libre = Frank_Ruhl_Libre({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashing Fashion Store',
  description: 'A fashion store app built with next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={frank_Ruhl_Libre.className}>{children}</body>
    </html>
  )
}
