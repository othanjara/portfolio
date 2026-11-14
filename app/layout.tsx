import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jonathan Cruz Jara — Mid-Level Full Stack Developer',
  description: 'Mid-Level Full Stack Developer with expertise in web development, technical writing, and QA testing.',
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
