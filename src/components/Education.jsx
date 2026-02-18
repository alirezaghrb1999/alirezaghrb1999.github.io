import { useInView } from '../hooks/useInView'

export default function Education() {
  const [headRef, headVisible] = useInView()
  const [degreeRef, degreeVisible] = useInView(0.1)
  const [certRef, certVisible] = useInView(0.1)
  const [langRef, langVisible] = useInView(0.1)

  return (
    <section id="education" className="py-24 md:py-32 px-6 section-glow">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={headRef}>
          <p
            className={`section-label transition-all duration-700 ${
              headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            // education
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-slate-100 mb-16 transition-all duration-1000 delay-100 ${
              headVisible
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{ transitionProperty: 'opacity, transform, filter' }}
          >
            Education & Credentials
          </h2>
        </div>

        {/* Degree — slides from left */}
        <div
          ref={degreeRef}
          className={`glass-card p-6 md:p-8 mb-5 transition-all ${
            degreeVisible
              ? 'opacity-100 translate-x-0 scale-100'
              : 'opacity-0 -translate-x-8 scale-[0.98]'
          }`}
          style={{
            transitionDuration: '800ms',
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <div>
              <h3 className="font-display font-bold text-xl text-slate-100">
                B.Sc. in Computer Engineering
              </h3>
              <p className="text-cyan-500/70 font-mono text-sm mt-1">
                Isfahan University of Technology (IUT), Isfahan, Iran
              </p>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="font-mono text-sm text-slate-500">
                Sep 2018 – Feb 2023
              </span>
              <p className="font-display font-bold text-lg text-slate-200 mt-1">
                GPA: 3.65
                <span className="text-slate-500 text-sm font-normal"> / 4</span>
              </p>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-5">
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="inline-block font-mono text-cyan-500 text-xs mr-2 px-1.5 py-0.5 bg-cyan-500/5 border border-cyan-500/15 rounded">
                THESIS
              </span>
              Domain Adaptation Techniques in Image Classification — implemented
              ResNet-50 with DANN (Domain-Adversarial Neural Network) using
              TensorFlow/Keras to improve cross-domain accuracy on the Vehicles
              dataset.
            </p>
          </div>
        </div>

        {/* Certification & Languages */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Certification — slides from bottom-left */}
          <div
            ref={certRef}
            className={`glass-card p-6 transition-all ${
              certVisible
                ? 'opacity-100 translate-y-0 translate-x-0'
                : 'opacity-0 translate-y-6 -translate-x-4'
            }`}
            style={{
              transitionDuration: '700ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: certVisible ? '100ms' : '0ms',
            }}
          >
            <h3 className="font-mono text-sm text-slate-500 mb-4 tracking-wider">
              CERTIFICATION
            </h3>
            <p className="font-display font-bold text-slate-200 mb-1.5">
              Deep Learning Specialization
            </p>
            <p className="text-sm text-slate-400 mb-4">
              DeepLearning.AI (Coursera) — 5 courses
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                'CNNs',
                'Neural Networks & DL',
                'Sequence Models',
                'ML Project Structuring',
                'Hyperparameter Tuning',
              ].map((c, i) => (
                <span
                  key={c}
                  className={`px-2 py-0.5 text-[11px] font-mono text-amber-400/70 bg-amber-500/[0.06] border border-amber-500/10 rounded transition-all ${
                    certVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                  style={{
                    transitionDuration: '400ms',
                    transitionDelay: certVisible ? `${300 + i * 50}ms` : '0ms',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Languages — slides from bottom-right */}
          <div
            ref={langRef}
            className={`glass-card p-6 transition-all ${
              langVisible
                ? 'opacity-100 translate-y-0 translate-x-0'
                : 'opacity-0 translate-y-6 translate-x-4'
            }`}
            style={{
              transitionDuration: '700ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: langVisible ? '200ms' : '0ms',
            }}
          >
            <h3 className="font-mono text-sm text-slate-500 mb-4 tracking-wider">
              LANGUAGES
            </h3>
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-slate-200">
                    English
                  </span>
                  <span className="text-sm text-cyan-400/80 font-mono">
                    Fluent
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-500 leading-relaxed">
                  TOEFL iBT: 98 (R:24 L:27 S:24 W:23)
                  <br />
                  GRE: 315 (Q:161 V:154 AW:3)
                </p>
              </div>
              <div className="border-t border-slate-700/50 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-slate-200">
                    Persian
                  </span>
                  <span className="text-sm text-cyan-400/80 font-mono">
                    Native
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
