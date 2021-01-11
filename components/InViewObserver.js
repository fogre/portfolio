import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const WithObserver = props => {
 const [ref, inView] = useInView({
    threshold: 0.7,
  })

  useEffect(() => {
    if (inView) props.setInView(props.scrollID)
  }, [inView])

  return (
    <div ref={ref} id={props.scrollID}>
      {props.children}
    </div>
  )
}

//If no navigation, render only children
const InViewObserver = props => {
  return(
    <>
      {props.breakpoint.width < 850
        ? <div>{props.children}</div>
        : <WithObserver 
            scrollID={props.scrollID}
            setInView={props.setInView}
            children={props.children}
          />
      }
    </>
  )
}

export default InViewObserver