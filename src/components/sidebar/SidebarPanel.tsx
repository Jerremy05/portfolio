import { useRef, type PointerEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import { SealCheck } from '@phosphor-icons/react'
import { visibility } from '@/content/visibility'
import { site } from '@/content/site'
import { BrandMark } from '@/components/brand/BrandMark'
import { SocialLinks } from '@/components/brand/SocialLinks'
import { useLocalTime } from '@/hooks/use-local-time'
import { SidebarNav } from './SidebarNav'
import { useRailGeometry } from './use-rail-geometry'
import type { HoverTarget } from './types'

type Props = {
  variant: 'floating' | 'drawer'
  collapsed?: boolean
  onNavigate?: () => void
  onHoverChange?: (target: HoverTarget | null) => void
  /** Extra control pinned to the header's top right (the drawer's close button). */
  headerAction?: ReactNode
}

/**
 * Everything inside the sidebar card. Shared by the desktop float and the phone drawer.
 * Header: live local time, an optional logo, a large square portrait,
 * name, role, then the socials (all from content/site.ts).
 * Search is not in the card; it stays on Ctrl+K and in the phone top bar.
 */
export function SidebarPanel({ variant, collapsed = false, onNavigate, onHoverChange, headerAction }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  useRailGeometry(panelRef)
  const time = useLocalTime(site.timeZone)
  const usTime = useLocalTime(site.usTimeZone)

  const clearHover = () => onHoverChange?.(null)
  // The rail tooltip lines up with the picture, not the whole profile block.
  const reportProfile = (link: HTMLElement) =>
    onHoverChange?.({ label: site.name, element: link.querySelector<HTMLElement>('.sb-pic') ?? link })

  return (
    <div ref={panelRef} className="sb-panel" data-lenis-prevent data-variant={variant} data-brand={visibility.brand} data-collapsed={collapsed}>
      <div className="sb-head">
        <p className="sb-clock sb-fade">
          <span title="Philippines · Asia/Manila">{site.timePlace} <time dateTime={time.iso}>{time.label}</time></span>
          <span title="US Eastern Time · New York · adjusts for daylight saving">{site.usTimePlace} <time dateTime={usTime.iso}>{usTime.label}</time></span>
        </p>
        {visibility.brand ? <Link to="/" className="sb-logo" onClick={onNavigate} aria-label={`${site.brand} home`}>
          <BrandMark className="sb-logo__mark" />
          <span className="sb-logo__name sb-fade" aria-hidden>
            {site.brandParts[0]}
            <span className="sb-logo__accent">{site.brandParts[1]}</span>
          </span>
        </Link> : null}

        <Link
          to="/about"
          className="sb-profile"
          onClick={onNavigate}
          onPointerEnter={(e: PointerEvent<HTMLAnchorElement>) => reportProfile(e.currentTarget)}
          onPointerLeave={clearHover}
          onFocus={(e) => reportProfile(e.currentTarget)}
          onBlur={clearHover}
        >
          <span className="sb-pic">
            <img className="sb-pic__img" src={site.avatarSmall} alt="" width={224} height={224} />
            {visibility.certification ? <span className="sb-pic__check" aria-hidden>
              <SealCheck weight="fill" />
            </span> : null}
          </span>
          <span className="sb-profile__name sb-fade">{site.name}</span>
          <span className="sb-profile__role sb-fade">
            {site.role}
          </span>
        </Link>

        <SocialLinks className="sb-socials sb-fade" />

        {headerAction ? <div className="sb-head__action">{headerAction}</div> : null}
      </div>

      <div className="sb-body">
        <span className="sb-sep" aria-hidden />
        <nav aria-label="Main">
          <SidebarNav collapsed={collapsed} onNavigate={onNavigate} onHoverChange={onHoverChange} />
        </nav>
      </div>
    </div>
  )
}
