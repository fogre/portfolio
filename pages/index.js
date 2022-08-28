import { useState, useCallback } from 'react'
import styled from 'styled-components'
import Background from '../components/BackgroundCanvas'
import HomeContent from '../components/HomeContent'

const BackgroundWrapper = styled.div`
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: -1;
`

const Home = ({ projects }) => {
  const [loaded, setAnimationLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    setAnimationLoaded(true)
  }, [])

  return (
    <>
      <BackgroundWrapper id="canvas-container">
        <Background setLoaded={setLoaded}/>
      </BackgroundWrapper>
      <HomeContent projects={projects} loaded={loaded}/>
    </>
  )
}

export async function getStaticProps() {
  const data = await import('../public/projects.json')
  const projects = JSON.parse(JSON.stringify(data))

  return {
    props: {
      projects,
    },
  }
}

export default Home