import React from 'react'
import styled from 'styled-components'
import { flexCenter, paddingBorder } from '../styles/mixins'
import logo from '../public/logo.svg'

const IntroContainer = styled.div`
  ${flexCenter};
  height: 100vh;
`
const InnerWrapper = styled.div`
  ${paddingBorder};
  ${flexCenter};
  height: 50vh;

  img {
    max-width: 90vw;
    width: 35em;
  }
`

const Intro = () => {
  return (
    <IntroContainer>
      <InnerWrapper>
        <img src={logo} alt='Antti Kotiranta'/>
      </InnerWrapper>
    </IntroContainer>
  )
}

export default Intro