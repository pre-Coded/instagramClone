import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'
import {FiCompass} from 'react-icons/fi'
import {HiVideoCamera, HiViewGridAdd} from 'react-icons/hi'
import {AiOutlineMessage} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'


const NavBar = () => {
  return (
    <div>
      <div className="fixed z-[1000] bottom-0 h-16 w-full flex justify-between items-center text-black text-3xl p-3 border-t-2 bg-white backdrop-blur-md">
        <Link to="/"> <AiFillHome className='hover:scale-105'/> </Link>
        <Link to="/videos"> <FiCompass className='hover:scale-105'/> </Link>
        <Link to="/videocamera"> <HiVideoCamera className='hover:scale-105'/> </Link>
        <Link to="/addfile"> <HiViewGridAdd className='hover:scale-105'/> </Link>

        <Link to="/messages">
          <div className='relative'>
            <AiOutlineMessage className='hover:scale-105'/>
            <div className='absolute -top-1 -right-1 z-10 text-sm text-white font-semibold flex justify-center items-center h-4 aspect-square rounded-full bg-red-500'>3</div>
          </div>
        </Link>
        <Link to ="/profile">
          <CgProfile className='hover:scale-105'/>
        </Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default NavBar