import {useState} from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {SlLike} from 'react-icons/sl'
import {FaRegComment} from 'react-icons/fa'
import {BiNavigation} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'
import Pic1 from "../assets/images/photo_2023-05-15 21.53.58.jpeg"

const ProfileCard = () => {
    const [visible, setVisible] = useState(false);
  return (
    <div className='flex flex-col justify-center border'>

        <div className='flex justify-between items-center p-2'>
            <div className='profilePicInfo flex justify-center items-center space-x-2'>
                {/* profilePhoto */}

                <div className='relative'>
                <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[3rem] before:aspect-square
                before:rounded-full before:-z-10 before:absolute h-[2.8rem] aspect-square rounded-full object-contain grid      place-items-center'>
                    <img src={Pic1} alt="" className='rounded-full border-2'/>
                </div>
                </div>

                <span><span className='font-bold text-gray-500'>Prince</span> <span>6 h</span> </span>
            </div>
            <div className='threedot text-3xl'><BsThreeDots/></div>
        </div>

        <div className='videos grid place-items-center object-contain border-2 border-white'>
            <img src={Pic1} alt="" />
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
            <span className='font-[500] text-gray-800'>654</span>
            <span className='font-[300] text-gray-400 text-sm'>likes</span>
        </div>

        <div className='-mt-4 p-2 flex items-center space-x-1'>
            <span className='font-[400]'>Prince <span className='font-[300] text-gray-400 text-sm'>Lorem, ipsum do adflj lajda ladka <span className={`${visible ? "block" : "hidden"}`}> lor sit amet consectetur adipisicing elit. Veniam eius labore numquam, quas repudiandae voluptas sint quia dolor totam dolorem illum culpa? Nulla dolores reprehenderit odio, repellat impedit temporibus dolorum.
            </span> 
            <span className={`${visible ? "hidden" : "block"} font-[600] text-gray-500`} onClick = {() => setVisible(true)}>Show More</span>
            <span className={`${visible ? "block" : "hidden"} font-[600] text-gray-500`} onClick = {() => setVisible(false)}>Show Less</span>
            </span>
            </span>
        </div>

        <div className='p-2 -mt-3 font-[600] text-gray-500 text-sm'>
            <span>View all <span>117</span> comments</span>
        </div>
    </div>
  )
}

export default ProfileCard