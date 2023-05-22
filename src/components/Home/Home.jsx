import React from 'react'
import Feed from './feed'
import Slider from './slider'
import TopBar from './topBar'

const Home = () => {
  return (
    <div className='relative h-screen w-screen overflow-x-hidden'>
        <TopBar/>
        <Slider/>
        <Feed/>
    </div>
  )
}

export default Home