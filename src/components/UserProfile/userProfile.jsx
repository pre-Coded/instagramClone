import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineDown} from 'react-icons/ai'
import {MdManageAccounts} from 'react-icons/md'
import Circle from '../../Utility/Circle'
import {IoMdAdd} from 'react-icons/io'
import {CgMenuGridR} from 'react-icons/cg'
import {BsBookmark} from 'react-icons/bs'
import {MdPermContactCalendar} from 'react-icons/md'
import { useState, useRef } from 'react'

import { profiles } from '../../content/data'

const UserProfile = () => {
    const [showTab, setshowTab] = useState(0);
    const tab = useRef(null);

    const [colP, unSetColP] = useState("grid grid-cols-3 gap-[2px]");
    const [colB, unSetColB] = useState("grid grid-cols-3 gap-[2px]");


    const handleTab = (id) => {
        for(let i = 1; i <= tab.current.children.length ; i++){
            tab.current.children[i-1].classList.remove("block");
        }

        for(let i = 1; i <= tab.current.children.length ; i++){
            tab.current.children[i-1].classList.add("hidden");
        }

        tab.current.children[id-1].classList.remove("hidden");
        tab.current.children[id-1].classList.add("block");
    }

  return (
    <div className='flex flex-col space-y-0'>
        {/* top */}
        <div className='flex items-center justify-between p-2 border-b-2'>
            {/* setting */}
            <div className='text-2xl'>
                <FiSettings/>
            </div>
            {/* username and login */}
            <div className='flex items-center space-x-2 text-xl'>
                <span>acquaintance17</span>
                <span><AiOutlineDown/></span>
            </div>
            {/* account */}
            <div className='text-2xl'>
                <MdManageAccounts/>
            </div>
        </div>

        <div className='flex p-2'>
            <div className='object-contain h-24 aspect-square'>
                <Circle/>
            </div>
            <div className='flex flex-col space-y-4 h-24 justify-center items-start ml-2 w-full'>
                <div className='flex items-center'>
                    <span className='text-xl'>acquaintance17</span>
                    <span className='text-xl ml-2'><FiSettings/></span>
                </div>
                <button className='px-2 py-1 w-full rounded-mg border'>Edit Profile</button>
            </div>
        </div>

        <div className='p-2'>
            <span className='font-[500]'>Prince Rastogi</span><br/>
            <span className='text-sm'>Opacarophile<br/>
            Chill. Pill. Deal.<br/>
            Anything but predictable
            </span>
        </div>

        <div className='flex space-x-2 relative p-2 border-b-[1px]'>

            <div className='relative'>
            <div className={`bg-black border-2 border-gray-400 h-[4rem] aspect-square rounded-full object-contain grid      place-items-center`}>
                <div className='text-white font-bold  text-3xl'> <IoMdAdd/> </div>
            </div>
            </div>

        </div>

        <div className='grid grid-cols-3 place-items-center mt-2 border-b-[1px]'>
            <div className='flex justify-center items-center flex-col p-2'>
                <span>6</span>
                <span className='text-sm'>Posts</span>
            </div>
            <div className='flex justify-center items-center flex-col p-2'>
                <span>321</span>
                <span className='text-sm'>Followers</span>
            </div>  
            <div className='flex justify-center items-center flex-col p-2'>
                <span>160</span>
                <span className='text-sm'>Following</span>
            </div>
        </div>

        <div className='grid grid-cols-3 place-items-center mt-2 text-2xl p-1 relative'>

            <div className={`absolute top-0 left-[${showTab}px] h-[2px] bg-black w-1/3 transition-all`}></div>

            <div onClick={ () => {
                setshowTab(0);
                handleTab(1);
            } } className='flex justify-center items-center flex-col p-2 cursor-pointer'>
                <CgMenuGridR/>
            </div>

            <div onClick={ () => {
                setshowTab(120);
                handleTab( 2 );
            } } className='flex justify-center items-center flex-col p-2 cursor-pointer'>
                <BsBookmark/>
            </div>  

            <div  onClick={ () => {
                setshowTab(240);
                handleTab( 3 );
            } } className='flex justify-center items-center flex-col p-2 cursor-pointer'>
                <MdPermContactCalendar/>
            </div>

        </div>

        <div ref = {tab} className=''>
            <div className='block'>
            <div className={`${colP}`}>
                    {
                        profiles[0].images.map( (images) =>{
                            return (
                                <img src={images} alt="" srcset="" className={`aspect-square object-cover border-none cursor-pointer`}
                                onClick = {()=>{
                                    if(colP === "grid grid-cols-3 gap-[2px]"){
                                        unSetColP("grid grid-row gap-[2px]");
                                    }else {
                                        unSetColP("grid grid-cols-3 gap-[2px]");
                                    }
                                }}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='hidden'>
                <div className={`${colB}`}>
                    {
                        profiles.map((profile) =>{
                            return (
                                <img src={profile.bookmarks ? profile.profilePhoto : ""} alt="" srcset="" className={`${profile.bookmarks ? "block" : "hidden"} w-full aspect-square object-cover border-none cursor-pointer`}
                                onClick = {()=>{
                                    if(colB === "grid grid-cols-3 gap-[2px]"){
                                        unSetColB("grid grid-row gap-[2px]");
                                    }else {
                                        unSetColB("grid grid-cols-3 gap-[2px]");
                                    }
                                }}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='hidden'>
                Tab3
            </div>
        </div>
    </div>
  )
}

export default UserProfile