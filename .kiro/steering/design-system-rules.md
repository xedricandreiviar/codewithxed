---
inclusion: auto
---

# Kiroverse Developer Portfolio — Design System Rules

## Source

Figma: https://www.figma.com/design/ak2rIdOx6vejcxQx97j792/Kiroverse-Developer-Portfolio--Xedric-Andrei-Viar--

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

---

## 1. Design Tokens

### Colors

```
Background:
  --color-bg-primary: #1E0031        (deep purple - main page background)
  --color-bg-card: #1A1A1A           (dark gray - project cards, form inputs)
  --color-bg-tag: #0A0A0A            (near-black - tags, badges)
  --color-bg-social: #222222         (dark gray - social icon circles)

Text:
  --color-text-primary: #FFFFFF      (white - headings, primary text)
  --color-text-secondary: #C7C7C7   (off-white/light gray - body text, descriptions)
  --color-text-dark: #0A0A0A        (near-black - text on accent buttons)

Accent:
  --color-accent: #C3B1FF            (lavender/purple - primary buttons, links, highlights)

Border:
  --color-border: #484848            (dark gray - dividers, skill chip borders, list separators)

Line/Divider:
  --color-divider: #484848           (section dividers)
```

### Typography

Two font families are used:

**Display Font:** Bebas Neue (Regular, weight 400)
**Body Font:** Manrope (Regular 400, Medium 500, SemiBold 600, Bold 700)

#### Typography Scale

| Token Name    | Font Family  | Weight    | Size   | Line Height | Letter Spacing | Usage                        |
|---------------|-------------|-----------|--------|-------------|----------------|------------------------------|
| Heading/One   | Bebas Neue  | 400       | 101px  | 0.9         | 0              | Hero heading, page titles    |
| Heading/Two   | Bebas Neue  | 400       | 76px   | 1.0         | 0              | Section headings             |
| Heading/Three | Manrope     | 500 (Med) | 32px   | 1.4         | 0              | Sub-headings, project titles |
| Heading/Four  | Manrope     | 500 (Med) | 24px   | 1.3         | -1px           | Experience titles            |
| Heading/Five  | Manrope     | 600 (Semi)| 16px   | 1.5         | 0              | Small headings, labels       |
| Body/Medium   | Manrope     | 400       | 18px   | 1.5         | 0              | Body copy, descriptions      |
| Body/Small    | Manrope     | 500 (Med) | 16px   | 1.6         | 0              | Nav links, captions, labels  |
| Misc/Button   | Manrope     | 700 (Bold)| 16px   | 1.0         | 0              | Button labels (uppercase)    |
| Misc/Link     | Manrope     | 700 (Bold)| 16px   | 1.5         | 0              | Link text (uppercase)        |
| Misc/Tag      | Manrope     | 500 (Med) | 14px   | 1.5         | 0              | Tags, badges                 |
| Misc/Pill     | Manrope     | 700 (Bold)| 16px   | 1.0         | 0              | Skill chip text (uppercase)  |
| Nav/Logo      | Bebas Neue  | 400       | 32px   | 1.5         | -0.32px        | Navbar logo/name             |

### Spacing Scale

Based on an 8px base unit system:

| Token    | Value  | Usage                                      |
|----------|--------|--------------------------------------------|
| space-1  | 4px    | Underline gaps, tight spacing              |
| space-2  | 8px    | Text gaps within groups, small padding     |
| space-3  | 12px   | Icon gaps in buttons, form input padding   |
| space-4  | 16px   | Standard gap, form field gaps, card padding|
| space-5  | 20px   | Button vertical padding                    |
| space-6  | 24px   | Nav padding, social icon gaps, section gaps|
| space-8  | 32px   | Nav link spacing, content group gaps       |
| space-10 | 40px   | Button horizontal padding, major gaps      |
| space-12 | 48px   | Project card gap, content section gaps     |
| space-16 | 60px   | Navbar horizontal padding                  |
| space-20 | 80px   | Section vertical padding (py-80)           |
| space-24 | 108px  | Content left offset from edge              |
| space-30 | 120px  | Gap between project cards                  |

### Border Radius

| Token          | Value   | Usage                            |
|----------------|---------|----------------------------------|
| radius-sm      | 4px     | Form inputs                      |
| radius-md      | 12px    | Project cards, card images        |
| radius-lg      | 16px    | Large images (about page)         |
| radius-full    | 100px   | Buttons, social icons, tags, pills|

### Shadows / Elevation

The design uses a flat/minimal approach with **no drop shadows**. Depth is created through:
- Background color contrast (card #1A1A1A on page #1E0031)
- Border strokes (1px solid #484848)
- Visual hierarchy through spacing and size

---

## 2. Reusable Component Definitions

### Navbar

```
Structure:
- Fixed top, full width (1440px max, centered)
- Height: 96px
- Horizontal padding: 60px
- Layout: flex, space-between, vertically centered

Left: Logo text (Bebas Neue, 32px, color-text-secondary, tracking -0.32px)
Right: Nav links (Manrope Medium 16px, gap 32px, color-text-secondary)

Links: Home | Projects | About | Contact
```

**Props:** `logoText: string`, `links: { label: string; href: string }[]`

### Hero Section

```
Structure:
- Left-aligned content (offset 108px from left)
- Right side: profile image (416×555px)
- Content: flex-col, gap 40px

Components:
1. Heading (Bebas Neue 101px, white, line-height 0.9)
2. Subtitle (Manrope Regular 18px, color-text-secondary)
3. Action row: CTA Button + Social Icons (gap 16px)
```

### Button (Primary CTA)

```
Variant: Primary (with arrow circle)
- Background: color-accent (#C3B1FF)
- Text: color-text-dark (#0A0A0A), Manrope Bold 16px, UPPERCASE
- Height: 54px
- Padding: 20px vertical, 24px left, 6px right
- Border-radius: radius-full (100px)
- Contains: text + circle icon (42px) with arrow

Variant: Submit (no arrow)
- Background: color-accent (#C3B1FF)
- Text: color-text-dark (#0A0A0A), Manrope Bold 16px, UPPERCASE
- Height: 54px
- Padding: 20px vertical, 40px horizontal
- Border-radius: radius-full (100px)
```

**Props:** `label: string`, `variant: 'primary' | 'submit'`, `href?: string`, `onClick?: () => void`

### Social Icon Button

```
- Size: 54px × 54px
- Background: color-bg-social (#222222)
- Border-radius: radius-full (100px)
- Icon: 26px × 26px centered
```

**Props:** `icon: 'linkedin' | 'github'`, `href: string`

### Project Card

```
Structure:
- Full width row (1224px), flex, gap 48px, vertically centered
- Left: Image container (600×600px, bg: color-bg-card, radius-md)
- Right: Content (flex-1, flex-col, gap 48px)

Image Container:
- Background: #1A1A1A
- Border-radius: 12px
- Optional tag badge (top-left, 16px offset)

Content:
- Title: Heading/Three (32px, white)
- Description: Body/Medium (18px, color-text-secondary)
- Project Info: list with bordered rows (border-top #484848, py 16px)
  - Key (white) | Value (color-text-secondary)
- Links: "Live Demo" / "See on Github" with underline (color-accent)

Tag Badge:
- Background: color-bg-tag (#0A0A0A)
- Padding: 8px 16px
- Border-radius: radius-full (100px)
- Text: Misc/Tag (14px, white)
```

**Props:** `title: string`, `description: string`, `image: string`, `tag?: string`, `info: { label: string; value: string }[]`, `links: { label: string; href: string; icon?: string }[]`

### Skill Chip

```
- Border: 1px solid color-border (#484848)
- Background: transparent
- Padding: 20px vertical, 40px horizontal
- Border-radius: radius-full (100px)
- Text: Manrope Bold 16px, white, UPPERCASE
- Layout: flex-wrap with 16px gap
```

**Props:** `label: string`

### Contact Form

```
Structure:
- Full width (600px), flex-col, gap 24px
- Fields: Name, Email, Subject, Message (textarea)
- Submit button at bottom (gap 40px from fields)

Input Field:
- Background: color-bg-card (#1A1A1A)
- Padding: 12px 16px
- Border-radius: radius-sm (4px)
- Text: Manrope Regular 18px, white
- Label: Body/Small (Manrope Medium 16px, color-text-secondary)
- Gap between label and input: 8px

Textarea (Message):
- Same styling, taller (4 lines minimum)
```

**Props:** `onSubmit: (data: FormData) => void`

### Footer / Contact Section

```
Structure:
- Two-column layout (gap 24px)
- Left: "Let's Connect" heading + email link + social icons + copyright
- Right: Contact form

Left Column:
- Heading: Bebas Neue 76px, white
- Email: "Say hello at" (color-text-secondary) + email (white, underlined)
- Social icons: 32×32px, gap 24px (LinkedIn, GitHub, X/Twitter, Instagram)
- Copyright: Body/Small, color-text-secondary

Section Padding: 80px vertical
```

### Experience Item

```
Structure:
- flex-col, gap 16px
- Header row: Title (Heading/Four, 24px, white) + Date (Body/Medium, color-text-secondary)
- Optional: Company name (Manrope SemiBold 18px, color-accent)
- Description: Body/Medium (18px, color-text-secondary)
- Items separated by gap 80px
```

**Props:** `title: string`, `dateRange: string`, `company?: string`, `description: string`

### Section Layout (Two-Column)

```
Used for: Skills, Experience sections
- Container: 1224px wide, py 80px
- Left: Section heading (Heading/Two, flex-1)
- Right: Content (flex-1)
- Gap: 24px
- Divider line above section (full-width, 1px, color-border)
```

---

## 3. Layout Rules

### Page Container
- Max width: 1440px
- Content area: 1224px (108px margin on each side)
- Background: color-bg-primary (#1E0031)
- Full-height sections

### Grid System
- Primary layout: CSS Flexbox (not CSS Grid)
- Two-column layout for sections: 50/50 split with 24px gap
- Project cards: side-by-side with 48px gap (image left, content right)

### Section Dividers
- 1px solid line (#484848) spanning full width (1440px)
- Used between: Hero/Projects, Projects/About, About/Contact

### Content Alignment
- All section content: 108px left offset (centered in 1440px container)
- Section headings left-aligned in left column
- Body content in right column

---

## 4. Responsive Rules

### Breakpoints (mobile-first)

| Breakpoint | Width   | Behavior                                           |
|------------|---------|---------------------------------------------------|
| sm         | 640px   | Stack all two-column layouts                       |
| md         | 768px   | Tablet adjustments                                 |
| lg         | 1024px  | Begin side-by-side layouts                         |
| xl         | 1280px  | Full desktop layout                                |
| 2xl        | 1440px  | Max-width design (design reference)                |

### Mobile Behavior (< 768px)
- Navigation: hamburger menu (collapsed links)
- Hero: full-width, image below text or hidden
- Project cards: stacked vertically (image on top, content below)
- Two-column sections: stacked (heading on top, content below)
- Skill chips: full-width wrapping grid
- Contact section: stacked (info on top, form below)
- Typography scales down:
  - Heading/One: 101px → 56px
  - Heading/Two: 76px → 48px
  - Heading/Three: 32px → 24px
- Section padding reduces: 80px → 48px
- Content margins reduce: 108px → 24px

### Tablet Behavior (768px–1024px)
- Project cards: stacked or narrower side-by-side
- Two-column sections: may stack
- Navigation: visible links with reduced spacing

### Desktop (≥ 1024px)
- Full layout as designed
- Content centered at max-width 1440px

---

## 5. Accessibility Rules

### Color Contrast
- Primary text (white #FFFFFF on #1E0031): passes WCAG AAA
- Secondary text (#C7C7C7 on #1E0031): verify AA compliance (4.5:1 minimum)
- Button text (#0A0A0A on #C3B1FF): passes WCAG AA
- Ensure all interactive elements have sufficient contrast

### Semantic HTML
- Use `<header>` for navigation
- Use `<nav>` with `aria-label` for navigation links
- Use `<main>` for page content
- Use `<section>` with `aria-labelledby` for each page section
- Use `<footer>` for the contact/footer area
- Use `<h1>` through `<h4>` in proper hierarchy (one h1 per page)
- Use `<article>` for project cards
- Use `<form>` with proper `<label>` elements for contact form

### Interactive Elements
- All links must have descriptive text or `aria-label`
- Buttons must have accessible names
- Focus styles: visible outline (2px solid color-accent) on all interactive elements
- Tab order follows visual layout order
- Skip-to-content link at page top

### Images
- All decorative images: `alt=""`
- Profile/project images: descriptive `alt` text
- Icons: use `aria-hidden="true"` when decorative, `aria-label` when functional

### Form Accessibility
- All inputs must have associated `<label>` elements
- Required fields marked with `aria-required="true"`
- Error states communicated via `aria-describedby`
- Form submission feedback via `aria-live` region

### Motion & Preferences
- Respect `prefers-reduced-motion` media query
- No auto-playing animations without user control
- Smooth scroll behavior with reduced-motion fallback

---

## 6. Implementation Rules

### File Structure

```
src/
├── app/
│   ├── layout.tsx          (root layout with fonts, metadata)
│   ├── page.tsx            (home page)
│   ├── about/page.tsx      (about page)
│   └── globals.css         (Tailwind directives + CSS custom properties)
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SocialIconButton.tsx
│   │   ├── SkillChip.tsx
│   │   ├── Tag.tsx
│   │   └── SectionDivider.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Section.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProjects.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── cards/
│       ├── ProjectCard.tsx
│       └── ExperienceItem.tsx
├── lib/
│   └── constants.ts        (site data, project info, skills list)
└── types/
    └── index.ts            (TypeScript interfaces)
```

### Tailwind CSS 4 Configuration

Define custom theme in `globals.css` using CSS custom properties:

```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-bg-primary: #1E0031;
  --color-bg-card: #1A1A1A;
  --color-bg-tag: #0A0A0A;
  --color-bg-social: #222222;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #C7C7C7;
  --color-text-dark: #0A0A0A;
  --color-accent: #C3B1FF;
  --color-border: #484848;

  /* Font Families */
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Manrope", sans-serif;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 100px;
}
```

### Font Loading (Next.js)

```typescript
import { Bebas_Neue, Manrope } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});
```

### Component Conventions

- IMPORTANT: Use TypeScript interfaces for all component props
- IMPORTANT: Use design tokens via Tailwind classes — never hardcode hex colors
- IMPORTANT: All text must use the appropriate typography token classes
- IMPORTANT: Buttons and interactive elements must include hover/focus states
- Export components as named exports (not default)
- Use `cn()` utility (clsx + tailwind-merge) for conditional class merging
- Keep components focused and single-responsibility
- Extract repeated patterns into shared components

### Naming Conventions

- Components: PascalCase (`ProjectCard.tsx`)
- Props interfaces: `ComponentNameProps` (`ProjectCardProps`)
- CSS classes: use Tailwind utility classes mapped to design tokens
- Constants: SCREAMING_SNAKE_CASE for static data

### Performance

- Use Next.js `<Image>` component for all images (automatic optimization)
- Use `next/font` for font loading (no FOUT)
- Lazy load below-fold sections where appropriate
- Use React Server Components for static sections
- Client components only for interactive elements (form, mobile nav)

### State Management

- Contact form: local state with `useState` or React Hook Form
- Mobile nav toggle: local state
- No global state management needed for this portfolio

### IMPORTANT Rules

- IMPORTANT: Never hardcode colors — always use Tailwind token classes (`bg-bg-primary`, `text-accent`, etc.)
- IMPORTANT: Always use the correct font token — `font-display` for Bebas Neue headings, `font-body` for Manrope
- IMPORTANT: All interactive elements require visible focus states
- IMPORTANT: All sections must have proper heading hierarchy
- IMPORTANT: Images must use Next.js Image component with proper dimensions
- IMPORTANT: Mobile-first responsive approach — start with mobile styles, add breakpoint overrides
- IMPORTANT: Use semantic HTML elements — never use `<div>` where a semantic element is appropriate
- IMPORTANT: Uppercase text uses `uppercase` Tailwind class — never manually type uppercase text in content
