import { memo, useRef, useEffect, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import ScrollEffect from '../utils/ScrollEffect'

function Square(props) {
  return (
    <mesh {...props} scale={0.5}>
      <ringBufferGeometry attach="geometry" args={[8.9, 9, 4]} />
      <meshStandardMaterial
        attach="material"
        color="#7ea7a8"
        metalness={0}
      />
    </mesh>
  )
}

function Content() {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.z += 0.0001
  })

  return (
    <group ref={ref}>
      <Square position={[0, 0, -7]} />
      <Square position={[0, 0, 0]} />
      <Square position={[0, 0, 7]} />
      <Square position={[0, 0, 14]} />
      <Square position={[0, 0, 21]} />
      <Square position={[0, 0, 28]} />
      <Square position={[0, 0, 35]} />
      <Square position={[0, 0, 42]} />
      <Square position={[0, 0, 49]} />
      <Square position={[0, 0, 56]} />
      <Square position={[0, 0, 63]} />
      <Square position={[0, 0, 67]} />
      <Square position={[0, 0, 70]} />
    </group>
  )
}

function Camera(props) {
  const cameraRef = useRef()
  const loadedRef = useRef()
  const { set, viewport } = useThree()
  useEffect(() => void set({ camera: cameraRef.current }), [])

  useLayoutEffect(() => {
    cameraRef.current.aspect = viewport.width / viewport.height
    cameraRef.current.updateProjectionMatrix()
  }, [viewport])

  useFrame(({ clock }) => {
    if (loadedRef.current) {
      cameraRef.current.updateMatrixWorld()
    } else if (cameraRef.current.position.z < 74.99 && !loadedRef.current) {
      cameraRef.current.position.z = 0 + Math.sin(clock.getElapsedTime()) * 75
    } else {
      loadedRef.current = true
      props.setLoaded()
    }
  })

  return <a.perspectiveCamera ref={cameraRef} {...props} />
}

function CameraLight() {
  const { camera } = useThree()

  return (
    <rectAreaLight
      width={5}
      height={5}
      color={'#000069'}
      intensity={470}
      position={camera.position}
    />
  )
}

export default memo(function BackgroundCanvas(props) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true)
    }
  }, [])

  const height = isClient && window.innerHeight * -3
  const [z] = ScrollEffect([height, 0], { target: isClient ? window : null })

  if (!isClient) return null

  return (
    <Canvas>
      <Camera
        position={[0.5, 0.5, 0]}
        setLoaded={props.setLoaded}
      >
        <CameraLight />
      </Camera>
      <a.group position-z={z.to(z => (-z / 1000) * 25)}>
        <Content />
      </a.group>
    </Canvas>
  )
})