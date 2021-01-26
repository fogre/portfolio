import styled from 'styled-components'
import { flexEnd, square, techText } from '../styles/mixins'
import { fadeInThenOut, fadeOutThenIn } from '../styles/animations'

const AboutContainer = styled.div`
  max-width: 450px;

  p {
    line-height: 1.2;
  }
`

const FlexWrapper = styled.div`
   ${flexEnd}
  justify-content: 'start';
`
const Square = styled.div`
  ${square}
  align-self: center;
  margin-right: ${props => props.i.toString()+'em'};
`
const Bold = styled.p`
  font-weight: bold;
  margin: 1.2em 0 0.3em;
`
const Small = styled.p`
  margin: 0em 0 1.5em;
`
const TechWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  width: 7em;
`
const TechImage = styled.img`
  animation: ${fadeInThenOut} linear 15s infinite;
  animation-delay: ${props => props.delay};
  opacity: 0;
  width: 1.85em;
  height: 1.85em;
  margin: 1.15em;
`
const TechP = styled.p`
  ${techText}
  animation: ${fadeOutThenIn} linear 15s infinite;
  animation-delay: ${props => props.delay};
  color: white;
  opacity: 1;
  margin: 1.5em;
`

const Techs = ({ techs, i }) => {
  const length = (6-i).toString()+'em'
  const delay = (i*80).toString()+'ms'

  return (
    <FlexWrapper>
      <Square
        width={length}
        height={'0.5em'}
        i={i}
      />
      {techs.map((tech,i) =>
        <TechWrapper key={tech}>
          <TechP delay={delay}>
            {tech}
          </TechP>
          <TechImage 
            src={`./${tech}.png`}
            alt={tech}
            delay={delay}
          />
        </TechWrapper> 
      )}
    </FlexWrapper>
  )
}

const About = ({ techs }) => {	return (
    <AboutContainer>
		  <Bold>
        I'm a self learned full-stack developer.
      </Bold>
      <Small>
        Student of computer science in the University of Helsinki.
      </Small>  
      <Small>
         Interested in creating functional and engaging web projects.
      </Small>
      <Small>
        Currently building apartment hotel business in Helsinki 
        and spend my free time with music.
      </Small> 
      <br/>
      <div>
        <h4>Working happily with...</h4>
        {Object.values(techs).map((tech, i) =>
          <Techs key={i} techs={tech} i={i} />
        )}
        <h4>...and always up for learning more!</h4>
      </div>
    </AboutContainer>
  )
}

export default About