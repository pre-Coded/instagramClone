import {useState} from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {SlLike} from 'react-icons/sl'
import {FaRegComment} from 'react-icons/fa'
import {BiNavigation} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'

import {profiles} from '../content/data.js'

const ProfileCard = ({id, n}) => {
    const profileInfo = profiles[id];

    const [visible, setVisible] = useState(false);
  return (
    <div className='flex flex-col justify-center border h-2/3 w-full'>
        <div className='flex justify-between items-center p-2'>
            <div className='profilePicInfo flex justify-center items-center space-x-2'>
                {/* profilePhoto */}

                <div className='relative'>
                <div className='h-14 aspect-square rounded-full shadow-sm object-contain overflow-hidden'>
                    <img src={profileInfo.profilePhoto} alt="Pic1" className='rounded-full h-full aspect-square object-cover border-2 border-gray-400'/>
                </div>
                </div>

                <span><span className='font-bold text-gray-500'>{profileInfo.username}</span> <span>{profileInfo.hour} h</span> </span>
            </div>
            <div className='threedot text-3xl'><BsThreeDots/></div>
        </div>

        <div className='h-96 w-full grid place-items-center object-fill object-center overflow-hidden border-2 border-white relative'>
            <img src={profileInfo.images[n]} alt="Pic1" className='h-full w-full object-cover object-center'/>
        </div>

        <div className='flex justify-between items-center p-2'>
            <div className='likeCommentShare flex justify-center items-center space-x-3 text-2xl'>
                <span><SlLike/></span>
                <span><FaRegComment/></span>
                <span><BiNavigation/></span>
            </div>
            <div className='Bookmark text-2xl'>
                <BsBookmark/>
            </div>
        </div>

        <div className='nlikkes -mt-2 p-2 flex items-center space-x-1'>
            <span className='font-[500] text-gray-800'>{profileInfo.likes}</span>
            <span className='font-[300] text-gray-400 text-sm'>likes</span>
        </div>

        <div className='-mt-4 p-2 flex items-center space-x-1'>
            <span className='font-[400]'>{profileInfo.username} <span className='font-[300] text-gray-400 text-sm'> {profileInfo.halfDesc}
            <span className={`${visible ? "block" : "hidden"}`}> {profileInfo.fullDesc} </span> 
            <span className={`${visible ? "hidden" : "block"} font-[600] text-gray-500`} onClick = {() => setVisible(true)}>Show More</span>
            <span className={`${visible ? "block" : "hidden"} font-[600] text-gray-500`} onClick = {() => setVisible(false)}>Show Less</span>
            </span>
            </span>
        </div>

        <div className='p-2 -mt-3 font-[600] text-gray-500 text-sm'>
            <span>View all {profileInfo.comments} comments</span>
        </div>
    </div>
  )
}

export default ProfileCard