import type { Image, ToolMark } from './schema'
import { certification, externalLinks, site } from './site'
import { tools } from './tools'

/**
 * The Home About section: the desk illustration stands on a hairline floor with the lead over its
 * space; roles with tool logos as raised keys, credentials below.
 */
export const aboutSection = {
  eyebrow: 'About',
  titleThin: "Hi, I'm",
  titleBold: `Jerremy.`,
  lede: 'I build AI workflows that help businesses manage leads, appointments, and repetitive tasks.',
  lead: 'I look for gaps in everyday workflows,',
  leadQuiet: 'then build and test automations to make those processes more reliable.',
  note: {
    company: `I’m building hands-on projects in AI automation`,
    product: { label: 'my project showcase', href: externalLinks.showcase },
    rest: 'features demos of AI agents, connected workflows, and appointment booking.',
  },
  picture: {
    src: '/images/profile/desk.webp',
    srcSet: '/images/profile/800/desk.webp 800w, /images/profile/desk.webp 1200w',
    alt: `Illustration of ${site.name} at a desk, working at a monitor with a coffee beside them`,
    width: 1200,
    height: 889,
  } satisfies Image,
}

export const capabilities: { title: string; tools: ToolMark[] }[] = [
  { title: 'Voice AI & Appointment Scheduling', tools: [tools.toolA, tools.toolB, tools.toolC] },
  { title: 'AI Agents & Knowledge Bases', tools: [tools.toolB, tools.toolD, tools.toolR, tools.toolF, tools.toolT] },
  { title: 'Lead Enrichment & CRM Automation', tools: [tools.toolG, tools.toolH, tools.toolI, tools.toolL] },
  { title: 'Business App Integrations', tools: [tools.toolF, tools.toolI, tools.toolJ, tools.toolK] },
]

export type AboutCredential = {
  id: 'cert' | 'place' | 'community' | 'partner'
  title: string
  detail: string
  image?: Image
  /** A dark-theme version of the mark, when the light one would vanish on a dark ground (or the reverse). */
  imageDark?: Image
  href?: string
}

export const credentials: AboutCredential[] = [
  { id: 'cert', title: certification.title, detail: certification.detail, image: { ...certification.image!, alt: '' } },
  { id: 'place', title: `Based ${site.timePlace}`, detail: 'Your time zone · Your hours' },
  {
    id: 'community',
    title: 'Your Community',
    detail: 'Your role',
    href: '#',
    image: { src: '/images/badges/64/community.webp', alt: '', width: 64, height: 64 },
  },
  {
    id: 'partner',
    title: 'Your Partner',
    detail: 'Your role',
    href: '#',
    image: { src: '/images/badges/64/partner-light.webp', alt: '', width: 64, height: 64 },
    imageDark: { src: '/images/badges/64/partner.webp', alt: '', width: 64, height: 64 },
  },
]
