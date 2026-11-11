import { Link } from 'react-router'
import { ArrowUpRight } from '@phosphor-icons/react'
import { caseStudyPath } from '@/content/work'
import { services, servicesSection } from '@/content/services'
import './services.css'

export function ServicesSection() {
  return (
    <section id="services" className="sv" aria-labelledby="services-title">
      <header className="sv__head">
        <p className="wk-eyebrow">{servicesSection.eyebrow}</p>
        <h2 id="services-title" className="wk-title">
          <span>{servicesSection.titleThin}</span> <b className="wk-title__bold">{servicesSection.titleBold}</b>
        </h2>
      </header>
      <ol className="sv__stack">
        {services.map((service) => (
          <li key={service.id} className="sv__item">
            <article className="sv__card">
              <p className="sv__outcome">{service.outcome}</p>
              <h3 className="sv__name">{service.title}</h3>
              <p className="sv__desc">{service.summary}</p>
              <ul className="sv__bullets">{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <ul className="sv__tags" aria-label="Tools">
                {service.tools.map((tool) => <li key={tool.name}>{tool.name}</li>)}
              </ul>
              <Link className="sv__explore" to={caseStudyPath(servicesSection.caseStudies[service.id]!)}>
                {servicesSection.explore}<ArrowUpRight size={16} aria-hidden />
              </Link>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
