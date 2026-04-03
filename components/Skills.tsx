const personalSkills = [
  'Creative spirit',
  'Reliable and professional',
  'Organized',
  'Time management',
  'Team player',
  'Fast learner',
  'Motivated to work',
  'Practicing professional work ethics',
  'Communication skills',
  'Willingness to learn to acquire new skills',
]

const techSkills = [
  { label: 'HTML / CSS', level: 85 },
  { label: 'JavaScript', level: 75 },
  { label: 'C# / .NET', level: 70 },
  { label: 'SQL', level: 75 },
  { label: 'Photoshop', level: 85 },
  { label: 'Wireframing', level: 80 },
  { label: 'Technical Writing', level: 90 },
  { label: 'QA / UAT Testing', level: 85 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-highlight/30">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

        <div className="md:col-span-1">
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase sticky top-28">Skills</p>
        </div>

        <div className="md:col-span-2">
          <div className="section-divider" />

          {/* Tech skills */}
          <h3 className="font-display text-2xl text-ink mb-8">Technical</h3>
          <div className="space-y-5 mb-16">
            {techSkills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between font-body text-sm text-muted mb-1.5">
                  <span>{s.label}</span>
                  <span className="font-mono text-xs">{s.level}%</span>
                </div>
                <div className="h-px bg-ink/10 relative">
                  <div
                    className="h-px bg-accent absolute top-0 left-0 transition-all duration-700"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Personal skills */}
          <h3 className="font-display text-2xl text-ink mb-8">Personal</h3>
          <div className="grid grid-cols-2 gap-3">
            {personalSkills.map((s, i) => (
              <div key={i} className="flex items-center gap-2 font-body text-sm text-muted">
                <span className="text-accent text-xs">◆</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
