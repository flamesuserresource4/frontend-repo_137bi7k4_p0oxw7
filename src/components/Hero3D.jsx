import { useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero3D() {
  const containerRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0d0d0d] text-white"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Cinematic gradient glow overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_45%)]" />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="mx-auto w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs tracking-wider text-white/80 backdrop-blur">
            Portfolio • Creative Developer
          </p>
          <h1 className="text-balance bg-gradient-to-br from-teal-300 via-cyan-200 to-violet-300 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-7xl">
            Rohan Kumar
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/75 md:text-lg">
            I craft cinematic, interactive web experiences blending code, design, and 3D.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('projects')
              }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-transform duration-300 hover:scale-[1.02]"
            >
              <span className="relative z-10">View Projects</span>
              <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('contact')
              }}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 8 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-6 left-0 right-0 mx-auto flex w-full max-w-7xl items-center justify-center"
        >
          <button
            onClick={() => scrollToId('about')}
            className="relative flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] text-white/70 backdrop-blur transition-colors hover:bg-white/10"
          >
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gradient-to-br from-teal-400 to-violet-500" />
            Scroll to explore
          </button>
        </motion.div>
      </div>
    </section>
  )
}
