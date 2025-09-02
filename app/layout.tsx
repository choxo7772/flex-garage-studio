import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Flex Garage Studio - Professional Garage Studio Solutions",
  description:
    "Transform your garage into a professional studio space. Flex Garage Studio offers innovative garage studio solutions in Hollywood, Florida.",
  generator: "v0.app",
  icons: {
    icon: ["/favicon-v6.ico?v=6", "/favicon-32x32-v6.png?v=6", "/favicon-16x16-v6.png?v=6"],
    shortcut: "/favicon-v6.ico?v=6",
    apple: "/apple-touch-icon-v6.png?v=6",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
