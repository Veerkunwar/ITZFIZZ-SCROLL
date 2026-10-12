import { ArrowUpRight } from 'lucide-react'
import { brand, contactEmail } from '../content'

export default function Cta() {
  return (
    <section id="contact" className="bg-ink px-5 py-24 text-cream sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">Let&apos;s Build Something Great</h2>
        <p className="mt-6 max-w-md text-lg text-cream/75">Tell us what you&apos;re working on. We usually reply within a day or two.</p>
        <a href={`mailto:${contactEmail}`} className="mt-10 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-lg font-medium text-ink transition hover:-translate-y-0.5">
          Contact us <ArrowUpRight size={20} aria-hidden />
        </a>
        <p className="mt-24 text-sm text-cream/50">&copy; {new Date().getFullYear()} {brand}</p>
      </div>
    </section>
  )
}
