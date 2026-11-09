import { ArrowUpRight, CalendarBlank } from '@phosphor-icons/react'
import { discoveryCall } from '@/content/contact'

/** Accept public Google appointment pages, never a private calendar or an arbitrary embed. */
function bookingUrls(value: string): { href: string; embed: string | null } | null {
  if (!value.trim()) return null
  try {
    const url = new URL(value.trim())
    if (url.protocol !== 'https:' || url.username || url.password || url.port) return null
    if (url.hostname === 'calendar.google.com' && /^\/calendar\/appointments\/schedules\/[^/]+\/?$/.test(url.pathname)) {
      const embed = new URL(url)
      embed.searchParams.set('gv', 'true')
      return { href: url.href, embed: embed.href }
    }
    // Google's short sharing links open the booking page, but cannot be embedded directly.
    if (url.hostname === 'calendar.app.google' && url.pathname.length > 1) return { href: url.href, embed: null }
  } catch {
    // An unfinished configuration must not expose a broken booking action.
  }
  return null
}

export function DiscoveryCall({ nested }: { nested: boolean }) {
  const urls = bookingUrls(discoveryCall.url)
  if (!urls) return null
  const H = nested ? 'h3' : 'h2'
  return (
    <section className="ct-booking" aria-labelledby="ct-booking-title">
      <div className="ct-booking__head">
        <div>
          <p className="pg-mono ct-booking__eyebrow"><CalendarBlank size={18} aria-hidden />{discoveryCall.eyebrow}</p>
          <H id="ct-booking-title" className="ct-panel__title">{discoveryCall.title}</H>
          <p className="ct-panel__body">{discoveryCall.body}</p>
        </div>
        <a className="ct-send ct-booking__link" href={urls.href} target="_blank" rel="noopener noreferrer">
          {discoveryCall.button}<ArrowUpRight size={18} aria-hidden />
          <span className="sr-only">(opens Google Calendar in a new tab)</span>
        </a>
      </div>
      {urls.embed ? (
        <>
          <p className="ct-booking__hint">{discoveryCall.hint}</p>
          <iframe className="ct-booking__calendar" src={urls.embed} title="Choose a time for a discovery call with Jerremy Beron" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          <p className="ct-booking__fallback">Calendar not loading? <a href={urls.href} target="_blank" rel="noopener noreferrer">Open the booking page in a new tab.</a></p>
        </>
      ) : null}
      <p className="ct-booking__privacy">Booking is handled by Google Calendar. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google’s privacy policy<span className="sr-only"> (opens in a new tab)</span></a></p>
    </section>
  )
}
