import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jonathan Cruz Jara — Developer & Technical Writer',
  description: 'Mid Developer with expertise in web development, technical writing, and QA testing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  )
}
