import styled from 'styled-components'
import About from '../components/About'
import Intro from '../components/Intro'
import InViewObserver from '../components/InViewObserver'
import Navigation from '../components/Navigation'
import Project from '../components/Project'
import { paddingBorder } from '../styles/mixins'

const Wrapper = styled.div`
  margin-bottom: 20em;
`
const InnerWrapper = styled.div`
  ${paddingBorder}
`

const ChildWrapper = props => {
  return (
    <Wrapper>
      <h2>{props.header}</h2>
      <InnerWrapper>
        {props.children}
      </InnerWrapper>
    </Wrapper>
  )
}

const ParentContainer = React.memo(props => {
  return(
    <div>
      <InViewObserver
        breakpoint={props.breakpoint}
        changeInView={props.changeInView}
        scrollID='#Intro'
      >
        <Intro />
      </InViewObserver>  
      <InViewObserver
        breakpoint={props.breakpoint}
        changeInView={props.changeInView}
        scrollID='#Projects'
      >
        <ChildWrapper header='Projects'>
          {props.projects.projects.map(project =>
            <Project
              key={project.name}
              project={project}
            />
          )}
        </ChildWrapper>
      </InViewObserver>
      <InViewObserver
        breakpoint={props.breakpoint}
        changeInView={props.changeInView}
        scrollID='#About'
      >
        <ChildWrapper header='About'>
          <About
            breakpoint={props.breakpoint}
            techs={props.projects.techs}
          />
        </ChildWrapper>
      </InViewObserver>
    </div>
  )
})

export default ParentContainer