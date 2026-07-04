import React from 'react'
import {Timeline} from '../components/Timeline'
import { experiences } from '../components/constants'

const Experiences = () => {
  return (
    <div >
      <Timeline data={experiences} />
    </div>
  )
}

export default Experiences
