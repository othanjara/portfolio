import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-highlight/30">
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text side */}
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-6 animate-fade-up">
            Available for opportunities
          </p>
          <h1 className="font-display text-6xl md:text-7xl text-ink leading-[1.05] mb-6 animate-fade-up delay-100">
            Jonathan<br />
            <span className="italic text-muted">Cruz</span> Jara
          </h1>
          <div className="w-12 h-px bg-accent mb-6 animate-fade-up delay-200" />
          <p className="font-body text-muted text-lg leading-relaxed max-w-md animate-fade-up delay-300">
            Mid Developer · Technical Writer · QA Specialist.<br />
            Building reliable digital products with care.
          </p>
          <div className="flex gap-4 mt-10 animate-fade-up delay-400">
            <a
              href="#experience"
              className="inline-block bg-ink text-paper font-body text-sm px-6 py-3 hover:bg-accent hover:text-ink transition-colors duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-block border border-ink text-ink font-body text-sm px-6 py-3 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Photo side */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Offset decorative border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/50" />
            <div className="relative w-72 h-80 overflow-hidden bg-paper">
              <Image
                src="/portfolio/jonathan.png"
                alt="Jonathan Cruz Jara"
                fill
                className="object-cover object-top mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                priority
              />
            </div>
            {/* Info card */}
            <div className="absolute -bottom-6 -left-6 bg-ink text-paper px-5 py-3">
              <p className="font-mono text-xs text-accent tracking-widest uppercase">Based in</p>
              <p className="font-display text-sm">San Pedro, Laguna</p>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-accent/40 mx-auto" />
      </div>
    </section>
  )
}
