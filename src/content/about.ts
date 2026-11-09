import type { Image, ToolMark } from './schema'
import { site } from './site'
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
    product: { label: 'my automation projects', href: '/#work' },
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
  id: string
  title: string
  issuer: string
  completed: string
  date: string
  description: string
  image: Image
  href: string
}

/** Completion certificates, with the original PDFs available to visitors. */
export const credentials: AboutCredential[] = [
  {
    id: 'highlevel',
    title: 'HighLevel CRM',
    issuer: 'Tara AI Community+',
    completed: 'November 9, 2026',
    date: '2026-11-09',
    description: 'CRM and pipeline management, funnels, email marketing, appointment booking, API integrations, and AI agents.',
    image: { src: '/images/certificates/Jerremy_Beron_HighLevel.webp', alt: 'HighLevel CRM certificate of completion awarded to Jerremy Beron', width: 1400, height: 990 },
    href: '/certificates/Jerremy_Beron_HighLevel.pdf',
  },
  {
    id: 'n8n',
    title: 'AI Automation with n8n',
    issuer: 'Technical Virtual Assistants PH',
    completed: 'October 7, 2026',
    date: '2026-10-07',
    description: 'Workflow design, triggers and actions, data handling, API connections, MCP servers and clients, and AI agents.',
    image: { src: '/images/certificates/Jerremy_Beron_n8n.webp', alt: 'AI Automation with n8n certificate of completion awarded to Jerremy Beron', width: 1400, height: 990 },
    href: '/certificates/Jerremy_Beron_n8n.pdf',
  },
  {
    id: 'make',
    title: 'No Code Automation with Make.com',
    issuer: 'Technical Virtual Assistants PH',
    completed: 'May 1, 2026',
    date: '2026-05-01',
    description: 'Scenario design, filters, triggers, app connections, data manipulation, advanced routing, HTTP requests, and AI agents.',
    image: { src: '/images/certificates/Jerremy_Beron_Make.com.webp', alt: 'No Code Automation with Make.com certificate of completion awarded to Jerremy Beron', width: 1400, height: 990 },
    href: '/certificates/Jerremy_Beron_Make.com.pdf',
  },
  {
    id: 'zapier',
    title: 'No Code Automation with Zapier',
    issuer: 'Technical Virtual Assistants PH',
    completed: 'April 27, 2026',
    date: '2026-04-27',
    description: 'Triggers, formatting, delays, filters, paths, looping, Sub-Zaps, webhooks, and AI by Zapier.',
    image: { src: '/images/certificates/Jerremy_Beron_Zapier.webp', alt: 'No Code Automation with Zapier certificate of completion awarded to Jerremy Beron', width: 1400, height: 990 },
    href: '/certificates/Jerremy_Beron_Zapier.pdf',
  },
]
