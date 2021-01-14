import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const WithObserver = props => {
 const [ref, inView] = useInView({
    threshold: 0.7,
  })

  useEffect(() => {
    if (inView) props.changeInView(props.scrollID)
  }, [inView])

  return (
    <div ref={ref} id={props.scrollID}>
      {props.children}
    </div>
  )
}

//In mobile devices do not track in view
const InViewObserver = props => {

  if (props.breakpoint) {
    return <div>{props.children}</div>
  }

  return(
    <WithObserver
      changeInView={props.changeInView}
      children={props.children}
      scrollID={props.scrollID}
    />
  )
}

export default InViewObserver