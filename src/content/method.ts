import type { MethodStep } from './schema'

/** Your method: the three jobs your service does for a client, in order. It names the steps of the Home automation diagram. */
export const method = {
  eyebrow: 'Voice AI Appointment Setter',
  title: 'Talk. Schedule. Manage.',
  summary: 'A voice agent speaks with callers, checks Google Calendar, and helps book, reschedule, or cancel appointments.',
  steps: [
    {
      name: 'Talk',
      body: 'Voice AI speaks with the caller, identifies their appointment request, and collects the details needed.',
      inputs: ['Incoming call', 'Caller intent', 'Contact details', 'Appointment request'],
    },
    {
      name: 'Schedule',
      body: 'n8n checks Google Calendar for available times or locates the caller’s existing appointment.',
      inputs: ['Google Calendar', 'Available times', 'Existing appointment'],
    },
    {
      name: 'Manage',
      body: 'The workflow books, reschedules, or cancels the appointment, then confirms the result by voice.',
      inputs: ['Book', 'Reschedule', 'Cancel'],
    },
  ] satisfies MethodStep[],
}
