import { useLayoutEffect, useMemo, useRef } from 'react'
import { Link, useLoaderData } from 'react-router'
import { HeadMeta } from '@/app/PageMeta'
import { RouteStage } from '@/app/RouteStage'
import { caseStudyPath } from '@/content/work'
import { site } from '@/content/site'
import type { caseStudyLoader } from './case-study-loader'
import './case-study.css'
import './workflow-illustration.css'

export function CaseStudyPage() {
  const { study, document: source } = useLoaderData<typeof caseStudyLoader>()
  const body = useRef<HTMLDivElement>(null)
  const html = useMemo(() => {
    // DOMParser leaves scripts inert. Only the trusted main content is inserted into the app.
    const main = new DOMParser().parseFromString(source, 'text/html').querySelector('main')
    main?.querySelectorAll('.back-link, footer, script, style').forEach((element) => element.remove())
    return main?.innerHTML ?? ''
  }, [source])
  useLayoutEffect(() => {
    const root = body.current
    if (!root) return
    const inputs = [...root.querySelectorAll<HTMLInputElement>('.calculator input')]
    const update = () => {
      const [volume = 0, minutes = 0, rate = 0] = inputs.map((input) => Math.max(0, Number(input.value) || 0))
      const hours = volume * minutes / 60
      const number = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 })
      const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
      const set = (selector: string, text: string) => {
        const element = root.querySelector(selector)
        if (element) element.textContent = text
      }
      set('#hours-result', `${number.format(hours)} hours`)
      set('#value-result', currency.format(hours * rate))
      const unit = inputs[0]?.labels?.[0]?.textContent?.trim() ?? 'Items per month'
      set('#formula', `${unit}: ${number.format(volume)} × ${number.format(minutes)} minutes ÷ 60 × ${currency.format(rate)}/hour`)
    }
    inputs.forEach((input) => input.addEventListener('input', update))
    update()
    return () => inputs.forEach((input) => input.removeEventListener('input', update))
  }, [html])
  if (!study || !html) return <RouteStage title="Case study not found" label="Page not found" />
  return (
    <article className="case-study">
      <HeadMeta title={`${study.label} | ${site.name}`} description={study.summary} path={caseStudyPath(study.id)} />
      <nav className="case-study__nav" aria-label="Case study navigation">
        <Link className="btn-line" to="/work/case-studies">← Back to projects</Link>
        <a className="btn-line" href={study.href} target="_blank" rel="noopener noreferrer">Open standalone demo ↗</a>
      </nav>
      <div key={study.id} ref={body} dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}
