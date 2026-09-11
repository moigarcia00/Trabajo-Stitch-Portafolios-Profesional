const metrics = [
  { value: '+500 hrs', label: 'de código y diseño interactivo' },
  { value: '15+', label: 'proyectos formativos y personales' },
  { value: '100%', label: 'entusiasmo por aprender y crecer' },
]

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden py-space-3xl lg:py-space-4xl" id="inicio">
      <div className="max-w-max-width mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Columna izquierda: retrato y estado */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start relative order-2 lg:order-1">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              <div className="relative rounded-full overflow-hidden shadow-xl bg-surface-container-low aspect-square">
                <img
                  alt="Moisés García — Diseñador y desarrollador web junior"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAueB-wayA675SFQnHDywe6h_yN4ipkggEu-aL9FD6WzSz7iykg2gLgjb41TyDlXcEBDp5ViYGjn1j9TTKAaiS-clGazUFeFnhHo0grdcssA0_JCKSH2IQV3sliWoWDUlJbemzcArXpmEQgWEkLKKzNxRE6Hr4CFPja-G8ET7wVu_foOLeohjr6fzIqh3Ep1kG2C2lFKAW6fIIbLmRXDvlNuQWqQ9Mb3PqUCc1h0wFlmcqES_TP0XbN5jOcSeXAmWCwhhzXzsxD-HNoO8"
                />
              </div>
              <div className="absolute -bottom-space-sm left-1/2 lg:left-space-lg -translate-x-1/2 lg:translate-x-0 w-[90%] sm:w-auto bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-xs">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-container"></span>
                </span>
                <span className="font-label-md text-label-md text-on-surface whitespace-nowrap">
                  Disponible para incorporación inmediata · Prácticas o Junior
                </span>
              </div>
            </div>
          </div>

          {/* Columna derecha: bio y titular */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg order-1 lg:order-2">
            <div className="flex flex-col gap-space-sm items-start">
              <span className="inline-flex items-center gap-space-2xs px-space-sm py-space-2xs rounded bg-surface-container text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                <span className="material-symbols-outlined text-[14px]">palette</span>
                Diseñador Full Stack Junior · En busca de primera oportunidad
              </span>
              <h1 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg lg:text-display-lg text-on-surface tracking-tight leading-tight">
                Hola, soy Moisés García. Diseñador y desarrollador web junior apasionado por crear y aprender.
              </h1>
            </div>
            <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
              Entusiasta de la intersección entre experiencia de usuario y desarrollo frontend. Con bases
              sólidas en UI/UX, prototipado interactivo y desarrollo web moderno (React, Node, Tailwind).
              Motivado para aportar valor desde el primer día, aprender continuamente y crecer en equipo.
            </p>

            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                className="inline-flex items-center gap-space-xs bg-primary-container text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-lg hover:bg-primary transition-all duration-200 shadow-md"
                href="#proyectos"
              >
                <span>Ver proyectos destacados</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <a
                className="inline-flex items-center gap-space-xs bg-surface-container text-on-surface font-label-md text-label-md px-space-lg py-space-sm rounded-lg hover:bg-surface-container-high transition-all duration-200"
                href="#contacto"
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>Descargar Curriculum (PDF)</span>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-md">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-2xs"
                >
                  <span className="font-title-md text-headline-sm text-primary">{metric.value}</span>
                  <span className="font-body-sm text-body-sm text-secondary">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
