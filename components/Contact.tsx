import ResumeButton from '@/components/ResumeButton'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-ink text-paper">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase mb-6">Get In Touch</p>
        <h2 className="font-display text-5xl md:text-6xl text-paper mb-6">
          Let&apos;s work<br /><span className="italic text-muted">together</span>
        </h2>
        <div className="w-12 h-px bg-accent mx-auto mb-10" />
        <div className="flex flex-col md:flex-row justify-center gap-8 font-body text-muted text-sm mb-12">
          <a
            href="tel:+639761723816"
            className="flex items-center gap-3 hover:text-accent transition-colors duration-200"
          >
            <span className="font-mono">📱</span>
            +63 976 1723 816
          </a>
          <a
            href="mailto:jonathan.jara1216@gmail.com"
            className="flex items-center gap-3 hover:text-accent transition-colors duration-200"
          >
            <span className="font-mono">✉</span>
            jonathan.jara1216@gmail.com
          </a>
          <span className="flex items-center gap-3 text-muted/60">
            <span className="font-mono">📍</span>
            San Pedro, Laguna
          </span>
        </div>

        {/* Resume download button */}
        <div className="flex justify-center mb-16">
          <ResumeButton />
        </div>

        <div className="pt-10 border-t border-paper/10">
          <p className="font-mono text-xs text-muted/40 tracking-widest">
            © {new Date().getFullYear()} Jonathan Cruz Jara
          </p>
        </div>
      </div>
    </section>
  )
}
