import type { ToolMark } from './schema'

const mark = (name: string, file: string, mono?: true): ToolMark => ({ name, logo: `/images/tools/${file}`, mono })

/**
 * Every tool logo the site can show. Pages reference these, never a raw path. The twelve marks are
 * generic placeholders (public/images/tools/tool-01.svg ... tool-12.svg): swap each name and file for a
 * real tool you use. A black one-colour logo takes a third argument, `true`, so it is inverted on dark
 * grounds and never disappears.
 */
export const tools = {
  toolA: mark('Vapi', 'tool-01.svg'),
  toolB: mark('n8n', 'tool-02.svg'),
  toolC: mark('Google Calendar', 'tool-03.svg'),
  toolD: mark('Google Docs', 'tool-04.svg'),
  toolE: mark('OpenRouter', 'tool-05.svg'),
  toolF: mark('Google Drive', 'tool-06.svg'),
  toolG: mark('Zapier', 'tool-07.svg'),
  toolH: mark('Apollo', 'tool-08.svg'),
  toolI: mark('Asana', 'tool-09.svg'),
  toolJ: mark('Make.com', 'tool-10.svg'),
  toolK: mark('Xero', 'tool-11.svg'),
  toolL: mark('GoHighLevel', 'tool-12.svg'),
  toolM: mark('Claude', 'tool-13.svg'),
  toolN: mark('Gemini', 'tool-14.svg'),
  toolO: mark('OpenAI', 'tool-15.svg'),
  toolP: mark('Slack', 'tool-16.svg'),
  toolQ: mark('Cloudfare', 'tool-17.svg'),
  toolR: mark('Ollama', 'tool-18.svg'),
  toolS: mark('Google Workspace', 'tool-19.svg'),
  toolT: mark('Supabase', 'tool-20.svg'),



} satisfies Record<string, ToolMark>

/** The daily drivers, in the order you want them shown. */
export const dailyTools: ToolMark[] = [
  tools.toolA,
  tools.toolB,
  tools.toolC,
  tools.toolD,
  tools.toolE,
  tools.toolF,
  tools.toolG,
  tools.toolH,
  tools.toolI,
  tools.toolJ,
  tools.toolK,
]
