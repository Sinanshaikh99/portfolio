# Sinan Shaikh - Portfolio Website

A modern, fully responsive portfolio website built with Next.js, React, and TailwindCSS.

## Features

✅ Fully responsive and mobile-first design
✅ Dark/Light theme toggle with localStorage persistence
✅ Smooth animations and transitions
✅ SEO optimized with meta tags
✅ Glassmorphism UI effects
✅ Static export ready for NGINX deployment
✅ Optimized for Vercel deployment

## Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** TailwindCSS
- **Deployment:** Vercel / NGINX

## Getting Started

### Installation

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Static Export (for NGINX)

```bash
npm run export
```

This generates a static site in the `out/` directory.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy automatically

### NGINX Deployment

1. Run `npm run export`
2. Copy the `out/` directory to your server: `/var/www/portfolio/out`
3. Configure NGINX using the provided `nginx.conf`
4. Restart NGINX: `sudo systemctl restart nginx`

## Project Structure

```
portfolio/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main page component
│   ├── globals.css        # Global styles
│   └── not-found.js       # 404 page
├── components/
│   ├── Navbar.js          # Navigation with theme toggle
│   ├── Hero.js            # Hero section
│   ├── About.js           # About section
│   ├── Skills.js          # Skills grid
│   ├── Experience.js      # Work experience
│   ├── Projects.js        # Featured projects
│   ├── Contact.js         # Contact form
│   └── Footer.js          # Footer
├── public/
│   └── assets/            # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # TailwindCSS configuration
├── vercel.json            # Vercel deployment config
└── nginx.conf             # NGINX configuration example
```

## Customization

### Update Content

Edit the component files in `components/` to update:
- Personal information
- Skills
- Experience
- Projects
- Contact details

### Theme Colors

Modify `tailwind.config.js` to change the color scheme.

### SEO

Update metadata in `app/layout.js` for SEO optimization.

## Contact

- **Email:** shaikhsinan15@gmail.com
- **GitHub:** [Sinanshaikh99](https://github.com/Sinanshaikh99)
- **LinkedIn:** [sinan-shaikh-b84439285](https://www.linkedin.com/in/sinan-shaikh-b84439285/)

## License

© 2024 Sinan Shaikh. All rights reserved.
