import { ArrowUpRight } from '@phosphor-icons/react'
import { discoveryCall } from '@/content/contact'

/** Reuse the existing booking label and destination throughout the project journey. */
export function BookingLink({ className = '' }: { className?: string }) {
  if (!discoveryCall.url) return null
  return (
    <a className={`booking-link ${className}`} href={discoveryCall.url} target="_blank" rel="noopener noreferrer">
      {discoveryCall.button}<ArrowUpRight size={16} aria-hidden />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  )
}
