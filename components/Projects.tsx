const projects = [
  {
    name: 'WRAS Project',
    description:
      'Internal report and data management system that holds various information and data processes inside the organization.',
  },
  {
    name: 'Auto Email Recon System',
    description:
      'Email reconciliation system that runs automatically by a Job and distributed internally.',
  },
  {
    name: 'LOOK Project',
    description:
      'Part in the application testing and report reconciliation of the LOOK Philippines. New application which also caters beauty products.',
  },
  {
    name: 'PPM (Pick Pack Module) Project',
    description:
      'A system that calculates the dimension of items before the actual packaging of products. Part in waybill designing and printing.',
  },
  {
    name: 'Web Control Center',
    description:
      'A system functioning as the main control of the company — transferring data to stores, purchase ordering, hiring management, employee management, and store staff deployment.',
  },
  {
    name: 'Web Portal',
    description:
      'A system where all franchisees can review their store sales, monthly dues, store management, and BIR materials.',
  },
  {
    name: 'DC PCount',
    description:
      'A web application system where people in a Distribution Center can do the yearly item inventory automatically.',
  },
  {
    name: 'POS+',
    description:
      'A POS application system used by Generika stores to sell, make a PO, sales declare, manage item inventory, and generate reports.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

        {/* Label */}
        <div className="md:col-span-1">
          <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase sticky top-28">
            Projects Involved
          </p>
        </div>

        {/* Grid */}
        <div className="md:col-span-2">
          <div className="section-divider" />
          <h2 className="font-display text-4xl text-ink mb-10">
            Work I&apos;ve<br /><span className="italic">been part of</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="group border border-ink/10 p-6 hover:border-accent transition-colors duration-300 relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute top-3 right-4 font-display text-5xl text-ink/5 group-hover:text-accent/10 transition-colors duration-300 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg text-ink mb-3 leading-snug">{p.name}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
