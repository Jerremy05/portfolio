/**
 * Contact: the headline is the route's own line; faqEyebrow, faqSub and the form copy are the plate
 * and the form beside it. Change the words here, never in the components.
 */
export const contactPage = {
  eyebrow: 'Contact',
  titleThin: 'Tell me what',
  titleBold: 'you want to improve.',
  lede: 'Thinking about automating a task or improving your lead follow-up? Book a discovery call, or send a short project note if you prefer to start by email.',
  faqEyebrow: 'FAQs',
  faqTitle: 'Quick answers',
  faqSub: 'A few things to know before we talk.',
  cardTitle: 'Prefer to write first?',
  cardBody: 'Share the task you want to improve, the tools you use, and what a good result would look like. A few sentences is enough.',
}

/** The form. Until a backend is wired, Send opens the visitor's own mail app with the message laid out. */
export const contactForm = {
  first: 'First name',
  last: 'Last name',
  email: 'Email',
  message: 'Tell me more about your project',
  phFirst: 'First name',
  phLast: 'Last name',
  phEmail: 'you@yourbusiness.com',
  phMessage: 'What do you need? What are you using today? What does a good result look like?',
  send: 'Send message',
  hint: 'This form opens your own email app. Nothing is sent to or stored on this site.',
  error: 'Add your name, a real email, and a short note.',
  sentTitle: 'Your mail app has it.',
  sentBody: 'The message is laid out and addressed. Press send there and it is on its way.',
  // The fallback for a visitor whose browser has no mail app set up.
  noMailApp: 'No mail app opened? Write to',
  copy: 'Copy message',
  copied: 'Copied',
  again: 'Write another',
}

/** Paste the public appointment-schedule URL, not a private calendar URL.
 * A full calendar.google.com/calendar/appointments/schedules/... link enables the inline calendar.
 * Leave empty until the real booking page is ready; no placeholder calendar is shown to visitors.
 */
export const discoveryCall = {
  url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_Chofm0mL8bMhgghC1MwMY-WwzP4I7QhcRDn2tXx2STKfoRxL-CAgi-q_vglS5weBwIWLJRSY' as string,
  eyebrow: 'Discovery call',
  title: 'Let’s find the right next step.',
  body: 'Choose a time to discuss your workflow, the tools you use, and what you want to improve. You can book directly without sending an inquiry first.',
  button: 'Choose a time',
  hint: 'Select an available time below and follow Google Calendar’s booking steps to confirm your call.',
}
