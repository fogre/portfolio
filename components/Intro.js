import React from 'react'
import styled from 'styled-components'
import { flexCenter, paddingBorder } from '../styles/mixins'

const IntroContainer = styled.div`
  ${flexCenter};
  height: 100vh;
`
const InnerWrapper = styled.div`
  ${paddingBorder};
  ${flexCenter};
  height: 50vh;

  img {
    max-width: 80vw;
    width: 22rem;
  }
`

const Intro = () => {
  return (
    <IntroContainer>
      <InnerWrapper>
        <img src={'./img/logo21.svg'} alt='Antti Kotiranta'/>
      </InnerWrapper>
    </IntroContainer>
  )
}

export default Intro