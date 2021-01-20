import styled from 'styled-components'
import { flexEnd, square, techText } from '../styles/mixins'
import { fadeInThenOut, fadeOutThenIn } from '../styles/animations'

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
  font-size: 1.2em;
  font-weight: bold;
  margin: 1.2em 0 0.3em;
`
const Small = styled.p`
  font-size: 1.2em;
  margin: 0 0 1.5em;
`
const TechWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  width: 7em;
`
const TechImage = styled.img`
  animation: ${fadeInThenOut} linear 15s infinite;
  animation-delay: ${props => 
    props.delay.toString() + 'ms'
  };
  opacity: 0;
  width: 1.8em;
  height: 1.8em;
  margin: 1.2em;
`
const TechP = styled.p`
  ${techText}
  color: white;
  opacity: 1;
  animation: ${fadeOutThenIn} linear 15s infinite;
  animation-delay: ${props =>
    props.delay.toString() + 'ms' 
  };
  margin: 1.5em;
`

const Techs = ({ techs, i }) => {
  const length = 6-i;
  return (
    <FlexWrapper>
      <Square
        width={length.toString()+'em'}
        height={'0.5em'}
        i={i}
      />
      {techs.map((tech,i) =>
        <TechWrapper key={tech}>
          <TechP delay={i*80}>
            {tech}
          </TechP>
          <TechImage 
            src={`./${tech}.png`}
            alt={tech}
            delay={i*80}
          />
        </TechWrapper> 
      )}
    </FlexWrapper>
  )
}

const About = ({ techs }) => {
	return (
    <div>
		  <Bold>Self learned full-stack developer,</Bold>
      <Small>student of computer sciences.</Small>
      <p>Passionate about creating interesting web experiences.</p>
	    <Small>Currently building apartment hotel business in Helsinki
        and playing music around the world.</Small>
      <br/>
      <div>
        <h4>Working happily with...</h4>
        {Object.values(techs).map((tech, i) =>
          <Techs key={i} techs={tech} i={i} />
        )}
        <h4>...and always up to learn more!</h4>
      </div>
    </div>
  )
}

export default About