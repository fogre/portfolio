import { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import Background from '../components/BackgroundCanvas'
import HomeContent from '../components/HomeContent'
import img from '../public/noise3.png'

const BackgroundWrapper = styled.div`
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%),
    repeat url(${img});
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const Home = ({ projects }) => {
  const [loaded, setAnimationLoaded] = useState(false)

  const setLoaded = useCallback(() => {
    setAnimationLoaded(true)
  }, [])

  return (
    <>
      <BackgroundWrapper>
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