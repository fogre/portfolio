import styled, { css } from 'styled-components'
import { useWindowSize } from '../hooks/customHooks'
import { fadeInTransition, flexCenter } from '../styles/mixins'

const NavContainer = styled.div`
  ${flexCenter}
  position: fixed;
  right: 0;
  margin-top: 0.8em;
  writing-mode: vertical-rl;
  text-orientation: sideways;
`
const buttonStyles = css`
  opacity: ${props => props.selected ? 1 : 0.5};
  transition: all .5s ease-in-out;
  margin: 0.7em;
  padding: 0.3em;
  cursor: pointer;

  :hover {
    ${fadeInTransition}
  }
`
const P = styled.p`
  ${buttonStyles}
  font-size: 1.2em;
  font-weight: 400;
`
const Square = styled.div`
  ${buttonStyles}
  width: 0.35em;
  height: 0.4em;
  background: white;
`

const scrollIntoView = id => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth', block: 'center', inline: 'nearest'
  })
}

const Navigation = ({ breakpoint, inView }) => {
  
  if (breakpoint) return null

  return(
  	<NavContainer>
      <Square onClick={()=> scrollIntoView('#Intro')} selected={inView === '#Intro'} />
      <P onClick={()=> scrollIntoView('#Projects')} selected={inView === '#Projects'}>
        Projects
      </P>
      <P onClick={()=> scrollIntoView('#About')} selected={inView === '#About'}>
        About
      </P>
    </NavContainer>
  )    
}

export default Navigation