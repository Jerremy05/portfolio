import { homeManifesto } from '@/content/home'
import './manifesto.css'

export function ManifestoSection() {
  return (
    <section id="manifesto" className="ms" aria-label={homeManifesto.eyebrow}>
      <p className="ms__eyebrow">{homeManifesto.eyebrow}</p>
      <p className="ms__text">
        {homeManifesto.parts.map((part, index) => (
          <span key={index}>{typeof part === 'string' ? part : <strong>{part.key}</strong>}{' '}</span>
        ))}
      </p>
    </section>
  )
}
