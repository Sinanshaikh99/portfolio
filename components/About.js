'use client'

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate technologist who loves turning ideas into reality through code.
              With a strong foundation in both frontend and backend development, combined with
              cloud infrastructure expertise, I create comprehensive solutions that scale.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to solve real-world
              problems. From building interactive web applications to deploying cloud-based
              systems, I thrive on challenges that push me to learn and grow.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="glass-card animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
              🎓 Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  BSc Information Technology
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Anna Leela College, Mumbai
                </p>
                <p className="text-gray-500 dark:text-gray-500">Graduated 2025</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
                Quick Facts
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>📍 Based in Mumbai, India</li>
                <li>💼 Open to opportunities</li>
                <li>🚀 Always learning new tech</li>
                <li>🌟 Passionate about clean code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
