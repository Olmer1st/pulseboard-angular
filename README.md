# PulseBoard

PulseBoard is a demo operations/analytics dashboard built with Angular. It gives a quick
overview of campaigns, revenue, traffic, conversion, and recent activity for a fictional
SaaS product, using deterministic local mock data (no backend, no database, no external
API calls).

## Prerequisites

- Node.js 20.19+ / 22.12+ / 24+
- npm 10+

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Then open `http://localhost:4200/` in your browser.

## Building

Create a production build:

```bash
npm run build
```

Build artifacts are written to `dist/pulseboard`.

## Project structure

- `src/app/shell` — application shell (sidebar, top bar, mobile navigation)
- `src/app/dashboard` — dashboard page (KPIs, charts, campaign table, activity, alerts)
- `src/app/campaigns` — campaigns list page
- `src/app/settings` — settings page
- `src/app/data` — local mock data and shared models
