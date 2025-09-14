# Sahan Lelwala - Modern Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a minimalistic black and white design with dark/light mode support.

## 🚀 Features

- **Modern Design**: Clean, minimalistic interface with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Automatic theme detection with manual toggle
- **Performance**: Optimized builds with Vite
- **Containerized**: Docker support for development and production
- **CI/CD**: Automated testing, building, and deployment with GitHub Actions
- **Type Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages, Docker Registry
- **Linting**: ESLint with TypeScript support

## 📦 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/sahanrashmikaslk/sahanrashmikaslk.github.io.git
cd sahanrashmikaslk.github.io

# Switch to modern-ui branch
git checkout modern-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the site.

### Docker Development

```bash
# Start development container
npm run docker:dev

# Or using docker-compose directly
docker-compose up portfolio-dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Or build with Docker
npm run docker:build
docker run -p 8080:80 portfolio:latest
```

## 📧 Contact

**Sahan Lelwala**
- Email: sahanrashmikaslk@gmail.com
- LinkedIn: [sahan-lelwala](https://linkedin.com/in/sahan-lelwala/)
- GitHub: [sahanrashmikaslk](https://github.com/sahanrashmikaslk/)

---

Built with ❤️ by Sahan Lelwala
