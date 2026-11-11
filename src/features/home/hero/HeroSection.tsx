import { Link } from 'react-router'
import { ArrowUpRight } from '@phosphor-icons/react'
import { homeHero, homeManifesto } from '@/content/home'
import { scrollToSection } from '@/lib/motion/smooth-scroll'
import './hero.css'

export function HeroSection() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="hero__title">
        <span className="hero__layer hero__layer--thin">
          <span className="hero__line hero__line--thin">{homeHero.headlineThin}</span>
        </span>
        <span className="hero__layer hero__layer--bold">
          <span className="hero__line hero__line--bold">{homeHero.headlineBold}</span>
        </span>
      </h1>

      <div className="hero__foot">
        <p className="hero__sub">{homeHero.subhead}</p>

        <div className="hero__statement">
          <p className="hero__body">
            {homeManifesto.parts.map((part, index) => (
              <span key={index}>{index > 0 ? ' ' : ''}{typeof part === 'string' ? part : <strong>{part.key}</strong>}</span>
            ))}
          </p>
        </div>

        {/* Glides Home to the Contact section (a same-path link, so Lenis keeps its glide). */}
        <Link
          to={homeHero.cta.to}
          className="hero__cta btn-line"
          onClick={(event) => {
            // A new-tab click (Ctrl / Cmd / middle) keeps the link's own behaviour.
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return
            event.preventDefault()
            scrollToSection('contact')
          }}
        >
          {homeHero.cta.label}
          <ArrowUpRight size={16} weight="bold" aria-hidden />
        </Link>
      </div>
    </section>
  )
}
