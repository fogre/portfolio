import { useCallback } from 'react'
import { useSpring, config } from '@react-spring/core'
import { useScroll } from '@use-gesture/react'
import clamp from 'lodash/clamp'

/*
Shamelessly copied from:
https://medium.com/@joooooo308/react-three-fiber-use-gesture-to-move-the-camera-f50288cec862
Thanks Napoleon!
*/
const Scroll = (bounds, props) => {
  const [{ y }, api] = useSpring(() => ({ y: 0, config: config.slow }))
  const cb = useCallback(
    ({ delta: [, dy], memo = y.get() }) => {
      const newY = clamp(memo - dy, ...bounds)
      api.start({ y: newY })
      return newY
    },
    [bounds, y, api]
  )
  const bind = useScroll(cb, props)
  return [y, bind]
}

export default Scroll