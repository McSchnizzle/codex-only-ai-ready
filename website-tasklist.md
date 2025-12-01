# AI Support PDX Website Task List

## Setup & architecture
- Choose stack (static HTML/CSS/JS or minimal React/Vite/Next), scaffold repo, and add scripts for dev/build.
- Configure linting/formatting and a simple file structure (assets/components/sections) for maintainability.
- Add smooth-scroll behavior and section IDs matching nav links for a single-page layout.

## Branding & global UI
- Implement brand palette (#0B3D2E, #1F3A5F, #2BBBAD, #F4F1EA, #1E2022) and typography (Inter/Manrope for headings, Inter/Roboto for body).
- Define spacing scale, container widths, and a responsive grid; set button/CTA styles for primary and secondary actions.
- Create a sticky top navigation with logo/byline, anchor links (Home, Why Us, Services, Packages, Private AI, About, Contact), and active-state/hover styles.

## Section builds (use provided copy verbatim)
- Hero: heading, subheading, supporting line, primary CTA "Book your free December 2025 AI Readiness Session," secondary CTA "Explore services," and "Serving Portland and the Pacific Northwest" line; include hero visual.
- Why work with us: four highlight blocks for leadership, tech+business depth, existing AI work, and practical outcomes.
- Who we help: cards/bullets for the five audience segments with descriptions.
- What we do: intro plus five capability cards (Strategy & roadmaps; Automation & agents; Marketing & outreach; Training & enablement; Data & private AI).
- Free December offer: promo block with checklist and closing line; ensure CTA routes to contact form or booking link.
- Packages & pricing: three cards (AI Essentials, AI Growth, Project-based) with pricing, who it's for, inclusions, and founding-client footnote.
- Private AI: short section outlining on-prem appliances, locked-down Azure/AWS, and training/guardrails.
- About: Vital Enterprises story plus focus bullets on practical projects, clarity, and paced adoption.
- Contact: form with specified fields and checkbox for the free session; add client-side validation, success/error states, and a mail/API hook placeholder.

## Accessibility, responsiveness, and performance
- Use semantic HTML, proper heading hierarchy, alt text for images/illustrations, focus states, and keyboard-friendly navigation/form controls.
- Build mobile-first layouts with tested breakpoints for tablet and desktop; ensure sticky nav and hero visuals adapt.
- Add lightweight animations (e.g., section reveals) without hurting performance; optimize images (responsive sources, compression).

## Content hygiene & metadata
- Wire primary/secondary CTAs to anchors; add footer with contact info and region note.
- Add SEO basics: title, meta description, canonical URL placeholder, Open Graph/Twitter image hooks, and favicon.
- Include analytics/consent placeholders (e.g., GA/PLA tags) gated behind a simple toggle if needed.

## Deployment & handoff
- Document local run/build commands and environment variables (if any).
- Set up production build output for static hosting; add Netlify/Vercel deploy instructions and preview config.
- Provide asset credits/sources and export presets; note any remaining TODOs for form backend, CMS, or integrations.
