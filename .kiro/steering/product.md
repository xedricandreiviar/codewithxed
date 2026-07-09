---
inclusion: auto
---

# Product Steering — Kiroverse Developer Portfolio

## Product Overview

A personal developer portfolio website for Xedric Andrei Viar — a front-end developer and Computer Science student. The portfolio showcases projects, skills, experience, testimonials, and provides a contact form for professional inquiries.

## Target Audience

- Hiring managers and recruiters in the tech industry
- Potential clients looking for freelance front-end developers
- Fellow developers and collaborators
- Technical professionals (software engineers, cloud engineers, designers, data engineers)

## Product Goals

1. Present professional credibility and technical competence
2. Showcase selected projects with clear descriptions and links
3. Communicate skills and experience concisely
4. Provide social proof through testimonials
5. Enable easy contact through a functional form
6. Deliver a polished, accessible, fast-loading experience

## Pages and Sections

### Home Page (Single-page layout)
The portfolio is a single-page scrolling site with anchor navigation:

1. **Hero** — Name, title, subtitle, CTA button ("Contact Me"), social links, profile photo
2. **Featured Projects** — 3 project cards with images, descriptions, metadata, and external links
3. **About** — Bio section with heading and longer description, "More about me" link
4. **Testimonials** — 3 testimonial cards from Manager, Client, and Colleague
5. **Contact/Footer** — "Let's connect" heading, email link, social icons, contact form, copyright

### About Page (Future)
- Detailed bio
- Skills section (chip-based list)
- Experience timeline
- Full-width image

## Content Strategy

- All text content is centralized in `src/lib/constants.ts`
- Professional but approachable tone
- Uppercase styling for headings and buttons (handled via CSS, not content)
- Short, impactful project descriptions (2-3 sentences each)
- Testimonials should feel authentic and specific

## Key User Flows

1. **Browse portfolio** — Scroll through sections or use nav links
2. **View a project** — Read description, check metadata, click "Live Demo" or "See on Github"
3. **Contact** — Fill out the form or click the email link
4. **Social connect** — Click LinkedIn, GitHub, Twitter, or Instagram icons

## Success Metrics

- Fast load time (< 2s on 3G)
- Accessible to screen readers (WCAG AA minimum)
- Responsive across all devices (mobile, tablet, desktop)
- Professional first impression within 3 seconds
