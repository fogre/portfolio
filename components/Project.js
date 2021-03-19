import React from 'react'
import styled from 'styled-components'
import {
  fadeInTransition,
  fadeOutTransition,
  flexEnd,
  techText,
  square
} from '../styles/mixins'

const ProjectContainer = styled.div`
  margin-bottom: 3em;
`
const FlexWrapper = styled.div`
  ${flexEnd}
  flex-wrap: wrap;
`
const TechImage = styled.img`
  ${fadeInTransition}
  width: 1.4em;
  height: 1.4em;
  margin: 1em 1em 0;

  ${ProjectContainer}:hover & {
    ${fadeOutTransition}
  }
`
const TechNames = styled.div`
  ${fadeOutTransition}
  ${techText}
  color: ${props => props.theme.grey};
  margin: 1.4em 0.9em 0;
  white-space: pre;

  ${ProjectContainer}:hover & {
    ${fadeInTransition}
  }
`
const Square = styled.div`
  ${square}
  margin: 0 0.2em 0.2em 0;
`
const LinkButton = styled.a.attrs(() => ({
  target: '_blank',
  rel:'noopener noreferrer'
}))`
  padding: 0.5em 0.7em;
  margin-right: 1.5em;
  border: ${props => props.theme.grey} 0.15em solid;
  font-weight: bold;
  text-decoration: none;
  color: white;

  :hover {
    border-color: white;
  }
`
const Project = ({ project, i }) => {
  const techTexts = project.techs.map(tech => tech+'   ')

  return (
    <ProjectContainer>
      <FlexWrapper>
        <Square
          height={'0.4em'}
          width={'0.6em'}
          i={i}
        />
        <h3>{project.name}</h3>
        <span>
          <TechNames>{techTexts}</TechNames>
          {project.techs.map(tech =>
            <TechImage src={`./img/${tech}.png`} alt={tech} key={tech}/>
          )}
        </span>
      </FlexWrapper>
      <p>{project.desc}</p>
      <FlexWrapper>
        {project.url
          && <LinkButton href={project.url}>VIEW</LinkButton>
        }
        {project.source
          && <LinkButton href={project.source}>SOURCE</LinkButton>
        }
      </FlexWrapper>
    </ProjectContainer>
  )
}

export default Project