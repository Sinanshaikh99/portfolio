'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">
          © {new Date().getFullYear()} Sinan Shaikh. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/Sinanshaikh99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sinan-shaikh-b84439285/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:shaikhsinan15@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-gray-500">
          Built with Next.js, React & TailwindCSS
        </p>
      </div>
    </footer>
  )
}
