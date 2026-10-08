/* Ana sayfadaki iki proje kartı: Plugins (/plugins) ve Yamaha CL5 (/cl5).
   /cl5 ayrı bir projeye rewrite ediliyor, bu yüzden düz <a> kullanılıyor. */
const projects = [
  {
    href: '/plugins',
    name: 'Plugins',
    description:
      'Small, focused VST3 / AU plugins for macOS and Windows: gain, formant shifting, saturation and compression. All free.',
    note: 'Coming soon',
    cta: 'View plugins',
  },
  {
    href: '/cl5',
    name: 'Yamaha CL5',
    description:
      'A browser-based simulator of the Yamaha CL5 digital mixing console, for learning and practising the desk without the hardware.',
    note: 'Desktop only',
    cta: 'Open console',
  },
]

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a key={project.href} href={project.href} className="project-card">
              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__footer">
                <span className="project-card__note">{project.note}</span>
                <span className="project-card__cta">{project.cta} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
