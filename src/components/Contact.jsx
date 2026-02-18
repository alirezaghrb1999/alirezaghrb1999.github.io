import { useInView } from '../hooks/useInView'

function ContactBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Pulsing concentric rings — "signal" / "reach out" motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.06]"
          style={{ animation: 'contactPulse 6s ease-out infinite' }}
        />
        <div
          className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.06]"
          style={{ animation: 'contactPulse 6s ease-out 2s infinite' }}
        />
        <div
          className="absolute w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/[0.06]"
          style={{ animation: 'contactPulse 6s ease-out 4s infinite' }}
        />
      </div>

      {/* Floating gradient orbs */}
      <div
        className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orbFloat1 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[15%] right-[10%] w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'orbFloat2 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[40%] right-[25%] w-48 h-48 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'orbFloat3 10s ease-in-out infinite',
        }}
      />

      {/* Small floating dots */}
      <div
        className="absolute top-[25%] right-[20%] w-1.5 h-1.5 bg-cyan-500/25 rounded-full"
        style={{ animation: 'dotDrift 8s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-[30%] left-[25%] w-1 h-1 bg-indigo-400/20 rounded-full"
        style={{ animation: 'dotDrift 10s ease-in-out 2s infinite' }}
      />
      <div
        className="absolute top-[60%] left-[12%] w-1 h-1 bg-cyan-400/15 rounded-full"
        style={{ animation: 'dotDrift 7s ease-in-out 4s infinite' }}
      />
      <div
        className="absolute top-[15%] left-[40%] w-1.5 h-1.5 bg-cyan-500/15 rounded-full"
        style={{ animation: 'dotDrift 9s ease-in-out 1s infinite' }}
      />
    </div>
  )
}

export default function Contact() {
  const [ref, isVisible] = useInView(0.2)

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 section-glow">
      <ContactBackground />

      <div ref={ref} className="relative max-w-3xl mx-auto text-center">
        <p
          className={`section-label transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          // contact
        </p>

        <h2
          className={`font-display text-4xl md:text-5xl font-bold text-slate-100 mb-6 transition-all duration-1000 delay-100 ${
            isVisible
              ? 'opacity-100 scale-100 blur-0'
              : 'opacity-0 scale-95 blur-sm'
          }`}
          style={{ transitionProperty: 'opacity, transform, filter' }}
        >
          Let's Build Something
        </h2>

        <p
          className={`text-lg text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: isVisible ? '250ms' : '0ms' }}
        >
          I'm always interested in hearing about new projects, research
          opportunities, and collaborations. Feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:alirezaghrb1999@gmail.com"
            className={`px-8 py-3.5 font-mono text-sm bg-cyan-500 text-[#050a14] rounded-lg font-semibold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            Say Hello
          </a>
          <a
            href="https://github.com/alirezaghrb1999"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3.5 font-mono text-sm border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/alireza-ghorbani-0736b21b5"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3.5 font-mono text-sm border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
