import type { Service } from './schema'
import { tools } from './tools'

export const servicesPage = {
  eyebrow: 'Services',
  title: 'How I can help your business.',
  lede: 'Practical automation services for customer support, daily operations, and lead management.',
}

/**
 * The Home Services section: a stack of cards dealt onto a pile as the page scrolls. The display line
 * is the thin + bold pair below.
 */
export const servicesSection = {
  eyebrow: servicesPage.eyebrow,
  titleThin: 'How I can help',
  titleBold: 'your business.',
  explore: 'See an example',
  /** One representative case study for each broad service category. */
  caseStudies: {
    'service-1': 'site-1',
    'service-2': 'site-7',
    'service-3': 'site-2',
    'service-4': 'site-4',
    'service-5': 'site-6',
  } as Record<string, string>,
}

export const SUMMARY = 'PLACEHOLDER - tell me what to put here: the benefit of this service in one line.'
export const BULLET = 'PLACEHOLDER - tell me what to put here: one short benefit'

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'AI Assistants & Agents',
    summary: 'Build assistants that help customers and your team.',
    outcome: 'Helpful Customer Support',
    bullets: ['Handle common inquiries', 'Support booking and follow-up', 'Find answers in business documents'],
    tools: [tools.toolB, tools.toolA, tools.toolE, tools.toolR, tools.toolT],
  },
  {
    id: 'service-2',
    title: 'Business Workflow Automation',
    summary: 'Connect your apps and reduce repetitive admin work.',
    outcome: 'Less Repetitive Admin',
    bullets: ['Move data between tools', 'Keep records in sync', 'Automate routine handoffs'],
    tools: [tools.toolB, tools.toolG, tools.toolJ, tools.toolS],
  },
  {
    id: 'service-3',
    title: 'CRM & Lead Management',
    summary: 'Organize leads from first inquiry to client onboarding.',
    outcome: 'Organized Lead Follow-Up',
    bullets: ['Capture inquiries', 'Manage pipelines and follow-ups', 'Coordinate client onboarding'],
    tools: [tools.toolL, tools.toolI, tools.toolG],
  },
  {
    id: 'service-4',
    title: 'Lead Research & Enrichment',
    summary: 'Research prospects and add useful context to lead records.',
    outcome: 'Better-Informed Outreach',
    bullets: ['Find company information', 'Prioritize with clear criteria', 'Flag missing details for review'],
    tools: [tools.toolG, tools.toolH, tools.toolS, tools.toolP],
  },
  {
    id: 'service-5',
    title: 'Content & Document Automation',
    summary: 'Reduce the work of preparing content and organizing files.',
    outcome: 'Less Content Admin',
    bullets: ['Repurpose existing material', 'Name and file attachments', 'Log documents for easy retrieval'],
    tools: [tools.toolJ, tools.toolG, tools.toolF, tools.toolN],
  },
]
