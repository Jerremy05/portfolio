import type { LoaderFunctionArgs } from 'react-router'
import { sampleSites } from '@/content/work'

// Each full authored document is the single source for its standalone demo and portfolio page.
// Loading one project does not download every other case study.
const documents = import.meta.glob<string>('../../content/case-studies/*.html', {
  query: '?raw', import: 'default',
})

export async function caseStudyLoader({ params }: LoaderFunctionArgs) {
  const study = sampleSites.find((item) => item.id === params.project)
  const load = study ? documents[`../../content/case-studies/${study.id}.html`] : undefined
  return { study, document: load ? await load() : '' }
}
