import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Contact() {
  const sectionRef = useRef(null)
  const btnRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const onMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.2)
    y.set(dy * 0.2)
  }

  const onMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative bg-[#0d0d0d] px-6 pb-24 pt-16 text-white md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_120%,rgba(56,189,248,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur md:p-10"
        >
          <h2 className="text-3xl font-semibold md:text-4xl">Let’s build something memorable</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            I’m open to freelance, collaborations, and full-time roles. Tell me about your idea and I’ll get back soon.
          </p>

          <form
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thanks! Your message has been sent.')
            }}
          >
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-white/70">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-2 ring-transparent transition focus:border-white/25 focus:ring-teal-400/40"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-2 ring-transparent transition focus:border-white/25 focus:ring-teal-400/40"
                placeholder="jane@email.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm text-white/70">Message</label>
              <textarea
                rows="5"
                required
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-2 ring-transparent transition focus:border-white/25 focus:ring-teal-400/40"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="sm:col-span-2">
              <motion.button
                ref={btnRef}
                type="submit"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{ translateX: springX, translateY: springY }}
                className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-amber-400 via-pink-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition-transform md:w-auto"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 blur transition-opacity duration-300 md:group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,0.15), transparent 30%, transparent 70%, rgba(255,255,255,0.15))',
                  }}
                />
              </motion.button>
            </div>
          </form>

          <div className="mt-10 flex items-center gap-4 text-white/60">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="mailto:hello@example.com" className="hover:text-white">
              Email
            </a>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} Rohan Kumar — Crafted with React, Motion & Three.</p>
      </div>
    </section>
  )
}
