import React from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import Astronaut from '../components/Astronaut'
import { Float, OrbitControls } from '@react-three/drei'

 const Hero = () => {
  return (
    <section id="home" className='relative flex items-start justify-center
    md:items-start md:justify-start min-h-screen  
    c-space'>
      <HeroText/>
      <ParallaxBackground />
      <figure className='absolute inset-0'
       style={{width: "100vw", height: "100vh"}}>
        <Canvas>          
          <Astronaut scale={0.5} position={[0, -1.5, 0]} />
          <OrbitControls/>                   
        </Canvas>
       </figure>
    </section>
  )
}


export default Hero;
