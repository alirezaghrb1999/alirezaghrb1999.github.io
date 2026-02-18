import { useInView } from '../hooks/useInView'

const researchInterests = [
  'Deep Learning',
  'NLP',
  'Computer Vision',
  'Explainable AI',
  'Cloud Computing',
  'Software Engineering',
  'LLM Hallucinations',
  'Representation Engineering',
]

export default function About() {
  const [headRef, headVisible] = useInView()
  const [leftRef, leftVisible] = useInView(0.15)
  const [rightRef, rightVisible] = useInView(0.15)

  return (
    <section id="about" className="py-24 md:py-32 px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headRef}>
          <p
            className={`section-label transition-all duration-700 ${
              headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            // about
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-slate-100 mb-16 transition-all duration-1000 delay-100 ${
              headVisible
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{ transitionProperty: 'opacity, transform, filter' }}
          >
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Summary — slides from left */}
          <div
            ref={leftRef}
            className={`md:col-span-3 transition-all duration-800 ${
              leftVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDuration: '800ms' }}
          >
            <div className="border-l-2 border-cyan-500/30 pl-6 space-y-5">
              <p className="text-slate-300 leading-relaxed text-lg">
                Software engineer and system architect who designs, builds, and
                ships production systems single-handedly — from initial
                requirements and database modeling through API design, frontend
                development, infrastructure provisioning, and production
                monitoring.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Proven ability to enter unfamiliar domains — logistics, legal
                compliance, enterprise document management — rapidly absorb
                complex business rules, and deliver working software that
                replaces manual workflows.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Currently exploring trustworthy AI, with a focus on addressing
                hallucinations in large language models using representation
                engineering, prompt tuning, and knowledge graphs.
              </p>
            </div>
          </div>

          {/* Research Interests — slides from right with staggered tags */}
          <div
            ref={rightRef}
            className={`md:col-span-2 transition-all duration-800 ${
              rightVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDuration: '800ms' }}
          >
            <h3 className="font-mono text-sm text-slate-500 mb-5 tracking-wider">
              RESEARCH INTERESTS
            </h3>
            <div className="flex flex-wrap gap-2">
              {researchInterests.map((interest, i) => (
                <span
                  key={interest}
                  className={`px-3 py-1.5 text-sm font-mono text-cyan-400 bg-cyan-500/5 border border-cyan-500/15 rounded-md hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:scale-105 transition-all cursor-default ${
                    rightVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-3'
                  }`}
                  style={{
                    transitionDuration: '500ms',
                    transitionDelay: rightVisible ? `${200 + i * 60}ms` : '0ms',
                  }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
