---
inclusion: auto
---

# Tech Steering — Technology Decisions and Conventions

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.9 |
| UI Library | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 |
| PostCSS | @tailwindcss/postcss | ^4 |
| Utilities | clsx + tailwind-merge | Latest |
| Icons | Custom SVG components + lucide-react (non-brand icons) | lucide ^1.21 |
| Linting | ESLint (eslint-config-next) | ^9 |

## Tailwind CSS 4 Configuration

Design tokens are defined in `src/app/globals.css` using the `@theme` directive (Tailwind CSS 4 pattern):

```css
@theme {
  --color-bg-primary: #1E0031;
  --color-accent: #C3B1FF;
  --font-display: var(--font-bebas-neue), sans-serif;
  --radius-md: 12px;
  /* ... */
}
```

These generate utility classes automatically: `bg-bg-primary`, `text-accent`, `font-display`, `rounded-md`, etc.

### Important Tailwind Rules

- NEVER hardcode hex colors in component classes — use token-based classes
- Use `font-display` for Bebas Neue headings, `font-body` for Manrope text
- Custom border radius uses `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full`
- Use the `cn()` utility for conditional class merging

## Font Loading

Fonts are loaded via `next/font/google` in `layout.tsx` with CSS variable injection:

```typescript
const bebasNeue = Bebas_Neue({ weight: "400", variable: "--font-bebas-neue" });
const manrope = Manrope({ variable: "--font-manrope" });
```

The `@theme` block in `globals.css` maps these to `--font-display` and `--font-body`.

## Component Patterns

### Server vs Client Components

- Default to **Server Components** (no directive needed)
- Add `"use client"` only when using: `useState`, `useEffect`, event handlers, browser APIs
- Currently client: `Navbar.tsx`, `ContactForm.tsx`

### Props Interface Pattern

```typescript
export interface ButtonProps {
  label: string;
  variant?: "primary" | "submit";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ label, variant = "primary", ...props }: ButtonProps) {
  // ...
}
```

### Class Merging with cn()

```typescript
import { cn } from "@/lib/utils";

className={cn(
  "base-classes-here",
  variant === "primary" && "conditional-classes",
  className // allow consumer overrides
)}
```

## Image Handling

- Use Next.js `<Image>` component for all images
- Store static assets in `public/images/`
- Always provide `alt` text (empty string for decorative images)
- Use `fill` prop with `object-cover` for responsive container-based images
- Provide `sizes` attribute for responsive optimization
- Set `priority` on above-fold images (Hero profile photo)

## Accessibility Requirements

- Skip-to-content link in layout (implemented)
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All sections have `aria-labelledby` pointing to their heading
- One `<h1>` per page, proper heading hierarchy
- All interactive elements have visible focus states: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`
- Form inputs have associated `<label>` elements
- Social links have `aria-label` descriptions
- Decorative icons use `aria-hidden="true"`
- Respect `prefers-reduced-motion` (implemented in globals.css)

## Responsive Strategy

- **Mobile-first** — base styles target mobile, breakpoint utilities add desktop styles
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Key responsive patterns:
  - Navigation: visible links → hamburger menu at `md:`
  - Two-column sections: stacked on mobile → side-by-side at `lg:`
  - Project cards: stacked → horizontal at `lg:`
  - Typography scales down on mobile (101px → 56px, 76px → 48px)
  - Section padding: 108px → 24px (`px-6 lg:px-[108px]`)

## Build and Development

```bash
npm run dev      # Start development server
npm run build    # Production build (validates TypeScript + compiles)
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## Import Aliases

Path alias configured in `tsconfig.json`:
- `@/*` → `./src/*`

Always use `@/` imports for anything inside `src/`:
```typescript
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";
```

## Performance Considerations

- Static site generation (all pages pre-rendered at build time)
- No API routes needed — pure static portfolio
- Font optimization via `next/font` (no FOUT, self-hosted)
- Image optimization via Next.js Image component
- Minimal client JavaScript (only Navbar + ContactForm)
- No external state libraries, no heavy dependencies

## What NOT to Do

- Do NOT add a CSS framework or library beyond Tailwind CSS 4
- Do NOT hardcode colors or spacing values — use design tokens
- Do NOT use default exports on components — use named exports
- Do NOT add global state management (Redux, Zustand, etc.)
- Do NOT fetch data at runtime — all content is static in constants.ts
- Do NOT install icon libraries for brand icons — use the custom SVG components in `icons.tsx`
- Do NOT use `<div>` where a semantic HTML element is appropriate
