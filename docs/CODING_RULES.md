# Codex Rules

## Tech Stack
Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Local JSON data for projects
- No CMS
- No backend
- No database

## Code Rules
Keep components simple and reusable.
Do not create unnecessary abstractions.
Do not add extra libraries unless required.
Do not change unrelated files.
Explain briefly what files were changed after each task.

## Folder Structure
Use this structure:

/app
  /page.tsx
  /works/page.tsx
  /gallery/page.tsx
  /contact/page.tsx optional only if needed

/components
  Header.tsx
  Footer.tsx
  Hero.tsx
  AboutSection.tsx
  ContactSection.tsx
  WorkCard.tsx
  GalleryGrid.tsx
  SectionWrapper.tsx

/data
  works.json
  gallery.json

/styles
  globals.css

## Navigation
Header links:
- About
- Works
- Gallery
- Contact

Logo “Lumi” links back to Home.

About and Contact should scroll to sections on the Home page.
Works and Gallery should navigate to separate pages.

## Responsive
Must work well on:
- Desktop
- Tablet
- Mobile

Mobile navigation can be simple.
No complicated menu is needed for v1.