import React from 'react'
import { GrPrevious, GrAdd } from 'react-icons/gr'
import { AiOutlineDown, AiOutlineVideoCameraAdd, AiOutlineCamera } from 'react-icons/ai'
import Pic1 from '../../assets/images/photo_2023-05-15 21.53.58.jpeg'
import { BsSearch } from 'react-icons/bs'
import {IoMdAdd} from 'react-icons/io'

const Messages = () => {
  return (
    <div className='flex flex-col'>
        {/* topbar */}
        <div className='flex items-center justify-between p-2 border-b-2'>
            {/* setting */}
            <div className='text-xl flex items-center'>
                <GrPrevious/>
                <div className='flex items-center space-x-2 text-l ml-2'>
                <span>acquaintance17</span>
                <span className='text-sm'><AiOutlineDown/></span>
            </div>
            </div>
            {/* account */}
            <div className='text-2xl flex space-x-5 mr-2'>
                <AiOutlineVideoCameraAdd/>
                <GrAdd/>
            </div>
        </div>

        <div className='p-2'>
            <div className=' h-10 w-full p-2 rounded-lg flex justify-start items-center bg-gray-100'>
                <BsSearch className='text-xl'/>
                <input type="search" name="" id="" placeholder='Search' className='bg-transparent outline-none text-l p-2 w-full placeholder:text-gray-600'/>
            </div>
        </div>

        <div className='overflow-hidden overflow-x-scroll flex space-x-2 p-2'>
            <div className='relative flex flex-col items-center p-2'>
            <div className={`h-[4rem] aspect-square rounded-full object-contain relative`}>
                <div className='absolute -top-2 -left-1 text-gray-400 text-xl h-6 aspect-square rounded-full bg-white flex items-center justify-center border-[1px]'><IoMdAdd/></div>
                <img src={Pic1} alt="" className='rounded-full h-full aspect-square'/>
            </div>
                <div className='text-xs text-gray-500'>Leave a note</div>
            </div>
        </div>

        <div className='flex flex-col'>
            <div className='flex items-center justify-between p-2'>
                <span className='text-sm font-[600]'>Messages</span>
                <span className='text-sm text-blue-400'>Requests</span>
            </div>

            <ul className='list-none flex flex-col'>
                <li className='p-2 flex justify-start items-center object-contain w-full h-20 relative'>
                    <img src={Pic1} alt="" className='rounded-full h-full aspect-square'/>
                    <div className='text-xs flex flex-col p-2'>
                        <span className='font-[500]'>acquaintance17</span>
                        <span className='text-gray-400'>Sent a Reel video 4w</span>
                    </div>
                    <div className='absolute right-4 text-3xl'>
                        <AiOutlineCamera/>
                    </div>
                </li>
                <li className='p-2 flex justify-start items-center object-contain w-full h-20 relative'>
                    <img src={Pic1} alt="" className='rounded-full h-full aspect-square'/>
                    <div className='text-xs flex flex-col p-2'>
                        <span className='font-[500]'>acquaintance17</span>
                        <span className='text-gray-400'>Sent a Reel video 4w</span>
                    </div>
                    <div className='absolute right-4 text-3xl'>
                        <AiOutlineCamera/>
                    </div>
                </li>
                <li className='p-2 flex justify-start items-center object-contain w-full h-20 relative'>
                    <img src={Pic1} alt="" className='rounded-full h-full aspect-square'/>
                    <div className='text-xs flex flex-col p-2'>
                        <span className='font-[500]'>acquaintance17</span>
                        <span className='text-gray-400'>Sent a Reel video 4w</span>
                    </div>
                    <div className='absolute right-4 text-3xl'>
                        <AiOutlineCamera/>
                    </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Messages