import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl bg-surface-container-low/60" id="habilidades">
      <div className="max-w-max-width mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col gap-space-2xs mb-space-2xl">
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
            Stack Tecnológico
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">
            Habilidades &amp; Especialidades
          </h2>
          <div className="w-12 h-1 bg-primary-container rounded-full mt-space-2xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-md">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:-translate-y-1 transition-transform flex flex-col gap-space-md"
            >
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">{group.icon}</span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-space-xs">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-space-sm py-space-2xs bg-surface-container rounded font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
