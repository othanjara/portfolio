export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

        {/* Label */}
        <div className="md:col-span-1">
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase sticky top-28">About</p>
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <div className="section-divider" />
          <h2 className="font-display text-4xl text-ink mb-8">
            Hardworking &<br /><span className="italic">Ambitious</span>
          </h2>
          <div className="space-y-5 font-body text-muted text-base leading-8">
            <p>
              I am a hardworking and ambitious individual with a great passion for the IT industry.
              A graduate with a Bachelor&apos;s degree in Information Technology, I bring a comprehensive
              understanding of modern software development practices.
            </p>
            <p>
              I have a good amount of skills in Photoshop, doing designs for different people and
              organizations as a part-time job. I also have programming knowledge I learned from my
              work and have experience working in different languages such as HTML, CSS, C# .Net, JS,
              and SQL programming.
            </p>
            <p>
              I am a team player that enables me to work well with people, seeking an opportunity to
              put into practice my knowledge and experience, ultimately benefiting the organization
              that I work for.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
