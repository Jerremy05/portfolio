import { useRef } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { aboutSection, capabilities, credentials, type AboutCredential } from '@/content/about'
import { certification, externalLinks, socials } from '@/content/site'
import { personJsonLd } from '@/lib/seo'
import './about.css'

const pad2 = (n: number) => String(n).padStart(2, '0')

const personLd = personJsonLd({
  description: aboutSection.lede,
  skills: capabilities.map((c) => c.title),
  credential: { name: certification.title, id: certification.detail.replace(/^(Member|Credential) ID /, ''), url: certification.href },
  sameAs: [...socials.filter((s) => !s.partner).map((s) => s.href), ...(certification.href ? [certification.href] : [])],
  companyUrl: externalLinks.company,
})

export function Credential({ c }: { c: AboutCredential }) {
  const preview = useRef<HTMLDialogElement>(null)
  return (
    <>
    <button type="button" className="ab__cred" onClick={() => preview.current?.showModal()} aria-haspopup="dialog">
      <img className="ab__cred-preview" src={c.image.src} alt={c.image.alt} width={c.image.width} height={c.image.height} loading="lazy" decoding="async" />
      <span className="ab__cred-copy">
        <b>{c.title}</b>
        <span className="ab__cred-issuer">{c.issuer}</span>
        <time dateTime={c.date}>{c.completed}</time>
        <span className="ab__cred-description">{c.description}</span>
        <span className="ab__cred-link">
          View certificate
          <ArrowUpRight className="ab__cred-go" size={16} weight="bold" aria-hidden />
        </span>
      </span>
    </button>
    <dialog
      ref={preview}
      className="certificate-preview"
      aria-labelledby={`certificate-title-${c.id}`}
      onClick={(event) => { if (event.target === event.currentTarget) preview.current?.close() }}
    >
      <div className="certificate-preview__panel">
        <header className="certificate-preview__header">
          <h2 id={`certificate-title-${c.id}`}>{c.title}</h2>
          <button type="button" onClick={() => preview.current?.close()} aria-label="Close certificate preview">×</button>
        </header>
        <div className="certificate-preview__image">
          <img src={c.image.src} alt={c.image.alt} width={c.image.width} height={c.image.height} loading="lazy" />
        </div>
        <a className="certificate-preview__download" href={c.href} download>Download PDF <ArrowUpRight size={16} aria-hidden /></a>
      </div>
    </dialog>
    </>
  )
}

/**
 * About, "The floor": the desk illustration set large, standing on a
 * hairline floor that runs edge to edge, the story set over its space; the four roles with their
 * tools as raised paper keys and the credentials sit below the floor. The picture rises onto the
 * floor as it scrolls in (CSS scroll-driven, compositor only; still under reduced motion).
 */
export function AboutSection() {
  const s = aboutSection
  return (
    <section id="about" className="ab" aria-labelledby="ab-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personLd }} />
      <header>
        <p className="wk-eyebrow">{s.eyebrow}</p>
        <h2 id="ab-title" className="wk-title">
          <span>{s.titleThin}</span> <span className="wk-title__bold">{s.titleBold}</span>
        </h2>
        <p className="ab__lede">{s.lede}</p>
      </header>

      <div className="ab__stage">
        <p className="ab__lead">
          {s.lead} <span>{s.leadQuiet}</span>
        </p>
        <div className="ab__pic">
          <img
            src={s.picture.src}
            srcSet={s.picture.srcSet}
            sizes="auto, (min-width: 1024px) 46vw, 92vw"
            alt={s.picture.alt}
            width={s.picture.width}
            height={s.picture.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="ab__below">
        <p className="ab__note">
          <strong>{s.note.company}</strong>, and{' '}
          <a href={s.note.product.href} target="_blank" rel="noopener noreferrer">
            {s.note.product.label}
          </a>{' '}
          {s.note.rest}
        </p>
        <ul className="ab__caps">
          {capabilities.map((c, i) => (
            <li key={c.title} className="ab__cap">
              <span className="ab__keys">
                {c.tools.map((t) => (
                  <span key={t.name} className="ab__key" title={t.name}>
                    <img src={t.logo} alt={t.name} width={20} height={20} loading="lazy" decoding="async" />
                  </span>
                ))}
              </span>
              <span className="ab__cap-title">{c.title}</span>
              <span className="ab__cap-i" aria-hidden>
                {pad2(i + 1)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <section id="certificates" className="ab__certificates" aria-labelledby="ab-certificates-title">
        <h3 id="ab-certificates-title">Certificates of completion</h3>
        <p className="ab__certificates-intro">Completed training in AI automation, connected workflows, and CRM systems.</p>
        <ul className="ab__creds">
          {credentials.map((c) => (
            <li key={c.id}><Credential c={c} /></li>
          ))}
        </ul>
      </section>

    </section>
  )
}
