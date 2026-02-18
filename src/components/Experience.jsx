import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Full-Stack Software Engineer',
    type: 'Freelance',
    project: 'Logistics Operations ERP System',
    period: 'May 2025 – Dec 2025',
    bullets: [
      'Sole architect and developer of a full ERP system covering route planning, cargo operations, fuel management, commercial contracts, and financial cost allocation',
      'Designed interactive map-based shipment visualization tracking 500+ trips in real time, with role-specific dashboards for operations, commercial, and finance departments',
      'Engineered a custom FIFO fuel cost engine and transactional cargo flow logic, eliminating manual reconciliation errors and reducing month-end reporting time by ~40%',
      'Translated complex logistics domain workflows into technical specs by collaborating directly with operations and commercial teams',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Electron'],
  },
  {
    role: 'Full-Stack Developer',
    type: 'Freelance',
    project: 'AI-Powered Document Management System',
    period: 'Jan 2025 – June 2025',
    bullets: [
      'Architected an enterprise DMS processing 10,000+ documents with a RAG chatbot and hybrid search (keyword + vector + AI re-ranking) using Ollama LLMs, cutting retrieval time from minutes to under 3 seconds',
      'Built containerized OCR pipelines (Tesseract/Poppler) with multilingual support and architected a distributed GPU/CPU split infrastructure with a FastAPI gateway for LLM inference',
      'Optimized vector search with HNSW indexes on pgvector, reducing query latency by 65%; implemented ELK stack monitoring and async task queues for background processing',
    ],
    tech: ['Ollama', 'FastAPI', 'pgvector', 'Tesseract', 'ELK Stack', 'Bull', 'Redis'],
  },
  {
    role: 'DevOps / Backend Engineer',
    type: 'Freelance',
    project: 'Private Encrypted Messaging Platform',
    period: 'Sep 2024 – Dec 2024',
    bullets: [
      'Deployed an E2E encrypted platform (Matrix Synapse, LiveKit, Coturn) supporting text, voice, and video for 200+ users; customized Element Android (Kotlin) and Desktop (Electron) clients with rebranded UI',
      'Resolved production issues including WebSocket proxy failures, TURN/STUN NAT traversal, and connection pool exhaustion; automated zero-downtime migrations and backup/restore workflows',
    ],
    tech: ['Matrix Synapse', 'LiveKit', 'Coturn', 'Kotlin', 'Electron', 'Docker'],
  },
  {
    role: 'Full-Stack Developer',
    type: 'Freelance',
    project: 'Pardis Legal Services Platform',
    period: 'Apr 2024 – June 2024',
    bullets: [
      'Built a legal case management system with role-based dashboards for clients, lawyers, and admins handling 1,000+ active cases',
      'Implemented SSR, dynamic sitemaps, and a fully RTL-first Persian interface with an integrated blog/CMS, growing organic search traffic by 3x',
      'Designed a multi-layer moderation workflow with real-time notifications and audio messaging, reducing average case processing time by ~35%',
    ],
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma'],
  },
  {
    role: 'Web Developer Intern',
    type: 'Internship',
    project: 'IUT IT Center, Isfahan University of Technology',
    period: 'Summer 2022',
    bullets: [
      'Developed a MERN full-stack item-trading platform serving 150+ users — first professional experience with end-to-end development that laid the foundation for all subsequent freelance work',
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
]

function ExperienceCard({ exp, index, total }) {
  return (
    <div className="w-[85vw] sm:w-[420px] md:w-[460px] flex-shrink-0">
      <div className="glass-card p-6 h-full flex flex-col">
        {/* Counter + Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-slate-600">
            {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
          </span>
          <span className="font-mono text-xs text-cyan-500/70 bg-cyan-500/5 border border-cyan-500/15 rounded-full px-3 py-1">
            {exp.period}
          </span>
        </div>

        <h3 className="font-display font-bold text-xl text-slate-100 mb-1">
          {exp.role}
        </h3>
        <p className="text-sm font-mono mb-5">
          <span className="text-cyan-500/70">{exp.project}</span>
          <span className="text-slate-600 ml-2">&middot; {exp.type}</span>
        </p>

        <ul className="space-y-2.5 mb-5 flex-grow">
          {exp.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-sm text-slate-400 leading-relaxed pl-5 relative"
            >
              <span className="absolute left-0 top-0 text-cyan-600 text-xs leading-relaxed">
                &#9657;
              </span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-700/50">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-mono text-cyan-400/70 bg-cyan-500/[0.06] border border-cyan-500/10 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const progressRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const section = sectionRef.current
    const track = trackRef.current
    const bar = progressRef.current
    if (!section || !track) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const sectionH = section.offsetHeight
      const vh = window.innerHeight
      const scrolled = -rect.top
      const scrollable = sectionH - vh
      const p = Math.max(0, Math.min(1, scrolled / scrollable))

      const trackWidth = track.scrollWidth
      const viewWidth = window.innerWidth
      const maxShift = Math.max(0, trackWidth - viewWidth + 100)

      track.style.transform = `translateX(-${p * maxShift}px)`
      if (bar) bar.style.width = `${p * 100}%`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isMobile])

  // Mobile: vertical stacked layout
  if (isMobile) {
    return (
      <section id="experience" className="py-24 px-6">
        <div className="max-w-lg mx-auto">
          <p className="section-label">// experience</p>
          <h2 className="font-display text-3xl font-bold text-slate-100 mb-10">
            Where I've Built
          </h2>
          <div className="space-y-5">
            {experiences.map((exp, i) => (
              <div key={i} className="glass-card p-5">
                <span className="inline-block font-mono text-xs text-cyan-500/70 bg-cyan-500/5 border border-cyan-500/15 rounded-full px-3 py-1 mb-3">
                  {exp.period}
                </span>
                <h3 className="font-display font-bold text-lg text-slate-100 mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm font-mono text-cyan-500/70 mb-4">
                  {exp.project}
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-sm text-slate-400 leading-relaxed pl-5 relative"
                    >
                      <span className="absolute left-0 text-cyan-600 text-xs">
                        &#9657;
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono text-cyan-400/70 bg-cyan-500/[0.06] border border-cyan-500/10 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Desktop: horizontal scroll-driven animation
  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="px-8 md:px-16 lg:px-24 mb-10">
          <p className="section-label">// experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
            Where I've Built
          </h2>
        </div>

        {/* Horizontal scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-6 px-8 md:px-16 lg:px-24 will-change-transform"
        >
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              total={experiences.length}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 right-8 md:right-16 lg:right-24">
          <div className="h-px bg-slate-800 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-cyan-500/60 to-cyan-400/60 rounded-full"
              style={{ width: '0%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
