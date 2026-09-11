import { projects } from '../data/content'

export default function Projects() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl" id="proyectos">
      <div className="max-w-max-width mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col gap-space-2xs mb-space-2xl">
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
            Casos de Estudio
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">
            Proyectos Destacados
          </h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-xl">
            Una selección de proyectos formativos y personales donde combiné diseño UI/UX minucioso con
            desarrollo web interactivo.
          </p>
          <div className="w-12 h-1 bg-primary-container rounded-full mt-space-2xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-lg">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden bg-surface-container">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
                <div className="absolute top-space-sm right-space-sm bg-surface-container-lowest/90 backdrop-blur-md px-space-xs py-space-2xs rounded font-label-sm text-label-sm text-primary font-semibold">
                  {project.tag}
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-title-md text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary">{project.description}</p>
                </div>
                <div className="flex flex-col gap-space-md">
                  <div className="flex flex-wrap gap-space-2xs">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-space-xs py-space-2xs rounded bg-surface-container text-on-surface font-label-sm text-label-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-space-md pt-space-xs">
                    <a
                      className="inline-flex items-center gap-space-2xs text-primary font-label-md text-label-md hover:text-on-surface transition-colors"
                      href={project.demoUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Demo en vivo</span>
                      <span className="material-symbols-outlined text-[16px]">north_east</span>
                    </a>
                    <a
                      className="inline-flex items-center gap-space-2xs text-secondary font-label-md text-label-md hover:text-on-surface transition-colors"
                      href={project.codeUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>Código en GitHub</span>
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
