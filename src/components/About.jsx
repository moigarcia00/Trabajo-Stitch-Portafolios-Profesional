import { pillars } from '../data/content'

export default function About() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-low/60" id="sobre-mi">
      <div className="max-w-max-width mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col gap-space-2xs mb-space-2xl">
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
            Trayectoria &amp; Filosofía
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">
            Sobre mí
          </h2>
          <div className="w-12 h-1 bg-primary-container rounded-full mt-space-2xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              Mi pasión por la tecnología nació al descubrir cómo el diseño visual y el código pueden
              converger para resolver problemas reales. Me formé con rigor en desarrollo full stack y
              metodologías de diseño centrado en el usuario, dedicando incontables horas a construir
              prototipos funcionales y aplicaciones accesibles.
            </p>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm border-l-4 border-primary">
              <blockquote className="font-title-md text-title-md text-on-surface italic">
                "Diseñar pensando en las personas, programar cuidando cada detalle y mantener viva la
                curiosidad técnica constante."
              </blockquote>
            </div>
            <p className="font-body-md text-body-md text-secondary leading-relaxed">
              Disfruto transformar wireframes de Figma en componentes React modulares y responsivos,
              apoyándome en buenas prácticas como semántica accesible, arquitectura limpia y control de
              versiones con Git. Busco mi primera oportunidad profesional en un equipo multidisciplinar
              donde aportar mi energía, aprender de perfiles sénior y contribuir activamente al producto.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-shadow flex gap-space-md"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-[24px]">{pillar.icon}</span>
                </div>
                <div className="flex flex-col gap-space-2xs">
                  <h3 className="font-title-md text-title-md text-on-surface">{pillar.title}</h3>
                  <p className="font-body-sm text-body-sm text-secondary">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
