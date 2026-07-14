# A lightweight React table component

**Author:** Kedar Kulkarni
**Date:** April 12, 2026
**Source:** https://www.linkedin.com/pulse/lightweight-react-table-component-kedar-kulkarni-eu1uf

---

I just published my first npm package — and I'm genuinely excited to share it with the developer community.

Introducing `@kedman1234/react-light-table` — a lightweight React table component that does what 90% of projects actually need, without the overhead of enterprise-grade libraries.

```
npm install @kedman1234/react-light-table
```

Here's the story and why I built it.

---

## The problem I kept hitting

Every time I needed a data table in React, I faced the same dilemma:

**Option A: Use @tanstack/react-table (TanStack Table)**
- Incredibly powerful and headless
- But you write ALL the UI yourself — headers, rows, cells, pagination controls, sort indicators
- 50-80 lines of boilerplate just for a basic table
- Great for custom design systems, overkill for most dashboards

**Option B: Use AG Grid / MUI X Data Grid**
- Everything out of the box
- But 90-200 KB gzipped added to your bundle
- Complex licensing for advanced features
- Your simple user list doesn't need pivot tables and Excel export

**Option C: Write it from scratch... again**
- We've all been here

I wanted something in between — a component that renders a fully functional, styled table with sorting, searching, and row selection out of a single component import.

---

## What react-light-table does

You give it columns and data. It gives you a working table. That's it.

```jsx
import { Table } from '@kedman1234/react-light-table';
import '@kedman1234/react-light-table/dist/index.css';

<Table
  columns={[
    { key: 'name', path: 'name', label: 'Name', sortable: true, className: 'name-col' },
    { key: 'email', path: 'email', label: 'Email', className: 'email-col' },
    { key: 'role', path: 'role', label: 'Role', className: 'role-col' },
  ]}
  url="https://api.example.com/users"
  isSearchable={true}
  isSelectable={true}
/>
```

That's the entire code. No `useReactTable` hook. No `getCoreRowModel`. No `flexRender`. No building your own thead/tbody markup. Just props and a working table.

---

## How it compares (honest assessment)

Here is how react-light-table stacks up against the popular alternatives:

**Setup time**
- react-light-table: 2 minutes — import, pass props, done
- TanStack Table: 15-30 minutes — hooks, row models, custom markup for every element
- AG Grid: 5-10 minutes — but then configuration complexity ramps up fast
- MUI X Data Grid: 5-10 minutes — tightly coupled to Material UI ecosystem

**Bundle size**
- react-light-table: ~8 KB gzipped (component + CSS)
- TanStack Table: ~9 KB gzipped (but you add your own UI on top)
- AG Grid Community: ~150 KB gzipped
- MUI X Data Grid: ~90-200 KB gzipped (depending on imports)

**Built-in UI**
- react-light-table: Yes — styled, ready to render
- TanStack Table: No — headless, you build everything
- AG Grid: Yes — full enterprise UI
- MUI X Data Grid: Yes — Material Design

**Learning curve**
- react-light-table: Props-based — if you know React, you know this
- TanStack Table: Moderate — hooks, row models, column helpers, context
- AG Grid: Steep — massive API surface
- MUI X Data Grid: Moderate — MUI ecosystem knowledge required

**Custom formatters**
- react-light-table: Yes — per-column formatter functions
- TanStack Table: Yes — full cell render control
- AG Grid: Yes — cell renderers
- MUI X Data Grid: Yes — renderCell

**Built-in search**
- react-light-table: Yes — one prop (`isSearchable`)
- TanStack Table: Manual — you wire it yourself with global filter
- AG Grid: Yes — built-in quick filter
- MUI X Data Grid: Yes — toolbar filter (requires extra config)

**Row selection**
- react-light-table: Yes — one prop (`isSelectable`)
- TanStack Table: Manual — hook + custom checkbox UI
- AG Grid: Yes — built-in
- MUI X Data Grid: Yes — built-in

**Column show/hide**
- react-light-table: Yes — built-in toggle menu
- TanStack Table: Manual — you implement the UI
- AG Grid: Yes — built-in panel
- MUI X Data Grid: Yes — toolbar

**Zero dependencies**
- react-light-table: Yes — only React as peer dependency
- TanStack Table: Yes — minimal
- AG Grid: No — ships its own framework
- MUI X Data Grid: No — requires @mui/material, @emotion, etc.

---

## When to use what

**Use react-light-table when:**
- You need a table that works in 2 minutes
- Your dataset is small to medium (up to a few thousand rows)
- You want sorting + search + selection without writing boilerplate
- Bundle size matters to you
- You're building admin panels, dashboards, or internal tools

**Use TanStack Table when:**
- You need 100% UI control and have a custom design system
- You need virtualization for 10,000+ rows
- You want a headless solution to compose with your own components

**Use AG Grid / MUI X when:**
- You need enterprise features (pivot tables, Excel export, tree data)
- You're building a spreadsheet-like application
- Licensing cost is not a concern

---

## Features at a glance

- Column sorting (ascending / descending toggle)
- Full-text search across all columns
- Row selection with select-all checkbox
- Column visibility toggle (show/hide columns)
- Custom cell formatters (transform any cell value)
- Fetch data from any URL or pass local data
- Fully customizable CSS (clean class names, no CSS-in-JS lock-in)
- React 19 compatible
- MIT licensed — free forever
- Zero external dependencies

---

## The journey

This started as an internal component I kept copying between projects. After the fifth copy-paste, I decided to do it properly — extract it into a standalone library, set up a Rollup build pipeline, write documentation, and publish it to npm.

Things I learned along the way:

- npm now requires WebAuthn security keys for 2FA (no more authenticator apps for new accounts)
- Scoped packages (`@scope/name`) are private by default — you must pass `--access public`
- "react" belongs in `peerDependencies`, not `dependencies` (prevents the dreaded duplicate React bug)
- `npm pack --dry-run` is your best friend before hitting publish
- The `prepublishOnly` script saves you from publishing un-built code

---

## Try it out

```
npm install @kedman1234/react-light-table
```

- Package: https://www.npmjs.com/package/@kedman1234/react-light-table
- Source: https://github.com/kedarvijaykulkarni/react-light-table

If you find it useful, a GitHub star would mean the world to me.

If you find a bug, open an issue — I'll fix it.

If you want to contribute, PRs are welcome.

This is v1 — there's a lot more coming (pagination, TypeScript types, theming with CSS variables, accessibility improvements). If you want to follow along, watch the repo.

Building in public, one package at a time.

`#react #javascript #typescript #opensource #npm #webdevelopment #frontend #reactjs #developer #programming #100DaysOfCode #buildinpublic`
