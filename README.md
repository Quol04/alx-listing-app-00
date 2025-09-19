# ALX Listing App

A modern, scalable listing application scaffold built with [Next.js](https://nextjs.org/), TypeScript, and Tailwind CSS. This project provides a solid foundation for building listing, directory, or marketplace web applications.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)


---

## Features

- ⚡️ Next.js 14+ with App Router
- 🦄 TypeScript for type safety
- 💅 Tailwind CSS for rapid UI development
- 🧩 Modular component structure
- 🌐 SEO-friendly and performant
- 🧪 Ready for API integration
- 📝 Linting and formatting included

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Quol04/alx-listing-app.git
   cd alx-listing-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Project Structure

```
.
├── components/           # Reusable React components
│   └── common/           # Common UI elements (Button, Card, etc.)
├── constants/            # App-wide constants
├── interfaces/           # TypeScript interfaces and types
├── pages/                # Next.js pages (API routes & main app)
│   ├── api/              # API route handlers
│   ├── _app.tsx          # Custom App component
│   ├── _document.tsx     # Custom Document
│   └── index.tsx         # Home page
├── public/               # Static assets (images, icons, etc.)
│   └── assets/           # Additional assets
├── styles/               # Global styles (Tailwind, CSS)
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
└── README.md             # Project documentation
```

---

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint for code quality

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting:** [ESLint](https://eslint.org/)

---