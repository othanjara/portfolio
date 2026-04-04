'use client'
import { useState } from 'react'

export default function ResumeButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative inline-block">

      {/* Pop-up tooltip on hover */}
      <div className={`
        absolute -top-16 left-1/2 -translate-x-1/2
        bg-paper text-ink text-xs font-mono tracking-wide
        px-4 py-2 whitespace-nowrap
        border border-accent/40
        transition-all duration-300
        pointer-events-none
        ${hovered ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-1'}
      `}>
        Click to download my resume
        {/* Arrow */}
        <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-paper border-r border-b border-accent/40 rotate-45 block" />
      </div>

      {/* Download button */}
      <a
        href="jonathan_jara_resume.pdf"
        download="Jonathan_Cruz_Jara_Resume.pdf"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
          inline-flex items-center gap-3
          bg-accent text-ink font-body text-sm font-medium
          px-8 py-4
          transition-all duration-300
          hover:bg-paper hover:text-ink hover:shadow-lg
          group
        `}
      >
        {/* Download icon */}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
          />
        </svg>
        Download Resume
      </a>
    </div>
  )
}
