import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST

    if (!projectToken || !host) {
      if (process.env.NODE_ENV === 'development') {
        const missingVariable = !projectToken
          ? 'NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN'
          : 'NEXT_PUBLIC_POSTHOG_HOST'
        throw new Error(
          `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`
        )
      }
      return
    }

    import('posthog-js').then(({ default: posthog }) => {
      posthog.init(projectToken, {
        api_host: host,
        defaults: '2026-01-30',
        capture_exceptions: true,
        debug: process.env.NODE_ENV === 'development',
      })
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
