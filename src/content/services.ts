import type { Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'Everything you offer, in one line each.',
  lede: 'PLACEHOLDER - tell me what to put here: one sentence on what you offer and how a client can combine it.',
}

/**
 * The Home Services section: a stack of cards dealt onto a pile as the page scrolls. The display line
 * is the thin + bold pair below.
 */
export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'Pick one',
  titleBold: 'or stack a few.',
  explore: 'Explore',
  /** The Work chapter each card opens, by service id (a chapter id from home.ts). */
  work: { 'service-1': 'screens', 'service-2': 'featured', 'service-3': 'websites', 'service-4': 'websites', 'service-5': 'apps' } as Record<string, string>,
}

const SUMMARY = 'PLACEHOLDER - tell me what to put here: the benefit of this service in one line.'
const BULLET = 'PLACEHOLDER - tell me what to put here: one short benefit'

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'AI Agents & Appointment Booking',
    summary: 'Voice and chat assistants that answer common questions, collect customer details, and help schedule appointments.',
    outcome: 'Outcome One',
    bullets: ['Answer customer questions anytime', 'Capture inquiries before they’re missed', 'Make booking easier with instant confirmations'],
    tools: [tools.toolA, tools.toolB, tools.toolC, tools.toolE, tools.toolN],
  },
  {
    id: 'service-2',
    title: 'Workflow Automation',
    summary: 'Connect the apps you use to handle repetitive tasks and move information automatically.',
    outcome: 'Less Manual Work',
    bullets: [
      'Spend less time copying information between apps',
      'Reduce missed steps in routine tasks',
      'Keep information moving between your tools',
    ],
    tools: [tools.toolB, tools.toolG, tools.toolJ, tools.toolM, tools.toolO],
  },
  {
    id: 'service-3',
    title: 'GHL Funnel, Automation, CRM',
    summary: 'Capture inquiries through Funnel, keep lead details organized, and make follow-up easier in GoHighLevel.',
    outcome: 'More Organized Lead Follow-Up',
    bullets: [
      'Collect inquiries through landing pages and forms',
      'See each lead’s details and next step in one place',
      'Send timely follow-ups to encourage a reply or booking',
    ],
    tools: [tools.toolL, tools.toolB, tools.toolO],
  },
  {
    id: 'service-4',
    title: 'Lead Research & Enrichment',
    summary: 'Add useful company details to lead records so you can review and prioritize potential customers.',
    outcome: 'Better-Informed Lead Decisions',
    bullets: [
      'See key company details at a glance',
      'Prioritize leads using the details that matter',
      'Flag incomplete records for review',
    ],
    tools: [tools.toolJ, tools.toolI, tools.toolK, tools.toolS, tools.toolP],
  },
  {
    id: 'service-5',
    title: 'AI Content & File Automation',
    summary: 'Turn transcripts into content drafts and sort incoming files into the right places.',
    outcome: 'Less Content Admin',
    bullets: [
      'Create more content from existing recordings',
      'Find files without sorting them by hand',
      'Keep content and documents organized',
    ],
    tools: [tools.toolA, tools.toolF, tools.toolK],
  },
]
