import { useEffect, useState } from 'react'

export function useStickyHeader({ elementId }: { elementId: string }) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const header = document.getElementById(elementId)

    if (!header) {
      return
    }

    const options = {
      root: null,
      rootMargin: '100px 0px 0px 0px',
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      const isHeaderOutOfScreen = entries[0].isIntersecting === false

      setIsSticky(isHeaderOutOfScreen)
    }, options)

    observer.observe(header)

    return () => observer.disconnect()
  }, [elementId])

  return {
    isSticky,
  }
}
