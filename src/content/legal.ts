import { site } from './site'

export type LegalSection = { heading: string; paragraphs: string[] }

export type LegalDoc = {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

/** What this site actually stores and loads. Keep in sync with src/lib/storage.ts and src/lib/analytics.ts. */
export const privacyPolicy: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'October 20, 2026',
  intro: `This policy covers ${site.url.replace('https://', '')}, the portfolio of ${site.name} trading as ${site.brand}. This is a general template, not legal advice. It has not been reviewed by a lawyer; please have it checked for the laws that apply where you operate.`,
  sections: [
    {
      heading: 'What this site collects',
      paragraphs: [
        'The contact link opens your own email app. It does not submit information to this website. If you choose to send an email, I receive the information in your message, such as your name, email address, and details about your inquiry.',
        'I use your email to respond and discuss your inquiry. I keep it only as long as needed for that purpose or to meet legal obligations. To ask what information I hold or request its deletion, contact me at the email address below. Copies may remain in my email provider’s systems or backups according to that provider’s retention practices.',
      ],
    },
    {
      heading: 'What your browser stores',
      paragraphs: [
        'This site stores your theme preference and whether the sidebar is collapsed in your browser’s local storage. These settings stay on your device and are not sent to me. They remain until you clear this site’s stored data in your browser.',
      ],
    },
    {
      heading: 'Analytics',
      paragraphs: [
        'If analytics is enabled, it loads only after you agree through the site’s consent notice. The analytics provider is [name of provider]. If analytics is not enabled, this site does not load an analytics service. You can decline analytics in the consent notice.',
      ],
    },
    {
      heading: 'Hosting',
      paragraphs: [
        'This website is hosted by [name of hosting provider]. To deliver and secure the site, the hosting provider may process technical information such as your IP address, the page requested, the time of the request, and browser or device details. The provider’s own privacy policy explains its handling and retention of hosting logs.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        `You may contact me at ${site.email} to ask about your personal information or, where applicable, request access, correction, deletion or blocking, object to processing, or request a copy of your information. I may need to verify your identity before responding. These rights are subject to applicable laws and exceptions. You may also lodge a complaint with the National Privacy Commission of the Philippines.`,
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        'If this policy changes, I will post the revised version on this page and update the date at the top.',
      ],
    },
  ],
}

export const termsOfService: LegalDoc = {
  title: 'Terms of Service',
  updated: 'October 20, 2026',
  intro: `These terms cover your use of this portfolio site, run by ${site.name} trading as ${site.brand}. This is a general template, not legal advice. It has not been reviewed by a lawyer; please have it checked for the laws that apply where you operate.`,
  sections: [
    {
      heading: 'Using this site',
      paragraphs: [
        'You may browse this site, learn about my services, view the project examples, and contact me about potential work. You may share links to the site, but you may not copy, republish, sell, or present its content or project materials as your own without permission, except where allowed by law. Names, companies, messages, and other details shown in sample pages or demos are fictional or made up for demonstration purposes.',
      ],
    },
    {
      heading: 'Working together',
      paragraphs: [
        'Information on this site is for general information and does not constitute a binding offer to provide services. A conversation or call does not by itself create a client engagement. Work begins only after we agree in writing on the scope, deliverables, fees, timing, and other applicable terms in a proposal or service agreement.',
      ],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        'Unless otherwise stated, the original text, graphics, and project materials on this site are owned by me or used with permission. The site may also include templates, software, fonts, images, or other materials owned by third parties and used under their applicable licenses. Third-party names and logos are used only to identify the relevant products or services; they remain the property of their respective owners and do not imply endorsement.',
        'Ownership and permitted use of work created for a client will be set out in the applicable written agreement. I will display or describe client work in this portfolio only with the client’s permission and subject to that agreement.',
      ],
    },
    {
      heading: 'No warranties',
      paragraphs: [
        'This site and its sample projects are provided for general information and demonstration purposes. I do not guarantee that the site or its content will always be available, error-free, complete, or up to date. Software, integrations, and platform features may change. Demo workflows are not production-ready services, and examples do not guarantee particular business results. Any warranties or rights that cannot legally be excluded remain unaffected.',
      ],
    },
    {
      heading: 'External links',
      paragraphs: [
        'This site may link to third-party websites or services for convenience. I do not control those sites and am not responsible for their content, availability, or practices. Your use of them is subject to their own terms and policies.',
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
      paragraphs: [`Questions about these terms: ${site.email}.`],
    },
  ],
}
