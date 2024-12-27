import { useEffect, useState } from 'react'

export function useDevice() {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile')

  function changeDevice() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      setDevice('desktop')
    } else {
      setDevice('mobile')
    }
  }

  useEffect(() => {
    changeDevice()

    window.addEventListener('resize', changeDevice)

    return () => window.removeEventListener('resize', changeDevice)
  }, [])

  return {
    device,
  }
}
