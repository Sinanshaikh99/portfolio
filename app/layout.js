import './globals.css'

export const metadata = {
  title: 'Sinan Shaikh - Full Stack Developer & Cloud Engineer',
  description: 'Portfolio of Sinan Shaikh - Information Technology graduate specializing in cloud computing, web development, and AI-powered applications. Building fast, scalable, and user-friendly digital products.',
  keywords: 'Sinan Shaikh, Full Stack Developer, Cloud Engineer, AWS, Next.js, React, Web Development, Portfolio',
  authors: [{ name: 'Sinan Shaikh' }],
  openGraph: {
    title: 'Sinan Shaikh - Full Stack Developer & Cloud Engineer',
    description: 'Portfolio showcasing projects in cloud computing, web development, and AI applications',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sinan Shaikh Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinan Shaikh - Full Stack Developer & Cloud Engineer',
    description: 'Portfolio showcasing projects in cloud computing, web development, and AI applications',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
