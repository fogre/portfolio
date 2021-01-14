import React from 'react'
import styled from 'styled-components'
import { flexCenter, paddingBorder } from '../styles/mixins'

const IntroContainer = styled.div`
  ${flexCenter};
  height: 100vh;
`
const InnerWrapper = styled.div`
  ${paddingBorder};
  ${flexCenter};
  height: 50vh;
`
const Intro = () => {
	return (
		<IntroContainer>
      <InnerWrapper>
        <div>
          <h1>Antti Kotiranta</h1>
          <h2>Full-Stack Developer</h2>
          <p>Student of Computer Sciences in University of Helsinki</p>
        </div>
      </InnerWrapper>
	  </IntroContainer>
	)
}

export default Intro