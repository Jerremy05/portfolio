import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight } from '@phosphor-icons/react'
import { caseStudyPath } from '@/content/work'
import { services, servicesSection } from '@/content/services'
import './services.css'

const pad = (n: number) => String(n).padStart(2, '0')

export function ServicesSection() {
  return (
    <section id="services" className="sv" aria-labelledby="services-title">
      <header className="sv__head">
        <p className="sv__eyebrow">
          {servicesSection.eyebrow}
          <span className="sv__rule" aria-hidden>
            <i data-sv-rule />
          </span>
        </p>
        <h2 id="services-title" className="sv__title">
          <span>{servicesSection.titleThin}</span> <b>{servicesSection.titleBold}</b>
        </h2>
      </header>
      <ol className="sv__stack">
        {services.map((service, i) => (
          <li key={service.id} className="sv__item" style={{ '--i': i } as CSSProperties}>
            <Link
              to={caseStudyPath(servicesSection.caseStudies[service.id]!)}
              state={{ from: 'services' }}
              className="sv__card"
              data-card
            >
              <span className="sv__top">
                <span className="sv__index">
                  {pad(i + 1)}
                  <span>{service.outcome}</span>
                </span>
              </span>
              <span className="sv__name">{service.title}</span>
              <span className="sv__desc">
                {service.summary}
              </span>
              <span className="sv__explore">
                {servicesSection.explore}
                <ArrowUpRight size={14} weight="bold" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
