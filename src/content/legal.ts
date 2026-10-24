import { site } from './site'

export type LegalSection = { heading: string; paragraphs: string[]; email?: string }

export type LegalDoc = {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

/** Keep aligned with contact handling, clipboard actions, browser preferences, and deployed hosting. */
export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'October 24, 2026',
  intro: `This policy explains how information is handled when you browse ${site.url ? site.url.replace('https://', '') : 'this website'}, view the portfolio of ${site.name}, or contact me about a project.`,
  sections: [
    {
      heading: 'Contact form and email',
      paragraphs: [
        'The contact form uses the name, email address, and message you enter to prepare an email in your browser. Selecting “Send message” opens your preferred email app with those details filled in. The form does not submit them to a website backend. You still need to send the email from your mail app.',
        'The site itself does not save contact-form entries to local storage. Your browser or mail app may offer autofill or save a draft under its own settings and policies.',
        'If you send an email, I receive the information you choose to include. I use it to respond to your inquiry, discuss potential work, and manage any agreed project. Please avoid including passwords, API keys, or other sensitive information in an initial inquiry.',
      ],
    },
    {
      heading: 'Browser preferences',
      paragraphs: [
        'The site saves your light or dark theme preference and sidebar collapse preference in your browser’s local storage. The portfolio code does not send these preferences to me or use them to identify you across websites.',
        'You can remove these preferences through your browser’s settings for this site. They otherwise remain until that stored data is cleared. Calculator inputs and illustration zoom settings are used on the page and are not saved by the site to local storage.',
      ],
    },
    {
      heading: 'Copy buttons',
      paragraphs: [
        'When you select a copy button, the site asks your browser to write the displayed email address or your prepared message to the clipboard. It does not read your existing clipboard contents. Clipboard access depends on your browser’s permissions.',
      ],
    },
    {
      heading: 'Analytics and tracking',
      paragraphs: [
        'The current portfolio code does not include analytics services, advertising trackers, or tracking cookies. Any future use of analytics will be described in an updated policy. Technical information processed to deliver the website is described below.',
      ],
    },
    {
      heading: 'Website delivery and external services',
      paragraphs: [
        'Services used to deliver a hosted version of this website may process technical request information, such as an IP address, requested page, request time, and browser or device information. Access or security logs may be retained under those providers’ own policies. These operational records are separate from the preferences saved in your browser.',
        'If you follow a social link or use an external email service, that provider handles information under its own policies. This portfolio does not control those services.',
      ],
    },
    {
      heading: 'How correspondence is kept',
      paragraphs: [
        'I keep email correspondence only while needed to respond, follow up on an active discussion, manage agreed work, or meet applicable record-keeping obligations. There is no single retention period for every inquiry or project record. You may ask for deletion when information is no longer needed, subject to applicable legal requirements and exceptions. Copies may remain in email-provider systems or backups according to their retention practices.',
      ],
    },
    {
      heading: 'Your choices and rights',
      paragraphs: [
        'You can browse without submitting an inquiry, clear the site’s saved browser preferences, and choose whether to use the copy and email features. Contact me below to ask about information you have provided or to request access, correction, a copy, or deletion where applicable. I may need to verify your identity before acting on a request.',
        'Your rights and any exceptions depend on the applicable law. Where Philippine data-protection law applies, you may also raise concerns with the National Privacy Commission of the Philippines. Other rights or complaint routes may apply depending on your location.',
      ],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: [
        'If the way this site handles information changes, I will update this policy and its revision date. Please check this page for the current version.',
      ],
    },
    {
      heading: 'Privacy questions and requests',
      paragraphs: ['For questions about this policy or requests concerning information you have shared with me, email:'],
      email: site.email,
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: 'Terms of Service',
  updated: 'October 24, 2026',
  intro: `These terms explain the use of ${site.name}’s portfolio website, its content, and its project examples. Any services you hire me to provide are covered by a separate written agreement.`,
  sections: [
    {
      heading: 'Using this site',
      paragraphs: [
        'You may browse the portfolio, learn about my services, view project examples, and contact me about potential work. You may share links to public pages. Reusing content must respect applicable law and any relevant permissions or licenses; do not present someone else’s work as your own.',
        'Names, messages, and other sample details in demonstrations are illustrative unless the project explicitly identifies them as real project information.',
      ],
    },
    {
      heading: 'Project examples, illustrations, and estimates',
      paragraphs: [
        'Case studies explain the purpose and design of workflows. Workflow illustrations, including images created with AI assistance, simplify how a process is intended to work. An illustration alone is not proof of a live deployment or a successful execution.',
        'Savings calculators show illustrative estimates based on the values entered. They are not measured client results or guarantees of time saved, cost reductions, revenue, or profit. Actual outcomes depend on the business, implementation, usage, and ongoing maintenance.',
      ],
    },
    {
      heading: 'Working together',
      paragraphs: [
        'Information on this site is for general information and does not constitute a binding offer to provide services. A conversation or inquiry does not by itself create a client engagement. Work begins after we agree in writing on the scope, deliverables, fees, timing, and other applicable terms in a proposal or service agreement.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'Unless otherwise stated, rights in original text, graphics, and project materials are reserved to the extent recognized by applicable law. The site may also include templates, software, fonts, images, or other materials provided under third-party licenses. These terms do not replace those licenses. Third-party names and logos identify the relevant products or services; they remain the property of their respective owners and do not imply endorsement.',
        'Ownership and permitted use of work created for a client will be set out in the applicable written agreement. I will display or describe client work in this portfolio only with the client’s permission and subject to that agreement.',
      ],
    },
    {
      heading: 'Availability and production use',
      paragraphs: [
        'I do not guarantee that the site or its content will always be available, error-free, complete, or up to date. Software, integrations, and platform features may change. A production implementation requires configuration, appropriate access permissions, and testing for the client’s systems and requirements. Project examples do not guarantee particular business results. Any rights or protections that cannot legally be excluded remain unaffected.',
      ],
    },
    {
      heading: 'External links and services',
      paragraphs: [
        'This site may link to third-party websites or open your chosen email app. Those services operate under their own terms and policies. I do not control their content, availability, or practices.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of the Philippines, subject to any mandatory legal protections that apply to you. Disputes will be handled by the courts with proper jurisdiction.',
      ],
    },
    {
      heading: 'Contact',
      paragraphs: ['For questions about these terms, email:'],
      email: site.email,
    },
  ],
}
