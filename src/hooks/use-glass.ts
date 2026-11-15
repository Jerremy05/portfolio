import { useSyncExternalStore } from 'react'
import { STORAGE_KEYS, writeStorage } from '@/lib/storage'

const subscribe = (notify: () => void) => {
  window.addEventListener('glasschange', notify)
  return () => window.removeEventListener('glasschange', notify)
}
const snapshot = () => document.documentElement.dataset.glass === 'on'

export function useGlass() {
  const glass = useSyncExternalStore(subscribe, snapshot)
  const toggleGlass = () => {
    const next = snapshot() ? 'off' : 'on'
    document.documentElement.dataset.glass = next
    writeStorage(STORAGE_KEYS.glass, next)
    window.dispatchEvent(new Event('glasschange'))
  }
  return { glass, toggleGlass }
}
