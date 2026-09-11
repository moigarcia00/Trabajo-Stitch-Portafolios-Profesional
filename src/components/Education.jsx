import { timeline } from '../data/content'

export default function Education() {
  return (
    <section className="w-full py-space-3xl lg:py-space-4xl" id="formacion">
      <div className="max-w-max-width mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col gap-space-2xs mb-space-2xl">
          <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
            Formación y Certificaciones
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">
            Trayectoria Académica
          </h2>
          <div className="w-12 h-1 bg-primary-container rounded-full mt-space-2xs"></div>
        </div>

        <div className="relative pl-6 sm:pl-10 space-y-space-xl before:absolute before:left-2 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
          {timeline.map((item) => (
            <div className="relative group" key={item.title}>
              <div
                className={`absolute -left-6 sm:-left-10 mt-1.5 w-5 h-5 rounded-full bg-surface-container-lowest ring-4 flex items-center justify-center ${
                  item.highlighted ? 'ring-primary-container' : 'ring-surface-variant'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    item.highlighted ? 'bg-primary-container' : 'bg-primary'
                  }`}
                ></span>
              </div>
              <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-2xs mb-space-xs">
                  <span className="font-label-md text-label-md font-semibold text-primary">
                    {item.year}
                  </span>
                  <span
                    className={`inline-flex items-center px-space-xs py-space-2xs rounded bg-surface-container font-label-sm text-label-sm font-semibold ${
                      item.highlighted ? 'text-primary' : 'text-on-surface-variant'
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-title-md text-headline-sm text-on-surface">{item.title}</h3>
                <span className="font-body-sm text-body-sm text-secondary block mt-0.5">
                  {item.subtitle}
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
