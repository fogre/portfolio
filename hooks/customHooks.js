import { useState, useEffect } from 'react'

export const useWindowBreakpoint = (minWidth, minHeigth) => {
  const [breakpoint, setBreakpoint] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < minWidth || window.innerHeight < minHeigth ) {
        setBreakpoint(true)
      } else {
        setBreakpoint(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [minWidth])

  return breakpoint
}