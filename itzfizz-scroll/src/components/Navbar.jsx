import { ArrowUpRight } from 'lucide-react'
import { brand } from '../content'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-10">
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span aria-hidden className="h-3 w-3 rounded-full bg-lime ring-2 ring-ink" />
          {brand}
        </a>
        <div className="flex items-center gap-8">
          <a href="#about" className="hidden text-sm hover:underline sm:block">About</a>
          <a href="#services" className="hidden text-sm hover:underline sm:block">Services</a>
          <a href="#contact" className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm font-medium text-cream transition hover:bg-lime hover:text-ink">
            Contact Us <ArrowUpRight size={16} aria-hidden />
          </a>
        </div>
      </nav>
    </header>
  )
}
