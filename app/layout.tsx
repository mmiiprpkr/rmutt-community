import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Session } from '@/components/providers/session-provider'
import { Toaster } from 'sonner'

const poppins = Poppins({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })

export const metadata: Metadata = {
  title: 'Rmutt Community',
  description: 'Generated by create next app',
  icons: [
    {
      url: '/error-dark.png',
      href: '/error-dark.png'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
         <Toaster />
         <Session>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            {children}
          </ThemeProvider>
        </Session>
      </body>
    </html>
  )
}