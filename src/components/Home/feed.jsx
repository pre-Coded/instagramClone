import React from 'react'
import ProfileCard from '../../Utility/Profile'

const Feed = () => {
  return (
    <div>
        <ProfileCard id={0} n = {0}/>
        <ProfileCard id={1} n = {1}/>
        <ProfileCard id={2} n = {0}/>
        <ProfileCard id={1} n = {2}/>
    </div> 
  )
}

export default Feed