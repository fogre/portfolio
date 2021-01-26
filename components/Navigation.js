import styled, { css } from 'styled-components'
import { flexCenter, linkStyles, square } from '../styles/mixins'

const navPosition = css`
  ${flexCenter}
  position: fixed;
  right: 0;
  writing-mode: vertical-rl;
  text-orientation: sideways;
`
const NavTop = styled.div`
  ${navPosition}
  margin-top: 0.8em;
  top: 0;
`
const NavBottom = styled.div`
   ${navPosition}
  bottom: 0;
  margin: 0 0.4em 0.8em;
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
  padding-bottom: 2em;
`
const Link = styled.a.attrs(() => ({
  target: '_blank',
  rel:'noopener noreferrer'
}))`
  ${linkStyles}
  color: white;
  text-decoration: none;
  font-size: 1.05em;

   ${Footer} & {
    font-size: 1.2em;
   }
`

const SocialLinks = () => {
  return [
    <Link key={'github'} href={'https://github.com/fogre'}>
      Github
    </Link>,
    <Link key={'linkedin'} href={'https://linkedin.com/in/antti-johannes-kotiranta'}>
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
        <Square
          width={'0.35em'}
          height={'0.35em'}
          onClick={()=> scrollIntoView('#Intro')}
          selected={inView === '#Intro'}
        />
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