import { useEffect, useState } from 'react'
import { Check, Copy, EnvelopeSimple } from '@phosphor-icons/react'
import { mailtoHref, site } from '@/content/site'

/** Email opens the visitor's mail app; copying is a separate, explicit action. */
export function EmailContact() {
  const [feedback, setFeedback] = useState({ message: '', copied: false })

  useEffect(() => {
    if (!feedback.message) return
    const timer = window.setTimeout(() => setFeedback({ message: '', copied: false }), feedback.copied ? 2500 : 5000)
    return () => window.clearTimeout(timer)
  }, [feedback])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setFeedback({ message: 'Copied!', copied: true })
    } catch {
      setFeedback({ message: 'Couldn’t copy. Select the address to copy it manually.', copied: false })
    }
  }

  return (
    <div className="ct-email">
      <a className="ct-mail" href={mailtoHref()}>
        <EnvelopeSimple size={16} weight="fill" aria-hidden />
        <span>{site.email}</span>
      </a>
      <button
        type="button"
        className="ct-copy-email"
        onClick={copyEmail}
        aria-label="Copy email address"
        title={feedback.copied ? 'Copied!' : 'Copy email address'}
      >
        {feedback.copied ? <Check size={18} weight="bold" aria-hidden /> : <Copy size={18} aria-hidden />}
      </button>
      <span className="ct-copy-status" role="status" aria-live="polite" aria-atomic="true">{feedback.message}</span>
    </div>
  )
}
