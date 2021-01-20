import { useState, useEffect } from 'react'

export const useWindowBreakpoint = minWidth => {
  const [breakpoint, setBreakpoint] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(
        window.innerWidth < minWidth
          ? true
          : false
      )
    }

    window.addEventListener("resize", handleResize);
    handleResize()

    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth])

  return breakpoint
}