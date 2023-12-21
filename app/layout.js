import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Page 1 - Mid Term exam',
  description: 'Sahithi Pendywala',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <script src="https://kit.fontawesome.com/af6aba113a.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}
