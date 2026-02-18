import { useInView } from '../hooks/useInView'

const projects = [
  {
    title: 'Domain Adaptation in Image Classification',
    description:
      'B.Sc. Thesis — Implemented ResNet-50 with DANN (Domain-Adversarial Neural Network) using TensorFlow/Keras to improve cross-domain accuracy by over 20% on the Vehicles dataset.',
    tech: ['TensorFlow', 'Keras', 'ResNet-50', 'DANN'],
    link: 'https://github.com/alirezaghrb1999/Domain_adaptation',
  },
  {
    title: 'Vehicle Detection in Aerial Imagery',
    description:
      'Fine-tuned R-CNN, YOLOv5, and RetinaNet models on the VEDAI dataset for detecting vehicles in aerial and satellite images.',
    tech: ['YOLOv5', 'R-CNN', 'RetinaNet', 'PyTorch'],
    link: 'https://github.com/alirezaghrb1999/ObjectDetection_Vedai',
  },
  {
    title: 'Deep RL for Stock Trading',
    description:
      'Applied PPO, A2C, and DQN reinforcement learning algorithms for automated stock trading strategies.',
    tech: ['PPO', 'A2C', 'DQN', 'Python'],
  },
  {
    title: 'Microservices on Kubernetes',
    description:
      'Built Node.js APIs and MongoDB microservices deployed and orchestrated via Kubernetes clusters with Docker containers.',
    tech: ['Kubernetes', 'Docker', 'Node.js', 'MongoDB'],
  },
  {
    title: 'MERN Stack Trading Platform',
    description:
      'Full-stack item-trading platform built during internship at IUT IT Center, serving 150+ university users.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/alirezaghrb1999/Bazar-MERN_Stack',
  },
  {
    title: 'Network Security Tools',
    description:
      'Developed a network packet sniffer and port scanner for security analysis and network diagnostics.',
    tech: ['Python', 'Networking', 'Security'],
  },
]

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useInView(0.05)

  // Alternate animation directions for visual variety
  const directions = [
    'translate-y-8',        // up
    'translate-x-8',        // right
    'translate-y-8',        // up
    '-translate-x-8',       // left
    'translate-y-8',        // up
    'translate-x-8',        // right
  ]

  return (
    <div
      ref={ref}
      className={`transition-all ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 scale-[0.97] ${directions[index]}`
      }`}
      style={{
        transitionDuration: '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: isVisible ? `${index * 90}ms` : '0ms',
      }}
    >
      <div className="glass-card p-6 h-full flex flex-col group">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display font-bold text-slate-200 group-hover:text-cyan-300 transition-colors leading-snug">
            {project.title}
          </h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-110 shrink-0 mt-0.5"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          )}
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] font-mono text-cyan-400/70 bg-cyan-500/[0.06] border border-cyan-500/10 rounded hover:scale-105 transition-transform"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [ref, isVisible] = useInView()

  return (
    <section id="projects" className="py-24 md:py-32 px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}>
          <p
            className={`section-label transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            // projects
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-bold text-slate-100 mb-16 transition-all duration-1000 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-4 blur-sm'
            }`}
            style={{ transitionProperty: 'opacity, transform, filter' }}
          >
            Academic & Side Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
