import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useOnePageNavigation() {
  const [pageSectionId, setPageSectionId] = useState('')
  const pathname = usePathname()

  function handlePageSectionChange(sectionId: string) {
    setPageSectionId(sectionId)
    shouldScrollToPageSection(sectionId)
  }

  function shouldScrollToPageSection(sectionId: string) {
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const headerHeight = document.getElementById('main-header')?.getBoundingClientRect().height
    const sectionDistanceFromTop = section.getBoundingClientRect().top + window.scrollY

    window.scrollTo({
      top: headerHeight ? sectionDistanceFromTop - headerHeight : 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(
    function shouldUpdatePageSectionWhenRouteChange() {
      const urlFragment = window.location.hash.replace('#', '')

      setPageSectionId(urlFragment)

      if (urlFragment) {
        shouldScrollToPageSection(urlFragment)
      }
    },
    [pathname],
  )

  useEffect(function shouldUpdatePageSectionWhenScrollingPage() {
    const sections = document.querySelectorAll('[data-section]')

    if (sections.length === 0) {
      return
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.35,
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageSectionId(entries[0].target.id)
      }
    }, options)

    const observePageSections = () => sections.forEach((section) => observer.observe(section))

    window.addEventListener('scroll', observePageSections)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', observePageSections)
    }
  }, [])

  return {
    pageSectionId,
    handlePageSectionChange,
  }
}
