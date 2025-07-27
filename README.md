# Val Whitten Portfolio

A modern React TypeScript portfolio website built with Vite and Tailwind CSS.

## Features

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom animations
- **Responsive design** that works on all devices
- **Interactive job carousel** showcasing work experience
- **Project showcase** with detailed case studies
- **Smooth animations** and parallax effects
- **Contact modal** with professional links

## Tech Stack

- React 19.1.0
- TypeScript 5.8.3
- Vite 7.0.6
- Tailwind CSS 4.1.11
- PostCSS 8.5.6

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Build for production:
   ```bash
   pnpm build
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── TransitionSection.tsx
│   ├── ProjectsSection.tsx
│   ├── AboutSection.tsx
│   ├── ContactModal.tsx
│   └── Footer.tsx
├── data/               # Data files
│   └── index.ts        # Jobs and projects data
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Customization

- Update job data in `src/data/index.ts`
- Modify project information in the same file
- Customize styling in `src/index.css`
- Update contact information in `ContactModal.tsx`

## Development

The project uses:

- **pnpm** for package management
- **TypeScript** for type safety
- **ESLint** for code linting
- **Tailwind CSS** for styling
