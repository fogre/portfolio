import React from 'react'
import styled from 'styled-components'
import { fadeInTransition, fadeOutTransition, flexEnd } from '../styles/mixins'

const FlexWrapper = styled.div`
  ${flexEnd}
  justify-content: center;
  max-width: ${props => 
    props.breakpoint ? '16em' : '850px'
  };
`
const TechContainer = styled.div`
  max-width: 500px;
`
const TechImage = styled.img`
  align-self: center;
  width: 2em;
  height: 2em;
  margin: 1em;
`
const TextRight = styled.p`
  text-align: right;
`

const About = ({ breakpoint, techs }) => {
	return (
    <div>
		  <p>Self learned full stack developer</p>
      <p>Soon to be batchelor of computer sciences in University of Helsinki.</p>
	    <p>Currently building apartment hotel business in Helsinki,<br/>and spend my freetime enjoying music and books.</p>
      <br/>
      <TechContainer>
        <p>Working happily with...</p>
        <FlexWrapper breakpoint={breakpoint}>
          {techs.map(tech =>
            <TechImage src={`./${tech}.png`} alt={tech} key={tech} />
          )}
        </FlexWrapper>
        <TextRight>...and always up to learn more!</TextRight>
      </TechContainer>
    </div>
  )
}

export default About