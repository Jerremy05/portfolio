import type { Faq } from './schema'

/** Common questions about services, booking a discovery call, and starting by email. */
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
  bookCall: {
    question: 'How do I book a discovery call?',
    answer: 'Choose an available time in the calendar under “Talk on a live call,” then follow Google Calendar’s booking steps to confirm. Check the booking details for how to join. You don’t need to send an email first.',
  },
  prepareCall: {
    question: 'What should I prepare for the call?',
    answer: 'Bring one task or workflow you want to improve, the tools you use, and where things get slow or repetitive. We’ll talk through your current process and what a useful outcome would look like. You don’t need a technical plan.',
  },
  afterWrite: {
    question: 'Can I start by email instead of booking a call?',
    answer: 'Yes. Use “Prefer to write first?” to share a short project note. The form opens your email app with the message prepared; press send there to send it. I’ll review your note and reply with questions or a practical next step. A call isn’t required to start the conversation.',
  },
  nextStep: {
    question: 'What happens after the call or email conversation?',
    answer: 'If the project is a fit, we’ll agree on the scope, timing, and cost before work begins. The first conversation helps clarify what you need; booking a call doesn’t start a project automatically.',
  },
} satisfies Record<string, Faq>

export const allFaqs: Faq[] = Object.values(faqs)
