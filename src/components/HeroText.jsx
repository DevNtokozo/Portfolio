import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'


const HeroText = () => {
  const words = ["Secure", "Scalable", "Modern"]
  return (
    <div className='z-10 mt-20 text-center md:mt-40 
    md:text-left rounded-3xl bg-clip-text'>
      {/* Desktop View */}
      <div className='flex-col hidden md:flex c-space'>
        <motion.h1 className='text-4xl font-medium'
          initial={{opacity: 0, x: -50}}
          animate={{opacity:1, x: 0}}
          transition={{delay: 1}}>Hi I'm Ntokozo</motion.h1>
        <div className='flex flex-col items-start'>
            <motion.p className='text-5xl font-medium 
            text-neutral-300'
             initial={{opacity: 0, x: -50}}
             animate={{opacity:1, x: 0}}
             transition={{delay: 1.2}}>
                A QA Engineer <br/> Dedicated to testing
            </motion.p>
            <motion.div><FlipWords 
            initial={{opacity: 0, x: -50}}
            animate={{opacity:1, x: 0}}
            transition={{delay: 1.5}} words={words}
             className="font-black text-white text-8xl" /></motion.div> 
            <motion.p className='text-4xl font-medium
             text-neutral-300'
             initial={{opacity: 0, x: -50}}
             animate={{opacity:1, x: 0}}
             transition={{delay: 1.8}} >Web Solutions</motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className='flex flex-col space-y-6 md:hidden'>
        <motion.p className='text-4xl font-medium'
          initial={{opacity: 0, x: -50}}
          animate={{opacity:1, x: 0}}
          transition={{delay: 1}}>Hi, I'm Ntokozo</motion.p>
        <div>
            <motion.p className='text-5xl font-black 
            text-neutral-300'  
            initial={{opacity: 0, x: -50}}
            animate={{opacity:1, x: 0}}
            transition={{delay: 1.2}}>Testing</motion.p>
            <motion.div>
                <FlipWords words={words}
                initial={{opacity: 0, x: -50}}
                animate={{opacity:1, x: 0}}
                transition={{delay: 1.5}}
                 className="font-bold text-white text-7xl" />
            </motion.div>
            <motion.div className='text-4xl font-black text-neutral-300' 
            initial={{opacity: 0, x: -50}}
            animate={{opacity:1, x: 0}}
            transition={{delay: 1.8}}>Web Applications</motion.div>
        </div>
      </div>

    </div>
  )
}

export default HeroText
