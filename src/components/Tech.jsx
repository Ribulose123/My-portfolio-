import React from 'react'
import { technologies } from '../constants'
import BallCanvas from './canvas/BallCanvas'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 bg-[#0a0618]'>
      {technologies.map((technology) => (
        <BallCanvas 
          key={technology.name} 
          icon={technology.icon} 
          name={technology.name} 
        />
      ))}
    </div>
  )
}

export default Tech