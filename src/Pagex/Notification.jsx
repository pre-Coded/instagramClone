import React from 'react'
import Pic1 from "../assets/images/Pic1.jpeg"
import {GrPrevious, GrNext} from 'react-icons/gr'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Notification = () => {
    const [click, setClick] = useState(true);

  return (
    <div className='flex flex-col h-screen w-screen'>
        <div className='flex p-2 w-full border-b-2'>
            <Link to="/" className='text-2xl text-white ml-2'><GrPrevious/></Link>
            <div className='flex justify-center items-center text-xl w-full'><span>Notifications</span></div>
        </div>

        {/* follow req */}
        <div className='w-full flex relative space-x-2 p-1 hover:bg-gray-100 border-b-2'>
            <div className='flex-[2] relative mt-5 ml-4'>

            <div className='relative'>
            <div className='before:block before:h-[3rem] before:aspect-square
            before:rounded-full before:-z-10 before:absolute h-[2.8rem] aspect-square rounded-full object-contain grid place-items-center z-20'>
                <img src={Pic1} alt="" className='rounded-full border-2'/>
            </div>
            </div>

            <div className='absolute -top-3 -left-3'>
            <div className='before:block before:h-[3rem] before:aspect-square
            before:rounded-full before:-z-10 before:absolute h-[2.8rem] aspect-square rounded-full object-contain grid place-items-center z-10'>
                <img src={Pic1} alt="" className='rounded-full border-2'/>
            </div>
            </div>

            </div>

            <div className='flex-[9] flex justify-between items-center'>
                <div className='flex flex-col'>
                    <span className='font-[500] text-sm'>Follow requests</span>
                    <span className='text-sm font-[400] text-gray-500'>acquaintance17 + 177 others</span>
                </div>
                <div className='h-2 aspect-square bg-blue-500 rounded-full'/>
            </div>

            <button className='flex-[1]'>
                <GrNext/>
            </button>
        </div>

        {/* today */}
        <div className='flex flex-col space-y-2 border-b-2 m-2'>

            <span className='text-xl font-[400]'>Today</span>

            <div className='flex space-x-1'>
                <div className='flex-[2]'>
                    <div className='relative'>
                    <div className='before:block before:h-[3rem] before:aspect-square
                    before:rounded-full before:-z-10 before:absolute h-[2.8rem] aspect-square rounded-full object-contain grid place-items-center z-20'>
                        <img src={Pic1} alt="" className='rounded-full border-2'/>
                    </div>
                    </div>
                </div>

                <div className='flex flex-[8] justify-between items-center'>
                    <div className='flex flex-col'>
                        <span className='font-[500] text-sm'>kizziii <span className='text-gray-500'>started following you</span></span>
                        <span className='text-sm font-[400] text-gray-500'>6 h</span>
                    </div>
                </div>
                
                <div className='flex-[4]'>
                    <button onClick={() => {setClick(true)}} className={`${ !click ? "block" : "hidden" } w-full flex justify-center items-center p-2 bg-white border-[1px] rounded-md text-xs`}>
                        Following
                    </button>
                    <button onClick={() => {setClick(false)}} className={`${ click ? "block" : "hidden" } w-full p-2 bg-blue-600 text-white border-[1px] rounded-md text-xs flex justify-center items-center`}>
                        Follow Back
                    </button>
                </div>

            </div>
        </div>

        <div className='flex flex-col space-y-2 border-b-2 m-2'>

            <span className='text-xl font-[400]'>This Week</span>

            <div className='flex space-x-1'>
                <div className='flex-[2]'>
                    <div className='relative'>
                    <div className='before:block before:h-[3rem] before:aspect-square
                    before:rounded-full before:-z-10 before:absolute h-[2.8rem] aspect-square rounded-full object-contain grid place-items-center z-20'>
                        <img src={Pic1} alt="" className='rounded-full border-2'/>
                    </div>
                    </div>
                </div>

                <div className='flex flex-[8] justify-between items-center'>
                    <div className='flex flex-col'>
                        <span className='font-[500] text-sm'>kizziii <span className='text-gray-500'>started following you</span></span>
                        <span className='text-sm font-[400] text-gray-500'>6 h</span>
                    </div>
                </div>
                
                <div className='flex-[4]'>
                    <button onClick={() => {setClick(true)}} className={`${ !click ? "block" : "hidden" } w-full flex justify-center items-center p-2 bg-white border-[1px] rounded-md text-xs`}>
                        Following
                    </button>
                    <button onClick={() => {setClick(false)}} className={`${ click ? "block" : "hidden" } w-full p-2 bg-blue-600 text-white border-[1px] rounded-md text-xs flex justify-center items-center`}>
                        Follow Back
                    </button>
                </div>

            </div>
        </div>

        <div className='flex flex-col space-y-2 border-b-2 m-2'>

            <span className='text-xl font-[400]'>This Month</span>

            <div className='flex space-x-1'>
                <div className='flex-[2]'>
                    <div className='relative'>
                    <div className='before:block before:h-[3rem] before:aspect-square
                    before:rounded-full before:-z-10 before:absolute h-[2.8rem] aspect-square rounded-full object-contain grid place-items-center z-20'>
                        <img src={Pic1} alt="" className='rounded-full border-2'/>
                    </div>
                    </div>
                </div>

                <div className='flex flex-[8] justify-between items-center'>
                    <div className='flex flex-col'>
                        <span className='font-[500] text-sm'>kizziii <span className='text-gray-500'>started following you</span></span>
                        <span className='text-sm font-[400] text-gray-500'>6 h</span>
                    </div>
                </div>
                
                <div className='flex-[4]'>
                    <button onClick={() => {setClick(true)}} className={`${ !click ? "block" : "hidden" } w-full flex justify-center items-center p-2 bg-white border-[1px] rounded-md text-xs`}>
                        Following
                    </button>
                    <button onClick={() => {setClick(false)}} className={`${ click ? "block" : "hidden" } w-full p-2 bg-blue-600 text-white border-[1px] rounded-md text-xs flex justify-center items-center`}>
                        Follow Back
                    </button>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Notification