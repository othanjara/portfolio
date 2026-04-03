const jobs = [
  {
    title: 'Mid Developer',
    company: 'Nityo Infotech Services Philippines Inc.',
    client: 'Client: Watsons PH',
    period: 'January 2026 - Present',
    tasks: [
      'Assist web development',
      'Programming',
      'Help prepare test/prod environment',
      'Technical writer',
      'Wireframe designing',
      'SIT and UAT testing',
      'L3 Support',
    ],
  },
  {
    title: 'Associate Developer / Technical Writer',
    company: 'Novelis Solutions Inc.',
    client: 'Generika',
    period: 'May 2022 – January 2026',
    tasks: [
      'Assist web development',
      'Programming',
      'Help prepare test/prod environment',
      'Technical writer',
      'Wireframe designing',
      'SIT and UAT testing',
      'Administrative works',
      'L3 Support',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Primover Consultancy Services Inc.',
    client: 'Client: Watsons PH',
    period: 'July 31, 2021 – June 02, 2022',
    tasks: [
      'Assist web development',
      'Programming',
      'Help prepare test/prod environment',
      'Technical writer',
      'SIT and UAT testing',
      'Administrative works',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'We Support Inc.',
    client: 'Client: Watsons PH',
    period: 'November 2020 – July 31, 2021',
    tasks: [
      'Assist web development',
      'Programming',
      'Help prepare test/prod environment',
      'Technical writer',
      'SIT and UAT testing',
      'Administrative works',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-ink text-paper">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

        {/* Label */}
        <div className="md:col-span-1">
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase sticky top-28">
            Work Experience
          </p>
        </div>

        {/* Jobs */}
        <div className="md:col-span-2 space-y-16">
          <div className="section-divider" />
          {jobs.map((job, i) => (
            <div key={i} className="job-card group relative pl-5 border-l border-accent/20 hover:border-accent transition-colors duration-300">
              <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-accent" />
              <p className="font-mono text-xs text-accent tracking-widest uppercase mb-1">{job.period}</p>
              <h3 className="font-display text-2xl text-paper mb-1">{job.title}</h3>
              <p className="font-body text-sm text-muted mb-0.5">{job.company}</p>
              {job.client && <p className="font-mono text-xs text-muted/60 mb-4">{job.client}</p>}
              <ul className="mt-4 space-y-1.5">
                {job.tasks.map((t, j) => (
                  <li key={j} className="flex items-start gap-2 font-body text-sm text-paper/70">
                    <span className="text-accent mt-1.5 text-xs">▸</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
