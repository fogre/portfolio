import styled from 'styled-components'
import About from '../components/About'
import Intro from '../components/Intro'
import InViewObserver from '../components/InViewObserver'
import Navigation from '../components/Navigation'
import Project from '../components/Project'
import { paddingBorder } from '../styles/mixins'

const Wrapper = styled.div`
  margin-bottom: ${props => props.margin};

  h2 {
    margin: 0;
    padding-left: 0.3em;
    border-width: 1px;
    border-left-style: solid;
    border-image: linear-gradient(
        rgba(0, 0, 0, 0),
        ${props => props.theme.border}
      ) 1;
  }
`
const InnerWrapper = styled.div`
  ${paddingBorder}
`

const ChildWrapper = props => {
  return (
    <Wrapper margin={props.margin}>
      <h2>{props.header}</h2>
      <InnerWrapper>
        {props.children}
      </InnerWrapper>
    </Wrapper>
  )
}

const ContentContainer = React.memo(props => {
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
        <ChildWrapper margin={'20em'} header='Projects'>
          {props.projects.projects.map((project, i) =>
            <Project
              key={project.name}
              project={project}
              i={i}
            />
          )}
        </ChildWrapper>
      </InViewObserver>
      <InViewObserver
        breakpoint={props.breakpoint}
        changeInView={props.changeInView}
        scrollID='#About'
      >
        <ChildWrapper margin={'5em'}header="Hi, I'm Antti.">
          <About techs={props.projects.techs} />
        </ChildWrapper>
      </InViewObserver>
    </div>
  )
})

export default ContentContainer