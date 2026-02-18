import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050a14]/90 backdrop-blur-lg border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5'
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight text-slate-100 hover:text-cyan-400 transition-colors"
        >
          A<span className="text-cyan-500">.</span>G
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-mono text-slate-400 hover:text-cyan-400 transition-colors relative group"
            >
              <span className="text-cyan-700 mr-1">#</span>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-slate-300 transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-slate-300 transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 border-t border-cyan-500/10' : 'max-h-0'
        }`}
      >
        <div className="bg-[#050a14]/95 backdrop-blur-lg px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-mono text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span className="text-cyan-700 mr-2">#</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
