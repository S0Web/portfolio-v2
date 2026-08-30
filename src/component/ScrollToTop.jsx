import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MAX_ATTEMPTS = 20
const RETRY_MS = 50

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return undefined
    }

    const id = hash.slice(1)
    let attempts = 0
    let timer

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      attempts += 1
      if (attempts < MAX_ATTEMPTS) {
        timer = setTimeout(tryScroll, RETRY_MS)
      }
    }

    timer = setTimeout(tryScroll, RETRY_MS)
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
