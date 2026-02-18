import { useInView } from '../hooks/useInView'

const skillCategories = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C/C++', 'Kotlin', 'SQL'],
    dotColor: 'bg-cyan-500',
    headingColor: 'text-cyan-400',
    tagClasses: 'text-cyan-400 bg-cyan-500/5 border-cyan-500/15',
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'HTML/CSS', 'Tailwind', 'Electron'],
    dotColor: 'bg-blue-500',
    headingColor: 'text-blue-400',
    tagClasses: 'text-blue-400 bg-blue-500/5 border-blue-500/15',
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'Prisma', 'REST APIs', 'WebSocket', 'Bull/Redis', 'Jest', 'Swagger'],
    dotColor: 'bg-indigo-500',
    headingColor: 'text-indigo-400',
    tagClasses: 'text-indigo-400 bg-indigo-500/5 border-indigo-500/15',
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'pgvector', 'Redis', 'MongoDB', 'MinIO'],
    dotColor: 'bg-violet-500',
    headingColor: 'text-violet-400',
    tagClasses: 'text-violet-400 bg-violet-500/5 border-violet-500/15',
  },
  {
    name: 'ML / AI',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn', 'Ollama', 'RAG', 'LLMs', 'Transformers'],
    dotColor: 'bg-amber-500',
    headingColor: 'text-amber-400',
    tagClasses: 'text-amber-400 bg-amber-500/5 border-amber-500/15',
  },
  {
    name: 'DevOps',
    items: ['Docker', 'Nginx', 'GitHub Actions', 'CI/CD', 'PM2', 'Git', 'Linux', 'Sentry', 'ELK Stack'],
    dotColor: 'bg-emerald-500',
    headingColor: 'text-emerald-400',
    tagClasses: 'text-emerald-400 bg-emerald-500/5 border-emerald-500/15',
  },
]

function SkillCard({ category, index }) {
  const [ref, isVisible] = useInView(0.05)

  return (
    <div
      ref={ref}
      className={`transition-all ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 translate-y-6'
      }`}
      style={{
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
      }}
    >
      <div className="glass-card p-6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-2 h-2 rounded-full ${category.dotColor}`} />
          <h3 className={`font-display font-bold text-sm tracking-wide ${category.headingColor}`}>
            {category.name}
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {category.items.map((item, i) => (
            <span
              key={item}
              className={`px-2.5 py-1 text-xs font-mono border rounded-md hover:scale-105 transition-all duration-200 cursor-default ${category.tagClasses}`}
              style={{
                transitionDelay: isVisible ? `${(index * 100) + (i * 30)}ms` : '0ms',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, isVisible] = useInView()

  return (
    <section id="skills" className="py-24 md:py-32 px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <p
            className={`section-label transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            // skills
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-slate-100 mb-16 transition-all duration-1000 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{ transitionProperty: 'opacity, transform, filter' }}
          >
            Tech Stack
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.name} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
