import { useEffect, useRef } from 'react'

function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationId
    let particles = []
    const PARTICLE_COUNT = 60
    const CONNECTION_DIST = 150
    const MOUSE = { x: -1000, y: -1000 }

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    function createParticles() {
      particles = []
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    function draw() {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      // Update positions
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.15
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Mouse interaction — brighten connections near cursor
        const mdx = particles[i].x - MOUSE.x
        const mdy = particles[i].y - MOUSE.y
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mDist < 200) {
          const alpha = (1 - mDist / 200) * 0.25
          ctx.beginPath()
          ctx.arc(particles[i].x, particles[i].y, particles[i].r + 1, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`
          ctx.fill()
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(148, 163, 184, ${p.opacity})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect()
      MOUSE.x = e.clientX - rect.left
      MOUSE.y = e.clientY - rect.top
    }

    function onMouseLeave() {
      MOUSE.x = -1000
      MOUSE.y = -1000
    }

    resize()
    createParticles()
    draw()

    window.addEventListener('resize', () => {
      resize()
      createParticles()
    })
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated particle background */}
      <ParticleBackground />

      {/* Decorative geometric elements */}
      <div className="absolute top-[20%] left-[8%] w-72 h-72 border border-cyan-500/[0.04] rounded-full animate-[spin_80s_linear_infinite]" />
      <div className="absolute bottom-[25%] right-[12%] w-48 h-48 border border-indigo-500/[0.04] rounded-lg rotate-12 animate-[spin_60s_linear_infinite_reverse]" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Role label */}
        <p
          className="font-mono text-cyan-500 text-sm tracking-[0.3em] mb-8 opacity-0"
          style={{ animation: 'fadeIn 0.8s ease-out 0.2s forwards' }}
        >
          SOFTWARE ENGINEER & SYSTEM ARCHITECT
        </p>

        {/* Name */}
        <h1 className="font-display font-extrabold leading-[0.85] tracking-[-0.02em] mb-10">
          <span
            className="block text-[clamp(3rem,8vw,6rem)] text-slate-100 opacity-0 mb-3 md:mb-4"
            style={{ animation: 'fadeUp 0.8s ease-out 0.4s forwards' }}
          >
            Alireza
          </span>
          <span
            className="block text-[clamp(3rem,8vw,6rem)] bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent opacity-0"
            style={{ animation: 'fadeUp 0.8s ease-out 0.6s forwards' }}
          >
            Ghorbani
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14 font-body leading-relaxed opacity-0"
          style={{ animation: 'fadeIn 0.8s ease-out 0.9s forwards' }}
        >
          I design, build, and ship production systems single-handedly — from
          database modeling through infrastructure provisioning and production
          monitoring.
        </p>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 opacity-0"
          style={{ animation: 'fadeIn 0.8s ease-out 1.1s forwards' }}
        >
          <SocialLink href="mailto:alirezaghrb1999@gmail.com" label="Email">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </SocialLink>
          <SocialLink href="https://github.com/alirezaghrb1999" label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/alireza-ghorbani-0736b21b5" label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </SocialLink>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0"
        style={{ animation: 'fadeIn 0.8s ease-out 1.6s forwards' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono text-slate-600 tracking-widest">SCROLL</span>
          <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 rounded-full bg-cyan-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 rounded-lg border border-slate-700/80 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300"
    >
      {children}
    </a>
  )
}
