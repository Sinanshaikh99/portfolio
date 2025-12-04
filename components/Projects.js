'use client'

export default function Projects() {
  const projects = [
    {
      title: 'EduVerse',
      description: 'Udacity-Style Online Learning Platform',
      features: [
        'Multi-page learning system with 20+ courses',
        'Role-based access and admin dashboard',
        'Uploadable + embedded video lectures',
        'Gamified user progress tracking'
      ],
      tech: ['Next.js', 'React', 'MongoDB', 'TailwindCSS'],
      link: '#'
    },
    {
      title: 'SchemeFinderAI',
      description: 'Government Scheme Recommendation Tool',
      features: [
        'Recommends schemes based on age, income, caste, location',
        'Clean and fully responsive UI',
        'Deployed on Vercel',
        'Real-time filtering and search'
      ],
      tech: ['Next.js', 'React', 'API Integration', 'TailwindCSS'],
      link: '#'
    },
    {
      title: 'EchoTwin',
      description: 'AI Avatar Video Generator',
      features: [
        'Uses OpenAI for script generation',
        'ElevenLabs for voice synthesis',
        'D-ID for video avatar creation',
        'Video preview, download, and share features'
      ],
      tech: ['Next.js', 'OpenAI API', 'ElevenLabs', 'D-ID'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <ul className="space-y-2 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
