import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-bold text-xl">Your Name</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Services />
        <Process />
        <CTA />
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Java • Angular • Jenkins • GitHub Actions • AWS</p>
        </div>
      </footer>
    </div>
  )
}

export default App
