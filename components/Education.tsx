export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

        <div className="md:col-span-1">
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase sticky top-28">Education</p>
        </div>

        <div className="md:col-span-2">
          <div className="section-divider" />
          <div className="border border-accent/20 p-8 hover:border-accent transition-colors duration-300">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">2016 – 2020</p>
            <h3 className="font-display text-3xl text-ink mb-2">
              Bachelor of Science<br />
              <span className="italic">in Information Technology</span>
            </h3>
            <p className="font-body text-muted mt-3">Colegio De San Pedro</p>
          </div>
        </div>
      </div>
    </section>
  )
}
