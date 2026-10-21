import type { Faq } from './schema'

/** The questions people ask before they write. Pages pick the ones that answer their own objection. */
export const faqs = {
  whatYouBuild: {
    question: 'What do you actually build?',
    answer: 'I build automations that connect business apps, organize lead information, and handle repetitive tasks. I can also set up AI chat or voice assistants, appointment booking, and GoHighLevel funnels and follow-up.',
  },
  startSpeed: {
    question: 'How fast can you start?',
    answer: 'Timing depends on the project and my availability. After I understand what you need, I’ll confirm a realistic start date and delivery timeline before we begin.',
  },
  needStack: {
    question: 'Do I need a specific platform?',
    answer: 'No. I work with tools such as Zapier, Make.com, n8n, and GoHighLevel. If you already use other apps, I’ll check whether they can connect and suggest options if they can’t.',
  },
  pricing: {
    question: 'How much do you charge?',
    answer: 'I’ll provide a quote after learning what you want to automate, which apps are involved, and what the project needs. I’ll confirm the scope and cost before starting; ongoing support can be quoted separately.',
  },
  afterWrite: {
    question: 'What happens after I write?',
    answer: 'I’ll review your message and reply with any follow-up questions or a practical next step. If the project is a fit, we’ll agree on the scope, timing, and cost before work begins.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)