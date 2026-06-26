# Armory — Elite Frontend Architecture

A high-performance, strictly constrained Next.js (App Router) frontend built for the Vibecoding Competition. Armory represents a fictional enterprise platform deploying autonomous AI agents at scale.

This project is engineered to deliver a highly stylized, premium "Oceanic Dark Mode" aesthetic featuring heavy glassmorphism, glowing micro-interactions, and complex structural layouts—**entirely without the use of external animation or UI libraries.**

## 🏆 Competition Architectural Constraints

This codebase adheres to a rigorous set of rules designed to test raw frontend engineering capability:

1. **Zero External Animation Libraries:** 
   - `framer-motion`, `gsap`, `react-spring`, and `radix-ui` are strictly prohibited.
   - All motion, scroll progress, ambient backgrounds, and interactive transitions are built natively using CSS Keyframes, CSS Transitions, and standard React hooks.
2. **GPU Offloading & Performance:** 
   - All animations (shimmers, blobs, floats, marquee scrolling) are routed through `transform`, `opacity`, or `background-position` to ensure they are handled by the browser's compositor thread, eliminating layout thrashing and DOM repaints.
3. **State Isolation & Zero-Hydration Cost:**
   - Client-side interactivity is tightly isolated using the `"use client"` directive.
   - Global layout components (like the Footer) are purged of event handlers and rely entirely on Tailwind CSS `group`/`peer` utilities for hover states, ensuring they remain pure Server Components.
4. **Flawless Mobile Responsiveness:**
   - Multi-column grids flawlessly collapse (`grid-cols-1 md:grid-cols-4`).
   - The complex Bento Grid dynamically morphs into a touch-optimized Accordion list on mobile viewports using a strict `window.resize` context lock, avoiding external responsive wrappers.
   - Header layers are explicitly bound by math (`w-[calc(100%-2rem)]`) to prevent mobile viewport overflow.

## 🛠 Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Vanilla utilities + custom `@layer` extensions)
- **Icons:** Custom SVGs (No external icon font libraries)
- **Node.js:** v18.17+

## 🎨 Design System

- **Palette:** 
  - Oceanic Noir (`#172B36`)
  - Arctic Powder (`#F1F6F4`)
  - Forsythia Gold (`#FFC801`)
  - Saffron Orange (`#FF9932`)
- **Typography:** 
  - Main display: `Inter` (sans-serif)
  - Metrics & UI labels: `JetBrains Mono` (monospace)
- **Aesthetic:** High-fidelity glassmorphism, severe corner rounding (`rounded-2xl`, `rounded-3xl`), drop-shadow layering, and dynamic CSS text shimmering.

## 🚀 Getting Started

First, install the dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.