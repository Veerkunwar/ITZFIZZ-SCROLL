import { services } from '../content'

export default function Services() {
  return (
    <section id="services" className="px-5 pb-24 sm:px-10 sm:pb-36">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-2xl font-extrabold sm:text-3xl">What we do</h2>
        <ul>
          {services.map((s) => (
            <li key={s.title} className="group border-t border-ink/30 transition-colors last:border-b hover:bg-lime">
              <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10 sm:py-8">
                <h3 className="text-3xl font-extrabold tracking-tight transition-transform group-hover:translate-x-2 sm:text-5xl">{s.title}</h3>
                <p className="max-w-sm text-base sm:text-right">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
