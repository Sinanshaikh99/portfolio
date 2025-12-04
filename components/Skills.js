'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailwindCSS']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Firebase']
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Docker', 'GitHub Actions', 'NGINX']
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['Git', 'VS Code', 'Postman', 'Figma', 'Linux', 'CI/CD']
    }
  ]

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="glass-card animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
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
