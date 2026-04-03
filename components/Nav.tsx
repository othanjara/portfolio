'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-paper/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* JCJ Logo */}
        <a href="#" aria-label="JCJ Home">
          <svg width="80" height="30" viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="95"
              fontFamily="'Playfair Display', Georgia, serif"
              fontWeight="700"
              fontSize="100"
              fill="#0d0d0d">J</text>
            <text x="80" y="95"
              fontFamily="'Playfair Display', Georgia, serif"
              fontStyle="italic"
              fontWeight="400"
              fontSize="100"
              fill="#c8a96e">C</text>
            <text x="180" y="95"
              fontFamily="'Playfair Display', Georgia, serif"
              fontWeight="700"
              fontSize="100"
              fill="#0d0d0d">J</text>
            {/* <line x1="10" y1="103" x2="310" y2="103" stroke="#c8a96e" strokeWidth="1.5"/> */}
          </svg>
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className="font-body text-sm text-muted hover:text-ink transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
