import React, { useRef, useState } from 'react';
import Pic1 from '../../assets/images/photo_2023-05-15 21.53.58.jpeg'
import { GrNext, GrPrevious } from 'react-icons/gr';

const Slider = () => {
  const carausol = useRef();
  const [show, setShow] = useState(false);

  const handleNext = () => {
    carausol.current.scrollLeft += 140;
    if (carausol.current.scrollLeft >= 140 && !show) setShow(true);
  };

  const handlePrev = () => {
    carausol.current.scrollLeft -= 140;
    if (carausol.current.scrollLeft < 150 && show) setShow(false);
  };

  return (
    <div className='relative flex justify-center items-center'>
      <div
        ref={carausol}
        className='scroll-smooth h-24 w-full flex items-center justify-start p-2 overflow-x-hidden space-x-2'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        <div className='relative'>
          <div className='before:block before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 before:h-[5rem] before:aspect-square
          before:rounded-full before:-z-10 before:absolute h-[4.8rem] aspect-square rounded-full object-contain grid place-items-center'>
            <img src={Pic1} alt="" className='rounded-full border-2'/>
          </div>
        </div>
        
        

      </div>

      <button
        className='absolute right-2 bg-gray-200 h-10 w-10 z-10 grid place-items-center text-2xl rounded-full'
        onClick={handleNext}
      >
        <GrNext className='text-white' />
      </button>

      <button
        className={`${
          show ? 'absolute' : 'hidden'
        } left-2 bg-gray-200 h-10 w-10 z-10 grid place-items-center text-2xl rounded-full`}
        onClick={handlePrev}
      >
        <GrPrevious className='text-white' />
      </button>
    </div>
  );
};

export default Slider;
