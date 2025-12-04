'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'AWS Cloud Intern',
      company: 'Cythians App for Knowledge',
      period: '2024',
      description: 'Managed AWS services and improved backend scalability',
      achievements: [
        'Managed AWS EC2, S3, IAM, Lambda, CloudWatch, API Gateway',
        'Improved backend scalability and monitored cloud performance',
        'Integrated cloud-based automation and optimized deployments'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'Nexcore Alliance',
      period: '2024',
      description: 'Built responsive UI and integrated REST APIs',
      achievements: [
        'Built responsive UI using HTML, CSS, JS, React, Next.js',
        'Integrated REST APIs and enhanced frontend performance',
        'Fixed bugs, improved UX, and collaborated using Git workflows'
      ]
    }
  ]

  return (
    <section id="experience" className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400">{exp.company}</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
