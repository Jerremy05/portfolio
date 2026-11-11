import { Link } from 'react-router'
import { ArrowUpRight } from '@phosphor-icons/react'
import { chapterPath, workChapters, workSection } from '@/content/home'
import { caseStudyPath, sampleSites } from '@/content/work'
import { workflowIllustrations } from '@/content/workflow-illustrations'
import './work.css'

const selectedIds = ['site-1', 'site-2', 'site-9']
const selected = selectedIds.map((id) => sampleSites.find((project) => project.id === id)!)

export function WorkSection() {
  return (
    <section id="work" className="wk wb" aria-labelledby="work-title">
      <header className="wb__head">
        <p className="wk-eyebrow">{workSection.eyebrow}</p>
        <h2 id="work-title" className="wk-title">
          <span className="wk-title__thin">{workSection.titleThin}</span> <span className="wk-title__bold">{workSection.titleBold}</span>
        </h2>
      </header>
      <ul className="wp-projects">
        {selected.map((project, index) => {
          const illustration = workflowIllustrations[project.id]!
          return (
            <li key={project.id} className={index === 0 ? 'wp-project wp-project--featured' : 'wp-project'}>
              <Link to={caseStudyPath(project.id)} className="wp-project__link">
                <span className="wp-project__media">
                  <img src={`/images/workflows/previews/${project.id}.webp`} alt={illustration.title} width={960} height={600} loading="lazy" decoding="async" />
                </span>
                <div className="wp-project__copy">
                  <span className="wk-count">{project.tag}</span>
                  <h3>{project.label}<ArrowUpRight size={18} aria-hidden /></h3>
                  <span className="wp-project__summary">{project.summary}</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      <nav className="wp-categories" aria-label="Projects">
        {workChapters.map((chapter) => (
          <Link key={chapter.id} to={chapterPath(chapter.id)} state={{ sheet: true }} preventScrollReset>
            <span>{chapter.title}</span>
            <span className="wk-count">{chapter.count === 0 ? 'Coming soon' : `${chapter.count} ${chapter.unit}`}</span>
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        ))}
      </nav>
    </section>
  )
}
