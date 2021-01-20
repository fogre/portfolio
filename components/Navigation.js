import styled, { css } from 'styled-components'
import {
  fadeInTransition,
  flexCenter,
  linkStyles,
  square
} from '../styles/mixins'

const navPosition = css`
  ${flexCenter}
  position: fixed;
  right: 0;
  writing-mode: vertical-rl;
  text-orientation: sideways;
`
const NavTop = styled.div`
  ${navPosition}
  top: 0;
  margin-top: 0.8em;
`
const NavBottom = styled.div`
   ${navPosition}
  bottom: 0;
  margin-bottom: 0.5em;
`
const P = styled.p`
  ${linkStyles}
  font-size: 1.2em;
  font-weight: 400;
`
const Square = styled.div`
  ${linkStyles}
  ${square}
  background: white;
`
const Footer = styled.div`
  margin-top: 0;
  padding-bottom: 1.5em;
`
const Link = styled.a.attrs(() => ({
  target: '_blank',
  rel:'noopener noreferrer'
}))`
  ${linkStyles}
  color: white;
  text-decoration: none;
  font-size: 1em;

   ${Footer} & {
    font-size: 1.3em;
   }
`

const SocialLinks = () => {
  return [
    <Link key={'git'} href={'https://github.com/fogre'}>
      Github
    </Link>,
    <Link key={'linked'} href={'https://linkedin.com/in/antti-johannes-kotiranta'}>
      Linkedin
    </Link>,
    <Link key={'eemil'} href={'mailto:aj.kotiranta@gmail.com'}>
      Email
    </Link>,
  ]
}

const scrollIntoView = id => {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth', block: 'center', inline: 'nearest'
  })
}

const Navigation = ({ breakpoint, inView }) => {
  
  if (breakpoint) {
    return (
      <Footer> 
        <SocialLinks />
      </Footer>
    )
  }
  return(
    <>
    	<NavTop>
        <Square onClick={()=> scrollIntoView('#Intro')} selected={inView === '#Intro'} />
        <P onClick={()=> scrollIntoView('#Projects')} selected={inView === '#Projects'}>
          Projects
        </P>
        <P onClick={()=> scrollIntoView('#About')} selected={inView === '#About'}>
          About
        </P>
      </NavTop>
      <NavBottom>
        <SocialLinks />
      </NavBottom>
      <Footer> 
        <SocialLinks />
      </Footer>
    </>  
  )    
}

export default Navigation