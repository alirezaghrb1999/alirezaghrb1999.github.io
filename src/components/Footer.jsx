import { useInView } from '../hooks/useInView'

export default function Footer() {
  const [ref, isVisible] = useInView(0.3)

  return (
    <footer
      ref={ref}
      className={`py-8 px-6 border-t border-slate-800/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-slate-600">
          &copy; 2025 Alireza Ghorbani
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/alirezaghrb1999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-600 hover:text-cyan-500 hover:scale-110 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alireza-ghorbani-0736b21b5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-600 hover:text-cyan-500 hover:scale-110 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alirezaghrb1999@gmail.com"
            className="text-xs font-mono text-slate-600 hover:text-cyan-500 hover:scale-110 transition-all"
          >
            Email
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-4 text-center">
        <p className="text-[11px] font-mono text-slate-700">
          Built with React.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
