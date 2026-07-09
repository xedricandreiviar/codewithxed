---
inclusion: auto
---

# Structure Steering — Project Architecture

## Directory Structure

```
kiro_week2/
├── .kiro/
│   ├── settings/
│   │   └── mcp.json              # MCP server configuration (Figma)
│   └── steering/
│       ├── design-system-rules.md # Design tokens and component definitions
│       ├── product.md             # Product goals and content strategy
│       ├── structure.md           # This file — project architecture
│       └── tech.md                # Technology decisions and conventions
├── public/
│   └── images/                    # Static images (profile, project screenshots)
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind CSS 4 @theme tokens + base styles
│   │   ├── layout.tsx             # Root layout (fonts, metadata, skip-link)
│   │   └── page.tsx               # Home page (composes all sections)
│   ├── components/
│   │   ├── cards/
│   │   │   └── ProjectCard.tsx    # Individual project display
│   │   ├── layout/
│   │   │   ├── Footer.tsx         # Contact section + copyright
│   │   │   └── Navbar.tsx         # Fixed navigation (responsive)
│   │   ├── sections/
│   │   │   ├── About.tsx          # About me section
│   │   │   ├── ContactForm.tsx    # Form with client-side state
│   │   │   ├── FeaturedProjects.tsx # Projects list section
│   │   │   └── Hero.tsx           # Hero section with CTA
│   │   └── ui/
│   │       ├── Button.tsx         # Primary/Submit button variants
│   │       ├── icons.tsx          # SVG brand icons (GitHub, LinkedIn, etc.)
│   │       ├── ProjectLink.tsx    # Underlined link with icon
│   │       ├── SectionDivider.tsx # Horizontal divider line
│   │       ├── SkillChip.tsx      # Pill-shaped skill tag
│   │       ├── SocialIconButton.tsx # Circular social media button
│   │       └── Tag.tsx            # Small category badge
│   ├── lib/
│   │   ├── constants.ts           # All site content and data
│   │   └── utils.ts               # cn() utility (clsx + tailwind-merge)
│   └── types/
│       └── index.ts               # TypeScript interfaces
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## Component Hierarchy

```
RootLayout (layout.tsx)
└── HomePage (page.tsx)
    ├── Navbar
    ├── main#main-content
    │   ├── Hero
    │   ├── SectionDivider
    │   ├── FeaturedProjects
    │   │   └── ProjectCard (×3)
    │   │       ├── Tag (optional)
    │   │       └── ProjectLink (×1-2)
    │   ├── SectionDivider
    │   ├── About
    │   ├── SectionDivider
    │   ├── Testimonials (to be implemented)
    │   │   └── TestimonialCard (×3)
    │   ├── SectionDivider
    │   └── Footer
    │       ├── SocialIconButton (×4)
    │       └── ContactForm
    │           └── Button (submit)
    └── Hero
        ├── Button (primary)
        └── SocialIconButton (×2)
```

## Component Organization Rules

| Directory | Purpose | Rendering |
|-----------|---------|-----------|
| `components/ui/` | Atomic, reusable primitives (Button, Tag, etc.) | Server by default |
| `components/cards/` | Content-focused composites (ProjectCard, TestimonialCard) | Server by default |
| `components/sections/` | Full page sections (Hero, About, etc.) | Server by default |
| `components/layout/` | Structural wrappers (Navbar, Footer) | Client if interactive |
| `lib/` | Utilities and data constants | N/A (imported) |
| `types/` | TypeScript interfaces | N/A (types only) |

## Data Flow

- All content lives in `src/lib/constants.ts` — no CMS, no API calls
- Components receive data via props from the page level or import constants directly
- No global state management needed
- Client components (`"use client"`) only for: Navbar (mobile toggle), ContactForm (form state)

## Naming Conventions

| Entity | Convention | Example |
|--------|-----------|---------|
| Components | PascalCase file + named export | `Button.tsx` → `export function Button()` |
| Props | `ComponentNameProps` interface | `ButtonProps` |
| Constants | SCREAMING_SNAKE_CASE | `NAV_LINKS`, `SITE_CONFIG` |
| Types | PascalCase interface | `Project`, `NavLink` |
| Utilities | camelCase | `cn()` |
| CSS tokens | kebab-case with category prefix | `--color-bg-primary`, `--font-display` |

## Adding New Sections

When adding a new section (e.g., Testimonials):

1. Create type interface in `src/types/index.ts`
2. Add content data to `src/lib/constants.ts`
3. Create card component in `src/components/cards/` (if needed)
4. Create section component in `src/components/sections/`
5. Add to `src/app/page.tsx` with a `SectionDivider` above it
6. Follow design tokens from `globals.css` and the design-system-rules steering doc
