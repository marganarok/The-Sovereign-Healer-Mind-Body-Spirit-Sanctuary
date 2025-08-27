# The Sovereign Healer – Mind, Body & Spirit Sanctuary

```
new-folder-forge
│   .gitignore
│   eslint.config.js
│   index.html
│   package.json
│   README.md
│   start-vite-auto.bat
│   vite.config.js
│
├───node_modules
├───public
│       vite.svg
│
├───src
│   │   App.css
│   │   App.jsx
│   │   index.css
│   │   main.jsx
│   │
│   ├───assets
│   │       react.svg
│   │
│   ├───components
│   │       Footer.jsx
│   │       Header.jsx
│   │       MainContent.jsx
│   │
│   ├───effects
│   │       cursor.js
│   │       particles.js
│   │
│   └───styles
│           colors.css
│           components.css
│           effects.css
│           layout.css
```

---


## Project Overview
A modern, cosmic-themed React + Vite web app with modular pages, advanced theming, a dynamic gallery, and interactive UI effects. The project is structured for scalability, maintainability, and a visually immersive user experience.

---

## Major Features & Improvements

- **Cosmic Starfield & Aurora Backgrounds:**
  - Animated, multi-layered starfield and aurora backgrounds for a deep cosmic feel.
- **Custom Cosmic Cursor:**
  - Interactive glowing cursor with light-beam effect, globally enabled.
- **Header & Navigation:**
  - Modern, full-width header with social links, video, and a stretched, responsive menu.
- **Theme & Menu Panel:**
  - Live editing of section themes, effects, and menu names.
- **Per-Section Theming:**
  - Each section can have unique colors and effects.
**Gallery (Arts):**
  - 100-item gallery, 5x3 grid, large images, category tabs, advanced search/filter, modal viewer with AI prompts, and local image support (`/public/gallery`).
  - 3D tilt, colored glows, and pulse animations on cards and buttons.
  - Improved layout: gallery grid now starts directly under the header for a more polished, user-friendly experience.
**Home Page:**
  - Modularized as `HomePage.jsx` for easy expansion.
  - 100-day roadmap section as a vertical timeline with 10 visually styled steps.
  - Step 2 features a YouTube video box for multimedia content (currently set to https://www.youtube.com/watch?v=0WxNqlnyO5w).
- **Footer:**
  - Modern, branded, and modular.
- **Component Structure:**
  - All major sections (Home, Gallery, Footer, etc.) are modular React components.
- **Mobile-First Responsive Design:**
  - Layouts and effects adapt to all screen sizes.

---

## Potential Errors or Bugs to Watch For

- **Image Loading in Gallery:**
  - If images are missing from `/public/gallery`, fallback images are used. Ensure images are named `1.jpg` to `100.jpg`.
- **Unused State Warnings:**
  - Some legacy state (e.g., `mousePosition`, `cursorTrail`) may be unused after refactors. Clean up as needed.
- **React Hook Dependency Warnings:**
  - Some `useEffect` hooks may warn about missing dependencies (`defaultSectionTheme`, `selectedSection`). Review and update dependencies for best practices.
- **Custom Cursor on Mobile:**
  - The cosmic cursor is hidden on small screens, but test for edge cases on touch devices.
- **Performance:**
  - Heavy use of animated backgrounds and effects may impact performance on low-end devices. Optimize as needed.
- **Accessibility:**
  - Ensure all interactive elements are keyboard accessible and have appropriate ARIA labels.

---

## Roadmap for Future Expansions

- **Gallery Enhancements:**
  - Add masonry layout toggle (Pinterest-style).
  - Enable image upload and management via admin panel.
  - Add support for video and multimedia art.
- **Home Page:**
  - Expand roadmap squares with interactive content, progress tracking, and links.
  - Add testimonials, news, or blog sections.
- **AI Integration:**
  - Integrate AI-generated art or prompts directly into the gallery.
  - Add AI-powered search and recommendations.
- **User Accounts:**
  - Allow users to create profiles, save favorites, and comment.
- **Performance & Accessibility:**
  - Further optimize animations and effects for performance.
  - Improve accessibility (focus states, ARIA, color contrast).
- **Internationalization:**
  - Add multi-language support.
- **Testing & CI:**
  - Add automated tests and continuous integration workflows.

---

## How to Contribute
- Place up to 100 images in `/public/gallery` as `1.jpg`, `2.jpg`, ..., `100.jpg` for the Arts gallery.
- Edit modular components in `src/pages` for Home, Gallery, and future sections.
- Use the Theme & Menu Panel for live UI customization.

---

_Last updated: August 27, 2025_

## Quick Start
1. `npm install` – Install dependencies
2. `npm run dev` or `start-vite-auto.bat` – Start local server
3. Edit in `src/` and see instant updates

## Key Tech
- **React 19** + **Vite 7**: Fast, modern, and modular
- **ESLint**: Strict linting for code quality
- **CSS Variables**: Theming and effects
- **Meta & SEO**: Optimized `index.html` and `package.json`

## Social & Links
- **Facebook:** https://www.facebook.com/profile.php?id=61578595622796
- **Instagram:** https://www.instagram.com/alchemistsx0/
- **X-Twitter:** https://x.com/Philipp36533206
- **TikTok:** https://www.tiktok.com/@alchystones
- **LinkedIn:** https://www.linkedin.com/in/philippe-b-1234567890-/
- **Linktree:** https://linktr.ee/alchemistsx0

---

## Credits
- Author: Philippe B.
- License: MIT
- Repository: https://github.com/alchemistsx0/sovereign-healer

> "Our mission is not merely to sell products or services, but to create a sanctuary for healing, education, and community for like-minded people."
