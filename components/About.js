import styled from 'styled-components'
import { flexEnd, square, techText } from '../styles/mixins'
import { fadeInThenOut, fadeOutThenIn } from '../styles/animations'

const AboutContainer = styled.div`
  p {
    line-height: 1.2;
  }
`

const TextWrapper = styled.div`
  max-width: 450px;
`
const FlexWrapper = styled.div`
   ${flexEnd}
  justify-content: 'start';
`
const Square = styled.div`
  ${square}
  align-self: center;
  min-width: ${props => props.width};
  margin-right: ${props => props.i.toString()+'em'};
`
const Bold = styled.p`
  font-weight: bold;
  margin: 1.2em 0 0.3em;
`
const Small = styled.p`
  margin: 0em 0 1.5em;
`
const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 5rem;
  justify-content: center;
  margin: 1em 0 1em 1.5em;
`
const TechGridItem = styled.div`
  position: relative;
  width: 200%;
`
const TechImage = styled.img`
  animation: ${fadeInThenOut} linear 17s infinite;
  animation-delay: ${props => props.delay};
  opacity: 0;
  width: 1.85em;
  height: 1.85em;
  margin-left: 25%;

  @media only screen and (max-width: 340px) {
    opacity: 1;
    animation-play-state: paused;
  }
`
const TechP = styled.p`
  ${techText}
  animation: ${fadeOutThenIn} linear 17s infinite;
  animation-delay: ${props => props.delay};
  color: white;
  opacity: 1;
  margin-top: 0.4em;
  text-align: center;
  width: 200%;
  left: -50%;

  @media only screen and (max-width: 340px) {
    opacity: 0;
    animation-play-state: paused;
  }
`

const Techs = ({ breakpoint, techs, i }) => {
  const delay = (i*300).toString()+'ms'
  return (
    <FlexWrapper>
      <Square
        width={breakpoint ? '7px' : (7-i).toString()+'em'}
        height={'6px'}
        i={breakpoint ? 0 : i}
      />
      <TechGrid columns={techs.length}>
        {techs.map((tech, i) =>
          <TechGridItem key={i}>
            <TechP delay={delay}>
              {tech}
            </TechP>
            <TechImage
              src={`./img/${tech}.png`}
              alt={tech}
              delay={delay}
            />
          </TechGridItem>
        )}
      </TechGrid>
    </FlexWrapper>
  )
}

const About = ({ breakpoint, techs }) => {
  return (
    <AboutContainer>
      <TextWrapper>
        <Bold>
          I&apos;m a self learned full-stack developer.
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
      </TextWrapper>
      <br/>
      <h4>Working happily with...</h4>
      {Object.values(techs).map((tech, i) =>
        <Techs
          key={i}
          breakpoint={breakpoint}
          techs={tech}
          i={i}
        />
      )}
      <h4>...and always up for learning more!</h4>
    </AboutContainer>
  )
}

export default About