import React from 'react'
import {GrNotification} from 'react-icons/gr';
import {BsSearch} from 'react-icons/bs';
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className='relative w-full flex items-center p-2 space-x-2 border-b-2'>
        <div className=' h-12 w-full flex-[5] p-2 rounded-md flex justify-start items-center bg-gray-100'>
            <BsSearch className='text-2xl'/>
            <input type="search" name="" id="" placeholder='Search' className='bg-transparent outline-none text-xl p-2 w-full placeholder:text-gray-600'/>
        </div>
        <Link to="/notifications" className='relative'>
            <GrNotification className='text-2xl'/>
            <div className='absolute -top-0 -right-0 z-10 text-sm text-white font-semibold flex justify-center items-center h-2 aspect-square rounded-full bg-red-500'></div>
        </Link>
    </div>
  )
}

export default TopBar