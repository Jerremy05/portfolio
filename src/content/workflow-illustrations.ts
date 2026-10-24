/** Client-friendly illustrations shared by the portfolio routes and standalone demos. */
export const WORKFLOW_STYLESHEET_PATH = '/styles/workflow-illustration.css'

type WorkflowIllustration = {
  title: string
  src: string
  width: number
  height: number
  summary: string
}

export const workflowIllustrations: Record<string, WorkflowIllustration> = {
  "site-1": {
    title: "AI Receptionist",
    src: "/images/workflows/ai-receptionist-portfolio.png",
    width: 1586,
    height: 992,
    summary: "A customer calls, checks available times, and books, reschedules, or cancels an appointment. The calendar and records are updated.",
  },
  "site-2": {
    title: "Asana CRM Lead Engagement",
    src: "/images/workflows/asana-crm-lead-engagement-portfolio.png",
    width: 1586,
    height: 992,
    summary: "An Asana lead status change starts the appropriate next step: client setup, a follow-up, a welcome email, or service recommendations.",
  },
  "site-3": {
    title: "Social Media AI Assistant",
    src: "/images/workflows/social-media-ai-assistant-portfolio.png",
    width: 1585,
    height: 992,
    summary: "An incoming message is checked, relevant business documents are consulted, and a reply is prepared using the conversation context.",
  },
  "site-4": {
    title: "Automated Lead Enrichment",
    src: "/images/workflows/automated-lead-enrichment-portfolio.png",
    width: 1586,
    height: 992,
    summary: "Lead details are researched and assessed, then routed to priority follow-up, a team notification, or manual review.",
  },
  "site-5": {
    title: "Gmail Attachment Organizer",
    src: "/images/workflows/gmail-attachment-organizer-portfolio.png",
    width: 1586,
    height: 992,
    summary: "Email attachments are read, given clear filenames, saved to Google Drive, logged in a spreadsheet, and followed by an email notification.",
  },
  "site-6": {
    title: "Social Media Content Repurposing",
    src: "/images/workflows/social-media-content-repurposing-portfolio.png",
    width: 1586,
    height: 992,
    summary: "A source file becomes a transcript and post drafts. Content checks and publishing rules determine which posts are sent to Facebook.",
  },
  "site-7": {
    title: "Xero Transaction Export to Asana",
    src: "/images/workflows/xero-transaction-export-to-asana-portfolio.png",
    width: 1586,
    height: 992,
    summary: "A completed Asana task starts a Xero transaction export. The details are organized in a spreadsheet, attached to the related task, and the temporary rows are cleared.",
  },
  "site-8": {
    title: "HR Job Posting and Candidate Review Assistant",
    src: "/images/workflows/hr-candidate-review-assistant-portfolio.png",
    width: 1586,
    height: 992,
    summary: "Applications are compared with role requirements. Potential matches move through questions, email, and interview scheduling; applicant records support the hiring team’s review.",
  },
  "site-9": {
    title: "RAG-Powered AI Assistant",
    src: "/images/workflows/rag-powered-ai-assistant-portfolio.png",
    width: 1586,
    height: 992,
    summary: "Document changes keep reference information current. When a question arrives, the assistant finds relevant information and uses it to prepare an answer.",
  },
}

const escapeHtml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

/** Keep one section template for the SPA and emitted standalone HTML. */
export function withWorkflowIllustration(source: string, id: string): string {
  const illustration = workflowIllustrations[id]
  if (!illustration || source.includes('id="workflow-illustration"')) return source
  const title = escapeHtml(illustration.title)
  const section = `
      <section class="panel workflow-illustration" id="workflow-illustration" aria-labelledby="workflow-illustration-title">
        <p class="eyebrow">Workflow overview</p>
        <h2 class="workflow-illustration__title" id="workflow-illustration-title">How it works</h2>
        <p class="workflow-illustration__intro">Follow the main steps from start to finish.</p>
        <figure class="workflow-illustration__figure">
          <a class="workflow-illustration__frame" href="${illustration.src}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size ${title} illustration (new tab)">
            <img src="${illustration.src}" width="${illustration.width}" height="${illustration.height}" loading="lazy" decoding="async" alt="Client-friendly workflow overview for ${title}" />
            <span class="workflow-illustration__open">Open full-size illustration <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 4h6v6M20 4L10 14" /><path d="M20 14v6H4V4h6" /></svg></span>
          </a>
          <figcaption class="workflow-illustration__caption">${escapeHtml(illustration.summary)}</figcaption>
        </figure>
      </section>`
  return source
    .replace('</head>', `    <link rel="stylesheet" href="${WORKFLOW_STYLESHEET_PATH}" />\n  </head>`)
    .replace('</header>', `</header>\n${section}`)
}
