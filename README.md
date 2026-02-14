# Nopex Services

A professional website for Nopex Services - delivering integrated engineering design, drafting, and BIM solutions for global infrastructure and building projects.

## About

Nopex Services is a multidisciplinary engineering design and BIM consultancy dedicated to transforming ideas into intelligent, buildable solutions across Civil, Structural, Architectural, MEP, and Industrial disciplines.

## Technologies Used

This project is built with modern web technologies:

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Framer Motion** - Smooth animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd nopex-construction-estimation
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/      # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Insights.tsx
│   ├── Careers.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/         # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
└── lib/            # Utility functions

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

## License

© 2024 Nopex Services. All rights reserved.
