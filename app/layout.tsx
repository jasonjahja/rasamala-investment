import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Noto_Serif } from "next/font/google"
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // pick the weights you need
  variable: "--font-noto-serif",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${notoSerif.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
