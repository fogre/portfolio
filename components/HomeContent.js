import { useState, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowBreakpoint } from '../hooks/customHooks'
import Navigation from '../components/Navigation'
import ParentContainer from '../components/ParentContainer'

const fadeInAnimation = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  0.01% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const HomeContainer = styled.div`
  animation: ${fadeInAnimation} 0.7s linear 1;
  padding-right: 1em;
`

const HomeContent = props => {
  const [componentInView, setInView] = useState('#Intro')
  const breakpoint = useWindowBreakpoint(850)

  const changeInView = useCallback(id => {
    setInView(id)
  }, [])

  if (!props.loaded) return null

  return (
    <>
      <HomeContainer>
        <Navigation breakpoint={breakpoint} inView={componentInView}/>
        <ParentContainer
          breakpoint={breakpoint}
          changeInView={changeInView}
          projects={props.projects}
        />
      </HomeContainer>
    </>
  )
}

export default HomeContent