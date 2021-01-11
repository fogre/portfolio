import { useCallback, useEffect } from 'react'
import { useSpring, config } from '@react-spring/core'
import { useGesture } from 'react-use-gesture'
import clamp from 'lodash/clamp'

/*
Shamelessly copied from:
https://medium.com/@joooooo308/react-three-fiber-use-gesture-to-move-the-camera-f50288cec862
Thanks Napoleon!
*/
const Scroll = (bounds, props) => {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: config.slow }))
  const callback = useCallback(
    ({ xy: [, cy], previous: [, py], memo = y.get() }) => {
      const newY = clamp(memo - cy + py, ...bounds)
      set({ y: newY })
      return newY
    },
    [bounds, y, set]
  )
  const bind = useGesture({ onScroll: callback }, props)
  return [y, bind]
}

export default Scroll