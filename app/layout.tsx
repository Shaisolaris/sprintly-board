import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sprintly — Project Management Board',
  description: 'Kanban board for agile teams',
  icons: {
    icon: [
      {
        url: '/sprintly-board/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/sprintly-board/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/sprintly-board/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/sprintly-board/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
