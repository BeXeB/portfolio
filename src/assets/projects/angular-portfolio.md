# Angular Portfolio

## About

A portfolio website built with Angular. Uses a markdown-based system to store project details separately from code.

---

## Architecture

**Markdown-Based Content**: Project descriptions are stored as markdown files rather than hardcoded. This keeps content separate from application code and makes it easy to add new projects without modifying components.

**Dynamic Loading with Caching**: Projects are loaded on-demand and cached in a `Map` to avoid redundant requests.

**Modular Components**: Routing-based pages with reusable components for common UI elements (navbar, project cards, page titles).

---

## Features

- Responsive design with flexbox
- Projects loaded dynamically from markdown files
- Type-safe implementation with TypeScript strict mode
- Client-side routing with Angular

---

## Tech Stack

- Angular
- TypeScript
- CSS/SCSS
- RxJS
