# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo

- **Live URL:** [Insert Vercel / Netlify Link Here]
- **Repository:** [Insert GitHub Repo Link Here]

## 🛠️ Tech Stack

- **Framework:** Next.js 14 / React.js
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## ✨ Standout Features Implemented

1. **Custom Cursor:** Integrated an interactive, mouse-following ring and dot using Framer Motion's `useSpring`. It scales dynamically when hovering over clickable elements and hides cleanly on touch/mobile devices (`pointer: coarse`).
2. **Scroll-Triggered Reveals:** Smooth entrance animations for text, images, and cards as they enter the viewport, built using Framer Motion's `useInView`.
3. **Animated Dark/Light Theme Switcher:** Integrated dark mode using `next-themes` and Tailwind CSS v4, providing an accessible and modern viewing experience.
4. **Scroll Progress Bar:** A fixed visual indicator at the top of the screen showing reading progress, using Framer Motion's `useScroll`.

## 📦 Getting Started Locally

1. **Clone the repository:**

```bash
git clone <https://github.com/your-username/tis-homepage-redesign.git>
cd tis-homepage-redesign
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) in your browser.

## Component Architecture Overview

- `components/ui/` - Atomic UI components
- `components/sections/` - Main page sections (Hero, About, Academics, Testimonials, CTA)
- `components/animation/` - Animation drivers (ScrollReveal, ScrollProgress)
- `components/layout/` - Layout components (Navbar, Footer, ThemeProvider, ThemeToggle)

## Brand Identity Retained

Primary colors, copy, and structural focus reflect the official school assets from [tis.edu.in](https://tis.edu.in/)
