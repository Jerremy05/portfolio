import type { Icon } from '@phosphor-icons/react'
import { Briefcase, Compass, Cube, Envelope, FileText, House, ShieldCheck, Stack, User } from '@phosphor-icons/react'
import { visibility } from '@/content/visibility'
import { workCount } from '@/content/work'
import { externalLinks, site } from '@/content/site'

/**
 * The route registry: the one list that drives the router, the sidebar, the search palette
 * and every page title. Add a page = add one entry here.
 */

export type NavGroupId = 'menu' | 'discover' | 'general'

export const NAV_GROUPS: { id: NavGroupId; label: string }[] = [
  { id: 'menu', label: 'Menu' },
  { id: 'discover', label: 'Discover' },
  { id: 'general', label: 'General' },
]

export type PageRoute = {
  kind: 'page'
  /** Unfinished content is excluded from navigation, search, routing and the sitemap. */
  hidden?: boolean
  id: string
  path: string
  /** Short name for the sidebar and search. */
  label: string
  /** Unique document title. */
  title: string
  description: string
  icon: Icon
  /** Omit to keep the page out of the sidebar (legal pages). */
  group?: NavGroupId
  badge?: number
  /** A Home section id: the sidebar and search scroll Home to it instead of opening `path`. */
  section?: string
  /** Still the RouteStage placeholder: kept out of the sitemap (RouteStage also marks it noindex).
   *  Remove when the page is built and registered in router.tsx PAGE_COMPONENTS. */
  draft?: true
}

export type ExternalRoute = {
  kind: 'external'
  hidden?: boolean
  id: string
  href: string
  label: string
  description: string
  icon: Icon
  group: NavGroupId
}

export type NavEntry = PageRoute | ExternalRoute

/** Every page title ends with your name (content/site.ts). */
const SUFFIX = site.name

export const pages: PageRoute[] = [
  {
    kind: 'page',
    id: 'home',
    path: '/',
    label: 'Home',
    title: `${SUFFIX} | AI Automation Specialist`,
    description: 'AI-powered workflows that connect your tools, automate repetitive tasks, and improve lead follow-up and appointment booking.',
    icon: House,
    group: 'menu',
  },
  {
    kind: 'page',
    id: 'work',
    draft: true,
    path: '/work',
    label: 'Projects',
    title: `Work | ${SUFFIX}`,
    description: 'PLACEHOLDER - tell me what to put here: one line on the kinds of work you show.',
    icon: Briefcase,
    group: 'menu',
    badge: workCount,
    section: 'work',
  },
  {
    kind: 'page',
    id: 'services',
    draft: true,
    path: '/services',
    label: 'Services',
    title: `Services | ${SUFFIX}`,
    description: 'PLACEHOLDER - tell me what to put here: one line listing the services you offer.',
    icon: Stack,
    group: 'menu',
    section: 'services',
  },
  {
    kind: 'page',
    id: 'about',
    draft: true,
    path: '/about',
    label: 'About',
    title: `About ${SUFFIX}`,
    description: 'PLACEHOLDER - tell me what to put here: one line on your background and where you are based.',
    icon: User,
    group: 'menu',
    section: 'about',
  },
  // {
  //   kind: 'page',
  //   id: 'proof',
  //   path: '/proof',
  //   label: 'Proof',
  //   title: `Proof | ${SUFFIX}`,
  //   description: 'PLACEHOLDER - tell me what to put here: one line on the clients, testimonials and feedback this page shows.',
  //   icon: SealCheck,
  //   group: 'discover',
  //   section: 'proof',
  // },
  {
    kind: 'page',
    id: 'showcase',
    hidden: !visibility.showcase,
    path: '/showcase',
    label: 'Showcase',
    title: `Showcase | ${SUFFIX}`,
    description: 'PLACEHOLDER - tell me what to put here: one line on the product or project you feature here.',
    icon: Cube,
    group: 'discover',
    section: 'showcase',
  },
  {
    kind: 'page',
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    title: `Contact | ${SUFFIX}`,
    description: 'PLACEHOLDER - tell me what to put here: one line inviting people to get in touch, and when you reply.',
    icon: Envelope,
    group: 'general',
    section: 'contact',
  },
  {
    kind: 'page',
    id: 'privacy',
    path: '/privacy',
    label: 'Privacy Policy',
    title: `Privacy Policy | ${SUFFIX}`,
    description: 'What this site stores, what it does not, and how to ask for your data.',
    icon: ShieldCheck,
  },
  {
    kind: 'page',
    id: 'terms',
    path: '/terms',
    label: 'Terms of Service',
    title: `Terms of Service | ${SUFFIX}`,
    description: 'The terms for using this portfolio site.',
    icon: FileText,
  },
]

export const externals: ExternalRoute[] = [
  {
    kind: 'external',
    id: 'resource',
    hidden: !visibility.resources,
    href: externalLinks.resource,
    label: 'Resources',
    description: 'PLACEHOLDER - tell me what to put here: one line on the off-site link (a blog, a guide, a store), or delete this entry.',
    icon: Compass,
    group: 'discover',
  },
]

/** Sidebar entries per group, in registry order (pages first, then external links). */

/** enable this to show in sidebar
export function navEntries(group: NavGroupId): NavEntry[] {
  return [
    ...pages.filter((p) => p.group === group && !p.hidden),
    ...externals.filter((e) => e.group === group && !e.hidden),
  ]
} */

export function navEntries(group: NavGroupId): NavEntry[] {
  return [
    ...pages.filter((p) => p.group === group && !p.hidden),
    ...externals.filter((e) => e.group === group && !e.hidden),
  ]
}
/** Where a nav entry goes: its Home section when it has one, else its page. */
export function navTarget(page: PageRoute): string {
  return page.section ? `/#${page.section}` : page.path
}

export const notFoundTitle = `Page Not Found | ${SUFFIX}`
