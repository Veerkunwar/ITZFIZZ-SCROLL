import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { gsap, ScrollTrigger, useGSAP } from '../lib/gsap'
import Car from './Car'
import { stats } from '../content'

export default function Hero() {
  const root = useRef(null)
  const stage = useRef(null)
  const car = useRef(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        { motion: '(prefers-reduced-motion: no-preference)', desktop: '(min-width: 768px)' },
        (ctx) => {
          // Reduced motion: leave everything as it is in the markup (final values, car parked).
          if (!ctx.conditions.motion) return

          // ---- 1. Intro: plays once on load ----
          const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
          intro
            .from('.h-line', { yPercent: 110, duration: 1, stagger: 0.12 })
            .from('.h-sub', { y: 20, opacity: 0, duration: 0.8, stagger: 0.12 }, '-=0.5')
            .from('.h-stat', { y: 24, opacity: 0, duration: 0.7, stagger: 0.2 }, '-=0.3')
            .from('.h-car', { x: -80, opacity: 0, duration: 1.1 }, '<')
            .from('.h-cta', { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.6')

          // Count the numbers up by writing straight to the DOM (no React state).
          gsap.utils.toArray('.h-num').forEach((el, i) => {
            const counter = { v: 0 }
            const end = Number(el.dataset.value)
            el.textContent = '0%'
            gsap.to(counter, {
              v: end, duration: 1.6, delay: 1.1 + i * 0.2, ease: 'power2.out',
              onUpdate: () => { el.textContent = `${Math.round(counter.v)}%` },
            })
          })

          // ---- 2. Scroll scene: everything is driven by scrub, never by time ----
          // Desktop pins the hero for 1.6 screens of scrolling. On mobile we skip the pin
          // and let the scene play while the hero scrolls away, which is lighter and kinder to touch.
          const { desktop } = ctx.conditions
          // How far the car must travel to reach the right edge of the stage (re-measured on resize).
          const distance = () => stage.current.clientWidth - car.current.offsetWidth

          const scene = gsap.timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: root.current,
              start: 'top top',
              end: desktop ? '+=160%' : 'bottom top',
              pin: desktop,
              scrub: 0.8,          // small lag = smooth, weighty feel
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })

          scene
            .to('.h-car-inner', { x: distance, scale: desktop ? 1.12 : 1.05 }, 0)
            // a little nose-up lean as it pulls away, then it settles
            .to('.h-car-inner', { rotation: -2.5, ease: 'power1.out', duration: 0.35 }, 0)
            .to('.h-car-inner', { rotation: 0, ease: 'power1.inOut', duration: 0.65 }, 0.35)
            // svgOrigin pins each wheel's spin to its own hub (SVG coordinates), so it can't drift off the car
            .to('.wheel', { rotation: 1080, svgOrigin: (i, el) => el.dataset.origin }, 0)
            .fromTo('.h-trail', { scaleX: 0 }, { scaleX: 1 }, 0)
            // headline lines slide apart, like the car is cutting between them
            .to('.h-l1', { x: () => -window.innerWidth * 0.06 }, 0)
            .to('.h-l2', { x: () => window.innerWidth * 0.06 }, 0)
            .to('.h-copy', { y: -30, opacity: 0.25 }, 0)
            .to('.h-hint', { opacity: 0, duration: 0.1 }, 0)

          // Fonts change text width, so measure again once they're in.
          document.fonts?.ready.then(() => ScrollTrigger.refresh())
        }
      )

      // Reverts every tween and ScrollTrigger made above. Safe under Strict Mode.
      return () => mm.revert()
    },
    { scope: root }
  )

  return (
    <section id="top" ref={root} className="relative flex h-svh min-h-[640px] flex-col overflow-hidden px-5 pt-24 sm:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col">
        <h1 className="text-[clamp(2.1rem,7.5vw,6.5rem)] font-extrabold leading-[0.95] tracking-[0.28em]">
          <span className="block overflow-hidden"><span className="h-line h-l1 block">WELCOME</span></span>
          <span className="block overflow-hidden">
            <span className="h-line h-l2 relative inline-block pb-3">
              ITZFIZZ
              <svg aria-hidden viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-3 w-full">
                <path d="M2 8C30 1 60 13 90 6s60-4 108 2" fill="none" stroke="#e11d2e" strokeWidth="5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />              </svg>
            </span>
          </span>
        </h1>

        <div className="h-copy mt-6 max-w-md">
          <p className="text-lg leading-snug sm:text-xl">
            <span className="h-sub block">Creative digital experiences.</span>
            <span className="h-sub block text-ink/70">Built to move businesses forward.</span>
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-5">
            <a href="#contact" className="h-cta inline-flex items-center gap-1 rounded-full bg-lime px-5 py-2.5 font-medium ring-2 ring-ink transition hover:-translate-y-0.5">
              Start a project <ArrowUpRight size={18} aria-hidden />
            </a>
            <a href="#services" className="h-cta font-medium underline underline-offset-4">What we do</a>
          </div>
        </div>

        {/* The road. Car, lime trail and handwritten hint all live in here. */}
        <div ref={stage} className="relative min-h-[150px] flex-1">
          <p className="h-hint absolute left-[42%] top-4 flex -rotate-3 items-center gap-1 font-hand text-2xl sm:left-[38%]" aria-hidden>
            go on, scroll <ArrowDown size={18} />
          </p>
          <div className="h-trail absolute inset-x-0 bottom-0 h-3 origin-left bg-lime" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-ink/30" />
          <div ref={car} className="h-car absolute bottom-3 left-0 w-[clamp(250px,40vw,560px)]">
            <div className="h-car-inner origin-bottom">
              <Car className="block w-full" />
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-3 gap-4 pb-6 sm:max-w-2xl sm:gap-8 sm:pb-8">
          {stats.map((s) => (
            <li key={s.label} className="h-stat border-t border-ink/30 pt-3">
              <span className="h-num block text-[clamp(1.7rem,5vw,3.3rem)] font-extrabold leading-none" data-value={s.value}>
                {s.value}%
              </span>
              <span className="mt-1 block text-xs leading-tight sm:text-sm">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
