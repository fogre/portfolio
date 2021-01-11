import React from 'react'
import styled from 'styled-components'
import { fadeInTransition, fadeOutTransition, flexEnd } from '../styles/mixins'

const ProjectContainer = styled.div`
  margin-bottom: 2em;
`
const FlexWrapper = styled.div`
  ${flexEnd}
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
  color: grey;
  margin: 1.4em 0.9em 0;
  font-size: 1em;
  font-weight: bold;
  white-space: pre;
  position: absolute;
  overflow-x: scroll;

  ${ProjectContainer}:hover & {
    ${fadeInTransition}
  }
`
const LinkButton = styled.a.attrs(() => ({
  target: '_blank',
  rel:'noopener noreferrer'
}))`
  padding: 0.5em 0.7em;
  margin-right: 1.5em;
  border: white 2px solid;
  font-weight: 800;
  text-decoration: none;
  color: white;

  :hover {
    background: linear-gradient(107deg, rgba(1,0,20,1) 0%, rgba(147,52,52,1) 20%);
  }
`
const Project = ({ project }) => {
  const techTexts = project.techs.map(tech => tech+'   ')

	return (
    <ProjectContainer>
      <FlexWrapper>
  		  <h3>{project.name}</h3>
        <span>
          <TechNames>{techTexts}</TechNames>
          {project.techs.map(tech =>
            <TechImage src={`./${tech}.png`} alt={tech} key={tech}/>
          )}
        </span>
      </FlexWrapper>  
      <p>{project.desc}</p>
      <FlexWrapper>
        <LinkButton href={project.url}>VIEW</LinkButton>
        {project.source
          && <LinkButton href={project.source}>SOURCE</LinkButton>
        }
      </FlexWrapper>  
    </ProjectContainer>
	)
}

export default Project