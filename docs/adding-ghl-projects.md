# Adding a HighLevel funnel project

The **Funnels & Automation** card in Projects opens `/work/funnels`. Until a completed project is added, it shows “Coming soon”. Pending work is excluded from the project count.

Add an entry to `funnelProjects` in `src/content/work.ts`:

```ts
export const funnelProjects: WorkItem[] = [
  {
    id: 'your-funnel-project',
    name: 'Your project title',
    kicker: 'HighLevel · Funnel & Automation',
    summary: 'Describe the funnel, the trigger, and the connected follow-up workflow.',
    image: {
      src: '/images/work/your-funnel-project.webp',
      alt: 'Describe the actual screenshot',
      width: 1600,
      height: 1000,
    },
    href: 'https://your-public-funnel-url.example',
  },
]
```

Use the real screenshot dimensions. Save the image under `public/images/work/`, and replace the sample content and URL with the actual project details. Omit `href` if no public demo is available. The project counts and coming-soon state update automatically; the first landscape screenshot becomes the category cover.

Include the project name, audience, funnel link, screenshots, automation triggers and actions, and any measured results when preparing the final entry.

Run `npm run build` and `npm run lint` before publishing.
