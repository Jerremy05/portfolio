import { method } from './method'

/**
 * The live automation diagram on Home: a client's
 * journey through a booking pipeline, drawn stage by stage as the page scrolls (enquiry -> booking ->
 * reminders -> intro call -> outcomes). Replace the stage names and lines with your own journey.
 *
 * Coordinates are in the diagram's own 1200 x 600 units: the main path is the top row, the call's
 * outcomes the bottom row. `plane` is who moves it: `lead` = the lead / you, `auto` = the system sends
 * it. `step` is the method step (0, 1 or 2: the three steps in method.ts). Nodes are listed in build order.
 */
export type FlowPlane = 'lead' | 'auto'
export type FlowIcon = 'form' | 'email' | 'booked' | 'reminder' | 'alarm' | 'call' | 'proposal' | 'won' | 'later' | 'nurture' | 'lost'

export type FlowNode = {
  id: string
  title: string
  tag: string
  plane: FlowPlane
  icon: FlowIcon
  x: number
  y: number
  w: number
  h: number
  step: number
  /** One line for the inspector. */
  about: string
}

/** `solid` links are the lead path (arrows a packet runs); `dashed` links reroute it: a reschedule loops back, the call branches out. */
export type FlowLink = { from: string; to: string; style: 'solid' | 'dashed'; label?: string }

const ROWS = [64, 376]
const box = (col: number, row: number) => ({ x: 24 + col * 200, y: ROWS[row]!, w: 156, h: 136 })


export const liveAutomation = {
  eyebrow: 'Voice AI Appointment Setter',
  titleThin: 'Talk. Schedule.',
  titleBold: 'Manage.',
  steps: method.steps.map((step) => ({ name: step.name, body: step.body })),
  panel: { lead: 'Voice Agent to', rest: 'Google Calendar' },
  legend: { auto: 'Voice AI and automation', lead: 'Caller' },
  zones: { booking: 'Voice AI', pipeline: 'Calendar actions' },
  connected: 'System live',
  hint: { hover: 'Hover a stage to inspect', tap: 'Tap a stage to inspect' },
  nodes: [
    {
      id: 'incoming_call',
      title: 'Incoming Call',
      tag: 'Caller starts here',
      plane: 'lead',
      icon: 'call',
      ...box(0, 0),
      step: 0,
      about: 'The caller asks to book, change, or cancel an appointment.',
    },
    {
      id: 'voice_agent',
      title: 'Vapi Voice Agent',
      tag: 'AI conversation',
      plane: 'auto',
      icon: 'call',
      ...box(1, 0),
      step: 0,
      about: 'Vapi speaks with the caller and understands their appointment request.',
    },
    {
      id: 'caller_details',
      title: 'Collect Details',
      tag: 'Caller information',
      plane: 'lead',
      icon: 'form',
      ...box(2, 0),
      step: 0,
      about: 'The workflow collects and confirms the details needed to handle the request.',
    },
    {
      id: 'identify_request',
      title: 'Identify Request',
      tag: 'Choose action',
      plane: 'auto',
      icon: 'proposal',
      ...box(3, 0),
      step: 0,
      about: 'The agent identifies which appointment action the caller wants.',
    },
    {
      id: 'check_calendar',
      title: 'Check Calendar',
      tag: 'Find a time',
      plane: 'auto',
      icon: 'booked',
      ...box(4, 0),
      step: 1,
      about: 'The workflow checks available times or finds the existing appointment.',
    },
    {
      id: 'calendar_action',
      title: 'Calendar Action',
      tag: 'Update event',
      plane: 'auto',
      icon: 'booked',
      ...box(5, 0),
      step: 2,
      about: 'The requested appointment is created, rescheduled, or cancelled.',
    },
    {
      id: 'calendar_updated',
      title: 'Calendar Updated',
      tag: 'Google Calendar',
      plane: 'auto',
      icon: 'booked',
      ...box(2, 1),
      step: 2,
      about: 'Google Calendar reflects the completed appointment change.',
    },
    {
      id: 'voice_confirmation',
      title: 'Voice Confirmation',
      tag: 'Spoken result',
      plane: 'auto',
      icon: 'call',
      ...box(3, 1),
      step: 2,
      about: 'Vapi tells the caller whether their booking, change, or cancellation was completed.',
    },
  ] satisfies FlowNode[],
  links: [
    { from: 'incoming_call', to: 'voice_agent', style: 'solid' },
    { from: 'voice_agent', to: 'caller_details', style: 'solid' },
    { from: 'caller_details', to: 'identify_request', style: 'solid' },
    { from: 'identify_request', to: 'check_calendar', style: 'solid' },
    { from: 'check_calendar', to: 'calendar_action', style: 'solid' },
    { from: 'calendar_action', to: 'calendar_updated', style: 'solid' },
    { from: 'calendar_updated', to: 'voice_confirmation', style: 'solid' },
  ] satisfies FlowLink[],
  }
