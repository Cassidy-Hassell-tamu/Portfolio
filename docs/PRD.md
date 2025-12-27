# Portfolio Website PRD (MVP)

## Figma Reference
Link to Home Figma Frame: https://www.figma.com/design/tNVAGyd23V0WpTvrwDxMNH/UX-Porfolio?node-id=1-2&t=Ur2Lt6he2sWTotuz-4
- Use general layout, not exact pixels
- This is a loose goal for general structure and placement, not strict styling

## 1. Goal
Create a clean, accessible, responsive portfolio built with React that showcases projects and contact information using best web development practices.

## 2. Tech
- React + Vite (or equivalent modern React setup)
- Styling: Tailwind CSS (single source of truth for spacing, colors, and typography)
- Deployment: Manually upload the built static files to the university-provided hosting URL (serve the production build as a static site)
- Version control: Git

## 3. Pages / Sections
- **Home:** Name, short tagline, prominent call to action (view projects or contact).
- **About:** Brief bio and core technical skills.
- **Projects:** 3–4 items with title, summary, stack, and links.
- **Contact:** Simple form or direct email/social links.
- **Footer:** Consistent footer for attribution and navigation continuity.

## 4. Layout & Structure
- Mobile‑first, responsive layout using flexbox and/or CSS grid.
- Semantic HTML elements for sections (`header`, `main`, `footer`, `nav`, `section`).
- Logical heading hierarchy (H1–H3).
- Readable text widths (~60–75 characters per line).
- Maintain consistent spacing between sections.

## 5. Accessibility & Performance
- Provide alt text for all images.
- Keyboard navigable with visible focus indicators.
- Sufficient color contrast (minimum WCAG AA).
- Optimize and lazy‑load images where appropriate.
- Use lightweight dependencies and serve the optimized production build from the university host.

## 6. Animation
- Only minimal motion for user feedback (hover, focus, button press).
- Adhere to “prefers‑reduced‑motion” settings.
- Avoid full‑page or scroll‑triggered animations.

## 7. Non‑Goals
- No advanced animation libraries or 3D effects.
- No complex routing, blog, or CMS integrations.
- No unnecessary global state or external UI frameworks.

## 8. Implementation Notes for Cursor
- Use this PRD as the source of truth for architecture and constraints.
- Use the Figma frame only as a layout and visual reference, not for exact pixel-perfect replication.
- Generate:
  - A main `App` layout.
  - Components for each section: `Header`, `HeroSection`, `AboutSection`, `ProjectsSection`, `ContactSection`, `Footer`.
- Follow semantic HTML and accessibility rules in Sections 4–6.
- Do not introduce libraries not listed in Tech, or animations that conflict with Section 6 and 7.
