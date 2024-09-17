import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import page from '../page';

const MenuComponent = () => {
  const [menuOpen,set]=useState(false)

  const toggleMenu=()=>{
    set(!menuOpen)
  }

  const text=useRef(null)

  useEffect(()=>{
    gsap.to(
      text.current,{
        backgroundPosition:'100% 100%',
        duration:5,
        repeat:-1,
        ease:'linear',
        backgroundSize:'300% 300%' 
      }
    )
  })

  return (
    <div className='fixed opacity-100 w-full h-[10vh] z-[999] flex pr-4' >
      <div className='fixed bg-black z-[998] h-[13vh] w-full opacity-70'></div>
      <div className=' w-full h-[13vh] flex items-center p-6 z-[999]'>
        <Link 
          href={"/"}
          // ref={text}
          // style={{
          //   fontWeight:'bold',
          //   background: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
          //   backgroundSize: '',
          //   WebkitBackgroundClip: 'text',
          //   backgroundClip:'text',
          //   color:'transparent',
          // }}
          className='text-2xl z-[999] text-white'
        >FLOWLINE</Link>
      </div>
      <div onClick={toggleMenu} className="z-[999] mt-[2.2vw] cursor-pointer pr-3  w-[13%] h-[100%] flex flex-col justify-center items-center md:hidden">
        <div className={` w-8 h-0.5 bg-white my-1 duration-700 transform ${menuOpen?"rotate-[45deg] translate-y-0.5":"translate-y-0"}`}></div>
        <div className={` w-8 h-0.5 bg-white my-1 duration-700 transform ${menuOpen?"-rotate-[45deg] -translate-y-[8px]":"translate-y-0"}`}></div>
      </div>
      <div className={`fixed h-screen w-full z-[998] bg-black ${menuOpen?'translate-y-[0%] duration-[.5s]':'-translate-y-[150%] duration-[.5s]'}`}></div>
      <div className={`fixed inset-0 bg-gradient-to-b from-gray-900 bg-[#2E2F32] bg-opacity-90 backdrop-blur-md z-[998] text-[4.7vw] space-y-4 font-semibold text-white flex flex-col pl-[7.5vw] pr-[7.5vw] ease-in-out w-full h-full transform ${menuOpen?"translate-y-[0%] duration-[.5s]":"-translate-y-[150%] duration-[.5s]"}`}>
        <div className='flex flex-wrap justify-center mt-[25vw]'>
          <Link href="#" className='h-fit basis-[45.5%] items-center flex justify-center border rounded-lg p-3 mt-4'>Why</Link>
          <Link href="#" className='h-fit basis-[45.5%]  items-center flex justify-center border rounded-lg p-3 mt-4 ml-4'>Models</Link>
          <Link href="#" className='h-fit basis-[45.5%]  items-center flex justify-center border rounded-lg p-3 mt-4
          '>Accessories</Link>
          <button className='h-fit basis-[45.5%]  items-center flex justify-center border rounded-lg p-3 mt-4 ml-4'>Rent</button>
          <button className='h-fit basis-[96%]  items-center flex justify-center border rounded-lg p-3 mt-4'>Configure</button>
        </div>
        <div  className='flex flex-wrap justify-center '>
          <Link href="#" className='h-fit basis-[96%] items-center flex justify-center border rounded-lg p-3'>Calculate your benefit</Link>
          <Link href="#" className='h-fit basis-[45.5%]  items-center flex justify-center border rounded-lg p-3 mt-4'>Ambassadors</Link>
          <Link href="#" className='h-fit basis-[45.5%]  items-center flex justify-center border rounded-lg p-3 mt-4 ml-4'>About Us</Link>
          <Link href="#" className='h-fit basis-[45.5%]  items-center flex justify-center border rounded-lg p-3 mt-4'>Contact</Link>
          <div className=' h-fit w-full basis-[45.5%] p-3 flex items-center justify-center mt-4 ml-4'>         
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuComponent;
