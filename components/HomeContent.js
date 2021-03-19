import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { useWindowBreakpoint } from '../hooks/customHooks'
import Navigation from '../components/Navigation'
import ContentContainer from '../components/ContentContainer'
import { fadeInAnimation } from '../styles/animations'

const HomeContainer = styled.div`
  animation: ${fadeInAnimation} 0.7s linear 1;
  padding-right: min(4vw, 50px);
`

const HomeContent = props => {
  const [componentInView, setInView] = useState('#Intro')
  const breakpoint = useWindowBreakpoint(850, 580)

  const changeInView = useCallback(id => {
    setInView(id)
  }, [])

  if (!props.loaded) return null

  return (
    <>
      <HomeContainer>
        <ContentContainer
          breakpoint={breakpoint}
          changeInView={changeInView}
          projects={props.projects}
        />
        <Navigation breakpoint={breakpoint} inView={componentInView}/>
      </HomeContainer>
    </>
  )
}

export default HomeContent