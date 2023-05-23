import React from 'react'
import Pic1 from "../assets/images/Pic1.jpeg"

const Circle = ({height}) => {
  return (
    <div className='relative'>
        <div className={`before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[${height}rem] before:aspect-square
        before:rounded-full before:-z-10 before:absolute h-[${height-0.2}rem] aspect-square rounded-full object-contain grid      place-items-center`}>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
        </div>
    </div>
  )
}

export default Circle