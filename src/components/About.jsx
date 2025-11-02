import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Three.js',
    'GSAP',
    'Framer Motion',
    'WebGL',
    'Node.js',
    'TailwindCSS',
  ]

  return (
    <section id="about" className="relative scroll-mt-20 bg-[#0d0d0d] px-6 py-24 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-10"
        >
          <p className="text-sm tracking-widest text-teal-300/80">ABOUT</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Cinematic web experiences, built with purpose</h2>
        </motion.div>

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="max-w-3xl text-white/75"
        >
          I’m a creative developer focused on crafting immersive, performant interfaces. I blend real-time 3D, motion, and thoughtful design to bring ideas to life — always with an eye on clarity and accessibility.
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 text-center text-sm text-white/90 shadow-[0_0_0_0_rgba(0,0,0,0)] backdrop-blur transition-colors hover:bg-white/10"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.25), rgba(139,92,246,0.25))' }}
              />
              <span className="relative z-10">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
