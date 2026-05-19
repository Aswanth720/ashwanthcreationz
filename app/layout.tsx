import "./globals.css"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import ThemeProvider from "@/components/providers/ThemeProvider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="
          bg-white text-black
          dark:bg-black dark:text-white
          transition-colors duration-300
        "
      >
        <ThemeProvider>
          <Navbar />

          <main>{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}