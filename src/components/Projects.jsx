import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../projectsData'

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-black/20 backdrop-blur"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-70" />
      </div>
      <div className="relative z-10 p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-white/70">{project.description}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal-300">
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.12), transparent 40%)',
        }}
      />
    </motion.a>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx
    ;(async () => {
      try {
        const gsap = (await import('gsap')).default
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsap.registerPlugin(ScrollTrigger)
        ctx = gsap.context(() => {
          const items = sectionRef.current?.querySelectorAll('[data-card]')
          if (items && items.length) {
            items.forEach((el, i) => {
              gsap.fromTo(
                el,
                { autoAlpha: 0, y: 30 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.9,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                  },
                }
              )
            })
          }
        }, sectionRef)
      } catch (e) {}
    })()
    return () => ctx && ctx.revert()
  }, [])

  // gradient cursor light for cards
  useEffect(() => {
    const grid = sectionRef.current?.querySelector('[data-grid]')
    if (!grid) return
    const handler = (e) => {
      const rect = grid.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      grid.style.setProperty('--x', `${x}px`)
      grid.style.setProperty('--y', `${y}px`)
    }
    grid.addEventListener('mousemove', handler)
    return () => grid.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative bg-[#0d0d0d] px-6 py-24 text-white md:py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm tracking-widest text-teal-300/80">PROJECTS</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Selected Work</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            A mix of client work, experiments, and explorations in real-time graphics and UX.
          </p>
        </div>

        <div data-grid className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div key={p.id} data-card>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.08),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.08),transparent_40%)]" />
    </section>
  )
}
