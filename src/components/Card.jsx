import React from 'react'
import { motion } from 'framer-motion'


const Card = ({style, text, containerRef}) => {
  return (
    <motion.div className='absolute px-1 py-4 text-xl text-center 
    rounded-full ring ring-gray-700 font-extraloght bg-storm 
    w-[12rem] cursor-grab'
     style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
    >
      {text}
    </motion.div>
  )
}

export default Card
