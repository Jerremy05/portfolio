import { DiscordLogo, FacebookLogo, GithubLogo, LinkedinLogo, XLogo } from '@phosphor-icons/react'
import type { SocialLink } from '@/content/schema'

export function SocialIcon({ icon, size = 20 }: { icon: SocialLink['icon']; size?: number }) {
  switch (icon) {
    case 'facebook':
      return <FacebookLogo size={size} weight="fill" aria-hidden />
    case 'linkedin':
      return <LinkedinLogo size={size} weight="fill" aria-hidden />
    case 'discord':
      return <DiscordLogo size={size} weight="fill" aria-hidden />
    case 'github':
      return <GithubLogo size={size} weight="fill" aria-hidden />
    case 'x':
      return <XLogo size={size} weight="bold" aria-hidden />
  }
}
