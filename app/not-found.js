import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center px-4 animate-fade-in">
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
