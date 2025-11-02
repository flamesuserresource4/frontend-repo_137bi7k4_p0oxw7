import { useEffect } from 'react'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // prefer smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0d0d0d] font-sans text-white antialiased">
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          RK
        </a>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="relative">
        <Hero3D />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
