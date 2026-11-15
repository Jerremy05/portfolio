/** Implementation summaries based on the tools and behavior documented in each demo. */
export const projectTechnical: Record<string, { title: string; body: string }[]> = {
  'site-1': [
    { title: 'Voice interface and orchestration', body: 'Vapi handles the caller-facing voice interaction. n8n coordinates the appointment workflow, with JavaScript available for handling and formatting the data passed between steps.' },
    { title: 'Calendar operations', body: 'The assistant collects contact details and the appointment request. The workflow checks Google Calendar availability before offering or confirming a booking; the overview also includes rescheduling and cancellation paths.' },
    { title: 'Scope and handoff', body: 'The assistant handles supported questions and appointment requests. Requests outside its scope can be directed to staff rather than treated as completed bookings.' },
  ],
  'site-2': [
    { title: 'Lead records and workflow routing', body: 'Zapier connects the lead workflow with Asana. Incoming contact and inquiry details become an Asana task, giving the team a record for ownership, follow-up timing, and status updates.' },
    { title: 'Connected follow-up actions', body: 'The workflow overview uses changes in lead status to select the next action, including client setup, follow-up, welcome email, or service recommendations. Gmail, Google Drive, and AI by Zapier are part of the documented tool stack.' },
    { title: 'Team responsibility', body: 'The automation organizes lead information and coordinates next steps. People remain responsible for reviewing leads, keeping statuses current, and deciding how to proceed.' },
  ],
  'site-3': [
    { title: 'Message intake', body: 'A webhook receives the incoming social media message in n8n. Filtering determines the appropriate processing path before a response is prepared.' },
    { title: 'Knowledge and conversation context', body: 'The workflow retrieves relevant information from Google Docs or the connected knowledge source. An AI agent using OpenRouter receives that information along with Simple Memory conversation context to prepare a reply.' },
    { title: 'Response preparation', body: 'JavaScript supports the workflow’s data handling. The response is based on the retrieved business information and conversation context; the demo illustrates the flow rather than providing a verified production conversation.' },
  ],
  'site-4': [
    { title: 'Enrichment workflow', body: 'Zapier receives lead details and coordinates research using AI by Zapier. Available company information, such as employee count or founding year, adds context to the record.' },
    { title: 'Conditional routing', body: 'The enriched fields are checked against the configured follow-up criteria. The documented stack includes Google Sheets for records and Gmail and Slack for follow-up or team communication.' },
    { title: 'Missing information', body: 'Records that lack the information needed for routing are flagged for manual review. A missing value should not be treated as confirmed company information.' },
  ],
  'site-5': [
    { title: 'Email and attachment intake', body: 'Make.com connects Gmail with Google Drive. Incoming messages with attachments enter a sorting workflow that checks sender, file type, or subject against the configured rules.' },
    { title: 'File organization', body: 'The matching rule selects the destination Drive folder. The workflow overview also describes reading attachments, assigning clear filenames, logging the result in a spreadsheet, and sending an email notification; Gemini is included in the documented stack.' },
    { title: 'Configuration', body: 'The routing behavior depends on the sender, subject, file-type rules, and folder destinations chosen for the workflow. Those mappings define where each supported attachment is saved.' },
  ],
  'site-6': [
    { title: 'Source and drafting pipeline', body: 'Zapier coordinates source material from Google Drive with AI by Zapier. A video transcript or other existing material provides the information used to identify key ideas and create platform-specific drafts.' },
    { title: 'Review and publishing', body: 'A person checks the drafts for accuracy, tone, and formatting before approval. The workflow overview includes content checks and publishing rules for sending approved content to Facebook.' },
    { title: 'Approval boundary', body: 'Generating a draft is separate from approving it for publication. The demo keeps human review in the process so the final wording can be checked against the source and the brand.' },
  ],
  'site-7': [
    { title: 'Transaction extraction', body: 'Make.com connects Xero and Asana. The workflow overview begins with a completed Asana task, then exports the relevant Xero transaction information for the related work.' },
    { title: 'Field mapping and output', body: 'Selected fields such as contact, date, amount, and reference are arranged into spreadsheet or CSV-ready rows. The overview attaches the export to the related Asana task and clears the temporary rows afterward.' },
    { title: 'Mapping checks', body: 'The export needs the selected Xero fields and column formats to match the intended Asana task information. The demo’s example data is illustrative rather than a live accounting record.' },
  ],
  'site-8': [
    { title: 'Application processing', body: 'n8n collects applicant details and resumes, with Google Drive used for files and Airtable included in the record-management stack. The workflow extracts resume information and compares it with the selected job requirements using an AI agent and Ollama.' },
    { title: 'Follow-up coordination', body: 'Applicant records receive statuses to organize review. Potential candidates can move through a role-specific questionnaire, personalized Gmail follow-up, and Google Calendar interview scheduling.' },
    { title: 'Human review', body: 'The workflow supports screening and coordination. The hiring team reviews candidate information and makes the final hiring decisions; the automation does not make that decision.' },
  ],
  'site-9': [
    { title: 'Knowledge-base synchronization', body: 'n8n monitors Google Drive additions, updates, and deletions. New or changed documents are processed into the Supabase vector database, while deleted documents are removed from the index.' },
    { title: 'Retrieval-augmented generation', body: 'When a chat question arrives, the AI agent searches the stored document information for relevant context before preparing an answer. This is retrieval-augmented generation (RAG); Ollama and JavaScript are included in the documented stack.' },
    { title: 'Source dependency', body: 'The answer depends on the connected documents and the information retrieved for the question. Keeping the index synchronized helps the assistant use current reference material; example conversations on the page are illustrative.' },
  ],
}
